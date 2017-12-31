import React, { Component } from 'react';
import axios from 'axios';
// )

class Sing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {}
        }
        this.getVideoDetails();
    }

    getVideoDetails() {
        const videoId = this.props.match.params.videoId;
        const API_KEY = process.env.REACT_APP_YOUTUBE_API;
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,statistics`
        axios.get(url)
          .then(res => {
            this.setState({song: res.data.items[0].snippet});
          });
    }
    render() {
        return (
        <div className="Sing container">
            <h2>{this.state.song.title}</h2>
            <iframe id="ytplayer" type="text/html" allowFullScreen="allowfullscreen"  width="640" height="360"
                src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?autoplay=0`}
                frameBorder="0" title={this.state.song.title}></iframe>
        </div>
        );  
    }
}

export default Sing;
