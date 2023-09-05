import Image from 'next/image';
import { parseStringPromise } from 'xml2js';
import { useState } from 'react';

import styles from '../styles/Videos.module.css'
import VideoPlayer from '../components/VideoPlayer';

const S3_URL = 'https://silobrooklyn.s3.us-east-2.amazonaws.com';

// If we ever want to access the S3 bucket with auth, we'll need to create a signed request. Use crypto lib and 
// Refer to https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html
// const CanonicalizedResource = `/silobrooklyn/photos/`;
// const StringToSign = `HTTP-Verb\nContent-MD5\nContent-Type\nDate\n${ CanonicalizedAmzHeaders }${ CanonicalizedResource };`
// crypto.createHmac('sha1', StringToSign)
//     .update(process.env.AWS_SECRET)
// var files = fs.readdirSync(dir);

export async function getServerSideProps() {
    const bucketMetadata = await fetch(S3_URL);
    const text = await bucketMetadata.text();
    const xml = await parseStringPromise(text);

    const videos = xml.ListBucketResult.Contents.map((obj) => {
        if ((/(^videos.*)/g).exec(obj.Key[0])) {
            return `${ S3_URL }/${ obj.Key[0] }`;
        }
    }).filter(url => url);

    return {
        props: {
            videos
        }
    }
}

export default function Videos({ videos }) {
    const [videoIndex, setVideoIndex] = useState(0);
    const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);

    const openVideoPlayer = (index) => {
        setVideoIndex(index);
        setIsVideoPlayerOpen(true);
    }

    const closeVideoPlayer = () => {
        setIsVideoPlayerOpen(false);
    }

    return (
        <div className={ styles.videosContainer }>
            { isVideoPlayerOpen && (
                <div className={ styles.videoPlayerContainer }>
                    <VideoPlayer
                        videos={ videos }
                        videoIndex={ videoIndex }
                        onClose={ closeVideoPlayer }>
                    </VideoPlayer>
                </div>)
            }
            { isVideoPlayerOpen && <div className={ styles.overlay } onClick={ closeVideoPlayer }></div> }
            <div className={ styles.videos }>
                {
                    videos.map((url, index) => {
                        return (
                            <div className="video" key={url}>
                                <video className={ styles.video } loop controls width={ 200 } style={{ width: '200px' }}>
                                    <source src={ url } type = "video/mp4" />
                                </video>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}
