import { useState, useEffect, useRef } from "react";

const ME = {
  name: "Nama Kamu",
  university: "Universitas Kamu • Sistem Informasi • Semester 6",
  tagline: "Membangun antarmuka yang intuitif, cepat, dan berdampak.",
  about:
    "Saya mahasiswa Sistem Informasi semester 6 yang passionate dalam membangun pengalaman web yang modern dan accessible. Saya menyukai proses dari wireframe hingga production — mengubah ide menjadi produk nyata yang bisa digunakan orang.",
  email: "email@kamu.com",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
};

const SKILLS = [
  { cat: "Framework & Library", items: ["React.js", "Next.js", "Redux", "React Query"] },
  { cat: "Styling", items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Figma"] },
  { cat: "Bahasa", items: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3"] },
  { cat: "Tools & Workflow", items: ["Git & GitHub", "REST API", "Vite", "Agile/Scrum"] },
];

const PROJECTS = [
  {
    id: 1, title: "E-Commerce Dashboard", category: "Web App",
    desc: "Dashboard admin lengkap untuk manajemen produk, pesanan, dan pelanggan dengan grafik analytics real-time dan tampilan responsif.",
    tech: ["React.js", "Tailwind CSS", "Chart.js", "REST API"],
    live: "#", repo: "#", accent: "#2563EB", bg: "#EFF6FF", emoji: "🖥️",
  },
  {
    id: 2, title: "Task Management App", category: "Productivity",
    desc: "Aplikasi to-do list dengan Kanban board drag-and-drop, label prioritas, deadline reminder, dan filter berdasarkan status.",
    tech: ["React.js", "Context API", "DnD Kit", "LocalStorage"],
    live: "#", repo: "#", accent: "#059669", bg: "#ECFDF5", emoji: "✅",
  },
  {
    id: 3, title: "Company Profile Website", category: "Landing Page",
    desc: "Landing page modern untuk startup dengan animasi scroll reveal, section layanan, portofolio tim, dan form kontak terintegrasi.",
    tech: ["React.js", "Framer Motion", "EmailJS", "Vite"],
    live: "#", repo: "#", accent: "#7C3AED", bg: "#F5F3FF", emoji: "🌐",
  },
  {
    id: 4, title: "Weather Forecast App", category: "API Integration",
    desc: "Aplikasi cuaca dengan pencarian kota, 7-hari forecast, ikon dinamis, dan deteksi lokasi otomatis via Geolocation API.",
    tech: ["React.js", "OpenWeather API", "Geolocation API", "CSS3"],
    live: "#", repo: "#", accent: "#0891B2", bg: "#ECFEFF", emoji: "🌤️",
  },
  {
    id: 5, title: "UI Component Library", category: "Design System",
    desc: "Koleksi 25+ komponen React yang reusable dan terdokumentasi di Storybook dengan dark mode support penuh.",
    tech: ["React.js", "Storybook", "TypeScript", "CSS Variables"],
    live: "#", repo: "#", accent: "#DB2777", bg: "#FDF2F8", emoji: "🧩",
  },
  {
    id: 6, title: "Blog Platform", category: "Full Stack",
    desc: "Platform blog dengan autentikasi user, CRUD artikel, rich text editor, fitur like & komentar, serta halaman profil penulis.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT"],
    live: "#", repo: "#", accent: "#D97706", bg: "#FFFBEB", emoji: "📝",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(255,255,255,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid #E5E7EB" : "none", transition: "all 0.3s ease", padding: "0 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, color: "#111", letterSpacing: "-0.02em" }}>
          {ME.name.split(" ")[0].toLowerCase()}<span style={{ color: "#2563EB" }}>.</span>dev
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          {["about", "skills", "projects", "contact"].map(s => (
            <a key={s} href={`#${s}`} style={{ fontSize: 14, color: active === s ? "#2563EB" : "#374151", textDecoration: "none", fontWeight: active === s ? 600 : 400, transition: "color 0.2s" }}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const phrases = ["Frontend Developer", "UI/UX Enthusiast", "React.js Developer"];
  const [typed, setTyped] = useState("");
  const [pi, setPi] = useState(0);
  useEffect(() => {
    let i = 0, del = false, t;
    const tick = () => {
      const p = phrases[pi];
      if (!del && i <= p.length) { setTyped(p.slice(0, i++)); t = setTimeout(tick, 80); }
      else if (!del) { del = true; t = setTimeout(tick, 1400); }
      else if (del && i > 0) { setTyped(p.slice(0, --i)); t = setTimeout(tick, 40); }
      else { del = false; setPi(x => (x + 1) % phrases.length); }
    };
    t = setTimeout(tick, 100);
    return () => clearTimeout(t);
  }, [pi]);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, background: "linear-gradient(135deg, #F9FAFB 0%, #EFF6FF 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#DBEAFE", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2563EB", display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 12, color: "#1D4ED8", fontWeight: 600 }}>Open for Internship 2026</span>
            </div>
            <h1 style={{ fontSize: 52, fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#0F172A", lineHeight: 1.1, margin: "0 0 16px", letterSpacing: "-0.03em" }}>
              Halo, saya<br /><span style={{ color: "#2563EB" }}>{ME.name}</span>
            </h1>
            <div style={{ fontSize: 22, color: "#374151", marginBottom: 20, height: 32, fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>
              {typed}<span style={{ borderRight: "2px solid #2563EB", animation: "blink 1s step-end infinite" }}>&nbsp;</span>
            </div>
            <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.75, marginBottom: 36, maxWidth: 440 }}>{ME.tagline}</p>
            <div style={{ display: "flex", gap: 14 }}>
              <a href="#projects" style={{ background: "#2563EB", color: "#fff", padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 15, transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px #2563EB44"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                Lihat Project →
              </a>
              <a href="#contact" style={{ background: "transparent", color: "#2563EB", padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 15, border: "1.5px solid #2563EB" }}>
                Hubungi Saya
              </a>
            </div>
            <div style={{ display: "flex", gap: 28, marginTop: 40 }}>
              {[{ label: "Projects", val: "10+" }, { label: "Semester", val: "6" }, { label: "Technologies", val: "15+" }].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", fontFamily: "'Sora', sans-serif" }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: 360, height: 360 }}>
              <div style={{ width: 300, height: 300, borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%", background: "linear-gradient(135deg, #DBEAFE, #EDE9FE)", position: "absolute", top: 30, left: 30, animation: "morph 8s ease-in-out infinite" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 200, height: 200, borderRadius: "50%", background: "#E5E7EB", overflow: "hidden", border: "4px solid #fff", boxShadow: "0 20px 60px #0001", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>👤</div>
              </div>
              {[
                { emoji: "⚛️", label: "React.js", style: { top: 10, left: 10 } },
                { emoji: "🎨", label: "UI/UX", style: { top: 10, right: 10 } },
                { emoji: "🚀", label: "Fast", style: { bottom: 30, right: 10 } },
              ].map(b => (
                <div key={b.label} style={{ position: "absolute", ...b.style, background: "#fff", borderRadius: 12, padding: "10px 14px", boxShadow: "0 4px 20px #0001", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 18 }}>{b.emoji}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" style={{ padding: "100px 2rem", background: "#fff" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#2563EB", fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>// TENTANG SAYA</div>
          <h2 style={{ fontSize: 38, fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#0F172A", marginBottom: 20, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Passionate dalam<br />membangun UI yang<br /><span style={{ color: "#2563EB" }}>berkesan</span>
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.8, marginBottom: 28 }}>{ME.about}</p>
          <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, padding: "16px 20px" }}>
            <div style={{ fontSize: 13, color: "#64748B", marginBottom: 4 }}>🎓 Pendidikan</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#0F172A" }}>{ME.university}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { icon: "⚡", title: "Fast Learner", desc: "Cepat adaptasi dengan teknologi dan framework baru" },
            { icon: "🎯", title: "Detail Oriented", desc: "Memperhatikan setiap pixel dan interaksi pengguna" },
            { icon: "🤝", title: "Team Player", desc: "Kolaboratif dan komunikatif dalam lingkungan tim" },
            { icon: "💡", title: "Problem Solver", desc: "Selalu mencari solusi kreatif untuk setiap tantangan" },
          ].map(c => (
            <div key={c.title} style={{ background: "#F8FAFC", borderRadius: 14, padding: "20px 18px", border: "1px solid #E2E8F0", transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px #0001"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 2rem", background: "#F9FAFB" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#2563EB", fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>// KEAHLIAN</div>
            <h2 style={{ fontSize: 38, fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.02em" }}>Tech Stack saya</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {SKILLS.map((sk, i) => (
            <FadeIn key={sk.cat} delay={i * 0.1}>
              <div style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", border: "1px solid #E5E7EB", height: "100%" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", marginBottom: 18, textTransform: "uppercase", letterSpacing: 1 }}>{sk.cat}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {sk.items.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151", fontWeight: 500 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB", flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="projects" style={{ padding: "100px 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#2563EB", fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>// PROYEK</div>
            <h2 style={{ fontSize: 38, fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.02em" }}>Project yang pernah saya buat</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.07}>
              <div onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}
                style={{ borderRadius: 18, overflow: "hidden", border: `1px solid ${hovered === p.id ? p.accent + "55" : "#E5E7EB"}`, transition: "all 0.3s ease", transform: hovered === p.id ? "translateY(-6px)" : "none", boxShadow: hovered === p.id ? `0 20px 60px ${p.accent}22` : "none" }}>
                <div style={{ background: p.bg, height: 110, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 60, height: 60, borderRadius: 15, background: p.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{p.emoji}</div>
                </div>
                <div style={{ padding: "22px 20px 18px", background: "#fff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", margin: 0 }}>{p.title}</h3>
                    <span style={{ fontSize: 11, fontWeight: 600, color: p.accent, background: p.bg, padding: "3px 9px", borderRadius: 100, whiteSpace: "nowrap", marginLeft: 8 }}>{p.category}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ fontSize: 11, color: "#6B7280", background: "#F3F4F6", padding: "3px 9px", borderRadius: 100, fontFamily: "'DM Mono', monospace" }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8, borderTop: "1px solid #F3F4F6", paddingTop: 14 }}>
                    <a href={p.live} style={{ flex: 1, textAlign: "center", background: p.accent, color: "#fff", padding: "8px 0", borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: 600 }}>Live Demo</a>
                    <a href={p.repo} style={{ flex: 1, textAlign: "center", background: "#F3F4F6", color: "#374151", padding: "8px 0", borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: 600 }}>GitHub</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" style={{ padding: "100px 2rem", background: "#F9FAFB" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#2563EB", fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>// KONTAK</div>
            <h2 style={{ fontSize: 38, fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#0F172A", marginBottom: 16, letterSpacing: "-0.02em" }}>Mari terhubung!</h2>
            <p style={{ color: "#6B7280", fontSize: 16 }}>Saya terbuka untuk peluang magang dan kolaborasi. Jangan ragu untuk menghubungi saya.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 44 }}>
            {[
              { label: "Email", icon: "✉️", href: `mailto:${ME.email}`, val: ME.email },
              { label: "GitHub", icon: "🐙", href: ME.github, val: "github.com/username" },
              { label: "LinkedIn", icon: "💼", href: ME.linkedin, val: "linkedin.com/in/username" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: "12px 16px", textDecoration: "none", transition: "all 0.2s", flex: 1 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#2563EB"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.transform = "none"; }}>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: "#374151", fontWeight: 600 }}>{s.val}</div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "48px 24px", background: "#ECFDF5", borderRadius: 16, border: "1px solid #A7F3D0" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#059669", marginBottom: 8 }}>Pesan terkirim!</div>
              <div style={{ fontSize: 15, color: "#6B7280" }}>Terima kasih, saya akan segera membalas.</div>
            </div>
          ) : (
            <div style={{ background: "#fff", borderRadius: 18, padding: "40px", border: "1px solid #E5E7EB" }}>
              <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                {[
                  { key: "name", label: "Nama", placeholder: "Nama kamu" },
                  { key: "email", label: "Email", placeholder: "email@kamu.com" },
                ].map(f => (
                  <div key={f.key} style={{ flex: 1 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>{f.label}</label>
                    <input value={form[f.key]} onChange={e => setForm(x => ({ ...x, [f.key]: e.target.value }))} placeholder={f.placeholder}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Pesan</label>
                <textarea value={form.message} onChange={e => setForm(x => ({ ...x, message: e.target.value }))} placeholder="Tuliskan pesanmu di sini..." rows={4}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontSize: 14, outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <button onClick={() => { if (form.name && form.email && form.message) setSent(true); }}
                style={{ width: "100%", background: "#2563EB", color: "#fff", padding: "13px 0", borderRadius: 10, border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}
                onMouseEnter={e => e.currentTarget.style.background = "#1D4ED8"}
                onMouseLeave={e => e.currentTarget.style.background = "#2563EB"}>
                Kirim Pesan →
              </button>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const fn = () => {
      for (const id of ["hero", "about", "skills", "projects", "contact"]) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) setActiveSection(id);
      }
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Mono:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Sora', sans-serif; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes morph { 0%,100%{border-radius:40% 60% 60% 40%/40% 40% 60% 60%} 50%{border-radius:60% 40% 40% 60%/60% 60% 40% 40%} }
      `}</style>
      <Nav active={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer style={{ background: "#0F172A", color: "#94A3B8", textAlign: "center", padding: "32px 2rem" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, marginBottom: 6 }}>
          <span style={{ color: "#fff" }}>{ME.name}</span> · Portfolio 2026
        </div>
        <div style={{ fontSize: 12 }}>Dibangun dengan React.js · Untuk melamar magang DWP 2026</div>
      </footer>
    </>
  );
}