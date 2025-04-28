'use client';

import { useRouter } from 'next/navigation';

const blogDetails = {
  '1': {
    title: 'Why Frontend Development Is Important',
    content: 'Frontend dasturlashning ahamiyati juda katta. Veb-saytlarning foydalanuvchi interfeysini yaratish va ishlash uchun kerakli barcha texnologiyalarni o‘z ichiga oladi. HTML, CSS, JavaScript kabi texnologiyalar yordamida frontendni o‘rganish foydalidir.',
  },
  '2': {
    title: 'The Future of Backend Development',
    content: 'Backend tizimlar va serverless texnologiyalar kelajakda muhim ahamiyatga ega bo‘ladi. Serverless texnologiyalar yordamida serverni boshqarishning kerak emasligi va skalabilitetni yaxshilash imkoniyatlari mavjud.',
  },
  '3': {
    title: 'How to Start Mobile App Development',
    content: "Mobil ilovalar yaratishni boshlash uchun birinchi navbatda React Native, Flutter yoki Swift kabi texnologiyalarni o‘rganish kerak. Bu kursda mobil ilovalar yaratishda kerakli texnologiyalar haqida to‘liq ma'lumot olishingiz mumkin."
  }
};

export default function BlogDetailPage() {
  const router = useRouter();
  const { blogId } = router.query || {};  

  if (!blogId) {
    return <div>Blog ID mavjud emas yoki URL noto'g'ri!</div>;  
  }

  const blogPost = blogDetails[blogId];

  if (!blogPost) {
    return <div>Post topilmadi!</div>;
  }

  return (
    <section className="p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-blue-700">{blogPost.title}</h1>
      <p className="mt-4 text-gray-600">{blogPost.content}</p>
      <a href="/blog" className="mt-6 text-blue-600 hover:underline">Back to blog list</a>
    </section>
  );
}
