import { sign } from 'jsonwebtoken';

interface Params {
  userId: string;
  email: string;
  expiresIn?: number;
}

export const createToken = ({ userId, email, expiresIn = 60 * 60 * 24 * 7 }: Params) => {
  if (!userId || !email) return null;

  let token;
  try {
    token = sign({ userId, email }, process.env.JWT_EMAIL_SECRET_KEY, { expiresIn });
  } catch (err) {
    return null;
  }

  if (!token || token === undefined) {
    return null;
  }

  return token;
};
