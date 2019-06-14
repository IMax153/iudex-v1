import { Strategy } from 'passport-google-oauth2';

import { prisma } from '../../../generated/prisma-client';
import { GoogleProfile } from '../profiles';

export const GoogleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL:
      process.env.NODE_ENV === 'production'
        ? 'https://iudex.now.sh/api/auth/google/callback'
        : 'http://localhost:4000/api/auth/google/callback',
  },
  async (token, tokenSecret, profile, done) => {
    const googleProfile = new GoogleProfile(profile);

    try {
      const userExists = await prisma.$exists.user({ googleProviderId: googleProfile.getID() });

      // user already registered
      if (userExists) {
        const user = await prisma.user({ googleProviderId: googleProfile.getID() });
        return done(null, user);
      }

      const userWithEmailExists = await prisma.$exists.user({ email: googleProfile.getEmail() });

      // user already registered but with different provider
      if (userWithEmailExists) {
        const user = await prisma.updateUser({
          where: { email: googleProfile.getEmail() },
          data: { googleProviderId: googleProfile.getID() },
        });
        return done(null, user);
      }

      const user = await prisma.createUser(googleProfile.create());
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  },
);
