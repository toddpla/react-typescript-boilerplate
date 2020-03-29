import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../components/Login';
import { AppliedRoute } from './AppliedRoute';
import { AuthenticatedRoute } from './AuthenticatedRoute';
import { UnauthenticatedRoute } from './UnauthenticatedRoute';
import NotFoundPage from '../components/NotFoundPage';
import { AppProps } from '../App';

export const Routes = ({ appProps }: { appProps: AppProps }) => (
    <Switch>
        {/* <AppliedRoute
            path="/"
            component={SearchPage}
            exact={true}
            appProps={appProps}
        /> */}
        <UnauthenticatedRoute
            path="/login"
            component={Login}
            exact={true}
            appProps={appProps}
        />
        {/* <AuthenticatedRoute
            path="/builder"
            component={BuilderPage}
            exact={true}
            appProps={appProps}
        /> */}
        <Route component={NotFoundPage} />
    </Switch>
);
