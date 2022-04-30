import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    gap: 0 8px;
  }
`;

const Header = styled.header`
  background-color: hsl(44, 92%, 71%);
`;

function Navbar({ children }) {
  return (
    <Header>
      <Nav>
        {children}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
      <a>github</a>
      <a>linkedin</a>
    </Header>
  );
}

Navbar.propTypes = {};

export default Navbar;
