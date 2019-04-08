import React from 'react';
import { NextFC, NextContext } from 'next';

import { ChangePasswordBox } from '../../components/ChangePassword';
import { Layout } from '../../components/Layout';

interface ChangePasswordProps {
  token?: string;
}

const ChangePassword: NextFC<ChangePasswordProps, {}, NextContext> = ({ token }) => {
  return (
    <Layout title="Change Password Page">
      <ChangePasswordBox token={token} />
    </Layout>
  );
};

ChangePassword.getInitialProps = async ({ query }) => {
  const { token } = query;

  return { token };
};

export default ChangePassword;
