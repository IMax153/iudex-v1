import React, { Fragment } from 'react';
import Document, { NextDocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerPortal } from '@jesstelford/react-portal-universal/server';

export default class Iudex extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const portals = new ServerPortal();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(portals.collectPortals(<App {...props} />)),
        });

      const { html, ...props } = await Document.getInitialProps(ctx);
      const htmlWithPortals = portals.appendUniversalPortals(html as string);

      return {
        html: htmlWithPortals,
        ...props,
        styles: (
          <Fragment>
            {props.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
