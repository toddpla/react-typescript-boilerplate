import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { AppProps } from '../App';

interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<RouteComponentProps>;
    appProps: AppProps;
}

function querystring(name: string, url = window.location.href) {
    name = name.replace(/[[]]/g, '\\$&');

    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
    const results = regex.exec(url);

    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const UnauthenticatedRoute = ({
    component: C,
    appProps,
    ...rest
}: IProps) => {
    const redirect = querystring('redirect');
    return (
        <Route
            {...rest}
            render={props =>
                !appProps.isAuthenticated ? (
                    <C {...props} {...appProps} />
                ) : (
                    <Redirect
                        to={
                            redirect === '' || redirect === null
                                ? '/'
                                : redirect
                        }
                    />
                )
            }
        />
    );
};
