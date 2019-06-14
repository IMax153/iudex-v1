import { Strategy } from 'passport-facebook';

import { prisma } from '../../../generated/prisma-client';
import { FacebookProfile } from '../profiles';

export const FacebookStrategy = new Strategy(
  {
    clientID: process.env.FACEBOOK_OAUTH_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_OAUTH_CLIENT_SECRET,
    callbackURL:
      process.env.NODE_ENV === 'production'
        ? 'https://iudex.now.sh/api/auth/facebook/callback'
        : 'http://localhost:4000/api/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email', 'first_name', 'last_name'],
  },
  async (token, tokenSecret, profile, done) => {
    const facebookProfile = new FacebookProfile(profile);

    try {
      const userExists = await prisma.$exists.user({ facebookProviderId: facebookProfile.getID() });

      // user already registered
      if (userExists) {
        const user = await prisma.user({ facebookProviderId: facebookProfile.getID() });
        return done(null, user);
      }

      const userWithEmailExists = await prisma.$exists.user({ email: facebookProfile.getEmail() });

      // user already registered but with different provider
      if (userWithEmailExists) {
        const user = await prisma.updateUser({
          where: { email: facebookProfile.getEmail() },
          data: { facebookProviderId: facebookProfile.getID() },
        });
        return done(null, user);
      }

      // create new user on first login
      const user = await prisma.createUser(facebookProfile.create());
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  },
);
