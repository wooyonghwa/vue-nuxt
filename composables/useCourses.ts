import coursesData from './coursesData';
import type { CourseWithPath } from '~/types/course';

interface CoursesReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CoursesReturn => {
  const courses = coursesData.map((item) => ({
    ...item,
    rating: item.rating.toFixed(1),
    reviewsCount: item.reviewsCount.toLocaleString(),
    studentCount: item.studentCount.toLocaleString(),
    path: `/course/${item.courseSlug}`,
  }));
  return {
    courses,
  };
};
