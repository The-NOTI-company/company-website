import React from "react";
import styles from '../styles/components/LoadingScreen.module.css'
import { classNames } from "../utils/classNames";

interface LoadingProps {
    loading: Boolean
}

const LoadingScreen = ({ loading }:LoadingProps ) => {
    return (
        <div className={ classNames (styles.container, !loading ? styles.slideout : "hidden")}>
            <video
                loop
                muted
                autoPlay
                controls={false}
                playsInline
                width="100%"
                height="100%"
                className="my-auto h-[80%]"
            >
                <source src={"/assets/video/loader.mp4"} type="video/mp4"/>
            </video>
        </div>
    )
}

export default LoadingScreen