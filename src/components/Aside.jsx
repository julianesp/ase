// components/AsideItem.js
import React from "react";
import Image from "next/image";
import styles from "../styles/Aside.module.scss";
import Link from "next/link";

const AsideItem = ({ title, content, imageUrl, links }) => {
  return (
    <div className={styles["aside-item"]}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          className={styles["aside-image"]}
          width={100}
          height={100}
        />
      )}
      <h3>{title}</h3>
      <p>{content}</p>
      {links && links.length > 0 && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AsideItem;
