import Image from 'next/image'

export default function About() {
    return (
        <>
            <title>About SILO Brooklyn</title>
            <div className='w-full text-left mx-auto pt-24 md:pt-40 w-10/12 sm:w-9/12 lg:w-8/12'>
                <div className='flex flex-wrap gap-3'>
                    <div className='item basis-1/4 grow'>
                        <Image
                            src="/exterior-compressed.jpg"
                            width="100%"
                            height="66%"
                            layout="responsive"
                            objectFit="cover"
                            alt="Photo of the venue exterior"
                            />
                    </div>
                    {/* <div className='item basis-1/4 grow'>
                        <Image
                            src="/build/W54C8754.jpg"
                            width="100%"
                            height="66%"
                            layout="responsive"
                            objectFit="cover"
                            alt="Photo of artists working on the mezzanine wheatpaste"
                            />
                    </div>
                    <div className='item basis-1/4 grow'>
                        <Image
                            src="/build/W54C9146.jpg"
                            width="100%"
                            height="66%"
                            layout="responsive"
                            objectFit="cover"
                            alt="Photo of the bar"
                            />
                    </div>
                    <div className='item basis-1/4 grow'>
                        <Image
                            src="/build/20220717_203100.jpg"
                            width="100%"
                            height="66%"
                            layout="responsive"
                            objectFit="cover"
                            alt="Photo of the beam light covers on the stage"
                            />
                    </div>
                    <div className='item basis-1/4 grow'>
                        <Image
                            src="/build/W54C8497.jpg"
                            width="100%"
                            height="66%"
                            layout="responsive"
                            objectFit="cover"
                            alt="Photo of the venue exterior"
                            />
                    </div>
                    <div className='item basis-1/4 grow'>
                        <Image
                            src="/build/W54C8449.jpg"
                            width="100%"
                            height="66%"
                            layout="responsive"
                            objectFit="cover"
                            alt="Photo of the venue exterior"
                            />
                    </div> */}
                </div>
                <div className='relative pt-16 w-full text-md md:text-lg pb-20'>
                    <p>SILO, formerly known as Secret Loft, started as an underground party in a converted auto garage in Williamsburg in 2012. Over the years, as Secret Loft grew from an earnest experiment into a full-blown series with an energized following, so too did the vision, and SILO began to take shape.</p>
                    <br></br>
                    {/* <p>SILO was built by the people that run it now. The acoustic panels, the mezzanine doors, the DJ booth, even the HDMI cables in the walls were installed or hand constructed by the owners and friends of Secret Loft.</p> */}
                    {/* <br></br> */}
                    <p>SILO is opening in early 2023.</p>
                    {/* <div className='relative max-w-[400px]'>
                        <Image src='/exterior_1.jpeg' width={300} height={200} layout="responsive" objectFit="contain"/>
                    </div> */}
                </div>
            </div>
        </>
    );
}
