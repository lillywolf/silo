import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
            <Image
              src="/exterior-compressed.jpg"
              width="90%"
              height="57%"
              layout="responsive"
              objectFit="contain"
              alt="Photo of the venue exterior"
            />
          </div>
          <div className='m-auto pt-6 sm:w-[520px] lg:w-[600px]'>
            <EmailSignup />
          </div>
        </div>
      </main>
    </div>
  )
}
