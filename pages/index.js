import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import EmailSignup from '../components/EmailSignup'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SILO Brooklyn</title>
        <meta name="description" content="SILO Brooklyn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ `${ styles.main } m-auto relative` }>
        <div className='bg-[#0d0d0d] relative'>
          <div className={styles.splash}>
            <Image className={styles.splashImage} src="/splash-grayscale-xs.jpeg" width="100%" height="67%" layout="responsive" objectFit="cover">
            </Image>
            <div className='bg-[#0d0d0d] m-auto sm:w-[520px] lg:bottom-52 lg:w-[380px] lg:fixed lg:right-16 xl:bottom-24'>
              <EmailSignup />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
