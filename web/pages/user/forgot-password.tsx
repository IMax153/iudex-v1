import React from 'react';

import { ForgotPasswordBox } from '../../components/ForgotPassword';
import { Layout } from '../../components/Layout';

const ForgotPassword: React.FC = () => {
  return (
    <Layout title="Forgot Password Page">
      <ForgotPasswordBox />
    </Layout>
  );
};

export default ForgotPassword;
