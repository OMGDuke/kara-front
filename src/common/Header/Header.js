import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{process.env.REACT_APP_WEBSITE_NAME}</h1>
                <p className="lead">Witty Tagline</p>
            </div>
        </div>
      </div>
    );  
  }
}

export default Header;
