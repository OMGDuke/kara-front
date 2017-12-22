import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const action = this.props.action;
    action ? this.props.action() : false;
  }

  render() {
    return (
      <div className="Button">
        <a href="#" onClick={this.handleClick}>{this.props.children}</a>
      </div>
    );
  }
}

export default Button;