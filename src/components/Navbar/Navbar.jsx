import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Nav = styled.nav`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;

  ul {
    list-style-type: none;
    display: flex;
    gap: 0 8px;

    font-weight: 600;
    li a {
      text-decoration: none;
      color: hsl(255, 100%, 0%);
      text-transform: uppercase;
    }
  }
`;

const Header = styled.header`
  background-color: hsl(44, 92%, 71%);
`;

const SocialLinks = styled.div`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  gap: 0 4px;

  a {
    display: inline-block;
    color: black;
    padding: 4px 6px;
    font-size: 24px;
    transition: all 500ms ease-out;
    border-radius: 7px 7px 0px 0px;
  }
  a:hover {
    background-color: hsl(44, 92%, 51%);
  }
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
      <SocialLinks>
        <a
          href="https://github.com/rohit1101"
          aria-label="Find me on Github"
          target="_blank"
          rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rohit-s-5b1a13137/"
          aria-label="Find me on LinkedIn"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin />
        </a>
      </SocialLinks>
    </Header>
  );
}

Navbar.propTypes = {};

export default Navbar;
