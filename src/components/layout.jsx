import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Header from "./header";
import "../styles/site.css";
import styles from "./layout.module.css";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${className}`}>{children}</main>
      <hr />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
