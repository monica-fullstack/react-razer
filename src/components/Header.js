import React from 'react';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <header >
      <Nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Container>
          <a href="#" className="navbar-brand">
            <img src={require('../assets/images/logo.png')} />
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Buy Now</a>
              </li>
            </ul>
          </div>
        </Container>
      </Nav>
    </header>
  )
};

export default Header;