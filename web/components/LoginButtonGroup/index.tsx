import React from 'react';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Grid } from '../Grid';

interface Props {}

type Provider = 'facebook' | 'google' | 'twitter';

export const LoginButtonGroup: React.FC<Props> = ({}) => {
  const getHref = (provider: Provider) => {
    return process.env.NODE_ENV === 'production'
      ? `https://iudex.now.sh/auth/${provider}`
      : `http://localhost:4000/auth/${provider}`;
  };

  return (
    <Grid columns="repeat(3, 1fr)" gap="30px">
      <Button
        type="white"
        icon={<Icon icon={faFacebook as any} color="info" size="medium" />}
        href={getHref('facebook')}
      >
        Login with Facebook
      </Button>
      <Button
        type="white"
        icon={<Icon icon={faGoogle as any} color="critical" />}
        href={getHref('google')}
      >
        Login with Google
      </Button>
      <Button
        type="white"
        icon={<Icon icon={faTwitter as any} color="brand" />}
        href={getHref('twitter')}
      >
        Login with Twitter
      </Button>
    </Grid>
  );
};
