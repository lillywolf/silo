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

      <main className={ `${ styles.main } m-auto` }>
        <div className='absolute z-10 w-full md:hidden'>
          <MobileNav />
        </div>
        <div className='absolute z-10 w-full mt-2 lg:flex-col lg:justify-center lg:h-25 lg:mt-4'>
          <div className='hidden md:width-full md:block'>
            <Nav />
          </div>
        </div>
        <div className={styles.splash}>
          <Image className={styles.splashImage} src="/splash-min.jpeg" width="100%" height="67%" layout="responsive" objectFit="cover">
          </Image>
        </div>
        <div className='bg-black m-auto lg:bg-transparent lg:absolute lg:left-20 lg:top-20'>
          <EmailSignup />
        </div>
      </main>
      <div className='flex flex-grow flex-col'>
        <Footer />
      </div>
    </div>
  )
}
