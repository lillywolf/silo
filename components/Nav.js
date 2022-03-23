import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <div className={ `${ styles.container } text-center mt-3`}>
            <Link href="/about">
                <a className={ `${ styles.link } m-3` }>ABOUT</a>
            </Link>
            <Link href="/events">
                <a className={ `${ styles.link } m-3` }>EVENTS</a>
            </Link>
            <Link href="/contact">
                <a className={ `${ styles.link } m-3 mr-0 lg:mr-3` }>CONTACT</a>
            </Link>
        </div>
    );
}