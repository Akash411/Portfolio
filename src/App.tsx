import { useEffect, useState } from "react";
import "./App.css";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "Java", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Express.js",
      "Ant Design",
      "Bootstrap",
      "Capacitor.js",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: ["MySQL", "Jest", "Cypress", "CI/CD (GitHub Actions)"],
  },
  {
    category: "Concepts",
    skills: [
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "REST API",
      "Problem Solving",
      "Backend Development",
      "Unit Testing",
      "Integration Testing",
      "E2E Testing",
    ],
  },
];

const projects = [
  {
    title: "AlgoBulls — Algorithmic Trading Platform",
    description:
      "Developed and maintained high-performance web applications for an algorithmic trading company. Collaborated with cross-functional teams to deliver features and optimized code to improve page load times by 15%.",
    tags: [
      "JavaScript",
      "React.js",
      "TypeScript",
      "Ant Design",
      "CI/CD",
      "Unit, Integration & E2E Testing",
      "SEO",
    ],
  },
];

const personalProjects = [
  {
    title: "Social Media App",
    url: "https://social-media-fullstasck.netlify.app/",
    description:
      "Built an Android app and full-stack website with post creation, likes, bookmarks and profile updates.",
    tags: ["React", "Ant Design", "Capacitor.js", "Express.js", "MongoDB"],
  },
  {
    title: "Nebula Club Website",
    url: "https://nebula-club.netlify.app/",
    description:
      "Designed and developed a website for the Entrepreneurship Development Cell, with a focus on usability and accessibility.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Todo List",
    url: "https://todolist-storage.netlify.app/",
    description:
      "Created a user-friendly daily task manager that saves tasks in the browser using local storage.",
    tags: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
  },
  {
    title: "Tech News Website",
    url: "https://akashtechnews.netlify.app/",
    description:
      "Built a dynamic tech news experience using React Context, hooks and external APIs for current news.",
    tags: ["React", "JavaScript", "Context API", "REST API"],
  },
  {
    title: "Movie Website",
    url: "https://akash1movie.netlify.app/",
    description:
      "Created a responsive movie information website by integrating an external API.",
    tags: ["React", "JavaScript", "API", "CSS"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "#home, #about, #experience, #projects, #personal-projects, #contact",
    );
    const updateActiveSection = () => {
      const activationLine = 100;
      let currentSection = sections[0];

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section;
        }
      });

      if (currentSection) {
        setActiveSection((current) =>
          current === currentSection.id ? current : currentSection.id,
        );
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const navButton = (id: string, label: string) => (
    <button
      className={activeSection === id ? "active" : ""}
      aria-current={activeSection === id ? "page" : undefined}
      onClick={() => scrollTo(id)}
    >
      {label}
    </button>
  );

  return (
    <div className="app">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            AG<span>.</span>
          </div>

          <div className="nav-actions">
            <a
              className="resume-nav-link mobile-resume-link"
              href="/Akash_resume.pdf"
              download="Akash_resume.pdf"
            >
              Download resume
            </a>
            <button
              className="menu-button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navButton("home", "Home")}
            {navButton("about", "About")}
            {navButton("experience", "Experience")}
            {navButton("projects", "Projects")}
            {navButton("personal-projects", "Personal Projects")}
            {navButton("contact", "Contact")}
            <a
              className="resume-nav-link desktop-resume-link"
              href="/Akash_resume.pdf"
              download="Akash_resume.pdf"
            >
              Download resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="availability">
            <span />
            Available for opportunities
          </div>

          <p className="eyebrow">FRONTEND ENGINEER</p>

          <h1>
            Building digital
            <br />
            experiences that
            <span> matter.</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Akash Gupta</strong>. I build modern, scalable and
            user-focused web applications with React, TypeScript and JavaScript.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => scrollTo("projects")}
            >
              View my work <span>↗</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollTo("contact")}
            >
              Let's talk
            </button>

            <div
              className={`resume-dropdown ${resumeMenuOpen ? "open" : ""}`}
              onMouseLeave={() => setResumeMenuOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setResumeMenuOpen(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setResumeMenuOpen(false);
                }
              }}
            >
              <div className="resume-control">
                <a
                  className="primary-button resume-download"
                  href="/Akash_resume.pdf"
                  download="Akash_resume.pdf"
                >
                  Download resume
                </a>
                <button
                  className="primary-button resume-menu-toggle"
                  type="button"
                  aria-label="More resume options"
                  aria-expanded={resumeMenuOpen}
                  aria-controls="resume-menu"
                  onMouseEnter={() => setResumeMenuOpen(true)}
                  onFocus={() => setResumeMenuOpen(true)}
                  onClick={() => setResumeMenuOpen(true)}
                >
                  <span aria-hidden="true">▾</span>
                </button>
              </div>
              <div className="resume-menu" id="resume-menu">
                <a
                  href="/Akash_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeMenuOpen(false)}
                >
                  Preview resume
                </a>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Akash411"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/akash-92/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:akash74748484@gmail.com?subject=Portfolio%20Contact&body=Hi%20Akash,%20I%20would%20like%20to%20connect%20with%20you.">
              Email Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>developer.ts</span>
            </div>

            <div className="code-content">
              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="green">"Akash Gupta"</span>,
              </p>

              <p className="indent">
                role: <span className="green">"Frontend Engineer"</span>,
              </p>

              <p className="indent">
                experience: <span className="orange">"2+ years"</span>,
              </p>

              <p className="indent">
                stack: [<span className="green">"React"</span>,{" "}
                <span className="green">"TypeScript"</span>],
              </p>

              <p className="indent">
                passion: <span className="green">"Building"</span>
              </p>

              <p>{"};"}</p>

              <div className="cursor" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">01 — ABOUT</p>
          <h2>Turning ideas into interfaces.</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Frontend Engineer with professional experience building
              production web applications in the FinTech space.
            </p>

            <p>
              My main focus is creating clean, responsive and maintainable
              interfaces while working closely with APIs, design systems and
              backend teams.
            </p>

            <p>
              Currently, I'm expanding towards full-stack and AI engineering
              while continuing to specialize in frontend development.
            </p>
          </div>

          <div className="stats">
            <div className="stat-card">
              <strong>2+</strong>
              <span>Years Experience</span>
            </div>

            <div className="stat-card">
              <strong>12+</strong>
              <span>Technologies</span>
            </div>

            <div className="stat-card">
              <strong>∞</strong>
              <span>Things to Learn</span>
            </div>

            <div className="stat-card">
              <strong>24/7</strong>
              <span>Curiosity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section">
        <div className="section-heading">
          <p className="eyebrow">02 — SKILLS</p>
          <h2>My toolkit.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-card" key={group.category}>
              <span>0{index + 1}</span>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="section-heading">
          <p className="eyebrow">03 — EXPERIENCE</p>
          <h2>Where I've worked.</h2>
        </div>

        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-top">
              <div>
                <p className="company">AlgoBulls</p>
                <h3>Frontend Engineer</h3>
              </div>

              <span className="date">2024 — Present</span>
            </div>

            <p className="experience-description">
              Develop and maintain high-performance web applications for an
              algorithmic trading company, partnering with cross-functional
              teams to deliver product features.
            </p>

            <ul>
              <li>
                Collaborated with teams to define, design and implement
                features.
              </li>
              <li>Optimized code to improve page load times by 15%.</li>
            </ul>

            <p className="tech-stack-label">Tech stack</p>
            <div className="tags experience-tags">
              {[
                "JavaScript",
                "React.js",
                "TypeScript",
                "Ant Design",
                "CI/CD",
                "Jest",
                "Cypress",
                "SEO",
              ].map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-top">
              <div>
                <p className="company">Entrepreneurship Development Cell</p>
                <h3>Core Web Development Team Member</h3>
              </div>

              <span className="date">College Club</span>
            </div>

            <p className="experience-description">
              Designed and maintained the college Entrepreneurship Development
              Cell website, helping improve usability, accessibility and user
              engagement.
            </p>

            <ul>
              <li>Contributed to a 20% increase in user engagement.</li>
            </ul>

            <p className="tech-stack-label">Tech stack</p>
            <div className="tags experience-tags">
              {["HTML", "CSS", "JavaScript", "Bootstrap"].map(
                (technology) => (
                  <span key={technology}>{technology}</span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow">04 — PROJECTS</p>
            <h2>Selected work.</h2>
          </div>

          <span className="project-count">
            {String(projects.length).padStart(2, "0")} PROJECT
            {projects.length === 1 ? "" : "S"}
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">0{index + 1}</div>

              <div className="personal-project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section id="personal-projects" className="section">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow">05 — PERSONAL PROJECTS</p>
            <h2>Built beyond work.</h2>
          </div>

          <span className="project-count">
            {String(personalProjects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        <div className="projects-grid personal-projects-grid">
          {personalProjects.map((project, index) => (
            <a
              className="project-card personal-project-card"
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project (opens in a new tab)`}
            >
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="personal-project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section section">
        <div className="contact-content">
          <p className="eyebrow">06 — CONTACT</p>

          <h2>
            Have a project
            <br />
            in mind?
          </h2>

          <p>
            I'm always open to discussing interesting projects, opportunities
            and ideas.
          </p>
          <a
            href="mailto:akash74748484@gmail.com?subject=Portfolio%20Contact&body=Hi%20Akash,%20I%20would%20like%20to%20connect%20with%20you."
            className="primary-button contact-button"
          >
            Get in touch ↗
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Akash Gupta</span>
        <span>Built with React + TypeScript</span>
      </footer>
    </div>
  );
}

export default App;
