import React from 'react';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <header >
      <Nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a href="#" className="navbar-brand">
          <img src={require('../assets/images/razer-nari-logo.svg')} />
        </a>
      </Nav>
    </header>
  )
};

export default Header;