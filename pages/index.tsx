import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/nav/footer";
import CameraCard from "../components/camera/cameraCard";
import Image from "next/image";
import React from "react";

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
                    <Image src="/logo.svg" alt="Microel Logo" width={292} height={56}/>
                </a>
                <h1 className={styles.title}>
                    Камеры города <p className={styles.title}>Волгодонск</p>
                </h1>

                <p className={styles.description}>
                    Для начала выберите камеру ниже
                </p>

                <div className={styles.grid}>
                    <CameraCard link={'/camera/1'} cameraID={'1'} cameraStreet={'Проспект Курчатова'}/>
                    <CameraCard link={'/camera/2'} cameraID={'2'} cameraStreet={'Мирный атом'}/>
                    <CameraCard link={'/camera/3'} cameraID={'3'} cameraStreet={'Вкусно и Точка'}/>
                    <CameraCard link={'/camera/4'} cameraID={'4'} cameraStreet={'Проспект Строителей'}/>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default Home
