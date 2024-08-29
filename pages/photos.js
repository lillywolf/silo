import Image from 'next/image';
import PhotoCarousel from '../components/PhotoCarousel';
import { useState } from 'react';

import styles from '../styles/Photos.module.css';

const GOOGLE_PHOTOS_URL = 'https://lh3.googleusercontent.com/pw';

const SPACE_PHOTO_IDS = [
    'AP1GczM6qfWiHXGOSObBYsKKrevr5qljSo5p49xkdjMDkMBHp3nGDvs4b2YXC1KZGZ7tqtRx-FK5CPixyZKCb4tTI9JweUFMd8P1Sg47O1yEC_de7RO4xZ0=w1920-h1080',
    'AP1GczMCDNTwItv5xFiSrzqhdWY-9O6XMxX4R_v8iVq7lRo73XInIt2eAE4yzDDIWLaIhvZJIBcoi1-nl88Yd0XuFoyCN4aDQ0TiFrk5xgRRfv_pYotuA6A=w1920-h1080',
    'AP1GczMZrhNlft-o-oTQZrQOtwcrSLpi0fsDYfH0xby-mKrqaNNwNeKu0EmAxL6Azo9GaUsqvysOYLjIfGW251sLBiLnZWeMWyoDV_mQOhHSaROuRKiVcg8=w1920-h1080',
    'AP1GczOEWAewZ0hkSV35Vp1j_q__CfX9aop2vgHOVfnCZjnHc7N-lUH62PiV2qpPlB_0FXFRYSXWAUctHbr0NWgPodeiAaNQ-UtgJvunJrOAjoEdaGhRGwk=w1920-h1080',
    'AP1GczPntJGQcvyHEIO-tdzd6zF6G7h7B4jwgld7CllGZ_LLWtq6HXv4NdbJES9ruUA9t_Kch2Z-N_FDi1Yo8c-BkEMhjjSv0Jkt0cbgdWo_1pUQGE99VOE=w1920-h1080',
    'AP1GczMCXK6hUkf5GyDpyXCQewQNTpirZkOD3XowWaLqIi4aBVK0uqfpslpvoSo7oJvUDs_lt_6issdij8NL5Amx1nZ25paawEHJ8kr5iiUTCZEALcxqVQw=w1920-h1080',
    'AP1GczObQmihYrfm2ssHSLy_c7jhj6IIG0ghAIEhT6r9Q5ueGrJc7F0HEu2DAO0GcD5P7Lwf-iWaO7MLMj6PnZfpm2ijvcZV939nU56Xjf9giNpqNYyfH2E=w1920-h1080',
    'AP1GczM2t7AArb8InaTqwhR9vgf7XOUQB916ygZJq4hbf4-9KL8sNfvkMNOnEH-cQ6yVQjIglGG4iwQmJyx5kKsEaALe9-4DNSd0r198qxAfHYduOlbnhQk=w1920-h1080'
];

