import { useState, useEffect, useRef } from "react";
import dibimbingImg from "/dibimbing.png";
import revouImg from "/revou.png";
import tikiImg from "/tiki.png";
import batikImg from "/batik.png";

// ─── DATA ────────────────────────────────────────────────────────────────────
const ME = {
  name: "Nur Putri Afifah",
  initials: "NPA",
  major: "D3 Teknik Informatika",
  university: "Universitas Sebelas Maret",
  semester: "Semester 4",
  ipk: "3.77",
  location: "Surakarta, ID",
  email: "nputriafifah17@gmail.com",
  github: "https://github.com/npafifah",
  linkedin: "https://www.linkedin.com/in/nurputriafifah",
  instagram: "https://instagram.com/fifhptrii",
  about1: "Saya Afifah, mahasiswa D3 Teknik Informatika semester 4 di Universitas Sebelas Maret yang gemar membangun produk digital dari nol. Bagi saya, kode adalah medium untuk memecahkan masalah nyata.",
  about2: "Aktif mengerjakan proyek kampus, lomba, dan bootcamp. Saya percaya developer terbaik adalah yang juga memahami desain, produk, dan manusia.",
};

const SKILLS = [
  { icon: "🌐", title: "Web Development", desc: "Membangun antarmuka web modern yang responsif dan performant.", pills: ["React.js", "Vue.js", "JavaScript", "Tailwind CSS", "Bootstrap"], ca: "#7c3aed", cb: "#00d4ff" },
  { icon: "📱", title: "Mobile Development", desc: "Aplikasi mobile cross-platform yang responsif dan cepat.", pills: ["Flutter", "Dart"], ca: "#ec4899", cb: "#f97316" },
  { icon: "⚙️", title: "DevOps & Tools", desc: "Manajemen versi, kontainer, dan deployment modern.", pills: ["Git", "Docker", "Linux"], ca: "#3b82f6", cb: "#7c3aed" },
  { icon: "🎨", title: "UI/UX Design", desc: "Membuat wireframe dan prototipe antarmuka yang intuitif.", pills: ["Figma", "Prototyping", "Design System"], ca: "#10b981", cb: "#00d4ff" },
  { icon: "🎮", title: "Game Development", desc: "Membuat game interaktif menggunakan berbagai engine.", pills: ["Unity", "C#", "Greenfoot", "Java"], ca: "#f59e0b", cb: "#ec4899" },
  { icon: "🛠️", title: "Backend Development", desc: "Membangun sistem backend dan API menggunakan framework Laravel.", pills: ["Laravel", "PHP", "MySQL", "REST API"], ca: "#10b981", cb: "#3b82f6" },
];

const PROJECTS = [
  {
    num: "01",
    title: "Website Kost Solo — Platform Pencarian Kost",
    role: "Frontend Developer",
    desc: "Mengembangkan platform pencarian kost berbasis web untuk membantu mahasiswa menemukan hunian di Solo dengan fitur filter harga, lokasi, dan fasilitas.",
    impact: "Mempermudah mahasiswa menemukan kost secara cepat dan efisien dengan sistem filter interaktif.",
    tech: ["React.js", "JavaScript", "Node.js"],
    category: "Web App",
    type: "PBL Project",
    highlight: true,
    image: "/kostsolo.png",
  },
  {
    num: "02",
    title: "Evercloth — Website UMKM Batik",
    role: "Frontend Developer",
    desc: "Membangun website e-commerce sederhana untuk membantu UMKM batik memperluas jangkauan pasar digital.",
    impact: "Meningkatkan visibilitas produk UMKM dan mendukung digitalisasi bisnis lokal.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Design",
    type: "Lomba",
    image: "/batik.png",
    link: "https://...", // isi kalau ada
  },
  {
    num: "03",
    title: "SIKOMA — Website Kesehatan Mental",
    role: "Frontend Developer",
    desc: "Mengembangkan platform self-help dan edukasi kesehatan mental untuk meningkatkan awareness di kalangan mahasiswa.",
    impact: "Memberikan akses informasi kesehatan mental yang mudah dipahami dan interaktif.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web App",
    type: "Lomba",
    image: "/sikoma.png",
    link: "https://...", // opsional
  },
  
  {
    num: "04",
    title: "TIKI Ongkir Flow Redesign",
    role: "UI/UX Designer",
    desc: "Melakukan redesign UX flow untuk meningkatkan kemudahan pengguna dalam melakukan pengecekan ongkir.",
    impact: "Menyederhanakan user journey sehingga lebih cepat, jelas, dan intuitif.",
    tech: ["Figma"],
    category: "UI/UX",
    type: "Case Study",
    image: "/tiki.png",
    link: "https://...", // link figma kalau ada
  },
  {
    num: "05",
    title: "Mountain Adventure",
    role: "Game Developer",
    desc: "Membuat game petualangan berbasis Unity dengan mekanik eksplorasi.",
    impact: "Memberikan pengalaman eksplorasi interaktif bagi pemain.",
    tech: ["Unity", "C#"],
    category: "Game",
    type: "Personal",
    image: "/game2.png",
  },
  {
    num: "6",
    title: "Creative Poster — Olivia UB Competition",
    role: "Designer",
    desc: "Membuat desain poster kreatif untuk kompetisi nasional dengan pendekatan visual storytelling.",
    impact: "Menyampaikan pesan secara visual dengan desain yang menarik dan komunikatif.",
    tech: ["Figma", "Canva"],
    category: "Design",
    type: "Competition",
    image: "/greenspire.png",
    link: "https://...", // link drive poster kamu
  },
];

