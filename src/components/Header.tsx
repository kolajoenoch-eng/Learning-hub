'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
  const { user, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          📚 LearnHub
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/courses" className="hover:text-blue-200">
            Courses
          </Link>
          <Link href="/dashboard" className="hover:text-blue-200">
            Dashboard
          </Link>
          <Link href="/progress" className="hover:text-blue-200">
            Progress
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm">Welcome, {user.name}!</span>
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded"
                >
                  <FiUser size={20} />
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-48 z-50">
                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <FiLogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-200">
                Login
              </Link>
              <Link href="/register" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
