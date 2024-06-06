import '../app/globals.css';
import Head from 'next/head'; // Import Head
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { UserProvider } from '../context/UserContext';
import { FavorProvider } from '../context/FavorContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <FavorProvider>
        <Head>
          <title>NearNet</title>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        </Head>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow pt-16">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </FavorProvider>
    </UserProvider>
  );
}

export default MyApp;
