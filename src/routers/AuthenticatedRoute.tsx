import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { AppProps } from '../App';

interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<RouteComponentProps>;
    appProps: AppProps;
}

export const AuthenticatedRoute = ({
    component: C,
    appProps,
    ...rest
}: IProps) => {
    return (
        <Route
            {...rest}
            render={props =>
                appProps.isAuthenticated ? (
                    <C {...props} {...appProps} />
                ) : (
                    <Redirect
                        to={`/login?redirect=${props.location.pathname}${props.location.search}`}
                    />
                )
            }
        />
    );
};
