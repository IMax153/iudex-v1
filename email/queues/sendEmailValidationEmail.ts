import { Job } from 'bull';

import { sendEmail, createToken } from '../utils';
import { TEMPLATES } from './constants';

interface JobData {
  user: {
    id: string;
    email: string;
  };
}

export const sendEmailValidationEmail = (job: Job<JobData>) => {
  console.log(`\nnew job: ${job.id}`);
  const { user } = job.data;

  if (!user.email) {
    console.log(`user#${user.id} does not have an email, aborting`);
    return Promise.resolve();
  }

  const validationToken = createToken({ email: user.email, userId: user.id });
  if (!validationToken) return Promise.resolve();

  try {
    const msg = {
      templateId: TEMPLATES.EMAIL_VALIDATION,
      to: [{ email: user.email }],
      dynamic_template_data: {
        subject: 'Confirm your email address on Iudex',
        validationToken,
      },
    };

    return sendEmail(msg);
  } catch (err) {
    console.error('❌ Error in job:\n');
    console.error(err);
    return null;
  }
};
