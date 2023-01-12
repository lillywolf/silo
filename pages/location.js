import Image from "next/image";

export default function Location() {
    return (
        <>
            <title>SILO Brooklyn Location</title>
            <div className='absolute w-full text-left'>
                <div className='flex mt-40 mx-6 flex-col md:flex-row md:justify-around md:mx-auto md:w-9/12'>
                    <div className='relative mt-4 mb-4 text-s text-center md:text-left'>
                        <p>SUBWAY</p>
                        <p>L Train (Jefferson Stop)</p>
                    </div>
                    <div className='relative md:w-8/12'>
                        <Image src='/map.png' alt="Map of Venue Location" width={600} height={400} layout="responsive" objectFit="contain"/>
                    </div>
                </div>
            </div>
        </>
    );
}
