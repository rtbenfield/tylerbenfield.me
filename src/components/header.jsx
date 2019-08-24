import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import LogoLarge from "../images/logo-large.svg";
import styles from "./header.module.css";

const Header = ({ siteTitle }) => (
  <header className={styles.root}>
    <Link to="/">
      <img alt="Tyler Benfield Logo" className={styles.logo} src={LogoLarge} />
    </Link>
    <div className={styles.links}>
      <Link
        activeClassName={styles.active}
        className={styles.button}
        to="/resume"
      >
        Resumé
      </Link>
      <Link
        activeClassName={styles.active}
        className={styles.button}
        to="/projects"
      >
        Projects
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
