import Image from 'next/image'

export default function About() {
    return (
        <>
            <title>About SILO Brooklyn</title>
            <div className='w-full text-left mx-auto w-10/12 sm:w-9/12 lg:w-8/12'>
                <div className='mx-auto pt-24 md:pt-40'>
                    <Image
                        src="/exterior-compressed.jpg"
                        width="100%"
                        height="66%"
                        layout="responsive"
                        objectFit="contain"
                        alt="Photo of the venue exterior"
                        />
                </div>
                <div className='relative pt-16 w-full text-md md:text-lg pb-20'>
                    <p>SILO, formerly known as Secret Loft, started as an underground party in a converted auto garage in Williamsburg in 2012. Over the years, as Secret Loft grew from an earnest experiment into a full-blown series with an energized following, so too did the vision; inspired by the success of their parties, the founders began to lay the groundwork for a new venture and SILO began to take shape.</p>
                    <br></br>
                    <p>Much of SILO was built, both metaphorically and not, by the team that runs it now. The acoustic panels, the mezzanine doors, the DJ booth, and numerous other fixtures were hand constructed by the owners and friends of Secret Loft. The decor and interior design, the cocktail menu, all developed internally. Even the HDMI cables that live inside the walls were run by the team, working in down coats and using a borrowed lift and safety harnesses in the winter of 2021.</p>
                    <br></br>
                    <p>SILO is opening in early 2023, and we can&apos;t wait to see you there.</p>
                    {/* <div className='relative max-w-[400px]'>
                        <Image src='/exterior_1.jpeg' width={300} height={200} layout="responsive" objectFit="contain"/>
                    </div> */}
                </div>
            </div>
        </>
    );
}
