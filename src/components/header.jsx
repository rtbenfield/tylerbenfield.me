import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import React from "react";
import LogoLarge from "../images/logo-large.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.root}>
        <Link to="/">
          <img
            alt="Tyler Benfield Logo"
            className={styles.logo}
            src={LogoLarge}
          />
        </Link>
        <nav className={styles.links}>
          <Link className="button" to="/blog">
            Blog
          </Link>
          <Link className="button" to="/resume">
            Resumé
          </Link>
          <Link className="button" to="/projects">
            Projects
          </Link>
        </nav>
      </header>
      <header className={styles.print}>
        <img
          alt="Tyler Benfield Logo"
          className={styles.logo}
          src={LogoLarge}
        />
        <div className={styles.contact}>
          <a aria-label="Email" href="mailto:tyler@tylerbenfield.me">
            <FontAwesomeIcon fixedWidth icon={faEnvelope} />
            tyler@tylerbenfield.me
          </a>
          <a aria-label="Website" href="https://tylerbenfield.me">
            <FontAwesomeIcon fixedWidth icon={faGlobe} />
            tylerbenfield.me
          </a>
          <a aria-label="GitHub" href="https://github.com/rtbenfield">
            <FontAwesomeIcon fixedWidth icon={faGithub} />
            github.com/rtbenfield
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/tylerbenfield/"
          >
            <FontAwesomeIcon fixedWidth icon={faLinkedin} />
            linkedin.com/in/tylerbenfield
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
