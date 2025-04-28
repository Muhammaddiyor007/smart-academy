const blogPosts = [
    { title: 'Why Frontend Development Is Important', excerpt: 'Frontend dasturlash nima va nega u zarur?', link: '/blog/1' },
    { title: 'The Future of Backend Development', excerpt: 'Backend tizimlar va serverless texnologiyalar haqida', link: '/blog/2' },
    { title: 'How to Start Mobile App Development', excerpt: 'Mobil ilovalar yaratishni boshlash uchun nima qilish kerak', link: '/blog/3' },
  ]
  
  export default function BlogPage() {
    return (
      <section className="mt-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Latest Blog Posts</h1>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-600">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <a href={post.link} className="text-blue-600 hover:underline mt-4 block">Read more</a>
            </div>
          ))}
        </div>
      </section>
    )
  }
  