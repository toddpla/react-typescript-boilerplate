import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Amplify from 'aws-amplify';
// import awsExports from './aws-exports';
import config from './config';
import App from './App';
import { reducers } from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

// Amplify.configure(awsExports);
Amplify.configure(config);

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#root')
);
