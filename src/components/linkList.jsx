import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import VscodeIcon from "../components/vscodeIcon";
import styles from "./linkList.module.css";

const LinkList = ({
  className = "",
  github,
  link,
  project,
  title,
  vscodeMarketplace,
  ...props
}) => {
  return (
    <ul className={`${styles.root} ${className}`} {...props}>
      {project && (
        <li>
          <Link as={`/projects/${project}`} href="/projects/[slug]">
            <a title={`Navigate to ${title} project page`}>
              <FontAwesomeIcon fixedWidth icon={faInfoCircle} size="2x" />
            </a>
          </Link>
        </li>
      )}
      {link && (
        <li>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            title={`Open ${title}`}
          >
            <FontAwesomeIcon fixedWidth icon={faExternalLinkAlt} size="2x" />
          </a>
        </li>
      )}
      {github && (
        <li>
          <a
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            title={`Open ${title} on GitHub`}
          >
            <FontAwesomeIcon fixedWidth icon={faGithub} size="2x" />
          </a>
        </li>
      )}
      {vscodeMarketplace && (
        <li>
          <a
            href={vscodeMarketplace}
            rel="noopener noreferrer"
            target="_blank"
            title={`Open ${title} on VS Code Marketplace`}
          >
            <VscodeIcon />
          </a>
        </li>
      )}
    </ul>
  );
};

export default LinkList;
