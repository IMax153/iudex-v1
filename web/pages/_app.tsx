import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ToastProvider } from 'react-toast-notifications';

import { withApollo, AppContext, ApolloContext } from '../lib/apollo';
import { Toast } from '../components/Toast';

class Iudex extends App<AppContext> {
  static async getInitialProps({ Component, ctx }: ApolloContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ToastProvider components={{ Toast }}>
            <Component {...pageProps} />
          </ToastProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(Iudex);
