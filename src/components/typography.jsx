import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./typography.module.css";

const Typography = ({
  children,
  className = "",
  id = undefined,
  variant,
  component: Component = variant,
  ...props
}) => {
  return (
    <Component className={`${styles.root} ${className}`} id={id} {...props}>
      {children}
      {id && (
        <a aria-hidden className={styles.anchor} href={`#${id}`}>
          <FontAwesomeIcon className={styles.anchorIcon} icon={faHashtag} />
        </a>
      )}
    </Component>
  );
};

export default Typography;