const EVENT_PHOTO_IDS = [
    'AP1GczO_lDvUpS53igvvSvYK4IawIuZZOE2n-4ccr4J0eJjEwGIByLnn3k8XgZ6xZ2L0X9Dxor5iERHsXky6iqPn1lp2WHQOIa0IaefurpnEn4pEs6lizpo=w1920-h1080',
    'AP1GczPMXEQioure924jQMkLRewPAV57OB4VrsEbyr2XqpzBxHTC_rmxnVW9RBnw1eNEW7Fk_Fy7ovq2QyoC_sLmzDp1dtkT8CmQN4Z6ofd9lXn9_k7_Glw=w1920-h1080',
    'AP1GczOf-Hd75MewxnO-Q14dKV_9g88EPRRucq6_j8cDefNPo9QRqVDSwqou3SnjOJCCcqpjWvk8imCJteNveBiJA8g11zGOHYbo-sbRj1lZ-Yh92ioua9I=w1920-h1080',
    'AP1GczMdba7rIU2kJAYh6cnOqA7nPO1P9hsLjWcnMbhlelj2S1VUMKR2r-Vi6jA4wGhuY7iHlT1Lk0gN-rLazVpL3aVh9HUyAoW952rQJAMNGM47KIHvWEY=w1920-h1080',
    'AP1GczPWBzSSW_ecRIKPjki5fRDt7nll7pG7PAS8Q94g3G4DthE3lUsw9zYwOX2q64_xwsBTTQvh3xsYgctneLXEKKSg6QCFBJ-lYiuj4VBrjRNdw-JXfNM=w1920-h1080',
    'AP1GczNZm62biUZX59R4mum8aC4TrpbWDbGh28r1BlJGvrYIxKLPhWugc1wQ6SaT7fL79kos5ciF-fD4z894nRACtA_-2IWZQDdjodCsK02n4YXHZAWadIY=w1920-h1080',
    'AP1GczOQttK_N0E8AoFy5cw0Wid5RBSr0ogI7h0uPb0LLTD2YKw4ISOff3uMTLvUDpd6w1JxaZv6sJkjc3lY4LuPuWzyrxmSFugPxCebTjVxcfxWu1-uQmQ=w1920-h1080',
    'AP1GczOe38yrGjw3MXk7L5_DGxNf_txthFs-oLgKQsLhMo5zj-plCPIffium94Ymydyj5Y-LkbI8JOG2t82zHWu7ePP2XEpPNUvpRyu6ZqYnJzCk-ho0-rg=w1920-h1080',
    'AP1GczNj79hleQgFvIDk7cdGI7g0oSFLFKPSZ3T8ZCXE02cmwbiOpR98HR3cjFbarHyncR3LcsAxT3NBzFTle8xEAa4KFPnEauyklpkRdloAhDu0haeqTsU=w1920-h1080',
    'AP1GczPdY_7W9qhbhKeuyIpk0ix5ItqTEnP5aV7-CJ07KHsnyGoXwtEUCT0sKws4_YApL9V8D3X_H5xiH7QgfkTa9AqoEliLPbCV3b1_DiF0FefT2MRXwzA=w1920-h1080',
    'AP1GczNO5ZwB6-0KQ03h9aIli_r6pweDj6pNGSyBSDh_UtLyfXqXcZpfIR7fPE5bc2DnNMKnpI4U8t4yCgY5dEzqsbFFvvqpPMPkSs3m9Fluv-gGcLIOlf0=w1920-h1080',
    'AP1GczMkl9FhsS2fhvXHKu5wHNEKPHzcxSd9NrW9VJ1u3WdVrslZo2fqcHq4a9gtrgMtMES6osxrYkTZ1t7jm5XYoNs2xW_cjYtFcq1CzbRygnoL0ZBMug0=w1920-h1080',
    'AP1GczNl6Hu87msRtwlhf3EFfOZ2JVtNN1kIU_yB8ANgCpJQQaFkdGS1L6715VBpalB3gm-uUIylJpvSUm2ypFjHwbDFMA6OiAa1FZzMiwSVxRnc2wPIIZ4=w1920-h1080',
    'AP1GczMhfEs68lG1CnViWkB7vfXld9dpJQAn34GIHTEs07_9muc3YHbB0jD09NdSMfVGJfwDzHhZKey8f8Wa2LqDyZ-yQlnzsIlSzSSbFB6sqoSF5hPSNow=w1920-h1080',
    'AP1GczN8wXl08VIiMLpWUC0NoEcvt8_hIU0vpkBK74oeA0RvGWq6r_Xu18sNa6J7A22C0Cooa8C-m3noF-RP17zdbk0P-orwiOS45nTdsCKMOY7pf6oj0Xk=w1920-h1080',
    'AP1GczNQ5C8dLxWBDWa_8wGn4oI3uv5uYdsn5vzhviG25ZfDzWcToylEg1UDWLFUggOiXluL-yIBFSGCY62o4NRXfzUS01ud5ufyJr4yniO4J77Aa2ANuD0=w1920-h1080',
    'AP1GczPBsz7UkWrS4gK4bFMR5Dsg9QhjuMW_sx3XuNE97A1_Ky1A4ET7qZM9hZJY1_Bvx8eWtWjXgroDvDoG6MMR9AW8gBSPyxogjzPVzRTAqqhUhdBHgfE=w1920-h1080',
    'AP1GczNtVuPvB_Rz2qzCz3dAnUzHUuWG1V09ChT7RMvhnE3sgehpzTgXrspCMcsK6-FrunRkyoDkhSrKiBoR84vF4QN4hSlrCAB5ynpjqUPGXTSX7-niUxU=w1920-h1080',
    'AP1GczPWvK5r3GuuqPNrSrNQyyRFcp8q2StNTkNwSX53KKMN4fzITvXZuWBkND1hQZ4dKl7DqIP_jYU4EvK6N479Ekn6ne1R2MdKoVXU9GQ7xbr3mpnxvUQ=w1920-h1080',
    'AP1GczNnLLFQCI9JxqikgpxfI2OIKktTTAiz4rao5tzPAhjoZibo2p5dfCQ8Yqud-7HaenFYktJ_CEUQurvRaRSh2mmLBarSDXqbjo2f6EHDZ9_wLktYzBc=w1920-h1080',
    'AP1GczPeku2ASNP1uo2vBgOIh5gmQ6IJpdCsr3bo3Te1hNmx1qmhopMMqnX-ea9XU2ksI4fn5VR0Za5ToYslY3edteICsndPWZ0c2IKmRNearg813551vyE=w1920-h1080',
    'AP1GczNmE_LrOjboj9mV6PpYXJxl5T_MXTtRY9rzxaFoVRjRkjms5TrBMpKu75OrsuAzGY-FzINJUqDu14s0iL6ynX07Z4A9UrdiyOW-XuM4dHB64LnJHfY=w1920-h1080',
    'AP1GczOJqLReWQQ2kJH9mmM6N4wfH9B9z8bz15kvQ5BcgJZFxA8rEjp31mL_jqKj8vYlmPqhhARgUCN-GR7kPSKO2nk9h7wsfdeIfdBDl1wi9gyDrN_-_n4=w1920-h1080',
    'AP1GczOsvJJ7i7WkZW6dLgdHyMwjXShNt_9KmHCkG5GsUnHhh6TtJqp-sX9jF8IXJ35NvJMI3L1K9xacuHitycqJfffdvrhJ4JXg91Z89SxbvctgLTdfB2A=w1920-h1080',
    'AP1GczOws_dGqBBiSFrQfHKFvFcS-8A0hRMVMAkOlYHmnmp4gA-CgdbuBPynj4gU9Wf6wTThAuszU3IF1frCOkDqZSE5t9TmnaABZhHExnXhDHSrrLi08vI=w1920-h1080',
    'AP1GczPMP-VHBjLQu8hqBR6odnDFDdLDIDqNXplSFugBOj8KrhH6yNpvHS3RvuM37Yt-lNjtsQzl18i5ljpBBXz_N6X6JDOeP5qkKdqmV4xbSYJ_AQ2zKhQ=w1920-h1080',
    'AP1GczMbgbdOzqLC8CwUfd5nL3OnfkwyymHLdzQWb6rU8rp-yLAgJJ7oUE1Ft9QZ1cxfPeqYqhWX6d-aJUFygW3J3CCWYQb1_E08dobYmNzhcDp_1f9aTPw=w1920-h1080',
    'AP1GczOjmlvwUPRpNjh9zZDb1SDQqp3He2Dxazjp53KWe2L2Ea3A4nwjjdkkLmuWTsBeoTChJvnxo9vHY4jT8-eOcfACUm4BNqs3tjk9M2AiyZbOexJ45Eg=w1920-h1080',
    'AP1GczMAlwiUH3qU-T0C17jJN-YBBEEu2lF3YPjsIaCq2yLmWGOTlWHTaylhs1zmquOyIo3L0oA-zRimzu3hB_W649yY9GbhsisjMacW8QTkhnw_X2bePlo=w1920-h1080'
];

