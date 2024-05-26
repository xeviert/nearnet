'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">NearNet</h1>
        <div className="hidden md:flex space-x-4">
          <Link href="/feed">
            <span className="hover:text-gray-400 transition-colors duration-200">feed</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-gray-400 transition-colors duration-200">about</span>
          </Link>
          <Link href="/login">
            <span className="hover:text-gray-400 transition-colors duration-200">login</span>
          </Link>
          <Link href="/register">
            <span className="hover:text-gray-400 transition-colors duration-200">register</span>
          </Link>
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
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/about">
              <span className="hover:text-gray-400 transition-colors duration-200">about</span>
            </Link>
            <Link href="/login">
              <span className="hover:text-gray-400 transition-colors duration-200">login</span>
            </Link>
            <Link href="/register">
              <span className="hover:text-gray-400 transition-colors duration-200">register</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
