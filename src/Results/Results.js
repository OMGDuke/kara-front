import React, { Component } from 'react';
import axios from 'axios';

import Result from '../Result/Result';
import Search from '../Search/Search';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.getResults();
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.searchTerm !== this.props.match.params.searchTerm) {
      this.props.match.params.searchTerm = newProps.match.params.searchTerm;
      this.getResults();
    }
  }

  getResults() {
    const searchTerm = this.props.match.params.searchTerm;
    const API_KEY = process.env.REACT_APP_YOUTUBE_API;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${searchTerm}%20karaoke&key=${API_KEY}`;
    axios.get(url)
      .then(res => {
        this.setState({results: res.data.items});
      });
  }

  renderResults() {
    const searchTerm = this.props.match.params.searchTerm;
    if(!searchTerm) {
      return;
    } else {
      return(
        <div>
          <h1>Results</h1>
          <div className="row">
            {this.state.results.map(result => <Result key={result.id.videoId} resultData={result} addToQueue={this.props.addToQueue}/>)}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="Results container">
        <Search {...this.props}/>
        {this.renderResults()}
      </div>
    );  
  }
}

export default Results;
