import '../styles/globals.css'
import Layout from '../components/Layout';
import { createContext } from 'vm';

function MyApp({ Component, pageProps }) {
  return (
      <Layout pathname={pageProps.pathname}>
        <Component {...pageProps} />
      </Layout>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    pageProps: {
      pathname: ctx.pathname
    }
  };
}

export default MyApp
