import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { StaticImage } from "gatsby-plugin-image";
function Layout({ children }) {
  return (
    <div>
      <Navbar />
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
