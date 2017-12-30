import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './common/Header/Header';
import Search from './Search/Search';
import NotFound from './NotFound/NotFound';

class App extends Component {
    searchYT (term) {
        console.log(term)
    }
    
    render() {
        return (
        <div className="App">
            <Header />
            <Router>
                <div>

                    <Switch>
                        <Route exact path="/" render={(props) => <Search {...props} searchYT={this.searchYT} /> } />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
        );  
    }
}

export default App;
