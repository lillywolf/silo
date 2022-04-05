import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <>
            <div className='max-w-[1400px] mx-auto'>
                <div className='inline-block float-right mr-16 pt-2'>
                    <h1 className='relative font-sans font-bold tracking-widest text-2xl sm:text-center sm:text-3xl'>
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