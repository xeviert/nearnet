import '../app/globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { UserProvider } from '../context/UserContext';
import { FavorProvider } from '../context/FavorContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <FavorProvider>
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
