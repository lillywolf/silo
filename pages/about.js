import Image from "next/image";

export default function About() {
    return (
        <>
            <div className='absolute w-full text-left'>
                <div className='relative mt-40 w-9/12 text-s mx-auto lg:w-8/12'>
                    <p>SILO (fka Secret Loft) started as an underground party in a converted auto garage in Williamsburg.</p>
                    <br></br>
                    <p>After a two-year search for space, followed by a global pandemic and two more years of building, SILO will have its first legal home in Brooklyn.</p>
                    <br></br>
                    <p>The club is currently under construction, with an opening planned for fall '22.</p>
                    {/* <div className='relative max-w-[400px]'>
                        <Image src='/exterior_1.jpeg' width={300} height={200} layout="responsive" objectFit="contain"/>
                    </div> */}
                </div>
            </div>
        </>
    );
}
