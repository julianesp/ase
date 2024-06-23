// components/FacebookLink.js
import React from "react";
import Image from "next/image";
import styles from "./Facebook.module.scss";

const FacebookLink = ({ imageUrl, facebookUrl }) => {
  return (
    <div className={styles.link}>
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <Image src={imageUrl} alt="Facebook Link" width={250} height={250} />
      </a>
    </div>
  );
};

export default FacebookLink;
