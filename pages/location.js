import Image from "next/image";

export default function Location() {
    return (
        <>
            <div className='absolute w-full text-left'>
                <div className='flex mt-40 w-9/12 text-s mx-auto justify-around'>
                    <div className='relative mt-4'>
                        <p>SUBWAY</p>
                        <p>L Train (Jefferson Stop)</p>
                    </div>
                    <div className='relative w-[600px] h-[400px]'>
                        <Image src='/map.png' width={600} height={400} layout="responsive" objectFit="contain"/>
                    </div>
                </div>
            </div>
        </>
    );
}
