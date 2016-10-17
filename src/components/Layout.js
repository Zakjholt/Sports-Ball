import React, { Component } from 'react';
import { Link } from 'react-router';

class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="header">
            <h1>SportsBall</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
