import NavBar from '@/components/NavBar.client';
import LandingPage from '../pages/about';
import Feed from '../pages/feed';
import Profile from '@/pages/profile';
import Login from "@/pages/login";
import Register from "@/pages/register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex flex-col items-center justify-center pt-16">
        {/* <LandingPage /> */}
        {/* <Feed /> */}
        <Profile />
        {/* <Login /> */}
        {/* <Register /> */}
      </main>
      <Footer />
    </div>
    </>
  );
}
