import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/nav/Footer";
import CameraCard from "../components/main/camera/CameraCard";
import React from "react";
import {cameras} from "../utils/cameras";
import dynamic from "next/dynamic";

const Map = dynamic(
    () => import('../components/main/MapWidget'),
    {ssr: false}
)

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Видеонаблюдение в Волгодонске</title>
                <meta name="description" content="Камеры города Волгодонск"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <main className={styles.main}>

                <a className={styles.image}
                   href="https://vdonsk.ru/"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <img src="/logo.svg" alt="Microel Logo" width={292} height={56}/>
                </a>
                <h1 className={styles.title}>
                    Камеры города <p className={styles.title}>Волгодонск</p>
                </h1>

                <div className={styles.grid}>
                    {cameras.map((camera, i) => <CameraCard
                        link={'/camera/' + (i + 1)}
                        imageFile={camera.imageFile}
                        cameraStreet={camera.street}
                        key={i}/>)}
                </div>

                <Map/>


            </main>

            <Footer/>
        </div>
    )
}

export default Home
