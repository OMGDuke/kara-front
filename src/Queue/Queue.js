import React, { Component } from 'react';

class Queue extends Component {
    generateKey() {
        return `${new Date().getTime()}_${Math.random()}`;
    }
    render() {
        return (
        <div className="Queue">
            {this.props.queue.map((song, index) => (
                <div key={this.generateKey()}>
                    <h5>{song.snippet.title}</h5>
                    <button onClick={() => this.props.removeFromQueue(index)}>x</button>
                </div>
            ))}
        </div>
        );  
    }
}

export default Queue;
