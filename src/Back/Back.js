import React, { Component } from 'react';
import axios from 'axios';

class Back extends Component {
  constructor(props) {
    super(props)
  }

  showSong() {
    if(this.props.queue[0]) {
      return(
        <div className="Sing container">
          <h2>{this.props.queue[0].snippet.title}</h2>
            <iframe id="ytplayer" type="text/html" allowFullScreen="allowfullscreen"  width="640" height="360"
              src={`https://www.youtube.com/embed/${this.props.queue[0].id.videoId}?autoplay=1`}
              frameBorder="0" title={this.props.queue[0].snippet.title}>
            </iframe>
          </div>
      )
    }
  }

  render() {
    return (
      <div className="Back">
        {this.showSong()}
      </div>
    );  
  }
}

export default Back;
