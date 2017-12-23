import React, { Component } from 'react';
import './TextInput.css';

import classNames from 'classnames';

class TextInput extends Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);

    this.findClasses();
  }

  findClasses(value) {
    this.classes = value === this.props.validation ? 'text-input--success' : '';
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.findClasses(e.target.value);
  }

  render() {
    return (
      <div>
        <input className={`TextInput ${this.classes}`} value={this.state.value} onChange={this.handleChange}></input>
        <h1>{this.state.value}</h1>
      </div>
    );
  }
}

export default TextInput;