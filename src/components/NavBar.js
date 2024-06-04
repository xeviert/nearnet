'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useUserContext();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    router.push('/about');
  };

  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/about">
          <h1 className="text-2xl font-bold hover:text-green-400 duration-200">NearNet</h1>
        </Link>
        <div className="hidden md:flex space-x-14">
          {user ? (
            <>
              <Link href="/about">
                <span className="hover:text-green-400 transition-colors duration-200">about</span>
              </Link>
              <Link href="/feed">
                <span className="hover:text-green-400 transition-colors duration-200">feed</span>
              </Link>
              <Link href="/profile">
                <span className="hover:text-green-400 transition-colors duration-200">profile</span>
              </Link>
              <span
                onClick={handleLogout}
                className="cursor-pointer hover:text-green-400 transition-colors duration-200"
              >
                logout
              </span>
            </>
          ) : (
            <>
              <Link href="/about">
                <span className="hover:text-green-400 transition-colors duration-200">about</span>
              </Link>
              <Link href="/login">
                <span className="hover:text-green-400 transition-colors duration-200">login</span>
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col space-y-6 p-4">
            {user ? (
              <>
                <Link href="/about">
                  <span className="hover:text-green-400 transition-colors duration-200">about</span>
                </Link>
                <Link href="/feed">
                  <span className="hover:text-green-400 transition-colors duration-200">feed</span>
                </Link>
                <Link href="/profile">
                  <span className="hover:text-green-400 transition-colors duration-200">profile</span>
                </Link>
                <span
                  onClick={handleLogout}
                  className="cursor-pointer hover:text-green-400 transition-colors duration-200"
                >
                  logout
                </span>
              </>
            ) : (
              <>
                <Link href="/about">
                  <span className="hover:text-green-400 transition-colors duration-200">about</span>
                </Link>
                <Link href="/login">
                  <span className="hover:text-gray-400 transition-colors duration-200">login</span>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
