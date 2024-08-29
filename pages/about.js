import Image from 'next/image'
import Link from 'next/link'

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
                </div>
                <div className='relative pt-16 w-full text-md md:text-lg pb-20'>
                    <p>SILO, formerly known as Secret Loft, started as an underground party in a converted auto garage in Williamsburg in 2012. Over the years, as Secret Loft grew from an earnest experiment into a full-blown series with an energized following, so too did the vision, and SILO began to take shape.</p>
                    <br></br>
                    <p>SILO opened in early 2023.</p>
                    <p>We are open on Wednesdays 8pm-1am, Thursdays 9pm-3am, Fridays and Saturdays from 10pm-4am, and sometimes Sundays from 4-10pm.</p>
                    <div className='relative pt-8 pb-2 w-full text-md md:text-lg cursor-pointer hover:underline'>
                        <Link href="/photos">Photos</Link>
                    </div>
                    <div className='relative pt-2 pb-2 w-full text-md md:text-lg cursor-pointer hover:underline'>
                        <Link href="/tech">Tech/Backline</Link>
                    </div>
                    <div className='relative pt-2 pb-2 w-full text-md md:text-lg cursor-pointer hover:underline'>
                        <Link target="_blank" rel="noreferrer" href="https://us14.campaign-archive.com/home/?u=d9dcc8b8380559a2218a1e426&id=9259d2343b">Behind the Booth: SILO&apos;s Dance Music News & Culture Newsletter</Link>
                    </div>

                    {/* <div className='relative max-w-[400px]'>
                        <Image src='/exterior_1.jpeg' width={300} height={200} layout="responsive" objectFit="contain"/>
                    </div> */}
                </div>
            </div>
        </>
    );
}
