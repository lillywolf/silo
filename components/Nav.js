import Image from 'next/image'
import Link from 'next/link'
import SocialIcons from './SocialIcons'
import MarkWhite from './MarkWhite';
import { useEffect, useState } from 'react';

import styles from '../styles/Nav.module.css'

export default function Nav({ showBigLogo }) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
      <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.nav } font-[Abel] fixed w-full h-20 mx-auto`}>
        <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.links } hidden absolute right-4 md:top-5`}>
          {/* <div className='inline-block mr-6 text-xs'>
            <Link href="/about">ABOUT</Link>
          </div> */}
          {/* <div className='inline-block mr-24 text-s'>
            <Link href="/contact">BOOKING</Link>
          </div> */}
        </div>
        { showBigLogo &&
          <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.lockup } absolute inset-1/2 top-2 px-3 py-3 w-36 -ml-12 h-40`}>
            <Link href="/">
              <div className='relative w-full h-full cursor-pointer'>
                <Image className='opacity-60' src='/lockup_white.svg' layout='fill'/>
              </div>
            </Link>
          </div>
        }
        { !showBigLogo &&
          <div className='w-full h-8 mt-4'>
            <Link href="/">
              <div className='relative mx-auto w-20 h-8 cursor-pointer'>
                <Image className='' src='/mark_white.svg' layout='fill'/>
              </div>
            </Link>
          </div>
        }
        <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.logo } hidden relative block w-24 h-16 px-5`}>
          <Link href="/">
            <div className='relative w-full h-full cursor-pointer'>
              <Image className='' src='/mark_white.svg' layout='fill'/>
            </div>
          </Link>
        </div>
        <div className='absolute right-0 top-4'>
          <SocialIcons />
        </div>
        {/* <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.socialLinks } hidden absolute right-0 top-2 md:top-5`}>
          <SocialIcons />
        </div> */}
      </div>
  );
}

const TextLogo = () => {
    return (
      <>
        <h1 className='font-[Abel] font-bold tracking-widest text-2xl mt-2 sm:text-center sm:text-5xl'>
            <Link href='/'>SILO</Link>
        </h1>
        <div className='text-[10px] text-center leading-3 font-sans'>BROOKLYN</div>
      </>
    );
}