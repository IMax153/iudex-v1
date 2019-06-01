import { ProcessCallbackFunction } from 'bull';

import { QUEUE_NAMES } from './constants';
import { sendEmailValidationEmail } from './sendEmailValidationEmail';

export const QUEUE_MAP: Record<string, ProcessCallbackFunction<any>> = {
  [QUEUE_NAMES.SEND_EMAIL_VALIDATION]: sendEmailValidationEmail,
};

export { createQueue } from './createQueue';
