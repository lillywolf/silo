import Head from 'next/head'
import styles from '../styles/Home.module.css'
import EmailSignup from '../components/EmailSignup'
import Link from 'next/link'
import Consent from '../components/Consent'
import { EventComponent } from './events'

export default function Home({ events }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SILO Brooklyn</title>
        <meta name="description" content="SILO Brooklyn" />
        <link rel="icon" href="/favicon.ico" />
        {/* NOTE: Consent must be the first script tag on the page */}
        {/* <Consent /> */}
      </Head>

      <main className={ `${ styles.main } m-auto relative` }>
        <div className='relative'>
          <div className='m-auto pt-24 md:pt-40 w-11/12 sm:w-[520px] lg:w-[600px]'>
              <EmailSignup />
          </div>
          <div className='text-center pb-8 pt-4 m-auto w-2 sm:w-[620px] lg:w-[800px]'>
            <a target="_blank" href="https://us14.campaign-archive.com/home/?u=d9dcc8b8380559a2218a1e426&id=9259d2343b">
              <div className='text-sm lg:text-base xl:text-xl newsletter-link'>[ BEHIND THE BOOTH ]</div>
              <div>SILO'S DANCE MUSIC NEWS & CULTURE NEWSLETTER</div>
            </a>
        </div>
        <div className='mx-auto w-10/12 md:w-7/12'></div>
          <div className="flex flex-wrap sm:w-10/12 lg:w-7/12 mx-auto">
              { events.data.map((event) => <EventComponent key={event.id} event={event} />) }
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://events-api.dice.fm/v1/events?filter%5Bvenues%5D%5B%5D=Silo+Brooklyn", {
      headers: {
          "x-api-key": "nkvo0ySBVc1OdE6tLTHO35ZF35vioOQV2chuvMob"
      }
  });
  const events = await response.json();

  return {
      props: {
          events
      }
  }
}
