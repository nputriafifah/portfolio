export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>

      <h1 className="hero-title">
        Nur Putri<br />
        <span className="grad">Afifah</span>
      </h1>

      <p className="hero-sub">
        Mahasiswa Teknik Informatika yang membangun solusi digital
      </p>

      <div className="hero-actions">
        <a href="#portfolio" className="btn-primary">Lihat Proyek ↓</a>
        <a href="#contact" className="btn-secondary">Hubungi Saya</a>
      </div>
    </section>
  );
}