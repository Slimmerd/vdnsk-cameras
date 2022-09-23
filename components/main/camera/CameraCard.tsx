import React from 'react';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

type CameraCardT = {
	link: string;
	cameraStreet: string;
	imageFile: string;
};

const CameraCard: React.FC<CameraCardT> = ({
											   link,
											   cameraStreet,
											   imageFile
										   }) => {
	return (
		<Link href={link} prefetch={false}>
			<a
				className={styles.card}
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.1)), url("/${imageFile}")`
				}}
			>
				<h2>{cameraStreet} &rarr;</h2>
			</a>
		</Link>
	);
};

export default CameraCard;
