import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Headers from './Header';
import Footer from './FooterNew';
import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';

const articles = [
  {
    id: 1,
    title: 'Tips Sukses Mendapatkan Beasiswa Luar Negeri',
    slug: 'tips-sukses-beasiswa-luar-negeri',
    excerpt: 'Pelajari strategi dan tips terbaik untuk mendapatkan beasiswa ke luar negeri dari para penerima beasiswa berprestasi.',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: '16 Maret 2024',
    category: 'Beasiswa',
    readTime: '5 menit baca',
    author: {
      name: 'Tim InfoKuliah',
      role: 'Editor',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Panduan Lengkap Persiapan UTBK 2024',
    slug: 'panduan-utbk-2024',
    excerpt: 'Persiapan matang untuk menghadapi UTBK 2024 dengan strategi belajar efektif dan latihan soal terbaik.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: '10 Maret 2024',
    category: 'UTBK',
    readTime: '7 menit baca',
    author: {
      name: 'Budi Santoso',
      role: 'Tutor Senior',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: 3,
    title: 'Mengenal Jurusan Teknik Informatika',
    slug: 'mengenal-jurusan-ti',
    excerpt: 'Informasi lengkap tentang jurusan Teknik Informatika, prospek karir, dan kampus terbaik di Indonesia.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: '5 Maret 2024',
    category: 'Kuliah',
    readTime: '6 menit baca',
    author: {
      name: 'Dewi Lestari',
      role: 'Dosen TI',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
];

export default function Blogs() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [filteredArticles, setFilteredArticles] = useState(articles);
  
  const handleArticleClick = (slug) => {
    navigate(`/artikel/${slug}`);
  };

  useEffect(() => {
    const results = articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Semua' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredArticles(results);
  }, [searchTerm, selectedCategory]);

  const categories = ['Semua', 'Beasiswa', 'UTBK', 'Kuliah', 'Karir'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Headers />
      
      {/* Hero Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Artikel & Informasi Terkini
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-indigo-100">
            Temukan artikel terbaru seputar beasiswa, perkuliahan, dan tips sukses UTBK
          </p>
          
          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 py-3 sm:text-sm border border-gray-300 rounded-md"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-white text-indigo-700'
                    : 'text-white hover:bg-indigo-600'
                } transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-900">Artikel tidak ditemukan</h3>
            <p className="mt-2 text-gray-500">Coba kata kunci atau kategori lain</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col cursor-pointer"
                onClick={() => handleArticleClick(article.slug)}
              >
                <div className="relative h-48 bg-gradient-to-br from-indigo-50 to-gray-100 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    src={article.imageUrl}
                    alt={article.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-indigo-700">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">Baca Selengkapnya</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                    <img 
                      src={article.author.imageUrl} 
                      alt={article.author.name} 
                      className="w-10 h-10 rounded-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(article.author.name) + '&background=4f46e5&color=fff';
                      }}
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                      <p className="text-sm text-gray-500">{article.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
  