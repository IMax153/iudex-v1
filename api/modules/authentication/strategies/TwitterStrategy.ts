import { Strategy } from 'passport-twitter';

import { prisma } from '../../../generated/prisma-client';
import { TwitterProfile } from '../profiles';

export const TwitterStrategy = new Strategy(
  {
    consumerKey: process.env.TWITTER_OAUTH_CLIENT_ID,
    consumerSecret: process.env.TWITTER_OAUTH_CLIENT_SECRET,
    callbackURL:
      process.env.NODE_ENV === 'production'
        ? 'https://iudex.now.sh/api/auth/twitter/callback'
        : 'http://localhost:4000/api/auth/twitter/callback',
    includeEmail: true,
  },
  async (token, tokenSecret, profile, done) => {
    const twitterProfile = new TwitterProfile(profile);

    try {
      const userExists = await prisma.$exists.user({ twitterProviderId: twitterProfile.getID() });

      // user already registered
      if (userExists) {
        const user = await prisma.user({ twitterProviderId: twitterProfile.getID() });
        return done(null, user);
      }

      const userWithEmailExists = await prisma.$exists.user({ email: twitterProfile.getEmail() });

      // user already registered but with different provider
      if (userWithEmailExists) {
        const user = await prisma.updateUser({
          where: { email: twitterProfile.getEmail() },
          data: { twitterProviderId: twitterProfile.getID() },
        });
        return done(null, user);
      }

      // create new user on first login
      const user = await prisma.createUser(twitterProfile.create());
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  },
);
