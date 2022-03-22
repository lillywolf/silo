import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <div className={styles.container}>
            <Link href="/about">
                <a className={styles.link}>ABOUT</a>
            </Link>
            <Link href="/events">
                <a className={styles.link}>EVENTS</a>
            </Link>
            <Link href="/contact">
                <a className={styles.link}>CONTACT</a>
            </Link>
        </div>
    );
}