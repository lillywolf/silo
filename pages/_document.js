import { Html, Head, Main, NextScript } from 'next/document'
import MobileNav from '../components/MobileNav'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GTM from '../components/GTM'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GTM />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}