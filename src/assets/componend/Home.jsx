import { Link } from 'react-router-dom';
import Header from './Header';
import FooterNew from './FooterNew';
import { CheckCircleIcon, LightBulbIcon, ChartBarIcon, BookOpenIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

// Mock data for features
const features = [
  {
    name: 'Materi Lengkap',
    description: 'Akses materi UTBK terlengkap yang disusun oleh tutor berpengalaman',
    icon: BookOpenIcon,
  },
  {
    name: 'Try Out Berkala',
    description: 'Latih kemampuanmu dengan try out berkala yang menyerupai soal UTBK asli',
    icon: ClockIcon,
  },
  {
    name: 'Pembahasan Detail',
    description: 'Dapatkan pembahasan detail untuk setiap soal yang dikerjakan',
    icon: LightBulbIcon,
  },
  {
    name: 'Statistik Belajar',
    description: 'Pantau perkembangan belajar dengan fitur statistik yang interaktif',
    icon: ChartBarIcon,
  },
];

// Mock data for popular courses
const popularCourses = [
  {
    id: 1,
    title: 'Persiapan UTBK Saintek 2024',
    description: 'Kuasai semua materi Saintek dengan metode belajar efektif',
    students: '1.2K',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Super Intensif Soshum',
    description: 'Raih nilai maksimal di ujian Soshum dengan bimbingan terbaik',
    students: '980',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Program TPS UTBK',
    description: 'Kuasa Tes Potensi Skolastik dengan strategi jitu',
    students: '1.5K',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

// Mock testimonials
const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Siswa Kelas 12 IPA',
    content: 'Berhasil masuk UI berkat bimbingan di InfoKuliah. Materinya lengkap dan mudah dipahami!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Anisa Rahma',
    role: 'Siswa Kelas 12 IPS',
    content: 'Try out-nya sangat membantu untuk persiapan UTBK. Soalnya mirip banget dengan yang diujikan.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Rizky Pratama',
    role: 'Mahasiswa Baru ITB',
    content: 'Pembahasannya sangat detail, jadi paham banget konsepnya. Recommended banget buat yang mau UTBK!',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-800 to-purple-700 pt-32 pb-20 px-4 sm:px-6 lg:pt-40 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3 bg-gradient-to-b from-indigo-900 to-transparent opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Persiapan UTBK 2024</span>
              <span className="block text-indigo-200">Raih Kampus Impianmu!</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Belajar efektif dengan materi terlengkap, try out berkala, dan bimbingan dari tutor berpengalaman untuk sukses UTBK 2024.
            </p>
            <div className="mt-10 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Mulai Belajar Gratis
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/courses"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Lihat Kelas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Fitur Unggulan</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Solusi Belajar UTBK Terlengkap
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Dapatkan pengalaman belajar terbaik dengan fitur-fitur unggulan kami
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative group">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white group-hover:bg-indigo-600 transition-colors duration-200">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Kelas Populer
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Pilih program belajar yang sesuai dengan kebutuhanmu
            </p>
          </div>

          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {popularCourses.map((course) => (
              <div key={course.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      UTBK 2024
                    </p>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{course.title}</p>
                      <p className="mt-3 text-base text-gray-500">{course.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <svg
                            key={rating}
                            className={`h-5 w-5 ${rating < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{course.rating} ({course.students}+)</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/register"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-base md:px-4 transition-colors duration-200"
                    >
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors duration-200"
            >
              Lihat Semua Kelas
              <svg className="ml-3 -mr-1 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Kata Mereka
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Testimoni dari siswa yang telah bergabung dengan kami
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-indigo-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Siap Meraih PTN Impian?</span>
            <span className="block text-indigo-200">Daftar Sekarang Juga!</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Bergabunglah dengan ribuan siswa lainnya yang telah mempercayakan persiapan UTBK mereka kepada kami.
          </p>
          <Link
            to="/register"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto transition-colors duration-200"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>

      <FooterNew />
    </div>
  );
}
