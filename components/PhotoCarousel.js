import { useState } from "react";
import Image from "next/image";

import styles from '../styles/Photos.module.css'

export default function PhotoCarousel({ photos, photoIndex, onClose }) {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(photoIndex);

    const onArrowClick = (direction) => {
        if (direction === "right") {
            setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);

            return;
        }

        setSelectedPhotoIndex((((selectedPhotoIndex - 1) % photos.length) + photos.length) % photos.length);
    }

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
            {/* <button className={ styles.close } onClick={ onClose }>x</button> */}
        </div>
    );
}
