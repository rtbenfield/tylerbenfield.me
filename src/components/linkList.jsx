import React from "react";
import styles from "./linkList.module.css";

const LinkList = ({ className = "", ...props }) => {
  return <ul className={`${styles.root} ${className}`} {...props} />;
};

export default LinkList;
