import "./portfolio.css";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hoàng Dũng",
    "alternateName": "hdung7903",
    "url": "https://hdung7903.me",
    "image": "https://hdung7903.me/avatar.jpg",
    "sameAs": [
      "https://github.com/hdung7903",
      "https://linkedin.com/in/hdung7903"
    ],
    "jobTitle": "Frontend & Fullstack Developer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "FPT University"
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "HTML / CSS",
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "shadcn/ui",
      "Ant Design",
      "Node.js",
      "NestJS",
      "Express.js",
      "SQL (MySQL, PostgreSQL)",
      "NoSQL (MongoDB)",
      "Docker",
      "CI/CD",
      "Git",
      "Firebase",
      "Web Development"
    ],
    "description": "FPT University graduate specializing in JavaScript and TypeScript. I build clean, performant web applications — from polished UIs to scalable APIs. Available for freelance.",
    "email": "leduyhoangdung6i@gmail.com"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO & SKILLS SECTION */}
      <div className="hero-section" id="skills">
        <div className="hero-left">
          <div className="hero-tag">Available for freelance</div>
          <h1>
            Frontend
            <br />
            <em>&amp; Fullstack</em>
            <br />
            Developer
          </h1>
          <p className="hero-sub">
            FPT University graduate specialising in JavaScript and TypeScript. I build
            clean, performant web applications — from polished UIs to scalable APIs.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Get in touch →
            </a>
            <a href="#projects" className="btn-ghost">
              View work
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="section-label-inline">Tech stack</div>
          <div className="skills-grid-2">
            <div className="skill-group">
              <div className="skill-group-title">Frontend</div>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML / CSS</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">shadcn/ui</span>
                <span className="skill-tag">Ant Design</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-title">Backend &amp; DevOps</div>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">NestJS</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">SQL: MySQL, PostgreSQL</span>
                <span className="skill-tag">NoSQL: MongoDB</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="section" id="experience">
        <div className="section-label">Experience</div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-date">2024 - Present</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Freelance Fullstack Developer</h3>
              <h4 className="timeline-org">Remote · Global</h4>
              <p className="timeline-desc">
                Building bespoke web applications and high-performance landing pages.
                Specializing in Next.js, React, Node.js, and modern cloud platforms. Focused
                on deliverability, SEO excellence, and responsive layout systems.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-date">2021 - 2024</div>
            <div className="timeline-content">
              <h3 className="timeline-title">B.S. Software Engineering</h3>
              <h4 className="timeline-org">FPT University</h4>
              <p className="timeline-desc">
                Focused on advanced software engineering principles, web technologies,
                database management, and distributed systems. Built numerous practical
                academic and commercial projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="section" id="projects">
        <div className="section-label">Selected work</div>
        <div className="projects">
          <div className="project-card">
            <div>
              <div className="project-num">01</div>
              <div className="project-title">Trạm Học</div>
              <p className="project-desc">
                Online study workspace built for FPT Education&apos;s &quot;Đợi Mình Là Rực
                Rỡ&quot; campaign. Features Pomodoro timer, lo-fi music player, sticky notes
                and focus mode — supporting students during exam season.
              </p>
              <div className="project-tags">
                <span className="ptag">Next.js</span>
                <span className="ptag">TypeScript</span>
                <span className="ptag">Firebase</span>
                <span className="ptag">FPT Education</span>
              </div>
            </div>
            <div className="project-links">
              <a
                className="plink featured"
                href="https://tramhoc.fpt.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ Live site
              </a>
              <a className="plink" href="/projects/tram-hoc">
                → Case study
              </a>
            </div>
          </div>

          <div className="project-card">
            <div>
              <div className="project-num">02</div>
              <div className="project-title">TeaCraft</div>
              <p className="project-desc">
                Full-featured e-commerce storefront for a tea brand. Includes product
                catalog, shopping cart, user authentication and order management with a
                clean, responsive interface.
              </p>
              <div className="project-tags">
                <span className="ptag">React</span>
                <span className="ptag">TypeScript</span>
                <span className="ptag">Redux</span>
                <span className="ptag">shadcn/ui</span>
                <span className="ptag">React Query</span>
              </div>
            </div>
            <div className="project-links">
              <a className="plink featured" href="/projects/tea-craft">
                → Case study
              </a>
              <a
                className="plink"
                href="https://github.com/hdung7903/teecraft-fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="section" id="process">
        <div className="section-label">Work Process</div>
        <div className="process-grid">
          <div className="process-card">
            <div className="process-num">01</div>
            <div className="process-title">Discovery &amp; Plan</div>
            <p className="process-desc">
              Understanding target goals, analyzing user needs, choosing optimal tech stack,
              and defining clear milestones to ensure on-time delivery.
            </p>
          </div>
          <div className="process-card">
            <div className="process-num">02</div>
            <div className="process-title">Development &amp; Refinement</div>
            <p className="process-desc">
              Writing clean, robust typescript code. Crafting beautiful layouts using modern
              styling, ensuring accessibility (a11y) and fast performance metrics.
            </p>
          </div>
          <div className="process-card">
            <div className="process-num">03</div>
            <div className="process-title">Deployment &amp; Handover</div>
            <p className="process-desc">
              Configuring automated CI/CD pipeline tests, optimizing SEO/metadata, setting up
              secure analytics, and delivering a clean package.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="section" id="services">
        <div className="section-label">What I offer</div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">◈</div>
            <div className="service-title">Landing Page</div>
            <p className="service-desc">
              Responsive, conversion-focused landing pages with clean UI and fast load
              times. React or Next.js.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">◉</div>
            <div className="service-title">Web Application</div>
            <p className="service-desc">
              Full-featured web apps — dashboards, portals, internal tools — with
              authentication and database integration.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">◐</div>
            <div className="service-title">REST API / Backend</div>
            <p className="service-desc">
              RESTful APIs with Node.js or NestJS, connected to MongoDB or SQL
              databases. JWT auth included.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">◑</div>
            <div className="service-title">Mobile App (React Native)</div>
            <p className="service-desc">
              Cross-platform iOS &amp; Android apps built with React Native and Expo.
              Shared codebase, native feel.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="section" id="contact">
        <div className="section-label">Contact</div>
        <div className="contact-grid">
          <div>
            <div className="avail-badge">
              <span className="dot" /> Open to projects
            </div>
            <div className="contact-head">
              Let&apos;s build
              <br />
              something
              <br />
              together.
            </div>
            <p className="contact-sub">
              Available for freelance projects, short-term contracts, and full-time
              opportunities. Response within 24h.
            </p>
          </div>
          <div>
            <div className="contact-links">
              <a className="clink" href="mailto:leduyhoangdung6i@gmail.com">
                <div>
                  <span className="clink-label">Email</span>
                  <span className="clink-val">leduyhoangdung6i@gmail.com</span>
                </div>
              </a>
              <a
                className="clink"
                href="https://linkedin.com/in/hdung7903"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <span className="clink-label">LinkedIn</span>
                  <span className="clink-val">linkedin.com/in/hdung7903</span>
                </div>
              </a>
              <a
                className="clink"
                href="https://github.com/hdung7903"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <span className="clink-label">GitHub</span>
                  <span className="clink-val">github.com/hdung7903</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
