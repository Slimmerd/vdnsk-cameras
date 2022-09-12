import React from 'react';
import {IoArrowBack} from "react-icons/io5";
import styles from '../../styles/Camera.module.css'
import Footer from "../../components/nav/footer";
import {useRouter} from "next/router";
import Head from "next/head";

const CameraPage = () => {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <Head>
                <title>Камера Проспект Курчатова</title>
                <meta name="description" content="Прямая трансляция с улицы" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className={styles.main}>

                <div className={styles.heading}>
                    <button className={styles.backBtn} onClick={() => router.back()}>
                        <IoArrowBack/>
                    </button>
                    <h1 className={styles.title}>Проспект Курчатова</h1>
                </div>

                <div className={styles.player}>
                    <iframe
                        src="https://cam.vdonsk.ru/embed/s.c83c02ba40f240b29e06f09f89fdd514820db7911"
                        style={{border: 0}}
                        allowFullScreen>
                    </iframe>
                </div>


            </div>

            <Footer/>
        </div>
    );
};

export default CameraPage;
