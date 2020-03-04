import React from 'react';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {withRouter} from 'react-router-dom';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import LocaleProvider from 'app/application/localeProvider'
import IndexLayout from 'app/components/layout';
import {reducers} from 'app/reduser/redusers';
import Helmet from 'react-helmet';

export default function Application() {
    const WrappedPage = withRouter(IndexLayout);
    const history = createBrowserHistory();

    return (
        <React.Fragment>
            <Helmet>
                    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
                    <meta name="mobile-web-app-capable" content="yes"></meta>
                    <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
            </Helmet>
        <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware(routerMiddleware(history))))}>
            <LocaleProvider>
                <ConnectedRouter history={history}>
                     <WrappedPage/>
                </ConnectedRouter>
            </LocaleProvider>
        </Provider>
        </React.Fragment>
    )
};