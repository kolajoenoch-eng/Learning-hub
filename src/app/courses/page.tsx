'use client';

import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import { useState } from 'react';

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

export default function CoursesPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = mockCourses.filter((course) => {
    const matchesFilter = filter === 'all' || course.level === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">All Courses</h1>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}
