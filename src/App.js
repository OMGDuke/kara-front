import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import openSocket from 'socket.io-client';

import Header from './Header/Header';
import Home from './Home/Home';
import Results from './Results/Results';
import Sing from './Sing/Sing';
import Queue from './Queue/Queue';
import NotFound from './NotFound/NotFound';

const socket = openSocket('localhost:3030');

class App extends Component {
  constructor() {
    super();
    this.state = {
      queue: [],
      role: null,
      room: null,
      name: null,
      joined: false
    };
    this.getQueue();
    this.setRole = this.setRole.bind(this);
    this.setRoom = this.setRoom.bind(this);
    this.setName = this.setName.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  redirect() {
    const validServer =
      this.state.role === 'server' && !!this.state.room && !!this.state.queue;
    const validClient =
      this.state.role === 'user' &&
      !!this.state.room &&
      !!this.state.name &&
      !!this.state.queue;
    const joined = this.state.joined;
    const OnHomepage = window.location.pathname === '/';
    if (!OnHomepage && !joined && (!validServer && !validClient)) {
      return <Redirect to="/" />;
    } else if (OnHomepage && joined && validServer) {
      return <Redirect to="/sing" />;
    } else if (OnHomepage && validClient) {
      return <Redirect to="/search" />;
    }
  }

  getQueue() {
    socket.on('updateQueue', queue => {
      this.setState({ queue });
    });
    socket.emit('getQueue');
  }

  addToQueue(song) {
    socket.emit('add', song);
  }

  nextSong() {
    socket.emit('skip');
  }

  removeFromQueue(index) {
    socket.emit('remove', index);
  }

  setRole(role) {
    this.setState({ role: role });
  }

  setRoom(room) {
    room = room.toUpperCase();
    this.setState({ room: room });
  }

  setName(name) {
    console.log('setting name', name);
    this.setState({ name: name });
  }

  joinRoom() {
    const room = this.state.room;
    const name = this.state.name || 'server';
    socket.emit('join', room, name);
    this.setState({ joined: true });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <div>
              <Header
                queue={this.state.queue}
                nextSong={this.nextSong}
                room={this.state.room}
                joined={this.state.joined}
                role={this.state.role}
              />
              {this.redirect()}
              <div className="container">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <Home
                        {...props}
                        setRole={this.setRole}
                        setRoom={this.setRoom}
                        setName={this.setName}
                        joinRoom={this.joinRoom}
                        room={this.state.room}
                        name={this.state.name}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/search/:searchTerm?"
                    render={props => (
                      <Results {...props} addToQueue={this.addToQueue} />
                    )}
                  />
                  <Route
                    exact
                    path="/sing"
                    render={props => (
                      <Sing
                        {...props}
                        queue={this.state.queue}
                        nextSong={this.nextSong}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/queue"
                    render={props => (
                      <Queue
                        {...props}
                        queue={this.state.queue}
                        removeFromQueue={this.removeFromQueue}
                      />
                    )}
                  />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
