import Cors from 'cors';

export const CorsOptions = {
  origin: process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL : 'http://localhost:3000',
  credentials: true,
};

export const cors = Cors(CorsOptions);
