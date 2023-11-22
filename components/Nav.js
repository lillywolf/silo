import Link from 'next/link'
import SocialIcons from './SocialIcons'
import { useEffect, useState } from 'react';

import styles from '../styles/Nav.module.css'

export default function Nav({ showBigLogo }) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);

  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   }
  // }, []);

  return (
      <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.nav } w-full mx-auto`}>
        <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.links } hidden absolute right-4 md:top-5`}>
        </div>
        { showBigLogo &&
          <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.lockup } flex justify-center top-2 px-3 py-3`}>
            <Link href="/">
              <div className='font-[BasementGrotesque-Black] text-[60px] cursor-pointer'>
                SILO
              </div>
            </Link>
          </div>
        }
        { showBigLogo && 
          <div className='absolute right-12 top-12'>
            <Links />
          </div>
        }
        { !showBigLogo &&
          <div className='flex justify-center mt-4'>
            <Link href="/">
              <div className='font-[BasementGrotesque-Black] text-[60px] cursor-pointer'>
                SILO
              </div>
            </Link>
          </div>
        }
        { !showBigLogo && 
          <div className='absolute right-12 top-12'>
            <Links />
          </div>
        }
        <div className={`${ scrollTop > 100 ? styles.scrolled : '' } ${ styles.logo } hidden flex justify-center`}>
          <Link href="/">
            <div className='font-[BasementGrotesque-Black] text-[50px] cursor-pointer'>
              SILO
            </div>
          </Link>
        </div>
        {/* { showBigLogo && 
          <div className='absolute right-12 top-20'>
            <SocialIcons />
          </div>
        }
        { !showBigLogo && 
          <div className='absolute right-12 top-12'>
            <SocialIcons />
          </div>
        } */}
      </div>
  );
}

const Links = () => {
  return (
    <div className='text-sm lg:text-base xl:text-xl'>
      <div className='inline-block ml-12'>
        <Link href="/about">ABOUT</Link>
      </div>
      <div className='inline-block ml-6'>
        <Link href="/faq">FAQ</Link>
      </div>
      <div className='inline-block ml-6'>
        <Link href="/comedy-and-community">COMMUNITY</Link>
      </div>
      <div className='inline-block ml-6'>
        <Link href="/contact">CONTACT</Link>
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
