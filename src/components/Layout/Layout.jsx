import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { graphql, useStaticQuery } from 'gatsby';

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
    <div>
      <title>{data.site.siteMetadata.title}</title>
      <h1>Welcome to {data.site.siteMetadata.title}</h1>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
