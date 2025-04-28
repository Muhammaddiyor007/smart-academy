'use client' 

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const courseDataFromAPI = {
  'frontend-development': {
    title: 'Frontend Development',
    description: 'O‘rganing: HTML, CSS, JavaScript, React, Next.js',
    content: 'Frontend kursi zamonaviy veb-dasturlashni o‘rganish uchun barcha kerakli texnologiyalarni o‘z ichiga oladi.',
    image: '/front-end.jpg'
  },
  'backend-development': {
    title: 'Backend Development',
    description: 'Node.js, Express, MongoDB, API lar yaratish.',
    content: 'Backend kursida siz server-side dasturlashni o‘rganasiz.',
    image: '/backend.jpg'
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'React Native bilan mobil ilovalar yaratish.',
    content: 'Mobil ilovalar yaratishda kerakli texnologiyalar va amaliyotlar.',
    image: '/mobile.jpg'
  },
};

export default function CourseDetailPage() {
  const router = useRouter();
  const [courseId, setCourseId] = useState(null);
  const [isCourseLoading, setIsCourseLoading] = useState(true);

  useEffect(() => {
    if (router.query && router.query.courseId) {
      setCourseId(router.query.courseId);
      setIsCourseLoading(false); 
    }
  }, [router.query]); 

  if (isCourseLoading) {
    return <div>Loading...</div>; 
  }

  const course = courseDataFromAPI[courseId];  

  if (!course) {
    return <div>Course not found!</div>; 
  }

  return (
    <section className="p-8 bg-gray-100 rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-blue-700">{course.title}</h1>
      <img src={course.image} alt={course.title} className="mt-6 h-80 w-full object-cover rounded-xl" />
      <p className="mt-4 text-xl text-gray-700">{course.description}</p>
      <div className="mt-6 text-lg text-gray-600">
        <h2 className="text-2xl font-semibold">What You'll Learn</h2>
        <p>{course.content}</p>
      </div>
      <button className="mt-6 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Enroll Now</button>
    </section>
  );
}
