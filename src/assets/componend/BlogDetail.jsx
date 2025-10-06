import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Headers from './Header';
import Footer from './FooterNew';

// This would typically come from an API
const articles = [
  {
  id: 1,
  title: 'Tips Sukses Mendapatkan Beasiswa Luar Negeri',
  slug: 'tips-sukses-beasiswa-luar-negeri',
  content: `
    <p class="mb-4">Mendapatkan beasiswa ke luar negeri merupakan impian banyak pelajar Indonesia. Berikut adalah beberapa tips yang dapat membantu Anda mewujudkan impian tersebut:</p>
    
    <h2 class="text-2xl font-bold mt-6 mb-3">1. Persiapkan Diri Sejak Dini</h2>
    <p class="mb-4">Persiapan yang matang adalah kunci sukses. Mulailah mempersiapkan diri setidaknya 1-2 tahun sebelum mendaftar beasiswa. Pelajari persyaratan yang dibutuhkan dan pastikan Anda memenuhinya.</p>
    
    <h2 class="text-2xl font-bold mt-6 mb-3">2. Kuasai Bahasa Asing</h2>
    <p class="mb-4">Kemampuan bahasa asing, terutama Bahasa Inggris, sangat penting. Ikuti tes TOEFL atau IELTS dan usahakan untuk mendapatkan skor di atas rata-rata persyaratan.</p>
    
    <h2 class="text-2xl font-bold mt-6 mb-3">3. Kembangkan Prestasi dan Pengalaman</h2>
    <p class="mb-4">Penyelenggara beasiswa biasanya mencari kandidat yang tidak hanya pintar secara akademis tetapi juga aktif berorganisasi dan memiliki pengalaman kepemimpinan.</p>
    
    <p class="mt-8 text-lg font-medium">Dengan persiapan yang matang dan tekad yang kuat, impian untuk melanjutkan studi ke luar negeri bisa menjadi kenyataan. Selamat berjuang!</p>
  `,
  imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  date: '16 Maret 2024',
  category: 'Beasiswa',
  readTime: '5 menit baca',
  tags: ['Beasiswa', 'Luar Negeri', 'Pendidikan'],
  author: {
    name: 'Tim InfoKuliah',
    role: 'Editor',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Tim editor InfoKuliah yang berdedikasi memberikan informasi terbaru seputar pendidikan tinggi dan beasiswa.'
  },
  relatedArticles: [
    {
      id: 2,
      title: 'Panduan Lengkap Persiapan UTBK 2024',
      slug: 'panduan-utbk-2024',
      excerpt: 'Persiapan matang untuk menghadapi UTBK 2024 dengan strategi belajar efektif dan latihan soal terbaik.',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      date: '10 Maret 2024',
      readTime: '7 menit baca',
      category: 'UTBK',
      content: '<p>Konten artikel UTBK 2024 akan ditampilkan di sini...</p>',
      author: {
        name: 'Tim UTBK',
        role: 'Tutor',
        imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        bio: 'Pengajar berpengalaman di bidang persiapan UTBK'
      }
    },
    {
      id: 3,
      title: 'Mengenal Jurusan Teknik Informatika',
      slug: 'mengenal-jurusan-ti',
      excerpt: 'Informasi lengkap tentang jurusan Teknik Informatika, prospek karir, dan kampus terbaik di Indonesia.',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      date: '5 Maret 2024',
      readTime: '6 menit baca',
      category: 'Kuliah',
      content: '<p>Konten artikel Teknik Informatika akan ditampilkan di sini...</p>',
      author: {
        name: 'Dosen TI',
        role: 'Dosen',
        imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        bio: 'Dosen Teknik Informatika dengan pengalaman 10+ tahun'
      }
    }
  ]
},{
  id: 2,
  title: 'Panduan Lengkap Persiapan UTBK 2024',
  slug: 'panduan-utbk-2024',
  excerpt: 'Persiapan matang untuk menghadapi UTBK 2024 dengan strategi belajar efektif dan latihan soal terbaik.',
  imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  date: '10 Maret 2024',
  readTime: '7 menit baca',
  category: 'UTBK',
  content: '<p>Konten artikel UTBK 2024 akan ditampilkan di sini...</p>',
  author: {
    name: 'Tim UTBK',
    role: 'Tutor',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Pengajar berpengalaman di bidang persiapan UTBK'
  },
  relatedArticles: [
    {
      id: 1,
      title: 'Tips Sukses Mendapatkan Beasiswa Luar Negeri',
      slug: 'tips-sukses-beasiswa-luar-negeri',
      excerpt: 'Pelajari strategi dan tips terbaik untuk mendapatkan beasiswa ke luar negeri dari para penerima beasiswa berprestasi.',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      date: '16 Maret 2024',
      readTime: '5 menit baca'
    },
    {
      id: 3,
      title: 'Mengenal Jurusan Teknik Informatika',
      slug: 'mengenal-jurusan-ti',
      excerpt: 'Informasi lengkap tentang jurusan Teknik Informatika, prospek karir, dan kampus terbaik di Indonesia.',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      date: '5 Maret 2024',
      readTime: '6 menit baca'
    }
  ]
},{
  id: 3,
  title: 'Mengenal Jurusan Teknik Informatika',
  slug: 'mengenal-jurusan-ti',
  excerpt: 'Informasi lengkap tentang jurusan Teknik Informatika, prospek karir, dan kampus terbaik di Indonesia.',
  imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  date: '5 Maret 2024',
  readTime: '6 menit baca',
  category: 'Kuliah',
  content: '<p>Konten artikel Teknik Informatika akan ditampilkan di sini...</p>',
  author: {
    name: 'Dosen TI',
    role: 'Dosen',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Dosen Teknik Informatika dengan pengalaman 10+ tahun'
  },
  relatedArticles: [
    {
      id: 1,
      title: 'Tips Sukses Mendapatkan Beasiswa Luar Negeri',
      slug: 'tips-sukses-beasiswa-luar-negeri',
      excerpt: 'Pelajari strategi dan tips terbaik untuk mendapatkan beasiswa ke luar negeri dari para penerima beasiswa berprestasi.',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      date: '16 Maret 2024',
      readTime: '5 menit baca'
    },
    {
      id: 2,
      title: 'Panduan Lengkap Persiapan UTBK 2024',
      slug: 'panduan-utbk-2024',
      excerpt: 'Persiapan matang untuk menghadapi UTBK 2024 dengan strategi belajar efektif dan latihan soal terbaik.',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      date: '10 Maret 2024',
      readTime: '7 menit baca'
    }
  ]
}];

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchArticle = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Find the article with the matching slug
        const foundArticle = articles.find(article => article.slug === slug);
        
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          console.error('Article not found');
          // Redirect to 404 or articles list
          navigate('/artikel');
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Headers />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded w-3/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Headers />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Artikel tidak ditemukan</h1>
          <p className="mt-2 text-gray-600">Artikel yang Anda cari tidak dapat ditemukan.</p>
          <button
            onClick={() => navigate('/blogs')}
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Kembali ke Daftar Artikel
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Headers />
      
      {/* Article Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => navigate('/artikel')}
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-6"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Kembali ke Daftar Artikel
            </button>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {article.category}
              </span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                {article.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {article.title}
            </h1>
            
            <div className="mt-6 flex items-center">
              <img 
                src={article.author.imageUrl} 
                alt={article.author.name} 
                className="h-12 w-12 rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(article.author.name) + '&background=4f46e5&color=fff';
                }}
              />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                <p className="text-sm text-gray-500">{article.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-indigo prose-lg text-gray-700 max-w-none">
          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
              }}
            />
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900">Tag:</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <img 
                src={article.author.imageUrl} 
                alt={article.author.name} 
                className="h-16 w-16 rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(article.author.name) + '&background=4f46e5&color=fff';
                }}
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{article.author.name}</h3>
                <p className="text-sm text-gray-500">{article.author.role}</p>
                <p className="mt-2 text-sm text-gray-600">{article.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Artikel Terkait</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {article.relatedArticles.map((related) => (
                <div key={related.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={related.imageUrl} 
                      alt={related.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{related.date}</span>
                      <span className="mx-2">•</span>
                      <span>{related.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {related.excerpt}
                    </p>
                    <button
                      onClick={() => navigate(`/blogs/${related.slug}`)}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                    >
                      Baca selengkapnya →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
