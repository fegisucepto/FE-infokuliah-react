// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/style.css'
import mahasiswa1Image from '../images/mahasiswa1.png'
import pelajarImage from '../images/pelajar.jpg'
import mahasiswaImage from '../images/mahasiswa.jpg'

export default function Course() {
  const testimoniAll = [
    {
      id: 1,
      imageSrc: mahasiswa1Image,
      nama: 'Rizky Akmal Darmawan',
      jurusan: 'Informatika',
      universitas: 'Universitas Janabadra',
      testimoni: "Pembahasan soalnya jadi lebih mudah buat dipahami",
    },
    {
      id: 2,
      imageSrc: pelajarImage,
      nama: 'Aulia Fitriani',
      jurusan: 'Teknik Elektro',
      universitas: 'Universitas Teknologi Merdeka',
      testimoni: "Metode pengajaran yang diberikan sangat membantu dalam memahami konsep-konsep sulit",
    },
    {
      id: 3,
      imageSrc: mahasiswaImage,
      nama: 'Ahmad Malik',
      jurusan: 'Akuntansi',
      universitas: 'Universitas Nusantara',
      testimoni: "Penjelasan materi yang detail membantu saya dalam mempersiapkan ujian dengan baik",
    },
  ];

  return (
    <section>
      <div>
        <div className="teacher-container">
          <div className="teacher-content">
            <div className="text-center pb-2">
              <p className="section-title px-5">
                <span className="px-2">APA KATA MEREKA</span>
              </p>
              <h2 className="text-dark font-weight-bold mb-4">Pengalaman Yang Sudah Belajar di INFOKULIAH.ID</h2>
            </div>
            <div className="teacher-list">
              {testimoniAll.map((siswa) => (
                <div className="testimoni-item" key={siswa.id}>
                  {' '}
                  <img className="testimoni-image" src={siswa.imageSrc} alt="" />
                  <h3>{siswa.nama}</h3>
                  <p>{siswa.jurusan}</p>
                  <p>{siswa.universitas}</p>
                  <p className="testimoni">{siswa.testimoni}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
