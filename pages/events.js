import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Events({ events }) { 
    return (
        <div className='absolute mt-28 text-left text-white w-full lg:mt-40 lg:text-center'>
            <div className='mx-auto px-2 text-sm leading-6 sm:w-10/12 md:text-lg md:w-7/12' id="dice-event-list-widget"></div>
                <div className="flex flex-wrap sm:w-10/12 lg:w-7/12 mx-auto">
                    { events.data.map((event) => <EventComponent key={event.id} event={event} />) }
                </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const response = await fetch("https://events-api.dice.fm/v1/events?filter%5Bvenues%5D%5B%5D=Silo+Brooklyn", {
        headers: {
            "x-api-key": "nkvo0ySBVc1OdE6tLTHO35ZF35vioOQV2chuvMob"
        }
    });
    const events = await response.json();

    return {
        props: {
            events
        }
    }
}

export const EventComponent = ({ event }) => {
    const {
        name,
        date,
        images,
        lineup,
        promoters,
        raw_description,
        url
    } = event;

    const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
    };      

    const d = new Date(date);

    return (
        <div className="flex w-full py-2 px-8 sm:block sm:grid-cols-2 sm:px-2 sm:py-4 sm:w-1/2 xl:grid-cols-3 xl:w-1/3">
            <Link href={url}>
                <div className="w-1/3 cursor-pointer relative sm:w-full aspect-square">
                    <Image src={images[0]} layout="fill"/>
                </div>
            </Link>
            <div className="w-2/3 px-4 sm:px-0 sm:w-full">
                <div className="uppercase font-[Hauora] text-base lg:text-md pt-4">
                    {d.toLocaleString("en-US", options)}
                </div>
                <div className="cursor-pointer hover:underline uppercase text-base sm:text-base lg:text-xl py-2">
                    <Link href={url}>{name}</Link>
                </div>
            </div>
        </div>
    );
}

