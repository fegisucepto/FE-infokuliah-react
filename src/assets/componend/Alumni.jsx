// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Alumni.css'

function Alumni() {
  const alumniData = [
    {
      id: 1,
      name: 'John Doe',
      batch: 'Desember 2023',
      occupation: 'Software Engineer',
      image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      batch: 'Desember 2023',
      occupation: 'Data Analyst',
      image: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
    },
    {
        id: 3,
        name: 'John Doe',
        batch: 'Desember 2023',
        occupation: 'Software Engineer',
        image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
      },
      {
        id: 4,
        name: 'Jane Smith',
        batch: 'Desember 2023',
        occupation: 'Data Analyst',
        image: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
      },
      {
        id: 5,
        name: 'John Doe',
        batch: 'Desember 2023',
        occupation: 'Software Engineer',
        image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
      },
      {
        id: 6,
        name: 'Jane Smith',
        batch: 'Desember 2023',
        occupation: 'Data Analyst',
        image: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
      },
      {
        id: 7,
        name: 'John Doe',
        batch: 'Desember 2023',
        occupation: 'Software Engineer',
        image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
      },
      {
        id: 8,
        name: 'Jane Smith',
        batch: 'Desember 2023',
        occupation: 'Data Analyst',
        image: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
      },
      {
          id: 9,
          name: 'John Doe',
          batch: 'Desember 2023',
          occupation: 'Software Engineer',
          image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
        },
        {
          id: 10,
          name: 'Jane Smith',
          batch: 'Desember 2023',
          occupation: 'Data Analyst',
          image: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
        },
        {
          id: 11,
          name: 'John Doe',
          batch: 'Desember 2023',
          occupation: 'Software Engineer',
          image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
        },
        {
          id: 12,
          name: 'Jane Smith',
          batch: 'Desember 2023',
          occupation: 'Data Analyst',
          image: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
        },
  ];

  return (
    <section>
      <div>
        <Navbar />
        <div className="alumni-container">
          <div className="alumni-content">
            <h1>Alumni Terbaik Infokuliah.ID</h1>
            <div className="alumni-list">
              {alumniData.map((alumni) => (
                <div className="alumni-item" key={alumni.id}>
                  <img className="alumni-image" src={alumni.image} alt="" />
                  <h3>{alumni.name}</h3>
                  <p>Batch: {alumni.batch}</p>
                  <p>Occupation: {alumni.occupation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Alumni;
