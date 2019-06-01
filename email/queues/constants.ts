const IS_PROD = process.env.NODE_ENV === 'production';

export const QUEUE_NAMES = {
  SEND_EMAIL_VALIDATION: 'SEND_EMAIL_VALIDATION',
};

export const TEMPLATES = {
  EMAIL_VALIDATION: IS_PROD ? '123' : '456',
};
