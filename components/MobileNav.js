import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function MobileNav() {
    const [navOpen, setNavOpen] = useState();

    function onNavClick() {
        setNavOpen(!navOpen);
    }

    return (
      <div className='relative'>
        <div className='hidden'>
          { !navOpen && (
            <div className='absolute ml-3 mt-4 md:mr-0' onClick={ onNavClick }>
              <svg className='w-10 cursor-pointer' viewBox="0 0 100 80" width="20" height="20" fill="white">
                  <rect width="100" height="10" rx="5"></rect>
                  <rect y="30" width="100" height="10" rx="5"></rect>
                  <rect y="60" width="100" height="10" rx="5"></rect>
              </svg>
            </div>
          )}
          { navOpen && <Menu onNavClick={onNavClick} />}
        </div>
        <div className='absolute left-0 inline-block top-2 mr-3'>
          <h1 className='font-[Abel] font-bold tracking-widest text-3xl'>
            SILO
          </h1>
          <div className='text-[10px] hidden ml-1 font-sans leading-3 sm:block'>BROOKLYN</div>
        </div>  
      </div>
    );
}

const Menu = ({ onNavClick }) => {
    return (
        <div className='relative z-10 bg-[#0d0d0d] h-full w-full sm:w-1/2'>
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
