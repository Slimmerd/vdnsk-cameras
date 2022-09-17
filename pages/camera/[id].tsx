import React from 'react';
import {IoArrowBack} from "react-icons/io5";
import styles from '../../styles/Camera.module.css'
import Footer from "../../components/nav/Footer";
import {useRouter} from "next/router";
import Head from "next/head";
import {cameras} from "../../utils/cameras";

const CameraPage = () => {

    const router = useRouter()
    const {id} = router.query
    const cameraID = Number(id) - 1

    const camera = cameras[cameraID]

    return (
        <div className={styles.container}>
            <Head>
                <title>Камера Проспект Курчатова</title>
                <meta name="description" content="Прямая трансляция с улицы"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <div className={styles.main}>

                <div className={styles.heading}>
                    <button className={styles.backBtn} onClick={() => router.push('/')}>
                        <IoArrowBack/>
                    </button>
                    <h1 className={styles.title}>{camera?.street}</h1>
                </div>

                <div className={styles.player}>
                    <iframe
                        src={camera?.url}
                        style={{border: 0}}
                        allowFullScreen>
                    </iframe>
                </div>


            </div>

            <Footer/>
        </div>
    );
};

export async function getStaticProps({ params }: {params: any}) {
    const id = params.id
    const content = cameras[id-1];

    if (!content) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
        };
    }

    return {
        props: {},
    };
}

export async function getStaticPaths() {
    const paths = cameras.map((c, i)  => {
        return {
            params: {
                id: `${i+1}`,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export default CameraPage;
