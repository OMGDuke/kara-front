import React from 'react';
import { render } from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App'

import registerServiceWorker from './registerServiceWorker';

const Root = () => {

    return (
        <div>
            <App />
        </div>
    )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();


