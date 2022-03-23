import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function MobileNav() {
    const [navOpen, setNavOpen] = useState();

    function onNavClick() {
        setNavOpen(!navOpen);
    }

    return (
        <div className='mr-5 md:mr-0' onClick={ onNavClick }>
            { !navOpen && (
                <svg className='w-7 sm:w-10 cursor-pointer' viewBox="0 0 100 80" width="40" height="40" fill="white">
                    <rect width="100" height="15" rx="5"></rect>
                    <rect y="30" width="100" height="15" rx="5"></rect>
                    <rect y="60" width="100" height="15" rx="5"></rect>
                </svg>
            )}
            { navOpen && <Menu onNavClick={onNavClick} />}
        </div>
    );
}

const Menu = ({ onNavClick }) => {
    return (
        <div className='absolute z-10 bg-black h-full w-full sm:w-1/2 px-10 -ml-5'>
            <div className='w-5 h-5 absolute right-5 cursor-pointer' onClick={ onNavClick }>
                <Image src='/x.svg' layout='fill' />
            </div>
            <Link href="/about">
                <a className='block mt-5'>ABOUT</a>
            </Link>
            <Link href="/events">
                <a className='block mt-5'>EVENTS</a>
            </Link>
            <Link href="/contact">
                <a className='block mt-5'>CONTACT</a>
            </Link>
        </div>
    );
}
