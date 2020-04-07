import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import RootApp, { AppContext } from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import { END } from 'redux-saga';
import { Global } from '@emotion/core';

import { GlobalStyle } from 'styles/App.style';

import axios from 'libs/axios';

import TStoreState from 'types/TStoreState';

import { initStore } from 'modules/store';

import { sagaTask } from 'sagas';

class App extends RootApp<ReduxWrapperAppProps<TStoreState>> {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        // redux-saga SSR Promise setting
        if (ctx.isServer) {
            ctx.store.dispatch(END);
            await sagaTask.toPromise();
        }

        // axios SSR cookie setting
        if (ctx.req && ctx.req.headers.cookie) {
            axios.defaults.headers = {
                ...axios.defaults.headers,
                cookie: ctx.req.headers.cookie
            };
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Global styles={GlobalStyle} />
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(initStore)(App);
