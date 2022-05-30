import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import EmailSignup from '../components/EmailSignup'
import Consent from '../components/Consent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SILO Brooklyn</title>
        <meta name="description" content="SILO Brooklyn" />
        <link rel="icon" href="/favicon.ico" />
        {/* NOTE: Consent must be the first script tag on the page */}
        <Consent />
      </Head>

      <main className={ `${ styles.main } m-auto relative` }>
        <div className='relative'>
          <div className='px-4 sm:w-[700px] mx-auto mt-16 md:mt-40'>
            <Image src="/splash-grayscale-xs.jpeg" width="50%" height="37%" layout="responsive" objectFit="contain">
            </Image>
            <div className='m-auto sm:w-[520px] lg:border lg:border-[#2b2b2b] lg:bottom-20 lg:w-[380px] lg:fixed lg:right-36'>
              <EmailSignup />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
''