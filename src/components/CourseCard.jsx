'use client'

import Link from 'next/link'

export default function CourseCard({ id, title, description, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-transform hover:scale-105">
      <img src={image} alt={title} className="h-48 w-full object-cover rounded-t-xl" />
      <h2 className="text-2xl font-semibold mt-4 text-blue-600">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <Link href={`/courses/${id}`}>
        <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Learn More</button>
      </Link>
    </div>
  )
}
