import EmailTemplate from 'email-templates';
import NodeMailer from 'nodemailer';
import NodeMailerSendGrid from 'nodemailer-sendgrid';
import { v4 as uuid } from 'uuid';

import { redis, CONFIRM_USER_PREFIX, FORGOT_PASSWORD_PREFIX } from './redis';

interface SendEmailOptions {
  to: string;
  url: string;
  locals?: {
    subject?: string;
    message?: string;
  };
}

const PRODUCTION = process.env.NODE_ENV === 'production';
const PROTOCOL = PRODUCTION ? 'https' : 'http';
const HOST = PRODUCTION ? 'iudex.now.sh' : 'localhost:3000';

async function getEmailTransport() {
  if (PRODUCTION) {
    return NodeMailer.createTransport(
      NodeMailerSendGrid({
        apiKey: process.env.SENDGRID_API_KEY,
      }),
    );
  }

  const account = await NodeMailer.createTestAccount();

  return NodeMailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass, // generated ethereal password
    },
  });
}

async function createToken(
  value: string | number,
  prefix: string,
  expiresIn: number = 60 * 60 * 24, // 1 day expiration by default
): Promise<string> {
  const token = uuid();
  try {
    await redis.set(`${prefix}${token}`, value, 'ex', expiresIn);
  } catch (error) {
    throw new Error('Internal Server Error');
  }
  return token;
}

export async function createConfirmEmailUrl(id: string): Promise<string> {
  const token = await createToken(id, CONFIRM_USER_PREFIX);
  return `${PROTOCOL}://${HOST}/user/confirm?token=${token}`;
}

export async function createChangePasswordUrl(id: string): Promise<string> {
  const token = await createToken(id, FORGOT_PASSWORD_PREFIX);
  return `${PROTOCOL}://${HOST}/user/change-password?token=${token}`;
}

export async function sendEmail({ to, url, locals }: SendEmailOptions) {
  const transport = await getEmailTransport();

  const email = new EmailTemplate({
    message: {
      from: '"Iudex" <iudex@no-reply.com>',
    },
    send: Boolean(PRODUCTION),
    transport,
  });

  email.send({
    template: '../emails',
    message: {
      to,
    },
    locals: {
      ...locals,
      url,
    },
  });
}
