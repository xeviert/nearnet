import Link from 'next/link';

export default function Register() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-150">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
                <form className="space-y-4">                
                    <label htmlFor="first-name" className="block font-medium text-gray-700">First name:</label>
                    <input type="text" name="first_name" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />

                    <label htmlFor="last-name" className="block font-medium text-gray-700">Last name:</label>
                    <input type="text" name="last_name" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />

                    <label htmlFor="address" className="block font-medium text-gray-700">Address:</label>
                    <input type="text" name="address" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />

                    <label htmlFor="email" className="block font-medium text-gray-700">Email Address:</label>
                    <input type="text" name="email" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />

                    <label htmlFor="password" className="block font-medium text-gray-700">Password:</label>
                    <input type="password" name="password" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />

                    <label htmlFor="confirm-pw" className="block font-medium text-gray-700">Confirm Password:</label>
                    <input type="password" name="confirmPassword" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />

                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Register
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p>Already have an account?</p>
                    <Link href="/login" className="text-indigo-600 hover:text-indigo-900">
                        <em>Login</em>
                    </Link>
                </div>

            </div>
        </div>
    );
}
