import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: '',
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
        this.checkForLogin();
  }

  checkForLogin() {
    console.log(this.props);
    if(this.props.room && this.props.name) {
      this.props.history.push('/search')
            return;
    }

  }

  handleRoomChange(e) {
    this.setState({room: e.target.value});
    this.props.setRoom(e.target.value);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
    this.props.setName(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.joinRoom();
    this.props.history.push('/search')

  }

  render() {
    return (
      <div className="Search container">
        <form className="form-group" onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" placeholder="Enter the room name" value={this.state.room} onChange={this.handleRoomChange}  />
                <input className="form-control" type="text" placeholder="Enter your username" value={this.state.name} onChange={this.handleNameChange}  />
                <button className="btn btn-default btn-success btn-block">Search</button>                 
        </form> 
      </div>
    );  
  }
}

export default User;
