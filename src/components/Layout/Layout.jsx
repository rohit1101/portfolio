import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
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
      <Navbar />
      <h3>Website name: {}</h3>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../../images/icon.png"
      />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
