import { create } from 'zustand';
import { Course, UserProgress } from '@/types';

interface CourseState {
  courses: Course[];
  userProgress: { [courseId: string]: UserProgress };
  isLoading: boolean;
  fetchCourses: () => Promise<void>;
  fetchUserProgress: (userId: string, courseId: string) => Promise<void>;
  updateProgress: (userId: string, courseId: string, lessonId: string) => Promise<void>;
}

export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  userProgress: {},
  isLoading: false,

  fetchCourses: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch('/api/courses');
      const courses = await response.json();
      set({ courses, isLoading: false });
    } catch (error) {
      console.error('Failed to fetch courses:', error);
      set({ isLoading: false });
    }
  },

  fetchUserProgress: async (userId: string, courseId: string) => {
    try {
      const response = await fetch(`/api/progress/${userId}/${courseId}`);
      const progress = await response.json();
      set((state) => ({
        userProgress: { ...state.userProgress, [courseId]: progress },
      }));
    } catch (error) {
      console.error('Failed to fetch progress:', error);
    }
  },

  updateProgress: async (userId: string, courseId: string, lessonId: string) => {
    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, courseId, lessonId }),
      });
    } catch (error) {
      console.error('Failed to update progress:', error);
    }
  },
}));
