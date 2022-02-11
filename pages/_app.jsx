import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Navbar from '../components/Header';
import PageTransitions from '../components/PageTransitions';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar />
      <PageTransitions route={router.asPath}>
        <Component {...pageProps} />
      </PageTransitions>
    </Fragment>
  );
}

export default MyApp;
