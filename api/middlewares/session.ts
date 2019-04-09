import ExpressJWT from 'express-jwt';

export const session = ExpressJWT({
  secret: process.env.JWT_SECRET_KEY,
  credentialsRequired: false,
});
