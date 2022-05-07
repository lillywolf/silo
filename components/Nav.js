import Image from 'next/image'
import Link from 'next/link'
import SocialIcons from './SocialIcons'
import MarkWhite from './MarkWhite';
import { useEffect, useState } from 'react';

import styles from '../styles/Nav.module.css'

export default function Nav() {
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

  useEffect(() => {
    console.log(scrollTop);
  }, [scrollTop])

  return (
      <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.nav } fixed w-full h-20 mx-auto`}>
        <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.links } hidden absolute right-4 md:top-5`}>
          {/* <div className='inline-block mr-6 text-xs'>
            <Link href="/about">ABOUT</Link>
          </div> */}
          <div className='inline-block mr-24 text-xs'>
            <Link href="/contact">BOOKING</Link>
          </div>
        </div>
        <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.lockup } bg-[#0d0d0d] absolute inset-1/2 top-4 px-3 py-3 md:w-24 md:h-12 md:-ml-[50px] lg:w-32 lg:-ml-16 lg:h-16`}>
          <div className='relative w-full h-full'>
            <Image className='' src='/logotype_white.svg' layout='fill'/>
          </div>
        </div>
        <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.logo } hidden relative block w-24 h-16 px-5`}>
          <div className='relative w-full h-full'>
            <Image className='' src='/logotype_white.svg' layout='fill'/>
          </div>
        </div>
        <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.socialLinks } hidden absolute right-0 top-2 md:top-5`}>
          <SocialIcons />
        </div>
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