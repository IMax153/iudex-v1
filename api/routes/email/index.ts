import { Router } from 'express';
import { decode, verify } from 'jsonwebtoken';

import { prisma } from '../../generated/prisma-client';

export const emailRouter = Router();

const IS_PROD = process.env.NODE_ENV === 'production';
const REDIRECT_URL = IS_PROD ? `https://iudex.now.sh` : `http://localhost:3000`;

emailRouter.get('/test', (req, res) => {
  return res.redirect(
    `${REDIRECT_URL}?notificationType=error&notificationMessage=No token provided to validate this email.`,
  );
});

emailRouter.get('/validate', async (req, res) => {
  const { token } = req.query as { token?: string };

  console.log('TOKEN: ', token);

  // if no token redirect back to client with error
  if (!token) {
    return res.redirect(
      `${REDIRECT_URL}?notificationType=error&notificationMessage=No token provided to validate this email.`,
    );
  }

  // verify that the token signature matches our env signature
  try {
    verify(token, process.env.JWT_EMAIL_SECRET_KEY);
  } catch (err) {
    // if the signature can't be verified
    let errMessage;
    if (err.name === 'TokenExpiredError') {
      errMessage =
        'This unsubscribe token has expired. You can unsubscribe from this email type in your user settings.';
    } else {
      errMessage =
        'This unsubscribe token is invalid. You can unsubscribe from this email type in your user settings.';
    }

    return res.redirect(
      `${REDIRECT_URL}/me/settings?notificationType=error&notificationMessage=${errMessage}`,
    );
  }

  // once the token is verified, we can decode it to get the userId and type
  const { userId, email } = decode(token) as Record<string, string | undefined>;

  if (!userId || !email) {
    return res.redirect(
      `${REDIRECT_URL}/me/settings?notificationType=error&notificationMessage=We were not able to verify this email validation. You can re-enter your email address in your user settings to resend a confirmation email.`,
    );
  }

  // update user in the database
  try {
    await prisma.updateUser({ where: { id: userId }, data: { emailConfirmed: true } });
    return res.redirect(`${REDIRECT_URL}/user/confirm-email`);
  } catch (err) {
    return res.redirect(
      `${REDIRECT_URL}/me/settings?notificationType=error&notificationMessage=We ran into an issue validating this email address. You can re-enter your email address in your user settings to resend a confirmation email, or get in touch with us.`,
    );
  }
});