const EXPERIENCES = [
  {
    title: "Kepala Divisi Personalia",
    org: "Emailkomp UNS",
    year: "2026",
    desc: [
      "Memimpin dan mengelola divisi personalia dalam pengembangan anggota",
      "Mengoptimalkan proses rekrutmen dan evaluasi anggota",
      "Meningkatkan efektivitas koordinasi tim melalui manajemen yang terstruktur"
    ]
  },
  {
    title: "Staff Sekretaris Kabinet",
    org: "BEM SV UNS",
    year: "2025",
    desc: [
      "Mengelola administrasi organisasi secara sistematis",
      "Menyusun laporan kegiatan yang terstruktur dan terdokumentasi",
      "Mendukung koordinasi internal untuk meningkatkan efisiensi kerja tim"
    ]
  },
  {
    title: "Staff Logistik",
    org: "PKKMB UNS",
    year: "2025",
    desc: [
      "Mengelola distribusi logistik untuk event skala besar",
      "Memastikan seluruh kebutuhan acara terpenuhi tepat waktu",
      "Berperan dalam kelancaran operasional kegiatan"
    ]
  },
  {
    title: "Staff Seminar",
    org: "SMART IT Festival",
    year: "2025",
    desc: [
      "Mendukung pelaksanaan seminar teknologi",
      "Berkoordinasi dengan pembicara dan panitia",
      "Memastikan jalannya acara berjalan lancar"
    ]
  }
];

