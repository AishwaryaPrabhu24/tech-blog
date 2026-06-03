import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>TECHVERSE</h2>
          <p>
            Exploring Technology, Inspiring Innovation,
            Empowering the Future.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Categories */}
        <div className="footer-links">
          <h3>Categories</h3>
          <a href="/blogdetails">AI</a>
          <a href="/ComputingDetails">Cloud</a>
          <a href="/cyberdetails">Cyber Security</a>
          <a href="/WebDevDetails">Web Dev</a>
        </div>

        {/* Contact */}
        <div className="footer-links">
          <h3>Connect</h3>
          <p>Email: techverse@gmail.com</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TechVerse. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;