import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { AppProps } from '../App';

interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<RouteComponentProps>;
    appProps: AppProps;
}

export const AppliedRoute = ({
    component: C,
    appProps,
    ...rest
}: IProps): JSX.Element => {
    return <Route {...rest} render={props => <C {...props} {...appProps} />} />;
};
