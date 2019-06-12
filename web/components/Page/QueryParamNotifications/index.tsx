import React from 'react';
import Router from 'next/router';
import querystring from 'querystring';
import chunk from 'lodash/fp/chunk';
import pipe from 'lodash/fp/pipe';
import reduceRight from 'lodash/fp/reduceRight';
import split from 'lodash/fp/split';

import { isBrowser } from '../../../lib/browser/isBrowser';
import { Context } from '../../Notification/context';
import { withNotificationManager } from '../../Notification';

interface Props {
  query: Record<string, string>;
}

class QueryParamNotificationDispatcher extends React.Component<
  Props & { notificationManager: Context }
> {
  componentDidMount() {
    const params = this.filterParams(this.props.query);

    if (this.hasValidParams(params)) {
      this.props.notificationManager.add(params.notificationMessage, {
        appearance: params.notificationType as any,
        autoDismiss: true,
        pauseOnHover: true,
      });
    }

    return this.cleanLocation();
  }

  componentDidUpdate(prevProps: Props) {
    const currProps = this.props;
    const prevParams = this.filterParams(prevProps.query);
    const currParams = this.filterParams(currProps.query);

    const currValid = this.hasValidParams(currParams);
    if (!currValid) return;

    if (prevParams.notificationMessage !== currParams.notificationMessage) {
      this.props.notificationManager.add(currParams.notificationMessage, {
        appearance: currParams.notificationType as any,
        autoDismiss: true,
        pauseOnHover: true,
      });
    }

    return this.cleanLocation();
  }

  hasValidParams = (params: Record<string, string>) => {
    const validToastTypes = ['error', 'info', 'warning', 'success'];
    return (
      params.notificationType &&
      validToastTypes.indexOf(params.notificationType) >= 0 &&
      params.notificationMessage
    );
  };

  /*
    There could be many parameters besides notificationMessage and notificationType.
    This component only cares about changes to these two specific params though,
    so we can filter down to an object with only what we need and use that to
    determine whether we need to dispatch a new notification or not
  */
  filterParams = (params: Record<string, string>) => ({
    notificationType: params.notificationType,
    notificationMessage: params.notificationMessage,
  });

  constructQuery = (params: string) =>
    pipe(
      split(/=|&/g),
      chunk(2),
      reduceRight(([key, val], result) => ({ [key]: val, ...result }), {}),
    )(params);

  cleanLocation = () => {
    const clean: { [key: string]: any } = {};
    const queryKeys = Object.keys(this.props.query);

    if (queryKeys.length > 0) {
      queryKeys.map(key => {
        if (!key || key === 'notificationMessage' || key === 'notificationType') return null;
        clean[key] = this.props.query[key];
        return null;
      });

      /*
      We decode the cleanParams in order to preserve special characters in the url
      For example, the url /evaluation/id?m=MTQ4MzIyNTIwMDAwMg==
      has two equals signs at the end. If we don't decode the cleanParams it will become
      /evaluation/id?m=MTQ4MzIyNTIwMDAwMg%3D%3D
    */
      const cleanParams = decodeURIComponent(querystring.stringify(clean));

      return isBrowser
        ? Router.replace(
            { pathname: Router.pathname, query: this.constructQuery(cleanParams) },
            Router.pathname,
          )
        : null;
    }

    return null;
  };

  render() {
    return null;
  }
}

export const QueryParamNotifications = withNotificationManager(QueryParamNotificationDispatcher);
