import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function MobileNav() {
    const [navOpen, setNavOpen] = useState();

    function onNavClick() {
        setNavOpen(!navOpen);
    }

    return (
      <div className='absolute w-full'>
        <div className='absolute right-2 top-2'>
          <h1 className='relative font-["Continuum"] tracking-widest mr-2 text-2xl sm:text-center sm:text-4xl sm:mr-0 sm:ml-1'>
            SILO
          </h1>
          <div className='text-xs hidden font-sans mr-2 sm:block sm:text-center sm:mr-0'>BROOKLYN</div>
        </div>        
        { !navOpen && (
          <div className='ml-3 mt-4 md:mr-0' onClick={ onNavClick }>
            <svg className='w-10 cursor-pointer' viewBox="0 0 100 80" width="20" height="20" fill="white">
                <rect width="100" height="10" rx="5"></rect>
                <rect y="30" width="100" height="10" rx="5"></rect>
                <rect y="60" width="100" height="10" rx="5"></rect>
            </svg>
          </div>
        )}
        { navOpen && <Menu onNavClick={onNavClick} />}
      </div>
    );
}

const Menu = ({ onNavClick }) => {
    return (
        <div className='relative z-10 bg-black h-full w-full sm:w-1/2'>
            <div className='w-5 h-5 absolute right-5 top-5 cursor-pointer' onClick={ onNavClick }>
                <Image src='/x.svg' layout='fill' />
            </div>
            <div className='p-5'>
              <Link href="/about">
                  <a className='block mt-0'>ABOUT</a>
              </Link>
              <Link href="/events">
                  <a className='block mt-3'>EVENTS</a>
              </Link>
              <Link href="/contact">
                  <a className='block mt-3'>CONTACT</a>
              </Link>
            </div>
        </div>
    );
}
