import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import SocialIcons from './SocialIcons'

export default function Nav() {
    return (
        <>
            <div className='absolute left-4 md:top-9'>
                <a className='ml-6' href="/about">ABOUT</a>
                <a className='ml-6' href="/contact">BOOKING</a>
            </div>
            <div className='bg-[#0d0d0d] h-24 mx-auto'>
                <div className='block mx-auto pt-2'>
                    <h1 className='font-[Abel] font-bold tracking-widest text-2xl mt-2 sm:text-center sm:text-5xl'>
                        <Link href='/'>SILO</Link>
                    </h1>
                    <div className='text-[10px] text-center leading-3 font-sans'>BROOKLYN</div>
                </div>
            </div>
            <div className='absolute right-4 top-2 md:top-9'>
                <SocialIcons />
                {/* <Link href="/about">
                    <a className={ `${ styles.link } m-2 px-2 py-1 border-solid border border-white` }>ABOUT</a>
                </Link> */}
                {/* <Link href="/events">
                    <a className={ `${ styles.link } m-2 px-2 py-1 border-solid border border-white` }>EVENTS</a>
                </Link> */}
                {/* <Link href="/contact">
                    <a className={ `${ styles.link } m-2 mr-0 px-2 py-1` }>CONTACT</a>
                </Link> */}
            </div>
        </>
    );
}