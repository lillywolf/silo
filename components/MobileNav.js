import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import SocialIcons from './SocialIcons';
import Lockup from './Lockup';
import MarkWhite from './MarkWhite';

export default function MobileNav() {
    const [navOpen, setNavOpen] = useState();
    const menuHiddenClass = navOpen 
      ? 'translate-x-0'
      : 'translate-x-[-100%]';
    const menuClass = `${ menuHiddenClass } z-10 fixed bottom-0 top-0 w-full transition-all ease-in duration-150`;

    function onNavClick() {
        setNavOpen(!navOpen);
    }

    return (
      <div className='absolute w-full'>
        <div className='absolute z-10'>
          { !navOpen && (
            <div className='ml-8 mt-8 md:mr-0 text-l cursor-pointer' onClick={ onNavClick }>
              {/* + MENU */}
              <svg className='w-10 cursor-pointer' viewBox="0 0 100 80" width="24" height="24" fill="white">
                  <rect width="100" height="10" rx="5"></rect>
                  <rect y="30" width="100" height="10" rx="5"></rect>
                  <rect y="60" width="100" height="10" rx="5"></rect>
              </svg>
            </div>
          )}
          <div className={ menuClass }>
            <Menu onNavClick={ onNavClick } />
          </div>
        </div>
        <div className='absolute w-full h-6 mt-4'>
          <div className='font-[BasementGrotesque-Black] text-[46px] text-center relative mx-auto'>
            <Link className='' href='/'>
              <a>SILO</a>
            </Link>
          </div>
        </div>  
      </div>
    );
}

const Logo = () => {
  return (
    <div className='relative w-full h-full'>
        <div className='font-[BasementGrotesque-Black] relative h-full w-full'>
          SILO
        </div>
    </div>
  );
}

const MarkBlack = () => {
  return (
    <Image src='/mark_black.svg' layout='fill' objectFit='contain'/>
  );
}

const Brooklyn = () => {
  return (
    <div className='relative px-2 py-1 bg-white text-[#0d0d0d] font=["Inconsolata-Bold"] text-xs tracking-[0.4em]'>
      BROOKLYN
    </div>
  );
}

// const MarkWhite = () => {
//   return (
//     <div className='bg-white h-20 w-full'>
//       <div className='relative h-16 w-28 left-0 top-2'>
//         <Image src='/mark_white.svg' layout='fill' objectFit='contain'/>
//       </div>
//     </div>
//   );
// }

const Menu = ({ onNavClick }) => {
    return (
        <div className='relative bg-black z-10 h-full w-full sm:w-1/2'>
            <div className='bottom-0 w-full h-full p-5 text-xl'>
              <div className='w-full overflow-hidden cursor-pointer' onClick={ onNavClick }>
                <div className='w-6 h-6 relative inline-block float-left mt-[10px]'>
                    <Image src='/x.svg' className='mt-1' alt="Menu" layout='fill' />
                </div>
              </div>
              <Link href="/about">
                  <a className='block w-3/4 mt-4' onClick={onNavClick}>ABOUT</a>
              </Link>
              <Link href="/events">
                  <a className='block w-3/4 mt-1' onClick={onNavClick}>EVENTS</a>
              </Link>
              <Link href="/comedy-and-community">
                  <a className='block w-3/4 mt-1' onClick={onNavClick}>COMMUNITY</a>
              </Link>
              <Link href="/faq">
                  <a className='block w-3/4 mt-1' onClick={onNavClick}>FAQ</a>
              </Link>
              <Link href="/menu">
                  <a className='block w-3/4 mt-1' onClick={onNavClick}>MENU</a>
              </Link>
              <Link href="/contact">
                  <a className='block w-3/4 mt-1' onClick={onNavClick}>CONTACT</a>
              </Link>
              <div className='pt-8' onClick={onNavClick}>
                <SocialIcons />
              </div>
              <div className='text-xl mt-6'>
                <Link href="/">
                    <a className='inline-block' onClick={onNavClick}>home</a>
                </Link>
              </div>
            </div>
        </div>
    );
}
