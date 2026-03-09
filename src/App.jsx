import { useMemo, useState } from "react";

const data = {
  name: "Omar Samir Mahmoud",
  title: "DevOps Engineer",
  summary:
    "DevOps-focused engineer with hands-on projects in scripting, automation, and containerized workflows. Interested in CI/CD, Kubernetes, IaC, and cloud platforms.",
  contact: {
    email: "omarsamiir2003@gmail.com",
    phone: "+20 111 615 9571",
    location: "Dar Masr El Shrouk, Egypt",
    github: "#", // حط لينك GitHub هنا
    linkedin: "#", // حط لينك LinkedIn هنا
  },
  snapshot: [
    { k: "Cloud", v: "AWS, Basic GCP" },
    { k: "Containers", v: "Docker, Kubernetes, OpenShift" },
    { k: "CI/CD", v: "Jenkins" },
    { k: "IaC", v: "Terraform, Ansible" },
    { k: "Scripting", v: "Bash, Python" },
  ],
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
    },
  ],
  projects: [
    {
      name: "Lightweight DBMS (Bash)",
      tag: "Bash • Git",
      desc:
        "Developed a lightweight DBMS using Bash scripting to perform CRUD operations on directories and files, simulating databases and tables.",
      bullets: [
        "Menu-driven workflow for usability and efficiency.",
        "CRUD operations for “databases” and “tables”.",
      ],
      repo: "#", // حط لينك الريبو
    },
    {
      name: "Crowd Funding Console App (Python)",
      tag: "Python • Hashing",
      desc:
        "Built a console-based application to manage crowdfunding projects with full CRUD functionality.",
      bullets: [
        "Authentication with password hashing.",
        "Project filtering by creation date.",
        "Structured data display using Tabulate.",
      ],
      repo: "#", // حط لينك الريبو
    },
  ],
  skills: [
    { title: "Cloud", items: ["AWS", "Basic GCP"] },
    { title: "Containers & Orchestration", items: ["Docker", "Kubernetes", "OpenShift", "Containerization"] },
    { title: "Automation & CI/CD", items: ["Jenkins", "Terraform", "Ansible", "Git & GitHub"] },
    { title: "OS / Admin", items: ["Linux", "System Administration"] },
    { title: "Programming", items: ["Python", "Bash"] },
    { title: "Soft Skills", items: ["Communication", "Collaboration", "Time Management", "Adaptability", "Self-Learning", "Commitment"] },
  ],
  education: {
    degree: "Bachelor of Sciences in Computer Sciences — Future Academy",
    time: "2022 – 2026",
    gpa: "2.8 / 4 (Very Good)",
  },
  courses: {
    devops: ["Senior Steps — DevOps Engineer", "Udemy — DevOps Engineer"],
    linux: [
      "Mahara Tech — Red Hat System Administration I (ITI)",
      "Mahara Tech — Red Hat System Administration II (ITI)",
      "ITI — Ubuntu Linux Essential",
      "CISCO Networking Academy — Operating Systems Basics",
    ],
    languages: ["Arabic — Native", "English — Good"],
  },
};

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} style={styles.section}>
      <div style={styles.sectionHead}>
        <h2 style={styles.h2}>{title}</h2>
        {subtitle ? <p style={styles.muted}>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Chip({ children, href }) {
  const style = href ? styles.chipLink : styles.chip;
  return href ? (
    <a style={style} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <span style={style}>{children}</span>
  );
}

function Card({ children }) {
  return <div style={styles.card}>{children}</div>;
}

function Button({ children, href, variant = "primary", onClick, type }) {
  const base = variant === "ghost" ? styles.btnGhost : styles.btn;
  if (href) {
    const isHash = href.startsWith("#");
    return (
      <a style={base} href={href} onClick={onClick} {...(isHash ? {} : { target: "_blank", rel: "noreferrer" })}>
        {children}
      </a>
    );
  }
  return (
    <button style={base} onClick={onClick} type={type || "button"}>
      {children}
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = useMemo(
    () => [
      ["about", "About"],
      ["experience", "Experience"],
      ["projects", "Projects"],
      ["skills", "Skills"],
      ["education", "Education"],
      ["courses", "Courses"],
      ["contact", "Contact"],
    ],
    []
  );

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.nav}>
            <a href="#top" style={styles.logo}>
              Omar<span style={{ color: stylesVars.accent }}>.</span>
            </a>

            <button
              style={styles.navToggle}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              ☰
            </button>

            <nav style={{ ...styles.navLinks, ...(menuOpen ? styles.navLinksOpen : {}) }}>
              {nav.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  style={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div style={styles.navCta}>
              <Button href="#contact" variant="ghost">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main id="top" style={styles.main}>
        {/* HERO */}
        <div style={styles.container}>
          <section style={styles.hero}>
            <div>
              <p style={styles.pill}>{data.title}</p>
              <h1 style={styles.h1}>
                {data.name}{" "}
                <span style={styles.h1Muted}>— building reliable, automated infrastructure.</span>
              </h1>
              <p style={styles.lead}>{data.summary}</p>

              <div style={styles.heroActions}>
                <Button href="#projects">View Projects</Button>
                <Button href="#contact" variant="ghost">
                  Contact
                </Button>
              </div>

              <div style={styles.heroMeta}>
                <a style={styles.meta} href={`mailto:${data.contact.email}`}>
                  {data.contact.email}
                </a>
                <span style={styles.dot}>•</span>
                <a style={styles.meta} href={`tel:${data.contact.phone.replace(/\s/g, "")}`}>
                  {data.contact.phone}
                </a>
                <span style={styles.dot}>•</span>
                <span style={styles.meta}>{data.contact.location}</span>
              </div>

              <div style={styles.heroLinks}>
                <Chip href={data.contact.github}>GitHub</Chip>
                <Chip href={data.contact.linkedin}>LinkedIn</Chip>
                <Chip href="#skills">Tech Stack</Chip>
              </div>
            </div>

            <div>
              <Card>
                <h3 style={styles.h3}>Quick Snapshot</h3>
                <ul style={styles.list}>
                  {data.snapshot.map((s) => (
                    <li key={s.k} style={styles.listItem}>
                      <strong style={styles.strong}>{s.k}:</strong> {s.v}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 14 }}>
                  <Button href="#contact">Let’s talk</Button>
                </div>
              </Card>
            </div>
          </section>

          {/* ABOUT */}
          <Section id="about" title="About" subtitle="Short intro based on your CV highlights.">
            <div style={styles.grid2}>
              <Card>
                <h3 style={styles.h3}>Who I am</h3>
                <p style={styles.p}>
                  I’m a DevOps Engineer passionate about automation, cloud, and scalable infrastructure.
                  I enjoy building reliable pipelines, managing containers, and writing scripts that simplify operations.
                </p>
              </Card>

              <Card>
                <h3 style={styles.h3}>Strengths</h3>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Time management, communication, collaboration</li>
                  <li style={styles.listItem}>Self-learning & adaptability</li>
                  <li style={styles.listItem}>Commitment to clean, maintainable automation</li>
                </ul>
              </Card>
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section id="experience" title="Experience" subtitle="Leadership & community experience.">
            <div style={styles.stack}>
              {data.experience.map((x) => (
                <div key={x.role} style={styles.timelineItem}>
                  <div style={styles.timelineDot} />
                  <Card>
                    <div style={styles.rowBetween}>
                      <h3 style={styles.h3}>{x.role}</h3>
                      <span style={styles.tag}>{x.time}</span>
                    </div>
                    <p style={styles.muted}>{x.org}</p>
                    <ul style={styles.list}>
                      {x.bullets.map((b, i) => (
                        <li key={i} style={styles.listItem}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </Section>

          {/* PROJECTS */}
          <Section id="projects" title="Projects" subtitle="Selected projects (add real GitHub links).">
            <div style={styles.grid2}>
              {data.projects.map((p) => (
                <Card key={p.name}>
                  <div style={styles.rowBetween}>
                    <h3 style={styles.h3}>{p.name}</h3>
                    <span style={styles.tag}>{p.tag}</span>
                  </div>
                  <p style={styles.p}>{p.desc}</p>
                  <ul style={styles.list}>
                    {p.bullets.map((b, i) => (
                      <li key={i} style={styles.listItem}>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div style={styles.rowBetween}>
                    <a style={styles.link} href={p.repo} target="_blank" rel="noreferrer">
                      Repo (add link)
                    </a>
                    <span style={styles.mutedSmall}>Update links anytime</span>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* SKILLS */}
          <Section id="skills" title="Skills" subtitle="Core technical stack and strengths.">
            <div style={styles.grid3}>
              {data.skills.map((g) => (
                <Card key={g.title}>
                  <h3 style={styles.h3}>{g.title}</h3>
                  <div style={styles.chips}>
                    {g.items.map((it) => (
                      <Chip key={it}>{it}</Chip>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* EDUCATION */}
          <Section id="education" title="Education" subtitle="Academic background.">
            <Card>
              <div style={styles.rowBetween}>
                <h3 style={styles.h3}>{data.education.degree}</h3>
                <span style={styles.tag}>{data.education.time}</span>
              </div>
              <p style={styles.muted}>GPA: {data.education.gpa}</p>
            </Card>
          </Section>

          {/* COURSES */}
          <Section id="courses" title="Courses" subtitle="Training and certifications.">
            <div style={styles.grid2}>
              <Card>
                <h3 style={styles.h3}>DevOps</h3>
                <ul style={styles.list}>
                  {data.courses.devops.map((c) => (
                    <li key={c} style={styles.listItem}>
                      {c}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 style={styles.h3}>Linux / Systems</h3>
                <ul style={styles.list}>
                  {data.courses.linux.map((c) => (
                    <li key={c} style={styles.listItem}>
                      {c}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 style={styles.h3}>Languages</h3>
                <ul style={styles.list}>
                  {data.courses.languages.map((c) => (
                    <li key={c} style={styles.listItem}>
                      {c}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>

          {/* CONTACT */}
          <Section id="contact" title="Contact" subtitle="Let’s connect.">
            <div style={styles.grid2}>
              <Card>
                <h3 style={styles.h3}>Reach me</h3>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    <strong style={styles.strong}>Email:</strong>{" "}
                    <a style={styles.link} href={`mailto:${data.contact.email}`}>
                      {data.contact.email}
                    </a>
                  </li>
                  <li style={styles.listItem}>
                    <strong style={styles.strong}>Phone:</strong>{" "}
                    <a style={styles.link} href={`tel:${data.contact.phone.replace(/\s/g, "")}`}>
                      {data.contact.phone}
                    </a>
                  </li>
                  <li style={styles.listItem}>
                    <strong style={styles.strong}>Location:</strong> {data.contact.location}
                  </li>
                </ul>
                <p style={styles.muted}>
                  حط لينكات GitHub / LinkedIn الحقيقيين فوق في data.contact.
                </p>
              </Card>

              <ContactCard />
            </div>
          </Section>

          <footer style={styles.footer}>
            <div style={styles.rowBetweenWrap}>
              <p style={styles.footerText}>©️ {new Date().getFullYear()} {data.name}</p>
              <p style={styles.mutedSmall}>Built with React • Fast • Free hosting-friendly</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function ContactCard() {
  const [note, setNote] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setNote("Message prepared (demo). Hook it to Formspree / Netlify Forms to receive messages.");
  }

  return (
    <Card>
      <h3 style={styles.h3}>Quick message</h3>
      <form onSubmit={onSubmit} style={styles.form}>
        <label style={styles.label}>
          Your Name
          <input style={styles.input} required placeholder="e.g. Ahmed" />
        </label>
        <label style={styles.label}>
          Your Email
          <input style={styles.input} required type="email" placeholder="e.g. ahmed@mail.com" />
        </label>
        <label style={styles.label}>
          Message
          <textarea style={styles.textarea} required rows={4} placeholder="Write your message..." />
        </label>
        <Button type="submit">Send</Button>
        {note ? <p style={styles.mutedSmall}>{note}</p> : null}
      </form>
    </Card>
  );
}

const stylesVars = {
  bg: "#0b0f17",
  card: "#121a2a",
  text: "#e7ecff",
  muted: "#a8b3d6",
  line: "rgba(255,255,255,.10)",
  accent: "#7aa2ff",
  shadow: "0 16px 40px rgba(0,0,0,.35)",
  radius: 16,
  max: 1100,
};

const styles = {
  page: {
    minHeight: "100vh",
    color: stylesVars.text,
    background:
      "radial-gradient(1200px 600px at 20% 0%, rgba(122,162,255,.22), transparent 55%)," +
      "radial-gradient(900px 500px at 80% 10%, rgba(122,162,255,.12), transparent 60%)," +
      stylesVars.bg,
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  container: { maxWidth: stylesVars.max, margin: "0 auto", padding: "0 18px" },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(11,15,23,.75)",
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${stylesVars.line}`,
  },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", gap: 12 },
  logo: { fontWeight: 800, letterSpacing: ".4px", fontSize: 20, textDecoration: "none", color: stylesVars.text },
  navToggle: {
    display: "none",
    border: `1px solid ${stylesVars.line}`,
    background: "transparent",
    color: stylesVars.text,
    borderRadius: 12,
    padding: "10px 12px",
    cursor: "pointer",
  },
  navLinks: { display: "flex", gap: 12, alignItems: "center" },
  navLinksOpen: {},
  navLink: {
    color: stylesVars.muted,
    padding: "10px 10px",
    borderRadius: 12,
    textDecoration: "none",
  },
  navCta: { display: "flex", gap: 10 },
  main: { paddingBottom: 30 },
  hero: { display: "grid", gridTemplateColumns: "1.6fr .9fr", gap: 22, padding: "44px 0 10px" },
  pill: {
    display: "inline-flex",
    padding: "8px 12px",
    border: `1px solid ${stylesVars.line}`,
    borderRadius: 999,
    color: stylesVars.muted,
    background: "rgba(255,255,255,.04)",
    margin: "0 0 14px",
    width: "fit-content",
  },
  h1: { margin: "0 0 14px", fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.12 },
  h1Muted: { color: stylesVars.muted, fontWeight: 600 },
  h2: { margin: "0 0 8px", fontSize: 26 },
  h3: { margin: 0, fontSize: 18 },
  lead: { color: stylesVars.muted, fontSize: 16, lineHeight: 1.7, margin: "0 0 18px" },
  muted: { color: stylesVars.muted, margin: "10px 0 0" },
  mutedSmall: { color: stylesVars.muted, fontSize: 13 },
  dot: { color: stylesVars.muted, margin: "0 8px" },
  heroActions: { display: "flex", gap: 12, margin: "18px 0" },
  heroMeta: { display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", margin: "10px 0 6px" },
  meta: { color: stylesVars.muted, textDecoration: "none" },
  heroLinks: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 },
  section: { padding: "34px 0" },
  sectionHead: { marginBottom: 14 },
  card: {
    background: "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))",
    border: `1px solid ${stylesVars.line}`,
    borderRadius: stylesVars.radius,
    padding: 18,
    boxShadow: stylesVars.shadow,
  },
  grid2: { display: "grid", gap: 16, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
  grid3: { display: "grid", gap: 16, gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
  chips: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 },
  chip: {
    display: "inline-flex",
    padding: "8px 10px",
    borderRadius: 999,
    border: `1px solid ${stylesVars.line}`,
    background: "rgba(255,255,255,.04)",
    color: stylesVars.muted,
    fontSize: 13,
  },
  chipLink: {
    display: "inline-flex",
    padding: "8px 10px",
    borderRadius: 999,
    border: `1px solid ${stylesVars.line}`,
    background: "rgba(255,255,255,.04)",
    color: stylesVars.muted,
    fontSize: 13,
    textDecoration: "none",
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 14px",
    borderRadius: 14,
    border: "1px solid rgba(122,162,255,.45)",
    background: "rgba(122,162,255,.18)",
    color: stylesVars.text,
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    userSelect: "none",
  },
  btnGhost: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 14px",
    borderRadius: 14,
    border: `1px solid ${stylesVars.line}`,
    background: "rgba(255,255,255,.04)",
    color: stylesVars.text,
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    userSelect: "none",
  },
  list: { margin: "12px 0 0", paddingLeft: 18, color: stylesVars.muted, lineHeight: 1.7 },
  listItem: { marginBottom: 6 },
  strong: { color: stylesVars.text },
  p: { color: stylesVars.muted, lineHeight: 1.7, marginTop: 10 },
  tag: {
    fontSize: 12,
    color: stylesVars.muted,
    border: `1px solid ${stylesVars.line}`,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,.04)",
  },
  rowBetween: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" },
  rowBetweenWrap: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" },
  stack: { display: "flex", flexDirection: "column", gap: 16 },
  timelineItem: { display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, alignItems: "start" },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 999,
    background: "rgba(122,162,255,.8)",
    marginTop: 18,
    boxShadow: "0 0 0 6px rgba(122,162,255,.12)",
  },
  link: { color: stylesVars.accent, textDecoration: "none" },
  footer: { borderTop: `1px solid ${stylesVars.line}`, padding: "18px 0", marginTop: 24 },
  footerText: { margin: 0 },
  form: { display: "grid", gap: 10, marginTop: 10 },
  label: { display: "grid", gap: 6, color: stylesVars.muted, fontSize: 13 },
  input: {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: `1px solid ${stylesVars.line}`,
    background: "rgba(0,0,0,.15)",
    color: stylesVars.text,
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: `1px solid ${stylesVars.line}`,
    background: "rgba(0,0,0,.15)",
    color: stylesVars.text,
    outline: "none",
    resize: "vertical",
  },
};
