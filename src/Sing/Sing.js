import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Sing extends Component {
  constructor(props) {
    super(props);
    this.onVideoEnd = this.onVideoEnd.bind(this);
  }
  onVideoEnd() {
    console.log(this.props);
    this.props.nextSong();
  }
  showSong() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };
    if (this.props.queue && this.props.queue[0]) {
      return (
        <div>
          <h2>{this.props.queue[0].snippet.title}</h2>
          <YouTube
            videoId={this.props.queue[0].id.videoId}
            onEnd={this.onVideoEnd}
            opts={opts}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h2>No songs in queue, add a song to start</h2>
        </div>
      );
    }
  }

  render() {
    return <div className="Sing">{this.showSong()}</div>;
  }
}

export default Sing;
