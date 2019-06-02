import { To } from './sendEmail';

interface Params {
  to: To[];
  userId?: string;
}

export const userCanReceiveEmail = ({ to, userId }: Params) => {
  // qq.com email addresses are isp blocked, which raises our error rate
  // on sendgrid. prevent sending these emails at all
  const recipients = to.filter(toType => {
    return toType.email.substr(to.length - 7) !== '@qq.com';
  });

  if (!userId) return false;
  if (!recipients || recipients.length === 0) return false;

  return true;
};
