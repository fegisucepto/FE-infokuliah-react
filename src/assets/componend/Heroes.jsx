import headerImage from '../images/women.png';
import '../css/style.css'

export default function Heroes() {
  return (
    <div className="container-fluid bg-primary px-0 px-md-5">
      <div className="container pt-5 pb-5">
        <div className="row align-items-center px-3">
          <div className="col-lg-6 text-center text-lg-left">
            <h4 className="text-white mb-4 mt-5 mt-lg-0 ">InfoKuliah.ID</h4>
            <h1 className="display-3 font-weight-bold text-white">Selangkah Lebih Dekat Dengan PTN Impianmu</h1>
            <p className="text-white mb-4">Ikuti bimbel persiapan UTBK-SBMPTN untuk mendukung kesiapanmu masuk PTN impian.</p>
            <a href="/register" className="btn btn-warning mt-1 py-3 px-5">
              Sign Up
            </a>
          </div>
          <div className="col-lg-6 text-center text-lg-right mb-n5">
            <img className="img-fluid mt-5" src={headerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
