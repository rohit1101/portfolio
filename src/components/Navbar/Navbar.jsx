import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
