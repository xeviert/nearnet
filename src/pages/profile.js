'use client';

import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { withAuth } from '@/authMiddleware';

const Profile = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    // Ensure user is fetched from context and not directly using cookies
    if (!user) {
      // Logic to handle if user is not available in context (e.g., redirect to login)
      console.log('User not available, redirect to login');
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const firstNameInit = user.first_name.charAt(0);
  const lastNameInit = user.last_name.charAt(0);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 p-6 pt-20">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">Profile</h1>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{user.first_name} {user.last_name}</h2>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full text-2xl font-bold">
              {firstNameInit}{lastNameInit}
            </div>
          </div>
          <div className="mt-4 text-gray-700">
            <div className="mt-2">{user.address}</div>
            <div className="mt-2">{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Profile);
