import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render() {
    const result = this.props.resultData;
    return (
      <div className="Result col-md-4">
        <div className="card-wrapper h-100">
          <div className="card">
            <img className="card-img-top" src={result.snippet.thumbnails.high.url} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{result.snippet.title}</h5>
              <button className="btn btn-success" onClick={() => {this.props.addToQueue(result)}}>+</button>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}

export default Result;
