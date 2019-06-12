import { Strategy } from 'passport-google-oauth2';

import { prisma } from '../../../generated/prisma-client';
import { GoogleProfile } from '../profiles';

export const GoogleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL:
      process.env.NODE_ENV === 'production'
        ? 'https://iudex.now.sh/auth/google/callback'
        : 'http://localhost:4000/auth/google/callback',
  },
  async (token, tokenSecret, profile, done) => {
    const googleProfile = new GoogleProfile(profile);

    try {
      const userExists = await prisma.$exists.user({ googleProviderId: googleProfile.getID() });

      if (userExists) {
        const user = await prisma.user({ googleProviderId: googleProfile.getID() });
        return done(null, user);
      }

      const user = await prisma.createUser(googleProfile.create());
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  },
);
