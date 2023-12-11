import ptnImage from '../images/program-ptn.png'
import stanImage from '../images/program-stan.png'
import soshumImage from '../images/program-soshum.png'
import '../css/classes.css'

export default function Classe() {
  const programsClass = [
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
      title: "Program Masuk PTN",
      image: ptnImage,
      description: "Program Garansi STAN/Kedinasan dengan sistem pembelajaran privat maupun group class. Siswa belajar dengan kondisi professional, fokus terhadap tujuan dan pengajar pendamping yang kompeten untuk persiapan ujian masuk STAN."
    },
  ];

  return (
    <div className="container-fluid pt-5 pb-5 bg-light">
      <div className="container pt-5 pb-5">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Program Kami</span>
          </p>
          <h2 className="mb-4">Program Unggulan InfoKuliah.ID</h2>
        </div>
        <div className="row-clases">
          {programsClass.map((program, index) => (
            <div key={index} className="card-container">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src={program.image} alt="" />
                <div className="card-body text-center">
                  <h4 className="card-title">{program.title}</h4>
                  <p className="card-text">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/Courses" className="btn btn-warning mt-1 py-3 px-5">
            Program Lainnya
          </a>
        </div>
      </div>
    </div>
  );
}
