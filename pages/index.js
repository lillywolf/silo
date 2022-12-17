import Head from 'next/head'
import styles from '../styles/Home.module.css'
import EmailSignup from '../components/EmailSignup'
import Consent from '../components/Consent'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.DiceEventListWidget.create({"information":"simple","eventTitle":"event","showImages":true,"showAudio":true,"showNewBadge":false,"hidePostponed":false,"hideCancelled":true,"layout":"gallery","roundButtons":true,"theme":"dark","fontFamily":"inherit","partnerId":"c3d5496a","apiKey":"nkvo0ySBVc1OdE6tLTHO35ZF35vioOQV2chuvMob","version":2,"showPrice":true,"__p":false,"__pc":{},"highlightColour":"#fb00ff","numberOfEvents":"10","venues":["Silo Brooklyn"]})
    })   

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
        <div className='mx-auto w-9/12 pt-40' id="dice-event-list-widget"></div>
        <script src="https://widgets.dice.fm/dice-event-list-widget.js" type="text/javascript"></script>
        <div className='m-auto sm:w-[520px] lg:w-[600px]'>
            <EmailSignup />
        </div>
        </div>
      </main>
    </div>
  )
}
