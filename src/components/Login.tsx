import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Auth } from 'aws-amplify';

function checkUser() {
    Auth.currentAuthenticatedUser()
        .then(user => console.log({ user }))
        .catch(err => console.log(err));
}

function signOut() {
    Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// type RouteProps = {
//     // component: any;
//     appProps: any;
// };

export function Login(props: RouteComponentProps): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
                <button onClick={checkUser}>Check User</button>
                <button onClick={signOut}>Sign Out</button>
            </header>
        </div>
    );
}

export default Login;
