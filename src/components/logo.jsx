import React from "react";
import styles from "./logo.module.css";

const Logo = ({ className }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 840 200"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.outerRing}
        d="M 100 20 A 45 45, 0, 0, 0, 100 180 L 740 180 A 45 45, 0, 0, 0, 740 20 Z"
        fill="none"
        stroke-width="20"
      />
      <path
        className={styles.innerRing}
        d="M 100 20 A 45 45, 0, 0, 0, 100 180 L 740 180 A 45 45, 0, 0, 0, 740 20 Z"
        fill="none"
        stroke-width="5"
      />
      <text
        className={styles.text}
        x="420"
        y="140"
        fill="#607D8B"
        font-family="Roboto, Helvetica, Arial"
        font-size="120"
        stroke-width="5"
        text-anchor="middle"
      >
        Tyler Benfield
      </text>
    </svg>
  );
};

export default Logo;
