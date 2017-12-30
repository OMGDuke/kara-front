import React, { Component } from 'react';
import axios from 'axios';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.getResults();
  }

  getResults() {
    const searchTerm = this.props.match.params.searchTerm;
    const API_KEY = process.env.REACT_APP_YOUTUBE_API;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${searchTerm}%20karaoke&key=${API_KEY}`;
    axios.get(url)
      .then(res => {
        this.setState({results: res.data.items});
      });
  }

  render() {
    return (
      <div className="Results">
        <h1>Results</h1>
        
      </div>
    );  
  }
}

export default Results;
