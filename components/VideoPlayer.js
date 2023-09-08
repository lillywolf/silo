import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ReactPlayer from 'react-player';

import styles from '../styles/Videos.module.css'

export default function VideoPlayer({ videos, videoIndex, onClose }) {
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(videoIndex);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [selectedVideoIndex]);

    const handleKeyDown = useCallback((e) => {
        switch (e.keyCode) {
            case 27: {      // escape key
                onClose();
                return;
            }
            case 37: {
                goLeft();
                return;
            }
            case 39: {
                goRight();
                return;
            }
            default:
                onClose();
        }
    });

    const onArrowClick = useCallback((direction) => {
        if (direction === "right") {
            goRight();

            return;
        }

        goLeft();
    });

    const goRight = () => {
        setSelectedVideoIndex((selectedVideoIndex + 1) % videos.length);
    };

    const goLeft = () => {
        setSelectedVideoIndex((((selectedVideoIndex - 1) % videos.length) + videos.length) % videos.length);
    };

    return (
        <div className={ styles.videoPlayer }>
            <div className={ styles.leftArrow } onClick={() => onArrowClick("left")}>
                <div className={ styles.icon }>
                    <Image src="/chevron-left.svg" width="50" height="50" objectFit="contain"/>
                </div>
            </div>
            <div className={ styles.player }>
                <ReactPlayer url={ videos[selectedVideoIndex] }/>
            </div>
            <div className={ styles.rightArrow } onClick={() => onArrowClick("right")}>
                <div className={ styles.icon }>
                    <Image src="/chevron-right.svg" width="50" height="50" objectFit="contain"/>
                </div>
            </div>
        </div>
    );
}
