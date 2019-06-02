import sendGridMail from '@sendgrid/mail';
import stringify from 'json-stringify-pretty-compact';
import { userCanReceiveEmail } from './userCanReceiveEmail';

const { SENDGRID_API_KEY } = process.env;

export interface To {
  email: string;
  name?: string;
}

interface Options {
  templateId: string;
  to: To[];
  dynamic_template_data: Record<string, any>;
  userId?: string;
}

const defaultOptions = {
  from: {
    email: 'no-reply@iudex.now.sh',
    name: 'Iudex',
  },
  tracking_settings: {
    click_tracking: {
      enable: false,
    },
  },
};

export const sendEmail = async (options: Options) => {
  const { templateId, to, dynamic_template_data, userId } = options;

  if (SENDGRID_API_KEY !== 'undefined') {
    console.log(
      `--Send LIVE email with templateId ${templateId}--\nto: ${to
        .map(t => t.email)
        .join(', ')}\ndynamic_template_data: ${stringify(dynamic_template_data)}`,
    );
    sendGridMail.setApiKey(SENDGRID_API_KEY);
  } else {
    console.log(
      `--Send TEST email with templateId ${templateId}--\n--to: ${to
        .map(t => t.email)
        .join(', ')}--`,
    );

    console.log(
      stringify({
        templateId,
        to,
        dynamic_template_data,
        userId,
      }),
    );

    return Promise.resolve();
  }

  if (await !userCanReceiveEmail({ to, userId })) return Promise.resolve();

  const msg = {
    ...defaultOptions,
    to,
    templateId,
    dynamic_template_data,
  };

  return sendGridMail.send(msg);
};
