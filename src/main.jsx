import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowUpRight, AtSign, BriefcaseBusiness, Code2, Download, Github, Linkedin, MapPin, Menu, X } from 'lucide-react';
import './styles.css';

const projects = [
  { number: '01', title: 'Al-Shifa Homeo Clinic', type: 'Full-stack healthcare', description: 'A responsive clinic platform connecting a React experience to a Spring Boot REST API and cloud-hosted MySQL.', stack: ['React', 'Spring Boot', 'MySQL', 'Docker'], tone: 'mint', mark: 'AS', link: 'https://github.com/Shahnoorishtiyaque', linkText: 'View GitHub' },
  { number: '02', title: 'Personal Portfolio', type: 'Web experience', description: 'A personal showcase for projects, technical strengths, and experience, with an animated interface and contact flow.', stack: ['React', 'Tailwind CSS', 'Vercel'], tone: 'blue', mark: '↗', link: 'https://github.com/Shahnoorishtiyaque', linkText: 'View GitHub' },
  { number: '03', title: 'Interactive Tic Tac Toe', type: 'Browser game', description: 'A lightweight game with live win and draw evaluation, dynamic state, and fluid board animations across screen sizes.', stack: ['JavaScript', 'HTML', 'CSS'], tone: 'peach', mark: '×○', link: 'https://github.com/Shahnoorishtiyaque', linkText: 'View GitHub' },
];
const skillGroups = [
  ['Languages', 'Java', 'JavaScript', 'C++', 'C'],
  ['Backend', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Spring Security', 'REST APIs'],
  ['Frontend', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  ['Data & tools', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'Postman', 'JUnit'],
  ['Cloud & foundations', 'Docker', 'CI/CD', 'OOP', 'Data Structures', 'DBMS', 'Computer Networks'],
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }), { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="topbar"><a className="brand" href="#home" onClick={closeMenu}><span>Shahnoor Ishtiyaque</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}><a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Work</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#journey" onClick={closeMenu}>Journey</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a></nav>
    </header>
    <main id="home">
      <section className="hero wrap">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"/></div>
          <h1>Thoughtful code.<br/><span>Useful products.</span></h1>
          <p className="hero-lede">I’m Shahnoor, a software developer shaping reliable full-stack experiences with Java, Spring Boot, and React.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="mailto:shahnoorishtiyaque687@gmail.com">Get in touch <ArrowUpRight size={15}/></a></div>
          <div className="hero-meta"><span><MapPin size={14}/> New Delhi, India</span><span className="meta-divider"/><span>Java · Spring · React</span></div>
        </div>
        <div className="portrait-area"><div className="portrait-frame"><img src="/portrait.jpg" alt="Portrait of Shahnoor Ishtiyaque"/><div className="portrait-index">01 / DEVELOPER</div></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/></div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>
      <section className="intro-section" id="about"><div className="wrap intro-grid reveal"><div className="section-kicker">01 / A LITTLE ABOUT ME</div><div><h2>Engineering that feels <span>human.</span></h2><p className="intro-text">I’m a Java developer who enjoys bringing the whole product together: clear interfaces, dependable APIs, and the details that make software feel considered. I’ve worked across enterprise HRMS and administrative workflows, and I’m always learning by building.</p><div className="intro-facts"><div><strong>8.52</strong><span>B.Tech CGPA</span></div><div><strong>GATE ’26</strong><span>Qualified · CSE & IT</span></div><div><strong>Full stack</strong><span>Frontend to deployment</span></div></div></div></div></section>
      <section className="work-section wrap" id="work"><div className="section-head reveal"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Things I’ve <span>made.</span></h2></div><p>Projects that turn practical problems into<br/>clear, useful experiences.</p></div><div className="project-list">{projects.map(project => <article className={`project-card ${project.tone} reveal`} key={project.number}><div className="project-top"><span className="project-number">{project.number} — SELECTED PROJECT</span><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.linkText} for ${project.title}`}><ArrowUpRight size={20}/></a></div><div className="project-body"><div className="project-mark">{project.mark}</div><div className="project-info"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div></div><a className="project-bottom" href={project.link} target="_blank" rel="noreferrer">{project.linkText}<ArrowUpRight size={15}/></a></article>)}</div></section>
      <section className="skills-section" id="skills"><div className="wrap skills-grid reveal"><div><div className="section-kicker">03 / THE TOOLKIT</div><h2>My working<br/><span>language.</span></h2><p className="muted-copy">A practical toolkit for building, shipping, and improving web applications.</p></div><div className="skill-groups">{skillGroups.map(([title, ...items], i) => <div className="skill-row" key={title}><span className="skill-index">0{i+1}</span><div className="skill-content"><h3>{title}</h3><div className="skill-chips">{items.map(item => <span key={item}>{item}</span>)}</div></div></div>)}</div></div></section>
      <section className="journey-section wrap" id="journey"><div className="section-head reveal"><div><div className="section-kicker">04 / EXPERIENCE & EDUCATION</div><h2>Learning by <span>doing.</span></h2></div><BriefcaseBusiness className="journey-icon" size={30}/></div><div className="timeline reveal"><article className="timeline-item"><div className="timeline-date">APR — MAY 2026</div><div className="timeline-marker"/><div className="timeline-content"><div className="timeline-heading"><div><h3>Software Development Intern</h3><span>Intact Insurance Brokers Pvt. Ltd.</span></div><span className="timeline-place">Ahmedabad, Gujarat</span></div><p>Built responsive enterprise HRMS interfaces in React and Tailwind. Integrated REST APIs with Axios, managed client state and caching, and worked with teammates through Git and GitHub.</p><div className="tag-row"><span>React</span><span>React Query</span><span>REST APIs</span><span>Git</span></div></div></article>
        <article className="timeline-item"><div className="timeline-date">DEC 2025 — JAN 2026</div><div className="timeline-marker"/><div className="timeline-content"><div className="timeline-heading"><div><h3>Administrative Intern</h3><span>ADM Office</span></div><span className="timeline-place">Kishanganj, Bihar</span></div><p>Streamlined departmental record-keeping and reviewed portal workflows; supported document systems and accurate data entry.</p></div></article>
        <article className="timeline-item"><div className="timeline-date">2022 — 2026</div><div className="timeline-marker"/><div className="timeline-content"><div className="timeline-heading"><div><h3>B.Tech, Computer Science & Engineering — IoT</h3><span>Government Engineering College, Siwan (BEU, Patna)</span></div><span className="timeline-place">CGPA 8.52 / 10</span></div><p>Qualified GATE 2026 in Computer Science and Information Technology. Secured 1st position in 2nd year and 4th position in 1st year.</p><div className="tag-row"><span>NPTEL C Programming</span><span>Problem Solving</span></div></div></article></div></section>
      <section className="contact-section" id="contact"><div className="wrap contact-inner reveal"><div className="section-kicker">05 / RESUME & CONTACT</div><h2>Let’s make<br/>something <span>useful.</span></h2><p>Download my resume or reach out through any of these channels.</p><a className="button button-light resume-download" href="/shahnoor-ishtiyaque-resume.pdf" download="Shahnoor-Ishtiyaque-Resume.pdf"><Download size={16}/> Download resume</a><div className="contact-links"><a className="contact-link" href="mailto:shahnoorishtiyaque687@gmail.com"><span>Email</span><strong>shahnoorishtiyaque687@gmail.com</strong><ArrowUpRight size={16}/></a><a className="contact-link" href="https://www.linkedin.com/in/shahnoorishtiyaque" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/shahnoorishtiyaque</strong><ArrowUpRight size={16}/></a><a className="contact-link" href="tel:+917547899822"><span>Phone</span><strong>+91 75478 99822</strong><ArrowUpRight size={16}/></a><a className="contact-link" href="https://github.com/Shahnoorishtiyaque" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/Shahnoorishtiyaque</strong><ArrowUpRight size={16}/></a></div><div className="contact-orb"/></div></section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#home"><span>Shahnoor Ishtiyaque</span></a><span className="footer-note">Designed with intention · © {new Date().getFullYear()}</span><div className="socials"><a href="https://github.com/Shahnoorishtiyaque" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href="https://www.linkedin.com/in/shahnoorishtiyaque" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="mailto:shahnoorishtiyaque687@gmail.com" aria-label="Email"><AtSign size={18}/></a></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);



