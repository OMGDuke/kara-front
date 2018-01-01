import React, { Component } from 'react';

class Host extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.generateRoom();
    }

    generateRoom() {
        if (this.props.room) {
            this.props.history.push('/sing')
            return;
        }
        const room = Math.random().toString(36).substring(2, 6).toUpperCase();
        this.props.setRoom(room);
        this.setState({room: room});
    }

    handleClick() {
        this.props.joinRoom();
        this.props.history.push('/sing')
    }

    render() {
        return (
        <div className="Host">
            Room: {this.state.room}
            <button onClick={this.handleClick} className="btn btn-success">Join</button>
        </div>
        );  
    }
}

export default Host;
