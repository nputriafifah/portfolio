export default function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">Afifah<span>.</span></a>
      <ul className="nav-links">
        <li><a href="#about">Tentang</a></li>
        <li><a href="#skills">Keahlian</a></li>
        <li><a href="#portfolio">Proyek</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Hire Me</a>
    </nav>
  );
}