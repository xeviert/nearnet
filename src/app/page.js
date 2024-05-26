import NavBar from '@/components/NavBar';
import LandingPage from '../pages/about';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex flex-col items-center justify-center pt-16">
        <LandingPage />
      </main>
      <Footer />
    </div>
    </>
  );
}
