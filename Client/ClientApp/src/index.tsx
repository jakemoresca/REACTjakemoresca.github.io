import 'bootstrap/dist/css/bootstrap.css';
import "devicon/devicon.css";
import "devicon/devicon-colors.css";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createHashHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();