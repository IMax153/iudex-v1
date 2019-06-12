import '../lib/icons';
import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { prepareClientPortals } from '@jesstelford/react-portal-universal';

import { withApollo, AppContext, ApolloContext } from '../lib/apollo';
import { theme, ThemeProvider } from '../styles';
import { GlobalStyles } from '../components/GlobalStyles';

if (process.browser) {
  // On the client, we have to run this once before React attempts a render.
  // Here in _app is a great place to do it as this file is only required once,
  // and right now (outside the constructor) is before React is invoked.
  prepareClientPortals();
}

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
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <GlobalStyles />
            <div id="modals" />
            <div id="popovers" />
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(Iudex);
