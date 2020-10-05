import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import Logo from "./logo";

const Header = () => {
  return (
    <>
      <header className={styles.root}>
        <Link href="/">
          <a>
            <Logo className={styles.logo} />
          </a>
        </Link>
        <nav className={styles.links}>
          <Link href="/blog">
            <a className="button">Blog</a>
          </Link>
          <Link href="/projects">
            <a className="button">Projects</a>
          </Link>
        </nav>
      </header>
      <header className={styles.print}>
        <h1>Tyler Benfield</h1>
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
