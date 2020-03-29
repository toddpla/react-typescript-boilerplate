import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
// import { Link, withRouter } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer } from 'react-router-bootstrap';
import { Routes } from './routers/Routes';

// export const history = createBrowserHistory();

export interface AppProps {
    isAuthenticated: boolean;
    userHasAuthenticated: Function;
}

export const App = (props: RouteComponentProps): JSX.Element => {
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        try {
            await Auth.currentSession();
            userHasAuthenticated(true);
        } catch (e) {
            if (e !== 'No current user') {
                alert(e);
            }
        }

        setIsAuthenticating(false);
    }

    async function handleLogout() {
        await Auth.signOut();

        userHasAuthenticated(false);

        props.history.push('/login');
    }

    return !isAuthenticating ? (
        <div className="App container">
            <Navbar collapseOnSelect>
                <Navbar.Brand>
                    <Link to="/">Markets</Link>
                </Navbar.Brand>
                <LinkContainer to="/Builder">
                    <NavItem>Builder</NavItem>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        {isAuthenticated
                            ? [
                                  <LinkContainer to="/settings">
                                      <NavItem>Settings</NavItem>
                                  </LinkContainer>,
                                  <NavItem onClick={handleLogout}>
                                      Logout
                                  </NavItem>
                              ]
                            : [
                                  <>
                                      <LinkContainer to="/signup">
                                          <NavItem>Signup</NavItem>
                                      </LinkContainer>
                                      ,
                                      <LinkContainer to="/login">
                                          <NavItem>Login</NavItem>
                                      </LinkContainer>
                                  </>
                              ]}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        </div>
    ) : (
        <div></div>
    );
};

export default withRouter(App);
