import Image from 'next/image';
import { parseStringPromise } from 'xml2js';

const S3_URL = 'https://silobrooklyn.s3.us-east-2.amazonaws.com';

// If we ever want to access the S3 bucket with auth, we'll need to create a signed request. Use crypto lib and 
// Refer to https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html
// const CanonicalizedResource = `/silobrooklyn/photos/`;
// const StringToSign = `HTTP-Verb\nContent-MD5\nContent-Type\nDate\n${ CanonicalizedAmzHeaders }${ CanonicalizedResource };`
// crypto.createHmac('sha1', StringToSign)
//     .update(process.env.AWS_SECRET)
// var files = fs.readdirSync(dir);

export async function getServerSideProps(context) {
    const bucketMetadata = await fetch(S3_URL);
    const text = await bucketMetadata.text();
    const xml = await parseStringPromise(text);

    const photos = xml.ListBucketResult.Contents.map((obj) => {
        if ((/(^photos.*)/g).exec(obj.Key[0])) {
            return obj.Key[0];
        }
    }).filter(url => url);

    const videos = xml.ListBucketResult.Contents.map((obj) => {
        if ((/(^videos.*)/g).exec(obj.Key[0])) {
            return obj.Key[0];
        }
    }).filter(url => url);

    return {
        props: {
            photos,
            videos
        }
    }
}

export default function Photos({ photos, videos }) {
    return (
      <>
        <div className="photos">
            {
                photos.map(url => {
                    return (
                        <div className="photo" key={url}>
                            <Image width={200} height={200} src={ `${ S3_URL }/${ url }` } objectFit="cover" />
                        </div>
                    );
                })
            }
            {
                videos.map(url => {
                    return (
                        <div className="video" key={url}>
                            {/* <video loop controls width={ 200 } style={{ width: '200px' }}>
                                <source src={ `${ S3_URL }/${ url }` } type = "video/mp4" />
                            </video> */}
                        </div>
                    );
                })
            }
        </div>
      </>
    )
  }