const ACHIEVEMENTS = [
  {
    title: "UI/UX Design Bootcamp (DSF 3.5)",
    org: "Dibimbing.id",
    year: "2025",
    type: "Bootcamp",
    image: dibimbingImg,
    certificate: "https://drive.google.com/file/d/1KWkGI7r66pYs1aKpxDbJC9oQM1-PpdgS/view?usp=sharing",
    desc: [
      "Mempelajari design thinking, wireframing, dan prototyping",
      "Mengerjakan studi kasus berbasis user-centered design",
      "Menghasilkan solusi desain yang fokus pada pengalaman pengguna"
    ]
  },
  {
    title: "Intro to Data Analytics",
    org: "RevoU",
    year: "2025",
    type: "Bootcamp",
    image: "/revou.png",
    certificate: "https://drive.google.com/file/d/1ZEMItLFOV6-j5nYPj_oTy-5HOyiFKxmE/view?usp=sharing",
    desc: [
      "Belajar dasar analisis data dan data processing",
      "Menghasilkan insight dari dataset sederhana",
      "Memahami dasar pengambilan keputusan berbasis data"
    ]
  },

  // ✅ TAMBAHAN SERTIFIKAT FRONTEND
  {
    title: "HTML Essentials",
    org: "Cisco Networking Academy",
    year: "2025",
    type: "Certification",
    image: "/html.png", // ganti sesuai file kamu
    certificate: "LINK_HTML_KAMU",
    desc: [
      "Memahami struktur dasar HTML dan semantic elements",
      "Membangun halaman web statis",
      "Mengimplementasikan best practices dalam HTML"
    ]
  },
  {
  title: "JavaScript Essentials 1",
  org: "Cisco Networking Academy",
  year: "2025",
  type: "Certification",
  image: "/js1.png",
  certificate: "LINK_JS_1",
  desc: [
    "Memahami dasar JavaScript",
    "Variables, data types, dan basic logic"
  ]
},
{
  title: "JavaScript Essentials 2",
  org: "Cisco Networking Academy",
  year: "2025",
  type: "Certification",
  image: "/js2.png",
  certificate: "LINK_JS_2",
  desc: [
    "Pendalaman JavaScript",
    "Functions, loops, dan debugging"
  ]
},

  {
    title: "Software Engineering Competition (SECOMP)",
    org: "Telkom University",
    year: "2025",
    type: "Competition",
    image: "/secomp.png",
    certificate: "https://drive.google.com/file/d/1KHzrI9KuSWIIg2rEZssoyFigMzW4Q39k/view?usp=sharing",
    desc: [
      "Mengembangkan solusi berbasis software dalam kompetisi nasional",
      "Berkolaborasi dalam tim untuk menyelesaikan problem case"
    ]
  },
  {
    title: "Web Programming Competition",
    org: "UNISKA Banjarmasin",
    year: "2025",
    type: "Competition",
    image: "/uniska.JPG",
    certificate: "https://drive.google.com/file/d/187xZnMk5Cqf6Dkcoe3RViITAKGzIcVeq/view?usp=sharing",
    desc: [
      "Membangun website sebagai solusi dalam kompetisi",
      "Mengimplementasikan fitur berbasis kebutuhan user"
    ]
  },
  {
    title: "GENBI Essay Competition",
    org: "GENBI",
    year: "2025",
    type: "Competition",
    image: "/genbi.png",
    certificate: "https://drive.google.com/file/d/1DSwnqmKFtEveWhegca-f3D8BfheGNlD0/view?usp=sharing",
    desc: [
      "Menulis esai berbasis analisis isu sosial",
      "Mengembangkan kemampuan critical thinking"
    ]
  }
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(e.target); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ─── CUSTOM CURSOR ───────────────────────────────────────────────────────────
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0), my = useRef(0), rx = useRef(0), ry = useRef(0);

  useEffect(() => {
    const onMove = e => { mx.current = e.clientX; my.current = e.clientY; if (dotRef.current) { dotRef.current.style.left = e.clientX + "px"; dotRef.current.style.top = e.clientY + "px"; } };
    document.addEventListener("mousemove", onMove);
    let af;
    const loop = () => { rx.current += (mx.current - rx.current) * 0.1; ry.current += (my.current - ry.current) * 0.1; if (ringRef.current) { ringRef.current.style.left = rx.current + "px"; ringRef.current.style.top = ry.current + "px"; } af = requestAnimationFrame(loop); };
    af = requestAnimationFrame(loop);
    const els = document.querySelectorAll("a,button,.proj-row,.skill-card");
    const enter = () => { if (!ringRef.current || !dotRef.current) return; ringRef.current.style.width = "70px"; ringRef.current.style.height = "70px"; ringRef.current.style.borderColor = "rgba(0,212,255,0.6)"; dotRef.current.style.transform = "translate(-50%,-50%) scale(0)"; };
    const leave = () => { if (!ringRef.current || !dotRef.current) return; ringRef.current.style.width = "40px"; ringRef.current.style.height = "40px"; ringRef.current.style.borderColor = "rgba(0,212,255,0.3)"; dotRef.current.style.transform = "translate(-50%,-50%) scale(1)"; };
    els.forEach(el => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(af); };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{ position: "fixed", width: 8, height: 8, background: "#00d4ff", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, transform: "translate(-50%,-50%)", transition: "transform 0.1s, background 0.3s", boxShadow: "0 0 10px #00d4ff, 0 0 20px rgba(0,212,255,0.5)" }} />
      <div ref={ringRef} style={{ position: "fixed", width: 40, height: 40, border: "1px solid rgba(0,212,255,0.3)", borderRadius: "50%", pointerEvents: "none", zIndex: 9998, transform: "translate(-50%,-50%)", transition: "width 0.3s, height 0.3s, border-color 0.3s" }} />
    </>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ active }) {
  return (
    <nav style={{ position: "fixed", top: "1.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 500, display: "flex", alignItems: "center", gap: "2rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", padding: "0.75rem 2rem", borderRadius: 100, whiteSpace: "nowrap" }}>
      <a href="#hero" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "0.05em" }}>
        Afifah<span style={{ color: "#00d4ff" }}>.</span>
      </a>
      <div style={{ display: "flex", gap: "1.75rem", listStyle: "none" }}>
        {[
          ["about", "Tentang"],
          ["skills", "Keahlian"],
          ["experience", "Pengalaman"],
          ["portfolio", "Proyek"],
          ["contact", "Kontak"]
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} style={{ fontSize: "0.8rem", fontWeight: 500, color: active === id ? "#fff" : "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}>{label}</a>
        ))}
      </div>
      <a href="#contact" style={{ background: "linear-gradient(135deg,#7c3aed,#00d4ff)", padding: "0.5rem 1.25rem", borderRadius: 100, fontSize: "0.8rem", fontWeight: 600, color: "#fff", textDecoration: "none" }}>Hire Me</a>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const phrases = [
    "Frontend Developer (React.js)",
    "Building modern web interfaces",
    "UI/UX-driven Developer",
    "Creating user-centered experiences"
  ];

  const [typed, setTyped] = useState("");
  const [pi, setPi] = useState(0);

  useEffect(() => {
    let i = 0, del = false, t;
    const tick = () => {
      const p = phrases[pi];
      if (!del && i <= p.length) { setTyped(p.slice(0, i++)); t = setTimeout(tick, 75); }
      else if (!del) { del = true; t = setTimeout(tick, 1600); }
      else if (del && i > 0) { setTyped(p.slice(0, --i)); t = setTimeout(tick, 38); }
      else { del = false; setPi(x => (x + 1) % phrases.length); }
    };
    t = setTimeout(tick, 200);
    return () => clearTimeout(t);
  }, [pi]);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "7rem 2rem 4rem", position: "relative", zIndex: 1, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)", maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)",  pointerEvents: "none" }} />
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", padding: "6px 18px", borderRadius: 100, fontSize: "0.78rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2rem" }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00d4ff" }} />
        Open for Internship 2026
      </div>
      <h1 style={{ fontSize: "clamp(3.5rem,8vw,7.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", color: "#fff", marginBottom: "1.5rem" }}>
        Nur Putri <br />
        <span style={{ background: "linear-gradient(135deg,#00d4ff 0%,#7c3aed 50%,#ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Afifah</span>
      </h1>
      <div style={{ fontSize: "clamp(1rem,2vw,1.3rem)", fontFamily: "'Space Grotesk', monospace", color: "rgba(226,232,240,0.7)", height: 36, marginBottom: "0.5rem" }}>
        {typed}<span style={{ borderRight: "2px solid #00d4ff", animation: "blink 1s step-end infinite" }}>&nbsp;</span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#00d4ff", marginBottom: "1.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Available for Frontend Internship 2026 🚀</p>
      <p style={{ fontSize: "clamp(1rem,2vw,1.1rem)", fontWeight: 300, color: "rgba(226,232,240,0.45)", maxWidth: 520, lineHeight: 1.8, margin: "0 auto 3rem" }}>
        Frontend Developer yang fokus membangun aplikasi web modern, responsif, dan berorientasi pada pengalaman pengguna
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#portfolio" style={{ background: "linear-gradient(135deg,#7c3aed,#00d4ff)", color: "#fff", padding: "0.9rem 2.25rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>View Projects ↓</a>
        <a href="/CV_NurPutriAfifah.pdf" download style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", padding: "0.9rem 2.25rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>Download CV</a>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  const [refL, inL] = useInView();
  const [refR, inR] = useInView();
  return (
    <section id="about" style={{ padding: "7rem 6rem", background: "#070710", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "center" }}>
        <div ref={refL} style={{ position: "relative", opacity: inL ? 1 : 0, transform: inL ? "none" : "translateX(-40px)", transition: "all 0.75s ease" }}>
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", borderRadius: 24, padding: "2.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 120, background: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(0,212,255,0.2))", borderRadius: "24px 24px 0 0" }} />
            <div style={{ position: "relative", zIndex: 1, marginTop: "1.5rem", marginBottom: "1rem" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", margin: "0 auto", background: "linear-gradient(135deg,#7c3aed,#00d4ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.25rem", fontWeight: 700, color: "#fff", boxShadow: "0 0 40px rgba(124,58,237,0.4)", fontFamily: "'Space Grotesk',sans-serif" }}>{ME.initials}</div>
                <div style={{ position: "absolute", inset: -6, borderRadius: "50%", border: "2px solid rgba(0,212,255,0.3)", animation: "spin 8s linear infinite" }} />
              </div>
            </div>
            <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>{ME.name}</div>
            <div style={{ fontSize: "0.8rem", color: "#64748b" }}>{ME.major}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.05)", marginTop: "1.5rem", borderRadius: 12, overflow: "hidden" }}>
              {[["UNS", "Universitas"], ["Sem 4", "Semester"], [ME.ipk, "IPK"], ["Surakarta", "Lokasi"]].map(([v, l]) => (
                <div key={l} style={{ background: "rgba(0,0,0,0.2)", padding: "1rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>{v}</div>
                  <div style={{ fontSize: "0.7rem", color: "#64748b", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "absolute", top: "10%", right: "-10%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "8px 14px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 6, color: "#00d4ff", animation: "float 3s ease-in-out infinite" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 8px #00d4ff" }} />Web Developer
          </div>
          <div style={{ position: "absolute", bottom: "15%", left: "-10%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "8px 14px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 6, color: "#ec4899", animation: "float 3s ease-in-out infinite", animationDelay: "1.5s" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ec4899", boxShadow: "0 0 8px #ec4899" }} />UI/UX Design
          </div>
        </div>
        <div ref={refR} style={{ opacity: inR ? 1 : 0, transform: inR ? "none" : "translateX(40px)", transition: "all 0.75s ease" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", padding: "5px 14px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Tentang Saya</div>
          <h2 style={{ fontSize: "clamp(2.25rem,4vw,3.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Builder &<br /><span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Problem Solver</span>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(226,232,240,0.55)", marginBottom: "1.25rem" }}>{ME.about1}</p>
          <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(226,232,240,0.55)" }}>{ME.about2}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }}>
            {[["Universitas", ME.university], ["Jurusan", ME.major], ["Semester", "4 — Aktif"], ["Lokasi", ME.location]].map(([l, v]) => (
              <div key={l} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "1rem 1.25rem" }}>
                <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748b", marginBottom: 4 }}>{l}</div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fff" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
function Skills() {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(null);
  return (
    <section id="skills" style={{ padding: "7rem 6rem", background: "#04040a", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(40px)", transition: "all 0.75s ease" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", padding: "5px 14px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Keahlian</div>
            <h2 style={{ fontSize: "clamp(2.25rem,4vw,3.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Yang bisa<br /><span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>saya lakukan</span>
            </h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
          {SKILLS.map((sk, i) => (
            <SkillCard key={sk.title} sk={sk} i={i} hov={hov} setHov={setHov} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ sk, i, hov, setHov }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="skill-card" onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "1.75rem", position: "relative", overflow: "hidden", transition: "transform 0.3s,border-color 0.3s,box-shadow 0.3s", cursor: "default", transform: hov === i ? "translateY(-6px)" : "none", borderColor: hov === i ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)", boxShadow: hov === i ? "0 20px 60px rgba(0,0,0,0.4)" : "none", opacity: inView ? 1 : 0, transitionDelay: `${i * 0.07}s`, transitionProperty: "opacity,transform,border-color,box-shadow", transitionDuration: hov === i ? "0.3s,0.3s,0.3s,0.3s" : "0.75s,0.3s,0.3s,0.3s" }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,${sk.ca},${sk.cb})`, opacity: hov === i ? 0.04 : 0, transition: "opacity 0.3s", borderRadius: 20, pointerEvents: "none" }} />
      <div style={{ width: 48, height: 48, borderRadius: 14, marginBottom: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", position: "relative", zIndex: 1, background: `${sk.ca}30`, boxShadow: `0 0 20px ${sk.ca}33` }}>{sk.icon}</div>
      <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", position: "relative", zIndex: 1 }}>{sk.title}</div>
      <div style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.6, marginBottom: "1rem", position: "relative", zIndex: 1 }}>{sk.desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, position: "relative", zIndex: 1 }}>
        {sk.pills.map(p => (
          <span key={p} style={{ fontSize: "0.7rem", padding: "3px 10px", borderRadius: 100, background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'Space Grotesk',sans-serif" }}>{p}</span>
        ))}
      </div>
    </div>
  );
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
function Experience() {
  const [ref, inView] = useInView();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" style={{ padding: "7rem 6rem", background: "#04040a", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(40px)", transition: "all 0.75s ease" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", padding: "5px 14px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Experience</div>
          <h2 style={{ fontSize: "clamp(2.25rem,4vw,3.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Pengalaman{" "}
            <span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Organisasi & Kepanitiaan </span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", top: 16, right: 16, fontSize: "0.7rem", color: "#00d4ff" }}>{exp.year}</span>
              <h3 style={{ color: "#fff", fontSize: "1.1rem" }}>{exp.title}</h3>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>{exp.org}</div>
              <ul style={{ paddingLeft: "1rem", color: "#94a3b8" }}>
                {exp.desc.map((d, idx) => <li key={idx}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: "4rem" }}>
          <h3 style={{ color: "#00d4ff", fontSize: "1rem", marginBottom: "1.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Certifications
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {ACHIEVEMENTS.map((item, i) => (
              <div key={i} style={{
                background: "rgba(0,212,255,0.03)",
                border: "1px solid rgba(0,212,255,0.15)",
                borderRadius: 16,
                padding: "1rem",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)"; e.currentTarget.style.transform = "none"; }}
              >
                {/* Certificate image / placeholder */}
                <div
                  onClick={() => setSelectedCert(item)}
                  style={{
                    width: "100%",
                    height: 140,
                    borderRadius: 10,
                    marginBottom: "0.75rem",
                    cursor: "pointer",
                    overflow: "hidden",
                    position: "relative",
                    background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(0,212,255,0.1))",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
  src={item.image}
  alt={item.title}
  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
/>
                  {/* Overlay hover hint */}
                  <div style={{
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.2s",
  borderRadius: 10,
  fontSize: "0.75rem",
  color: "#fff",
  fontWeight: 600,
  letterSpacing: "0.05em",
  pointerEvents: "none" // 🔥 TAMBAH INI
}}
                    onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "0"}
                  >
                    🔍 Preview
                  </div>
                </div>

                {/* Type badge */}
                <span style={{
                  display: "inline-block",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "3px 10px",
                  borderRadius: 100,
                  marginBottom: "0.4rem",
                  background: item.type === "Bootcamp" ? "rgba(0,212,255,0.12)" : "rgba(245,158,11,0.12)",
                  color: item.type === "Bootcamp" ? "#00d4ff" : "#f59e0b",
                  border: `1px solid ${item.type === "Bootcamp" ? "rgba(0,212,255,0.2)" : "rgba(245,158,11,0.2)"}`,
                }}>
                  {item.type}
                </span>

                <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.9rem", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "0.75rem" }}>{item.org} · {item.year}</div>

                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.75rem", color: "#00d4ff", textDecoration: "none", fontWeight: 600 }}
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MODAL PREVIEW ─── */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
            padding: "2rem",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#0d0d1a",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 20,
              padding: "1.5rem",
              maxWidth: 580,
              width: "100%",
              cursor: "default",
            }}
          >
            {/* Modal header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: 4 }}>{selectedCert.title}</div>
                <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{selectedCert.org} · {selectedCert.year}</div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: "0.8rem", fontFamily: "inherit" }}
              >
                ✕ Tutup
              </button>
            </div>

            {/* Certificate image */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              style={{ width: "100%", borderRadius: 12, display: "block", maxHeight: 380, objectFit: "cover", background: "rgba(255,255,255,0.03)" }}
            />

            {/* Action button */}
            <a
              href={selectedCert.certificate}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                marginTop: "1rem",
                background: "linear-gradient(135deg,#7c3aed,#00d4ff)",
                color: "#fff",
                padding: "0.75rem",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.85rem",
              }}
            >
              Lihat Sertifikat Asli →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ p }) {
  const [hover, setHover] = useState(false);

  const CardContent = (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 22,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        border: hover
          ? "1px solid rgba(0,212,255,0.4)"
          : "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-8px)" : "none",
        boxShadow: hover
          ? "0 25px 80px rgba(0,212,255,0.15)"
          : "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      {/* IMAGE */}
      <img
        src={p.image}
        alt={p.title}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          transition: "transform 0.5s ease",
          transform: hover ? "scale(1.08)" : "scale(1)",
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
        }}
      />

      {/* CONTENT */}
      <div style={{ position: "absolute", bottom: 0, padding: "1.2rem", width: "100%" }}>
        <span style={{ fontSize: "0.6rem", color: "#00d4ff" }}>
          {p.category}
        </span>

        <h3 style={{ color: "#fff", fontSize: "1.05rem", margin: "4px 0" }}>
          {p.title}
        </h3>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.75rem",
            maxHeight: hover ? "60px" : "0px",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
        >
          {p.desc}
        </p>

        {/* TECH */}
        <div style={{ marginTop: "0.5rem", display: "flex", gap: 6, flexWrap: "wrap" }}>
          {p.tech.slice(0, 3).map((t) => (
            <span key={t} style={{
              fontSize: "0.6rem",
              padding: "2px 8px",
              borderRadius: 100,
              background: "rgba(0,212,255,0.15)",
              color: "#00d4ff",
              border: "1px solid rgba(0,212,255,0.3)",
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* LINK INDICATOR */}
        {p.link && (
          <span style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            fontSize: "0.7rem",
            color: "#00d4ff"
          }}>
            ↗ Live
          </span>
        )}
      </div>

      {/* FEATURE */}
      {p.highlight && (
        <div style={{
          position: "absolute",
          top: 12,
          left: 12,
          background: "linear-gradient(135deg,#00d4ff,#7c3aed)",
          color: "#fff",
          fontSize: "0.6rem",
          padding: "4px 10px",
          borderRadius: 100,
        }}>
          ★ Featured
        </div>
      )}
    </div>
  );

  // ✅ CONDITIONAL DI LUAR JSX
  if (p.link) {
    return (
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

function Portfolio() {
  const [ref, inView] = useInView();

  return (
    <section
      id="portfolio"
      style={{
        padding: "7rem 6rem",
        background: "#070710",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div
          ref={ref}
          style={{
            marginBottom: "3rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(40px)",
            transition: "all 0.75s ease",
          }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,212,255,0.06)",
            border: "1px solid rgba(0,212,255,0.15)",
            padding: "5px 14px",
            borderRadius: 100,
            fontSize: "0.72rem",
            fontWeight: 600,
            color: "#00d4ff",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.25rem"
          }}>
            Portfolio
          </div>

          <h2 style={{
            fontSize: "clamp(2.25rem,4vw,3.5rem)",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1.1
          }}>
            Proyek{" "}
            <span style={{
              background: "linear-gradient(135deg,#00d4ff,#7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Terbaik
            </span>
          </h2>
        </div>

        {/* GRID PROJECT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [hovLink, setHovLink] = useState(null);

  const links = [
    { icon: "📧", type: "Email", val: ME.email, href: `mailto:${ME.email}`, cls: "rgba(124,58,237,0.2)" },
    { icon: "💻", type: "GitHub", val: "github.com/npafifah", href: ME.github, cls: "rgba(255,255,255,0.07)" },
    { icon: "💼", type: "LinkedIn", val: "linkedin.com/in/nurputriafifah", href: ME.linkedin, cls: "rgba(59,130,246,0.2)" },
    { icon: "📸", type: "Instagram", val: "@fifhptrii", href: ME.instagram, cls: "rgba(236,72,153,0.2)" },
  ];

  return (
    <section id="contact" style={{ padding: "7rem 6rem", background: "#04040a", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.1),rgba(0,212,255,0.05))", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 28, padding: "4rem", position: "relative", overflow: "hidden", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(40px)", transition: "all 0.75s ease" }}>
          <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.15),transparent 70%)", pointerEvents: "none" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", position: "relative" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", padding: "5px 14px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Kontak</div>
              <h2 style={{ fontSize: "clamp(2.25rem,4vw,3.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
                Mari<br /><span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Berkolaborasi</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(226,232,240,0.5)", lineHeight: 1.8, marginBottom: "2.5rem" }}>Terbuka untuk freelance, magang, atau diskusi ide. Inbox selalu terbuka!</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((l, i) => (
                  <a key={l.type} href={l.href} target={l.href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
                    onMouseEnter={() => setHovLink(i)} onMouseLeave={() => setHovLink(null)}
                    style={{ display: "flex", alignItems: "center", gap: "1rem", background: hovLink === i ? "rgba(0,212,255,0.06)" : "rgba(255,255,255,0.03)", border: `1px solid ${hovLink === i ? "rgba(0,212,255,0.25)" : "rgba(255,255,255,0.07)"}`, borderRadius: 14, padding: "1rem 1.25rem", textDecoration: "none", transition: "all 0.25s", transform: hovLink === i ? "translateX(6px)" : "none" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: l.cls, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{l.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", fontWeight: 600 }}>{l.type}</div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 600, color: hovLink === i ? "#00d4ff" : "#fff", transition: "color 0.2s" }}>{l.val}</div>
                    </div>
                    <span style={{ color: hovLink === i ? "#00d4ff" : "#64748b", transition: "all 0.2s", transform: hovLink === i ? "translateX(4px)" : "none" }}>→</span>
                  </a>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: "2rem" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#10b981", marginBottom: 8 }}>Pesan Terkirim!</div>
                  <div style={{ fontSize: 14, color: "#64748b" }}>Terima kasih, saya akan segera membalas.</div>
                </div>
              ) : (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
                    {[["name", "Nama", "text", "Nama kamu"], ["email", "Email", "email", "email@contoh.com"]].map(([k, l, t, ph]) => (
                      <div key={k}>
                        <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748b", marginBottom: "0.5rem" }}>{l}</label>
                        <input type={t} value={form[k]} onChange={e => setForm(x => ({ ...x, [k]: e.target.value }))} placeholder={ph}
                          style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "0.875rem 1rem", fontSize: "0.95rem", color: "#fff", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: "1.25rem" }}>
                    <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748b", marginBottom: "0.5rem" }}>Subjek</label>
                    <input value={form.subject} onChange={e => setForm(x => ({ ...x, subject: e.target.value }))} placeholder="Topik pesan"
                      style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "0.875rem 1rem", fontSize: "0.95rem", color: "#fff", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                  </div>
                  <div style={{ marginBottom: "1.25rem" }}>
                    <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748b", marginBottom: "0.5rem" }}>Pesan</label>
                    <textarea value={form.message} onChange={e => setForm(x => ({ ...x, message: e.target.value }))} placeholder="Ceritakan proyekmu..." rows={4}
                      style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "0.875rem 1rem", fontSize: "0.95rem", color: "#fff", outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={() => { if (form.name && form.email && form.message) setSent(true); }}
                    style={{ width: "100%", background: "linear-gradient(135deg,#7c3aed,#00d4ff)", border: "none", borderRadius: 12, padding: "1rem", fontSize: "0.9rem", fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(124,58,237,0.3)", letterSpacing: "0.02em", transition: "opacity 0.2s,transform 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}>
                    Kirim Pesan →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const fn = () => {
      for (const id of ["hero", "about", "skills", "experience", "portfolio", "contact"]) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) setActive(id);
      }
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: #04040a; color: #e2e8f0; overflow-x: hidden; cursor: none; }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:none} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.18); }
        input, textarea { color: #fff !important; }
      `}</style>

      {/* BG orbs */}
      <div style={{ position: "fixed", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 0, width: 600, height: 600, background: "rgba(124,58,237,0.15)", top: -200, right: -200 }} />
      <div style={{ position: "fixed", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 0, width: 500, height: 500, background: "rgba(0,212,255,0.1)", bottom: -200, left: -200 }} />
      <div style={{ position: "fixed", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 0, width: 300, height: 300, background: "rgba(236,72,153,0.08)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      <Cursor />
      <Nav active={active} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />

      <footer style={{ background: "#070710", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2rem 6rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.78rem", color: "#64748b", fontFamily: "'Space Grotesk',sans-serif" }}>© 2026 Nur Putri Afifah</span>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1rem", fontWeight: 700, color: "#00d4ff" }}>NPA.</span>
      </footer>
    </>
  );
}