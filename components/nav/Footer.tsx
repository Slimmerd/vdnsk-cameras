import React from 'react';
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://vdonsk.ru/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className={styles.logo}>
            <Image src="/logo.svg" alt="Microel Logo" width={152} height={36} />
          </span>
            </a>
        </footer>
    );
};

export default Footer;
