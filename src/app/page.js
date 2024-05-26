import Image from "next/image";
import LandingPage from '../pages/about';
import Feed from '../pages/feed';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        {/* <LandingPage /> */}
        <Feed />
      </main>
      <Footer />
    </>
  );
}
