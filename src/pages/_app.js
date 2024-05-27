import '../app/globals.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <NavBar />
      <main className="flex-grow pt-16 bg-gray-200">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
