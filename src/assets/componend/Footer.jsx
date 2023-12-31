import '../css/style.css'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <p className="footer-text">
            Copyright &copy;{' '}
            <a className="footer-link" href="/">
              InfoKuliah.ID
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
