import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./footer.module.css";
import VscodeIcon from "./vscodeIcon";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`${styles.root} ${className}`}>
      <span>© {new Date().getFullYear()} Tyler Benfield</span>
      <span className={styles.iconLinks}>
        <a href="mailto:tyler@tylerbenfield.me" title="Send email">
          <FontAwesomeIcon fixedWidth icon={faEnvelope} size="2x" />
        </a>
        <a
          href="https://github.com/rtbenfield"
          rel="noopener noreferrer"
          target="_blank"
          title="View GitHub profile"
        >
          <FontAwesomeIcon fixedWidth icon={faGithub} size="2x" />
        </a>
        <a
          href="https://stackoverflow.com/users/9867662"
          rel="noopener noreferrer"
          target="_blank"
          title="View StackOverflow profile"
        >
          <FontAwesomeIcon fixedWidth icon={faStackOverflow} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/tylerbenfield/"
          rel="noopener noreferrer"
          target="_blank"
          title="View LinkedIn profile"
        >
          <FontAwesomeIcon fixedWidth icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://marketplace.visualstudio.com/publishers/rtbenfield"
          rel="noopener noreferrer"
          target="_blank"
          title="View VS Code Marketplace profile"
        >
          <VscodeIcon />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
