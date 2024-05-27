'use client';

import { useState } from 'react';

export default function Profile() {
  const [userInfo] = useState({
    first_name: 'John',
    last_name: 'Doe',
    address: '1234 Elm Street, Springfield, USA',
    email: 'john.doe@example.com'
  });

  const firstNameInit = userInfo.first_name.charAt(0);
  const lastNameInit = userInfo.last_name.charAt(0);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 pt-20">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">Profile</h1>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{userInfo.first_name} {userInfo.last_name}</h2>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full text-2xl font-bold">
              {firstNameInit}{lastNameInit}
            </div>
          </div>
          <div className="mt-4 text-gray-700">
            <div className="mt-2">{userInfo.address}</div>
            <div className="mt-2">{userInfo.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


  