import Image from 'next/image'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <>
            <div className='hidden absolute left-3 top-3 w-10 h-10'>
                <a href="http://instagram.com/silobrooklyn"><Image src='/instagram-white.svg' layout='fill'/></a>
            </div>
            <div className='max-w-[1400px] mx-auto'>
                <div className='block mx-auto pt-2'>
                    <h1 className='font-[Abel] font-bold tracking-widest text-2xl sm:text-center sm:text-5xl'>
                        SILO
                    </h1>
                    <div className='text-[10px] text-center leading-3 font-sans'>BROOKLYN</div>
                </div>
            </div>
            <div className={ `${ styles.container } text-center mt-4 mx-2 lg:mt-2`}>
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