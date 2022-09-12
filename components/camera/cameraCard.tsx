import React from 'react';
import styles from "../../styles/Home.module.css";
import Link from "next/link";

type CameraCardT = {
    link: string;
    cameraID: string;
    cameraStreet: string;
}

const CameraCard: React.FC<CameraCardT> = ({link, cameraID, cameraStreet}) => {
    return (
        <Link href={link} prefetch={false}>
            <a className={styles.card}>
                <h2>Камера {cameraID} &rarr;</h2>
                <p>{cameraStreet}</p>
            </a>
        </Link>
    );
};

export default CameraCard;
