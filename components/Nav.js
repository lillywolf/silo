import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <>
        <h1 className='relative font-["Continuum"] text-right tracking-widest mr-2 text-2xl sm:text-center sm:text-4xl sm:mr-0 sm:ml-1'>
            SILO
        </h1>
        <div className='text-xs hidden font-sans mr-2 text-right sm:block sm:text-center sm:mr-0'>BROOKLYN</div>
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