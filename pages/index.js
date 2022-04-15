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
        <div className='z-10 w-full bg-[#0d0d0d] h-12 sm:h-16 md:hidden'>
          <MobileNav />
        </div>
        <div className='hidden w-full bg-[#0d0d0d] overflow-hidden md:block md:h-[4.3rem] lg:h-25'>
          <Nav />
        </div>
        <div className='bg-[#0d0d0d] relative'>
          <div className={styles.splash}>
            <Image className={styles.splashImage} src="/splash-min.jpeg" width="100%" height="67%" layout="responsive" objectFit="cover">
            </Image>
            <div className='bg-[#0d0d0d] m-auto xs:w-[320px] lg:bg-transparent lg:absolute lg:left-20 lg:top-20'>
              <EmailSignup />
            </div>
          </div>
        </div>
      </main>
      <div className='flex flex-grow flex-col'>
        <Footer />
      </div>
    </div>
  )
}
