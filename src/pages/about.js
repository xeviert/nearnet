import Image from 'next/image';

export default function LandingPage() {
    return (
<div className="min-h-screen bg-gray-100 p-6">
        <section className="text-center my-8">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Help Your Neighbr Now!</h3>
          <div className="space-x-4">
            <div to='/register'>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Register
              </button>
            </div>
            <div to='/login'>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Login
              </button>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Help Your Neighbr</h3>
          <p className="text-gray-700 leading-relaxed">
            Neighbr is an online bulletin board specifically for things that
            your neighbrs need help with. Whether it's help with spring cleaning
            or someone simply wants company, you can login and check to see what
            your neighbrs are up to.
          </p>
        </section>

        <section className="my-8">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Need Help With Something?</h3>
          <p className="text-gray-700 leading-relaxed">
            Sometimes you need an extra set of hands to help you with things
            around the house. You can decide to post a favor with details on the
            task.
          </p>
        </section>
        <section className="my-8">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Check it out!</h3>
          <p className="text-gray-700 leading-relaxed">
            Register to create an account. This gives access to a list of favors
            that people in your neighborhood need help with.
          </p>
        </section>
      </div>
      );
    }