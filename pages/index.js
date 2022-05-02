import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
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
        <div className='absolute z-10 w-full bg-transparent h-12 sm:h-16 md:hidden'>
          <MobileNav />
        </div>
        <div className='hidden absolute z-10 w-full bg-transparent md:block md:h-[4.3rem] lg:h-25'>
          <Nav />
        </div>
        <div className='bg-[#0d0d0d] relative'>
          <div className={styles.splash}>
            <Image className={styles.splashImage} src="/splash-grayscale-xs.jpeg" width="100%" height="67%" layout="responsive" objectFit="cover">
            </Image>
            <div className='bg-[#0d0d0d] m-auto sm:w-[520px] lg:w-[380px] lg:fixed lg:right-16 lg:bottom-24'>
              <EmailSignup />
            </div>
          </div>
        </div>
      </main>
      <div className='w-full flex flex-grow flex-col bg-[#0d0d0d] md:hidden'/>
      <div className='hidden flex flex-grow flex-col md:block'>
        <Footer />
      </div>
    </div>
  )
}
