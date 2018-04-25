import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.goToQueue = this.goToQueue.bind(this);
    this.goHome = this.goHome.bind(this);
  }
  generateKey() {
    return `${new Date().getTime()}_${Math.random()}`;
  }
  showRoom() {
    if (this.props.queue) {
      return <h3>Room: {this.props.room}</h3>;
    }
  }

  goToQueue() {
    this.props.history.push('/queue');
  }
  goHome() {
    if (this.props.joined && this.props.role === 'server') {
      this.props.history.push('/sing');
    } else if (this.props.joined && this.props.role === 'user') {
      this.props.history.push('/search');
    }
  }
  showQueue() {
    if (this.props.queue) {
      return (
        <div>
          <h2>Queue: {this.props.queue.length} Songs</h2>
          <h3>Up Next:</h3>
          {this.props.queue
            .slice(1, 2)
            .map(song => <p key={this.generateKey()}>{song.snippet.title}</p>)}
          <button onClick={this.goToQueue}>
            <h5>Full Queue</h5>
          </button>
          <button className="float-right" onClick={this.props.nextSong}>
            Skip Song
          </button>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="Header">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-4 order-md-2">
                <a href="#" onClick={this.goHome}>
                  <h1 className="display-4">
                    {process.env.REACT_APP_WEBSITE_NAME}
                  </h1>
                </a>
                <p className="lead">Witty Tagline</p>
              </div>
              <div className="col-md-4 order-md-1">{this.showRoom()}</div>
              <div className="col-md-4 order-md-3">{this.showQueue()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const RouterHeader = withRouter(Header);

export default RouterHeader;
