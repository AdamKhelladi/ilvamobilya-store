import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer-container">
      <div className="container">
        <div className="content">Footer</div>
        <p className="footer-text">
          © {new Date().getFullYear()} YourCompany. All rights reserved. | Built
          with ❤️ for our customers
        </p>
      </div>
    </div>
  );
}
