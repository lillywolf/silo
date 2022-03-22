import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <Link href="/contact">
                <a className={styles.link}>CONTACT</a>
            </Link>
            <Link href="/terms">
                <a className={styles.link}>TERMS & CONDITIONS</a>
            </Link>
            <Link href="/privacy">
                <a className={styles.link}>PRIVACY POLICY</a>
            </Link>
            <Link href="/a11y">
                <a className={styles.link}>ACCESSIBILITY</a>
            </Link>
        </div>
    );
}