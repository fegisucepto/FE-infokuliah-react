import { useState, useEffect } from 'react';
import Headers from './Header';
import Footer from './FooterNew';
import { MagnifyingGlassIcon as SearchIcon, FunnelIcon as FilterIcon, AcademicCapIcon, ClockIcon, CurrencyDollarIcon, BookOpenIcon } from '@heroicons/react/24/outline';

export default function Beasiswa() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Semua');
  const [selectedLevel, setSelectedLevel] = useState('Semua');
  const [scholarships, setScholarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await fetch('http://localhost:3008/beasiswa');
        if (!response.ok) {
          throw new Error('Failed to fetch scholarships');
        }
        const data = await response.json();
        if (data.statusCode === 200 && data.data) {
          setScholarships(data.data);
        }
      } catch (err) {
        console.error('Error fetching scholarships:', err);
        setError('Gagal memuat data beasiswa. Silakan coba lagi nanti.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  // Format currency to Rupiah
  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Format date to Indonesian format
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch = scholarship.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         '';
    
    const scholarshipType = scholarship.amount > 8000000 ? 'Penuh' : 'Parsial';
    const matchesType = selectedType === 'Semua' || scholarshipType === selectedType;
    
    // Filter by education level if selected
    const matchesLevel = selectedLevel === 'Semua' || 
                        (selectedLevel === 'S1' && scholarship.eligibility?.includes('S1')) ||
                        (selectedLevel === 'D4' && scholarship.eligibility?.includes('D4'));
    
    return matchesSearch && matchesType && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Headers />
      
      {/* Hero Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Temukan Beasiswa Impianmu
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-indigo-100">
            Dapatkan akses ke ribuan beasiswa dari berbagai kampus dan lembaga di seluruh Indonesia
          </p>
          
          {/* Search and Filter Section */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Cari Beasiswa</h2>
              
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 py-3 sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Cari beasiswa, penyedia, atau kata kunci..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Filter Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipe Beasiswa
                  </label>
                  <select
                    id="type-filter"
                    className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="Semua">Semua Tipe</option>
                    <option value="Penuh">Beasiswa Penuh</option>
                    <option value="Parsial">Beasiswa Parsial</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="level-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Jenjang Pendidikan
                  </label>
                  <select
                    id="level-filter"
                    className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    <option value="Semua">Semua Jenjang</option>
                    <option value="S1">Strata 1 (S1)</option>
                    <option value="D4">Diploma 4 (D4)</option>
                  </select>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedType !== 'Semua' || selectedLevel !== 'Semua') && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm text-gray-600">Filter aktif:</span>
                  {selectedType !== 'Semua' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {selectedType}
                      <button 
                        type="button" 
                        className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none"
                        onClick={() => setSelectedType('Semua')}
                      >
                        <span className="sr-only">Hapus filter tipe</span>
                        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                        </svg>
                      </button>
                    </span>
                  )}
                  {selectedLevel !== 'Semua' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {selectedLevel}
                      <button 
                        type="button" 
                        className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                        onClick={() => setSelectedLevel('Semua')}
                      >
                        <span className="sr-only">Hapus filter jenjang</span>
                        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                        </svg>
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scholarship List */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            <p className="mt-4 text-gray-600">Memuat data beasiswa...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        ) : filteredScholarships.length === 0 ? (
          <div className="text-center py-12">
            <AcademicCapIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">Tidak ada beasiswa yang ditemukan</h3>
            <p className="mt-1 text-sm text-gray-500">Coba ubah filter pencarian Anda.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredScholarships.map((scholarship) => (
              <div key={scholarship.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-indigo-50 to-gray-100 overflow-hidden">
                  {scholarship.imageUrl ? (
                    <img
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                      src={scholarship.imageUrl}
                      alt={scholarship.name || 'Beasiswa'}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-gray-200">
                      <AcademicCapIcon className="h-16 w-16 text-indigo-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">Lihat Detail</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                      scholarship.amount > 8000000 ? 'bg-indigo-100 text-indigo-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {scholarship.amount > 8000000 ? 'Penuh' : 'Parsial'}
                    </span>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {scholarship.eligibility.includes('S1') ? 'S1' : scholarship.eligibility.includes('D4') ? 'D4' : 'Beragam'}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{scholarship.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{scholarship.provider}</p>
                  <p className="mt-3 text-gray-600 line-clamp-3">{scholarship.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Persyaratan:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      {scholarship.eligibility?.split?.(', ')?.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{req}</span>
                        </li>
                      ))}
                      {scholarship.eligibility?.split?.(', ').length > 3 && (
                        <li className="text-indigo-600 text-sm font-medium">+{scholarship.eligibility.split(', ').length - 3} persyaratan lainnya</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-gray-900">{formatRupiah(scholarship.amount)}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">Tutup {formatDate(scholarship.deadline)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href={scholarship.applicationUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-white ${
                        scholarship.applicationUrl 
                          ? 'bg-indigo-600 hover:bg-indigo-700 border-transparent' 
                          : 'bg-gray-400 cursor-not-allowed border-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                      onClick={!scholarship.applicationUrl ? (e) => e.preventDefault() : undefined}
                    >
                      <BookOpenIcon className="h-4 w-4 mr-2" />
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}