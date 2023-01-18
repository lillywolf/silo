import { Html, Head, Main, NextScript } from 'next/document'
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