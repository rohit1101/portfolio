import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavList=styled.ul`
  display:flex;
  list-style:none;
  gap: 4px;
  
`

function Navbar(props) {
  return (
    <nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </NavList>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
