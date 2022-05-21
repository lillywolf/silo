import Image from "next/image";

export default function Lockup() {
    return (
        <div className='h-full w-full'>
            <Image src='/lockup_black.svg' layout='fill' objectFit='contain'/>
        </div>
    );
}