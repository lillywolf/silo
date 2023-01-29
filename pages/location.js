import Image from "next/image";

export default function Location() {
    return (
        <>
            <title>SILO Brooklyn Location</title>
            <div className='absolute w-full text-left'>
                <div className='mt-40 mx-auto w-8/12'>
                    <div className='block relative mt-4 mb-4 text-xl text-center md:text-left'>
                        <p>we are located at 90 Scott Ave, Brooklyn NY</p>
                        <p>SUBWAY</p>
                        <p>L train (Jefferson stop)</p>
                    </div>
                    <div className='block relative'>
                        <Image src='/map.png' alt="Map of Venue Location" width={600} height={400} layout="responsive" objectFit="contain"/>
                    </div>
                </div>
            </div>
        </>
    );
}
