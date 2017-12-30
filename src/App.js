import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './common/Header/Header';
import Search from './Search/Search';
import Results from './Results/Results';
import NotFound from './NotFound/NotFound';

class App extends Component {
    constructor() {
        super();
        this.state = {
            results: []
        }
    }
    
    render() {
        return (
        <div className="App">
            <Header />
            <Router>
                <div>

                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route exact path="/results/:searchTerm" component={Results} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
        );  
    }
}

export default App;
// <Route exact path="/results/:searchTerm" render={(props) => <Results {...props} results={this.state} /> } />
