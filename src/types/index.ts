export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  streak: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  instructor: string;
  thumbnail?: string;
  modules: Module[];
  students: number;
  rating: number;
  createdAt: Date;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
  order: number;
  duration: number;
  quiz?: Quiz;
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: string;
  quizId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  quizScores: { [quizId: string]: number };
  progress: number;
  lastAccessed: Date;
}

export interface UserQuizAttempt {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  answers: number[];
  completedAt: Date;
}
