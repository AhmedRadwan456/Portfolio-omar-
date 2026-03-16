import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Terminal,
  Server,
  Database,
  Briefcase,
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

const data = {
  name: "Omar Samir Mahmoud",
  title: "DevOps Engineer",
  summary:
    "DevOps-focused engineer with hands-on projects in scripting, automation, and containerized workflows. Building reliable, scalable infrastructure from code to production.",
  contact: {
    email: "omarsamiir2003@gmail.com",
    phone: "+20 111 615 9571",
    whatsapp: "https://wa.me/201116159571",
    location: "Dar Masr El Shrouk, Egypt",
    github: "https://github.com/Osamir60",
    linkedin: "https://www.linkedin.com/in/omar-samir-810b13236?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  experience: [
    {
      role: "GDG On Campus – Future Academy Chapter Leader",
      org: "Google Developers",
      time: "2024 – 2025",
      bullets: [
        "Led and organized technical events, workshops, and hackathons for students.",
        "Coordinated with Google Developers community to deliver high-impact sessions.",
        "Mentored peers in software development, cloud technologies, and career growth.",
      ],
      icon: <Briefcase size={20} />
    },
  ],
  projects: [
    {
      name: "Lightweight DBMS",
      tag: "Bash • Git",
      desc: "Developed a lightweight DBMS using Bash scripting to perform CRUD operations on directories and files, simulating databases and tables.",
      link: "#",
      icon: <Terminal size={24} color="#e0e0e0" />
    },
    {
      name: "Crowd Funding Console",
      tag: "Python • Hashing",
      desc: "Built a console-based application to manage crowdfunding projects with full CRUD functionality and password hashing.",
      link: "#",
      icon: <Database size={24} color="#e0e0e0" />
    },
  ],
  skills: [
    { category: "Cloud & Containers", items: ["AWS", "Docker", "Kubernetes", "OpenShift"], icon: <Server size={20} /> },
    { category: "Automation & CI/CD", items: ["Jenkins", "Terraform", "Ansible", "Git"], icon: <Terminal size={20} /> },
    { category: "OS & Scripting", items: ["Linux Admin", "Bash", "Python"], icon: <Database size={20} /> },
  ],
  education: {
    degree: "B.Sc. in Computer Sciences",
    school: "Future Academy",
    time: "2022 – 2026",
    gpa: "2.8 / 4 (Very Good)",
  },
};


