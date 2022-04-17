import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
