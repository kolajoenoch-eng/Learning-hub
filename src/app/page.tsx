'use client';

import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import { useCourseStore } from '@/store/courseStore';
import { useEffect } from 'react';
import Link from 'next/link';

const mockCourses = [
  {
    id: '1',
    title: 'JavaScript Fundamentals',
    description: 'Learn the basics of JavaScript programming',
    category: 'Programming',
    level: 'beginner' as const,
    instructor: 'John Doe',
    modules: [],
    students: 1500,
    rating: 4.8,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'React Advanced Patterns',
    description: 'Master advanced React patterns and best practices',
    category: 'Programming',
    level: 'advanced' as const,
    instructor: 'Jane Smith',
    modules: [],
    students: 800,
    rating: 4.9,
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Python for Data Science',
    description: 'Learn Python for data analysis and machine learning',
    category: 'Data Science',
    level: 'intermediate' as const,
    instructor: 'Mike Johnson',
    modules: [],
    students: 2000,
    rating: 4.7,
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'Web Design Basics',
    description: 'Create beautiful websites with HTML, CSS, and JavaScript',
    category: 'Design',
    level: 'beginner' as const,
    instructor: 'Sarah Williams',
    modules: [],
    students: 1200,
    rating: 4.6,
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'TypeScript Mastery',
    description: 'Deep dive into TypeScript for large-scale applications',
    category: 'Programming',
    level: 'advanced' as const,
    instructor: 'Alex Chen',
    modules: [],
    students: 600,
    rating: 4.9,
    createdAt: new Date(),
  },
  {
    id: '6',
    title: 'UI/UX Design Principles',
    description: 'Learn the fundamentals of user interface and experience design',
    category: 'Design',
    level: 'beginner' as const,
    instructor: 'Emma Davis',
    modules: [],
    students: 950,
    rating: 4.8,
    createdAt: new Date(),
  },
];

export default function Home() {
  const { courses, isLoading } = useCourseStore();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Master New Skills Today</h1>
          <p className="text-xl mb-8">Learn programming, languages, and more with interactive courses</p>
          <Link
            href="/courses"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Learn With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Structured Learning</h3>
              <p className="text-gray-600">Follow a clear path from beginner to advanced</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-lg mb-2">Track Progress</h3>
              <p className="text-gray-600">Monitor your learning journey with detailed analytics</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">Earn Badges</h3>
              <p className="text-gray-600">Complete courses and celebrate your achievements</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