const GlassCard = ({ children, delay = "0" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="animate-fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
        background: 'var(--card-bg)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--card-border)',
        borderRadius: '24px',
        padding: '24px',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 40px -10px rgba(59, 130, 246, 0.2)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

const Chip = ({ children }) => (
  <span style={{
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '99px',
    padding: '6px 14px',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px'
  }}>
    {children}
  </span>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = ['About', 'Experience', 'Projects', 'Skills'];

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>

      {/* Dynamic Background */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: `
          radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.03), transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.02), transparent 25%)
        `,
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px', color: 'var(--text-primary)' }}>
            Omar<span style={{ color: 'var(--accent-color)' }}>.</span>
          </div>

          {/* Desktop Nav */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '32px' }}>
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  style={{
                    background: 'none', border: 'none', color: 'var(--text-secondary)',
                    cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link}
                </button>
              ))}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          )}
        </div>

        {/* Mobile Dropdown */}
        {isMobile && isMobileMenuOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '16px 24px',
            display: 'flex', flexDirection: 'column', gap: '16px'
          }}>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  background: 'none', border: 'none', color: 'var(--text-primary)',
                  cursor: 'pointer', fontSize: '1.1rem', fontWeight: 500, textAlign: 'left',
                  padding: '8px 0'
                }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 24px 40px' }}>

        {/* HERO SECTION */}
        <section id="about" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <img
              src="/omar samir.jpeg"
              alt="Omar Samir"
              style={{
                width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover',
                border: '2px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                animation: 'float 6s ease-in-out infinite'
              }}
            />
            <div>
              <div style={{
                color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px',
                textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '8px'
              }}>
                {data.title}
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1,
                letterSpacing: '-1px', margin: 0,
                background: 'linear-gradient(to right, #ffffff, #a1a1aa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                color: 'transparent'
              }}>
                Building robust <br />cloud architectures.
              </h1>
            </div>
          </div>

          <p className="animate-fade-in-up" style={{
            animationDelay: '200ms', fontSize: '1.2rem', color: 'var(--text-secondary)',
            maxWidth: '600px', lineHeight: 1.6, marginBottom: '40px'
          }}>
            {data.summary}
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: '300ms', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href={data.contact.github} target="_blank" rel="noreferrer" style={btnStyle('primary')}>
              <Github size={18} /> GitHub Profile
            </a>
            <a href={data.contact.linkedin} target="_blank" rel="noreferrer" style={btnStyle('secondary')}>
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={data.contact.whatsapp} target="_blank" rel="noreferrer" style={btnStyle('ghost')}>
              <Phone size={18} /> Contact Me
            </a>
          </div>

          <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.5, animation: 'float 2s ease-in-out infinite' }}>
            <ChevronDown size={24} color="white" />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" style={{ padding: '60px 0' }}>
          <h2 style={sectionHeaderStyle(isMobile)}>Experience & Leadership</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {data.experience.map((exp, i) => (
              <GlassCard key={i} delay={i * 100}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', color: 'var(--text-primary)' }}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', margin: '0 0 4px', fontWeight: 600, color: 'var(--text-primary)' }}>{exp.role}</h3>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{exp.org}</p>
                    </div>
                  </div>
                  <Chip>{exp.time}</Chip>
                </div>
                <ul style={{ marginTop: '24px', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)}
                </ul>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" style={{ padding: '60px 0' }}>
          <h2 style={sectionHeaderStyle(isMobile)}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {data.projects.map((project, i) => (
              <GlassCard key={i} delay={i * 100}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '20px' }}>{project.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', margin: '0 0 8px', fontWeight: 600, color: 'var(--text-primary)' }}>{project.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                    {project.desc}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{project.tag}</span>
                    <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                      View Code <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" style={{ padding: '60px 0' }}>
          <h2 style={sectionHeaderStyle(isMobile)}>Technical Arsenal</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {data.skills.map((skillGroup, i) => (
              <GlassCard key={i} delay={i * 100}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ color: 'var(--text-primary)' }}>{skillGroup.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>{skillGroup.category}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skillGroup.items.map(item => <Chip key={item}>{item}</Chip>)}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTACT TRAY */}
        <footer style={{
          marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px'
        }}>
          <div style={{ display: 'flex', gap: '24px', color: 'var(--text-secondary)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> {data.contact.location}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={16} /> {data.contact.phone}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> {data.contact.email}</div>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', textAlign: 'center' }}>
            © {new Date().getFullYear()} {data.name}. Built with React & Vite.
          </div>
        </footer>

      </main>
    </div>
  );
}

// Helper styles
const sectionHeaderStyle = (isMobile) => ({
  fontSize: isMobile ? '1.5rem' : '1.8rem',
  fontWeight: 700,
  letterSpacing: '-0.5px',
  marginBottom: '28px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: 'var(--text-primary)'
});

const btnStyle = (variant) => {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '12px 24px', borderRadius: '12px',
    fontSize: '0.95rem', fontWeight: 600,
    textDecoration: 'none', transition: 'all 0.2s ease',
    cursor: 'pointer'
  };

  if (variant === 'primary') return {
    ...base,
    background: 'var(--text-primary)',
    color: 'var(--bg-primary)',
    border: '1px solid transparent'
  };
  if (variant === 'secondary') return {
    ...base,
    background: 'rgba(255, 255, 255, 0.05)',
    color: 'var(--text-primary)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };
  return {
    ...base,
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid rgba(255,255,255,0.1)'
  };
};
