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
        <div className='bg-[#eeeeeeff] relative'>
          <div className='sm:w-[700px] mx-auto mt-16 md:mt-48'>
            <Image className={ styles.splashImage } src="/splash-min-xs.jpeg" width="50%" height="37%" layout="responsive" objectFit="contain">
            </Image>
            <div className='m-auto sm:w-[520px] lg:border lg:border-[#2b2b2b] lg:bottom-36 lg:w-[380px] lg:fixed lg:right-36'>
              <EmailSignup />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
''