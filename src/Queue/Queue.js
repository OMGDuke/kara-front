import React, { Component } from 'react';

class Queue extends Component {
    generateKey() {
        return `${new Date().getTime()}_${Math.random()}`;
        this.renderQueue = this.renderQueue.bind(this);
    }
    renderQueue() {
        if(this.props.queue.length) {
            return(
                <div>
                {this.props.queue.map((song, index) => (
                    <div key={this.generateKey()}>
                        <h5>{song.snippet.title}</h5>
                        <span>Added by <h6>{song.addedBy}</h6></span>
                        <button onClick={() => this.props.removeFromQueue(index)}>x</button>
                    </div>
                ))}
                </div>
            )
        } else {
            return <h2>No songs in queue, add a song to start</h2>
        }
    }
    render() {
        return (
        <div className="Queue">
            {this.renderQueue()}
        </div>
        );  
    }
}

export default Queue;
