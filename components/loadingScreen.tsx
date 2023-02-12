import React from "react";
import styles from '../styles/components/LoadingScreen.module.css'

const LoadingScreen = () => {
    return (
        <div className={styles.container}>
            <video
                loop
                muted
                autoPlay
                playsInline
                width="100%"
                height="100%"
            >
                <source src={"/assets/video/loader.mp4"} type="video/mp4"/>
            </video>
        </div>
    )
}

export default LoadingScreen