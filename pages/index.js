import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SILO Brooklyn</title>
        <meta name="description" content="SILO Brooklyn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ `${ styles.main } m-auto md:px-20` }>
        <div className='flex flex-row justify-between mx-5 md:mx-0 lg:flex-col lg:justify-center'>
          <div className='sm:mt-1 md:hidden'>
            <MobileNav />
          </div>
          <h1 className='font-bold ml-5 text-left text-4xl sm:text-5xl md:ml-0 lg:text-center lg:block lg:text-7xl'>
            SILO
          </h1>
          <div className='hidden lg:width-full md:block'>
            <Nav />
          </div>
        </div>
        <div className={styles.splash}>
          <Image className={styles.splashImage} src="/splash.jpeg" width="100%" height="72%" layout="responsive" objectFit="contain">
          </Image>
        </div>
      </main>

      <Footer />
    </div>
  )
}
