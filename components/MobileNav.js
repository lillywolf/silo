import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import SocialIcons from './SocialIcons';

export default function MobileNav() {
    const [navOpen, setNavOpen] = useState();
    const menuHiddenClass = navOpen 
      ? 'translate-x-0'
      : 'translate-x-[-100%]';
    const menuClass = `${ menuHiddenClass } fixed bottom-0 top-0 w-full transition-all ease-in duration-150`;

    function onNavClick() {
        setNavOpen(!navOpen);
    }

    return (
      <div className='absolute w-full'>
        <div className='w-full'>
          { !navOpen && (
            <div className='inline-block ml-4 mt-4 md:mr-0 text-l cursor-pointer' onClick={ onNavClick }>
              + MENU
              {/* <svg className='w-10 cursor-pointer' viewBox="0 0 100 80" width="20" height="20" fill="white">
                  <rect width="100" height="10" rx="5"></rect>
                  <rect y="30" width="100" height="10" rx="5"></rect>
                  <rect y="60" width="100" height="10" rx="5"></rect>
              </svg> */}
            </div>
          )}
          <div className={ menuClass }>
            <Menu onNavClick={onNavClick} />
          </div>
        </div>
        <div className='hidden relative inline-block mr-3'>
          <h1 className='font-[Abel] ml-4 tracking-widest text-l'>
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
            <div className='bottom-0 w-full h-full p-5'>
              <div className='w-full overflow-hidden cursor-pointer' onClick={ onNavClick }>
                <div className='w-2 h-3 relative inline-block float-left mt-[10px]'>
                    <Image src='/x.svg' className='mt-1' layout='fill' />
                </div>
                <div className='inline-block float-left ml-2 mt-2 text-xs'>CLOSE</div>
              </div>
              <Link href="/about">
                  <a className='block w-3/4 mt-4' onClick={onNavClick}>ABOUT</a>
              </Link>
              <Link href="/events">
                  <a className='block w-3/4 mt-1' onClick={onNavClick}>EVENTS</a>
              </Link>
              <Link href="/contact">
                  <a className='block w-3/4 mt-1' onClick={onNavClick}>CONTACT</a>
              </Link>
              <div className='pt-8' onClick={onNavClick}>
                <SocialIcons />
              </div>
              <div className='text-xs mt-6'>
                <Link href="/">
                    <a className='inline-block' onClick={onNavClick}>HOME</a>
                </Link>
              </div>
            </div>
        </div>
    );
}
