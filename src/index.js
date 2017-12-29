import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header/Header';
import Search from './Search/Search';
import NotFound from './NotFound/NotFound';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <div>
            <Header />
            <Router>
                <div>

                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();


