import React from 'react';
import styles from "../../styles/Home.module.css";
import Link from "next/link";

type CameraCardT = {
    link: string;
    cameraStreet: string;
}

const CameraCard: React.FC<CameraCardT> = ({link, cameraStreet}) => {
    return (
        <Link href={link} prefetch={false}>
            <a className={styles.card}>
                <h2>{cameraStreet} &rarr;</h2>
            </a>
        </Link>
    );
};

export default CameraCard;
