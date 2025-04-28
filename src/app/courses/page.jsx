import CourseCard from '@/components/CourseCard'

const courses = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'O‘rganing: HTML, CSS, JavaScript, React, Next.js',
    image: '/front-end.jpg'
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Node.js, Express, MongoDB, API lar yaratish.',
    image: '/backend.jpg'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'React Native bilan mobil ilovalar yaratish.',
    image: '/mobile.jpg'
  },
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    description: 'Foydalanuvchi tajribasi va dizayn asoslarini o‘rganing.',
    image: '/Design.jpg'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Ma\'lumotlarni tahlil qilish va sun\'iy intellekt.',
    image: '/Data.jpg'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'AWS, Google Cloud va Azure haqida o‘rganing.',
    image: '/cloud.jpg'
  },
]

export default function CoursesPage() {
  return (
      <section className="mt-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={index} 
              id={course.id} 
              title={course.title} 
              description={course.description} 
              image={course.image} 
            />
          ))}
        </div>
      </section>
  )
}
