'use client';

import Link from 'next/link';
import { Course } from '@/types';
import { FiUsers, FiStar } from 'react-icons/fi';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
        <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-4xl">
          {course.thumbnail ? (
            <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
          ) : (
            '📖'
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {course.level}
            </span>
            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
              {course.category}
            </span>
          </div>
          <h3 className="font-bold text-lg mb-2 text-gray-800">{course.title}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <FiUsers size={16} />
              {course.students}
            </div>
            <div className="flex items-center gap-1">
              <FiStar size={16} className="text-yellow-400" />
              {course.rating.toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
