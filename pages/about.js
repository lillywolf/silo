import Image from "next/image";

export default function About() {
    return (
        <>
            <div className='absolute w-full text-left'>
                <div className='relative mt-28 w-9/12 text-s mx-auto lg:w-6/12'>
                    <p>SILO (fka Secret Loft) started as an underground party in a converted auto garage in Williamsburg. Over the next 10 years, it moved to a loft apartment in a former textile factory known colloquially as “Art Dorm” (for all-night parties, illegal construction and bad neighbors), to a cleared-out industrial boiler room, to a nondescript second-story room above an abandoned bar in Greenwich Village.</p>
                    <br></br>
                    <p>After a two-year search for space, followed by a global pandemic and two more years of building, SILO will have its first legal home in Brooklyn.</p>
                    <br></br>
                    <p>x x x x x</p>
                    <br></br>
                    <div className='relative max-w-[400px]'>
                        <Image src='/exterior_1.jpeg' width={300} height={200} layout="responsive" objectFit="contain"/>
                    </div>
                    <br></br>
                    <p>SILO is constructed in a decommissioned hangar in East Williamsburg, Brooklyn.</p>
                    <br></br>
                    <p>At capacity 500, we have some of the most innovative production you will find in a smaller room.</p>
                    <br></br>
                    <p>Every single feature of the space, from the sound to the stage lighting down to the material used to pad the dance floor, has been mapped out with input from dozens of industry veterans. No outsourcing, no handing off to a commercial design firm – SILO is designed and built by people who work and party in nightclubs.</p>
                    <br></br>
                    <div className='relative max-w-[400px]'>
                        <Image src='/stage_1.jpeg' width={300} height={200} layout="responsive" objectFit="contain"/>
                    </div>
                    <p className='pb-32'></p>
                </div>
            </div>
        </>
    );
}
