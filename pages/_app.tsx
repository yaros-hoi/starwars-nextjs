import * as React from 'react';
import { Provider } from 'react-redux';
import App, { Container, AppProps } from 'next/app';
import { register, unregister } from 'next-offline/runtime';

import withReduxStore, { Store } from '../store/with-redux-store';

import ErrorPage from './_error';

interface Props {
  reduxStore: Store;
}

interface State {
  hasError: boolean;
}

class StarWarsApp extends App<Props & AppProps, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidMount() {
    register('/service-worker.js');
  }

  componentWillUnmount() {
    unregister();
  }

  render() {
    const { Component, pageProps, reduxStore, router } = this.props;

    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} query={router.query} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(StarWarsApp);
