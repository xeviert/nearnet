import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-200 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md">
        <section className="text-center my-8">
          <h1 className="text-4xl font-bold text-green-600 mb-6">Connect, Share, and Engage on NearNet</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            NearNet is your digital neighborhood – a place where you can connect with your local community to share information, 
            discuss events, and support one another. It’s all about making your neighborhood more accessible and enjoyable.
          </p>
          <div className="space-x-4">
            <Link href="/register">
              <a className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                Sign Up
              </a>
            </Link>
            <Link href="/login">
              <a className="bg-transparent text-green-600 border border-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition duration-300">
                Login
              </a>
            </Link>
          </div>
        </section>

        <section className="flex flex-col items-center my-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Discover the Benefits of Your Online Neighborhood</h2>
          <p className="text-center text-gray-700 leading-relaxed mb-6">
            Whether you need a hand with a project, looking for local recommendations, or organizing a community event, NearNet brings everyone together. 
            Experience a vibrant community life right at your fingertips.
          </p>
          <Image
            src="/images/community.jpg"  
            alt="Community interaction"  
            width={1920}                 
            height={1080}               
            layout="responsive"          
            className="rounded-md shadow-lg"  
          />        
        </section>

        <section className="flex flex-col items-center my-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Stay Informed and Safe</h2>
          <p className="text-center text-gray-700 leading-relaxed mb-6">
            Stay up-to-date with real-time updates about local news, safety alerts, and important neighborhood announcements. NearNet keeps you informed and prepared.
          </p>
        </section>
      </div>
    </div>
  );
}
