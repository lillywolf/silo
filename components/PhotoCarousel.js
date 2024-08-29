import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";

import styles from '../styles/Photos.module.css'

export default function PhotoCarousel({ photos, photoIndex, onClose }) {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(photoIndex);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [selectedPhotoIndex]);

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
        setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    };

    const goLeft = () => {
        setSelectedPhotoIndex((((selectedPhotoIndex - 1) % photos.length) + photos.length) % photos.length);
    };

    return (
        <div className={ styles.photoCarousel }>
            <div className={ styles.leftArrow } onClick={() => onArrowClick("left")}>
                <div className={ styles.icon }>
                    <Image src="/chevron-left.svg" width="50" height="50" objectFit="contain"/>
                </div>
            </div>
            <img className={ styles.photo } src={photos[selectedPhotoIndex]} layout="fill">
            </img>
            <div className={ styles.rightArrow } onClick={() => onArrowClick("right")}>
                <div className={ styles.icon }>
                    <Image src="/chevron-right.svg" width="50" height="50" objectFit="contain"/>
                </div>
            </div>
            <button className={ styles.close } onClick={ onClose }>x</button>
        </div>
    );
}
