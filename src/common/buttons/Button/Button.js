import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="Button">
        <a href="#">{this.props.children}</a>
      </div>
    );
  }
}

export default Button;