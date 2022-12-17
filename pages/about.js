import Image from 'next/image'

export default function About() {
    return (
        <>
            <div className='absolute w-full text-left'>
                <div className='sm:w-7/12 mx-auto mt-16 md:mt-40'>
                    <Image
                        src="/exterior-compressed.jpg"
                        width="100%"
                        height="66%"
                        layout="responsive"
                        objectFit="contain"
                        alt="Photo of the venue exterior"
                        />
                </div>
                <div className='relative mt-20 w-7/12 text-s mx-auto pb-20'>
                    <p>SILO (fka Secret Loft) started as an underground party in a converted auto garage in Williamsburg.</p>
                    <br></br>
                    <p>After a two-year search for space, followed by a global pandemic and two more years of building, SILO will have its first legal home in Brooklyn.</p>
                    <br></br>
                    <p>The club is currently under construction, with an opening planned for winter &apos;23.</p>
                    {/* <div className='relative max-w-[400px]'>
                        <Image src='/exterior_1.jpeg' width={300} height={200} layout="responsive" objectFit="contain"/>
                    </div> */}
                </div>
            </div>
        </>
    );
}
