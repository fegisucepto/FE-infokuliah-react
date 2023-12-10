// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ptnImage from '../images/program-ptn.png';
import stanImage from '../images/program-stan.png';
import soshumImage from '../images/program-soshum.png';
import '../css/style.css'
import { useState } from 'react';

function Courser() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const programs = [
    {
      title: "Program Garansi STAN",
      image: stanImage,
      description: "Program Garansi STAN/Kedinasan dengan sistem pembelajaran privat maupun group class. Siswa belajar dengan kondisi professional, fokus terhadap tujuan dan pengajar pendamping yang kompeten untuk persiapan ujian masuk STAN."
    },
    {
      title: "Program UTBK Soshum",
      image: soshumImage,
      description: "Program Garansi STAN/Kedinasan dengan sistem pembelajaran privat maupun group class. Siswa belajar dengan kondisi professional, fokus terhadap tujuan dan pengajar pendamping yang kompeten untuk persiapan ujian masuk STAN."
    },
    {
      title: "Program Masuk PTN",
      image: ptnImage,
      description: "Program Garansi STAN/Kedinasan dengan sistem pembelajaran privat maupun group class. Siswa belajar dengan kondisi professional, fokus terhadap tujuan dan pengajar pendamping yang kompeten untuk persiapan ujian masuk STAN."
    },
    {
      title: "Program Garansi STAN",
      image: stanImage,
      description: "Program Garansi STAN/Kedinasan dengan sistem pembelajaran privat maupun group class. Siswa belajar dengan kondisi professional, fokus terhadap tujuan dan pengajar pendamping yang kompeten untuk persiapan ujian masuk STAN."
    },
    {
      title: "Program UTBK Soshum",
      image: soshumImage,
      description: "Program Garansi STAN/Kedinasan dengan sistem pembelajaran privat maupun group class. Siswa belajar dengan kondisi professional, fokus terhadap tujuan dan pengajar pendamping yang kompeten untuk persiapan ujian masuk STAN."
    },
    {
      title: "Program Masuk PTN",
      image: ptnImage,
      description: "Program Garansi STAN/Kedinasan dengan sistem pembelajaran privat maupun group class. Siswa belajar dengan kondisi professional, fokus terhadap tujuan dan pengajar pendamping yang kompeten untuk persiapan ujian masuk STAN."
    }
  ];

  return (
    <>
      <Navbar className="navbar"/>
      <div className='section-course'>
        <div className="row-course">
        {programs.map((program, index) => (
          <div key={index} className="col-md-6 col-lg-3 text-center team mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
              <img className="card-img-top mb-2" src={program.image} alt="" />
              <div className="card-body text-center">
                <h4 className="card-title">{program.title}</h4>
                <p className="card-text">
                  {showFullDescription ? program.description : `${program.description.slice(0, 100)}...`}
                  <button onClick={toggleDescription} className="read-more-button">
                    {showFullDescription ? 'Read Less' : 'Read More'}
                  </button>
                </p>
                <button className="courser-button">DAFTAR</button>
              </div>
            </div>
          </div>
        ))}
      </div>
        <Footer className="footer"/>
      </div>
    </>
  );
}

export default Courser;
