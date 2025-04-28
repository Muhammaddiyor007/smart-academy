import Link from 'next/link';

export default function HomePage() {
  return (
    <section className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-white mb-4">
          SmartAcademy ga xush kelibsiz!
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
          Eng so‘nggi kurslar bilan o‘z karerangizni rivojlantirish uchun eng yaxshi platforma. Har bir o‘quvchi uchun o‘ziga xos dasturlar va zamonaviy texnologiyalar yordamida yangi imkoniyatlarni oching.
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
        <button className="px-10 py-4 text-lg sm:text-xl font-semibold bg-yellow-400 text-blue-800 rounded-lg shadow-xl hover:bg-yellow-500 hover:scale-105 transition-all duration-300 transform">
          Ro'yxatdan o'tish
        </button>

        <Link href="/about">
          <button className="px-10 py-4 text-lg sm:text-xl font-semibold bg-transparent border-2 border-white text-white rounded-lg shadow-xl hover:bg-white hover:text-blue-800 transition-all duration-300">
            Kurslar haqida
          </button>
        </Link>
      </div>

      <div className="mt-24 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-64 sm:w-80 hover:shadow-2xl transition-all">
          <img src="/front-end.jpg" alt="Frontend Development" className="h-40 w-full object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold text-blue-700 mt-4">Frontend Development</h3>
          <p className="text-gray-600 mt-2 text-center">Veb dasturlashni o‘rganish va zamonaviy texnologiyalarni qo‘llash. HTML, CSS, JavaScript va React o‘rganing.</p>
          <Link href="/courses">
            <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
              Batafsil o‘qish
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-64 sm:w-80 hover:shadow-2xl transition-all">
          <img src="/backend.jpg" alt="Backend Development" className="h-40 w-full object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold text-blue-700 mt-4">Backend Development</h3>
          <p className="text-gray-600 mt-2 text-center">Node.js, Express, MongoDB bilan server dasturlashni o‘rganing va API yaratish.</p>
          <Link href="/courses">
            <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
              Batafsil o‘qish
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-64 sm:w-80 hover:shadow-2xl transition-all">
          <img src="/mobile.jpg" alt="Mobile Development" className="h-40 w-full object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold text-blue-700 mt-4">Mobile App Development</h3>
          <p className="text-gray-600 mt-2 text-center">Mobil ilovalar yaratish uchun React Native yoki Flutter bilan ishlashni o‘rganing.</p>
          <Link href="/courses">
            <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
              Batafsil o‘qish
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-24 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 mb-6">Kursni Tamomlagan O'quvchilar</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-64 sm:w-80">
            <img src="/graduate1.jpg" alt="Shavkat O." className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 mt-4">Shavkat O.</h3>
            <p className="text-gray-600 mt-2">Frontend Development. O'qishni boshlagan: 2021 yil, Tugatgan: 2023 yil. Hozirda Google'da ishlaydi.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-64 sm:w-80">
            <img src="/graduate2.jpg" alt="Jamshid A." className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 mt-4">Jamshid A.</h3>
            <p className="text-gray-600 mt-2">Backend Development. O'qishni boshlagan: 2020 yil, Tugatgan: 2022 yil. Hozirda Amazon'da ishlaydi.</p>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-400 mb-6">Hozirda Ishlayotgan O'qituvchilar</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-64 sm:w-80">
            <img src="/teacher1.jpg" alt="Ali X." className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 mt-4">Ali X.</h3>
            <p className="text-gray-600 mt-2">Frontend Development bo'yicha o'qituvchi. HTML, CSS, JavaScript va React texnologiyalarida keng tajribaga ega.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-64 sm:w-80">
            <img src="/teacher2.jpg" alt="Diyorbek B." className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 mt-4">Diyorbek B.</h3>
            <p className="text-gray-600 mt-2">Backend Development bo'yicha o'qituvchi. Node.js va MongoDB bo'yicha tajribaga ega.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-64 sm:w-80">
            <img src="/teacher3.jpg" alt="Nigora M." className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 mt-4">Nigora M.</h3>
            <p className="text-gray-600 mt-2">Mobil dasturlash bo'yicha o'qituvchi. React Native va Flutter yordamida mobil ilovalar yaratishda tajribaga ega.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
