import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { graphql, useStaticQuery } from 'gatsby';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Ubuntu:wght@300;400;500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    height: 100%;
  }
  #root {
    height: 100%;
  }
  body {
  height: 100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Cardo', serif;
  font-family: 'Ubuntu', sans-serif;
}
* {
  margin: 0;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
`;

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  return (
    <>
      <GlobalStyles />
      <title>{data.site.siteMetadata.title}</title>

      <Navbar>
        <h1>Welcome to {data.site.siteMetadata.title}</h1>
      </Navbar>
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {};

export default Layout;
