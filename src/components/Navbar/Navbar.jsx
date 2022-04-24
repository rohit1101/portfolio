import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
