import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App/App';
import NotFound from './NotFound/NotFound';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();


