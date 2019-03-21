import React, { Component } from 'react'
import logo from '../logo.svg';
export class Header extends Component {
  render() {
    return (
        <React.Fragment>
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt=""/>
          </a>
        </nav>
        </React.Fragment>
    )
  }
}

export default Header