export async function getServerSideProps(context) {
    const spacePhotos = SPACE_PHOTO_IDS.map((id, index) => {
        return `${ GOOGLE_PHOTOS_URL }/${ id }`;
    }).filter(url => url);

    const eventPhotos = EVENT_PHOTO_IDS.map((id) => {
        return `${ GOOGLE_PHOTOS_URL }/${ id }`;
    }).filter(url => url);

    return {
        props: {
            spacePhotos,
            eventPhotos
        }
    }
    return {}
}

export default function Photos({ spacePhotos, eventPhotos }) {
    const [spacePhotoIndex, setSpacePhotoIndex] = useState(0);
    const [eventPhotoIndex, setEventPhotoIndex] = useState(0);
    const [isSpacePhotoCarouselOpen, setIsSpacePhotoCarouselOpen] = useState(false);
    const [isEventPhotoCarouselOpen, setIsEventPhotoCarouselOpen] = useState(false);

    const openEventPhotoCarousel = (index) => {
        setEventPhotoIndex(index);
        setIsEventPhotoCarouselOpen(true);
    }

    const closeEventPhotoCarousel = () => {
        setIsEventPhotoCarouselOpen(false);
    }

    const openSpacePhotoCarousel = (index) => {
        setSpacePhotoIndex(index);
        setIsSpacePhotoCarouselOpen(true);
    }

    const closeSpacePhotoCarousel = () => {
        setIsSpacePhotoCarouselOpen(false);
    }

    return (
        <>
            <div className={ `event ${styles.photosContainer}` }>
                { isEventPhotoCarouselOpen && (
                    <div className={ styles.carouselContainer }>
                        <PhotoCarousel
                            photos={ eventPhotos }
                            photoIndex={ eventPhotoIndex }
                            onClose={ closeEventPhotoCarousel }>
                        </PhotoCarousel>
                    </div>)
                }
                { isEventPhotoCarouselOpen && <div className={ styles.overlay } onClick={ closeEventPhotoCarousel }></div> }
                <div className={ `photos ${ styles.isEventPhotoCarouselOpen}` }>
                    <h1 className='bold mt-28'>Photos</h1>
                    <h3 className='bold mb-4 mt-16'>Events</h3>
                    {
                        eventPhotos.map((url, index) => {
                            return (
                                <div className="photo" key={url} onClick={() => openEventPhotoCarousel(index)}>
                                    <Image 
                                        width={200}
                                        height={200}
                                        src={ url }
                                        objectFit="cover"
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className={ `space ${styles.photosContainer}` }>
                { isSpacePhotoCarouselOpen && (
                    <div className={ styles.carouselContainer }>
                        <PhotoCarousel
                            photos={ spacePhotos }
                            photoIndex={ spacePhotoIndex }
                            onClose={ closeSpacePhotoCarousel }>
                        </PhotoCarousel>
                    </div>)
                }
                { isSpacePhotoCarouselOpen && <div className={ styles.overlay } onClick={ closeSpacePhotoCarousel }></div> }
                <div className={ `photos ${ styles.isSpacePhotoCarouselOpen}` }>
                    <h3 className='bold mb-4 mt-28'>The Space</h3>
                    {
                        spacePhotos.map((url, index) => {
                            return (
                                <div className="photo" key={url} onClick={() => openSpacePhotoCarousel(index)}>
                                    <Image 
                                        width={200}
                                        height={200}
                                        src={ url }
                                        objectFit="cover"
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}
