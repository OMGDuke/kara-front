import React, { Component } from 'react';

class Sing extends Component {
    showSong() {
        if(this.props.queue && this.props.queue[0]) {
          return(
            <div>
              <h2>{this.props.queue[0].snippet.title}</h2>
                <iframe id="ytplayer" type="text/html" allowFullScreen="allowfullscreen"  width="640" height="360"
                  src={`https://www.youtube.com/embed/${this.props.queue[0].id.videoId}?autoplay=1`}
                  frameBorder="0" title={this.props.queue[0].snippet.title}>
                </iframe>
              </div>
          )
        } else {
            return(<div>
                <h2>No songs in queue, add a song to start</h2>
            </div>)
        }
      }

    render() {
        return (
        <div className="Sing">
            {this.showSong()}
        </div>
        );  
    }
}

export default Sing;
