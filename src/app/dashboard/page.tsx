'use client';

import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <p className="text-lg text-gray-600 mb-4">Please log in to view your dashboard</p>
          <Link href="/login" className="text-blue-600 hover:underline">
            Go to login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
          <p className="text-blue-100">You have a {user.streak} day learning streak! Keep it up!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm mb-2">Total Courses</p>
            <p className="text-3xl font-bold text-blue-600">6</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm mb-2">In Progress</p>
            <p className="text-3xl font-bold text-purple-600">2</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm mb-2">Learning Streak</p>
            <p className="text-3xl font-bold text-yellow-600">{user.streak} 🔥</p>
          </div>
        </div>

        {/* In Progress Courses */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 mb-4">Start your first course today!</p>
            <Link href="/courses" className="text-blue-600 hover:underline">
              Browse courses
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
