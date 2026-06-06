import "./portfolio.css";
import Link from "next/link";
import type { CSSProperties } from "react";
import ProjectCard from "./components/ProjectCard";
import ThreeSphereClient from "./components/ThreeSphereClient";
import CVViewer from "./components/CVViewer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hoàng Dũng",
    alternateName: "hdung7903",
    url: "https://hdung7903.id.vn",
    image: "https://hdung7903.id.vn/og-image.png",
    sameAs: [
      "https://github.com/hdung7903",
      "https://linkedin.com/in/hdung7903",
    ],
    jobTitle: "Frontend & Fullstack Developer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "FPT University",
    },
    knowsAbout: [
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
      "Web Development",
    ],
    description:
      "FPT University graduate specializing in JavaScript and TypeScript. I build clean, performant web applications — from polished UIs to scalable APIs. Available for freelance.",
    email: "leduyhoangdung6i@gmail.com",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a project cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on scope. A landing page, a full web app, and a mobile app are very different efforts. Tell me what you need and I'll send a clear, itemised quote with no surprises — usually within a day.",
        },
      },
      {
        "@type": "Question",
        name: "How long will it take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A polished landing page typically takes 1–2 weeks; a full web app with auth and a database runs 4–8 weeks depending on features. You'll get a milestone-based timeline before we start.",
        },
      },
      {
        "@type": "Question",
        name: "Do I own the code and design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — completely. On delivery you receive the full source code, documentation, and deployment setup. Everything lives in your repositories and accounts. No vendor lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I don't disappear after handover. I offer a support window for fixes and questions, and I'm available for ongoing maintenance or new features whenever you need them.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work with my existing team or codebase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. I can join an existing project, follow your conventions, and collaborate through Git, code reviews, and your preferred tools — or take full ownership of a greenfield build.",
        },
      },
      {
        "@type": "Question",
        name: "How do we get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Just send me a message describing your idea. We'll talk through the goals, I'll suggest an approach and a quote, and once it works for you, we begin.",
        },
      },
    ],
  };

  // Skill lists
  const frontendSkills = [
    "JavaScript",
    "TypeScript",
    "HTML / CSS",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "shadcn/ui",
    "Ant Design",
  ];

  const backendSkills = [
    "Node.js",
    "NestJS",
    "Express.js",
    "SQL: MySQL, PostgreSQL",
    "NoSQL: MongoDB",
    "Docker",
    "CI/CD",
    "Git",
    "Firebase",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO & SKILLS SECTION */}
      <div className="hero-section" id="skills">
        {/* LEFT — Headline + CTA */}
        <div className="hero-left">
          <div className="hero-tag">
            <span className="typewriter-text">Available for freelance</span>
          </div>

          <h1>
            <div className="reveal-wrap">
              <span
                className="reveal-line"
                style={{ "--delay": "0" } as CSSProperties}
              >
                Frontend
              </span>
            </div>
            <div className="reveal-wrap">
              <em
                className="reveal-line"
                style={{ "--delay": "1" } as CSSProperties}
              >
                &amp; Fullstack
              </em>
            </div>
            <div className="reveal-wrap">
              <span
                className="reveal-line"
                style={{ "--delay": "2" } as CSSProperties}
              >
                Developer
              </span>
            </div>
          </h1>

          <p className="hero-sub">
            FPT University graduate specialising in JavaScript and TypeScript. I
            build clean, performant web applications — from polished UIs to
            scalable APIs.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Get in touch →
            </a>
            <a href="#projects" className="btn-ghost">
              View work
            </a>
            <CVViewer />
          </div>
        </div>

        {/* RIGHT — Three.js sphere + Tech stack */}
        <div className="hero-right">
          {/* 3D accent sphere — desktop only, no SSR */}
          <ThreeSphereClient />

          <div className="section-label-inline">Tech stack</div>
          <div className="skills-grid-2">
            <div className="skill-group">
              <div className="skill-group-title">Frontend</div>
              <div className="skill-tags">
                {frontendSkills.map((skill, i) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{ "--i": String(i) } as CSSProperties}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-title">Backend &amp; DevOps</div>
              <div className="skill-tags">
                {backendSkills.map((skill, i) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={
                      { "--i": String(frontendSkills.length + i) } as CSSProperties
                    }
                  >
                    {skill}
                  </span>
                ))}
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
                Building bespoke web applications and high-performance landing
                pages. Specializing in Next.js, React, Node.js, and modern cloud
                platforms. Focused on deliverability, SEO excellence, and
                responsive layout systems.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-date">2021 - 2025</div>
            <div className="timeline-content">
              <h3 className="timeline-title">B.S. Software Engineering</h3>
              <h4 className="timeline-org">FPT University</h4>
              <p className="timeline-desc">
                Focused on advanced software engineering principles, web
                technologies, database management, and distributed systems.
                Built numerous practical academic and commercial projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="section" id="projects">
        <div className="section-label">Selected work</div>
        <div className="projects">
          {/* 3D tilt via ProjectCard client component */}
          <ProjectCard>
            <div>
              <div className="project-num">01</div>
              <div className="project-title">Trạm Học</div>
              <p className="project-desc">
                Online study workspace built for FPT Education&apos;s &quot;Đợi
                Mình Là Rực Rỡ&quot; campaign. Features Pomodoro timer, lo-fi
                music player, sticky notes and focus mode — supporting students
                during exam season.
              </p>
              <div className="project-tags">
                <span className="ptag">Next.js</span>
                <span className="ptag">TypeScript</span>
                <span className="ptag">FPT Education</span>
                <span className="ptag">Tailwind CSS</span>
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
              {/* @ts-ignore — transitionTypes is an experimental Next.js prop */}
              <Link
                className="plink"
                href="/projects/tram-hoc"
                transitionTypes={["nav-forward"]}
              >
                → Case study
              </Link>
            </div>
          </ProjectCard>

          <ProjectCard>
            <div>
              <div className="project-num">02</div>
              <div className="project-title">TeaCraft</div>
              <p className="project-desc">
                Full-featured e-commerce storefront for a tea brand. Includes
                product catalog, shopping cart, user authentication and order
                management with a clean, responsive interface.
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
              {/* @ts-ignore */}
              <Link
                className="plink featured"
                href="/projects/tea-craft"
                transitionTypes={["nav-forward"]}
              >
                → Case study
              </Link>
              <a
                className="plink"
                href="https://github.com/hdung7903/teecraft-fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ GitHub
              </a>
            </div>
          </ProjectCard>

          <ProjectCard>
            <div>
              <div className="project-num">03</div>
              <div className="project-title">ERP Template</div>
              <p className="project-desc">
                Full-stack enterprise ERP system with HRM, Agile/Scrum project
                management, internal chat, calendar and real-time notifications.
                Built on a Spring Boot modular monolith with a Next.js dashboard,
                RBAC, JWT auth and PostgreSQL.
              </p>
              <div className="project-tags">
                <span className="ptag">Next.js</span>
                <span className="ptag">Spring Boot</span>
                <span className="ptag">Java</span>
                <span className="ptag">PostgreSQL</span>
                <span className="ptag">Redis</span>
                <span className="ptag">Docker</span>
              </div>
            </div>
            <div className="project-links">
              {/* @ts-ignore */}
              <Link
                className="plink featured"
                href="/projects/erp-template"
                transitionTypes={["nav-forward"]}
              >
                → Case study
              </Link>
              <a
                className="plink"
                href="https://github.com/hdung7903/erp-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ GitHub
              </a>
            </div>
          </ProjectCard>
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
              Understanding target goals, analyzing user needs, choosing optimal
              tech stack, and defining clear milestones to ensure on-time
              delivery.
            </p>
          </div>
          <div className="process-card">
            <div className="process-num">02</div>
            <div className="process-title">Development &amp; Refinement</div>
            <p className="process-desc">
              Writing clean, robust TypeScript code. Crafting beautiful layouts
              using modern styling, ensuring accessibility (a11y) and fast
              performance metrics.
            </p>
          </div>
          <div className="process-card">
            <div className="process-num">03</div>
            <div className="process-title">Deployment &amp; Handover</div>
            <p className="process-desc">
              Configuring automated CI/CD pipeline tests, optimizing
              SEO/metadata, setting up secure analytics, and delivering a clean
              package.
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
              Responsive, conversion-focused landing pages with clean UI and
              fast load times. React or Next.js.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">◉</div>
            <div className="service-title">Web Application</div>
            <p className="service-desc">
              Full-featured web apps — dashboards, portals, internal tools —
              with authentication and database integration.
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
              Cross-platform iOS &amp; Android apps built with React Native and
              Expo. Shared codebase, native feel.
            </p>
          </div>
        </div>
      </div>

      {/* WHY WORK WITH ME */}
      <div className="section" id="why">
        <div className="section-label">Why work with me</div>
        <div className="pillars-grid">
          <div className="pillar-card">
            <span className="pillar-icon">◇</span>
            <div className="pillar-title">Clear communication</div>
            <p className="pillar-desc">
              Regular updates, honest timelines, and no jargon. You always know
              exactly where your project stands.
            </p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">◆</span>
            <div className="pillar-title">Production-grade code</div>
            <p className="pillar-desc">
              Type-safe TypeScript, tested flows, and clean architecture you or
              any future developer can build on.
            </p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">◈</span>
            <div className="pillar-title">Performance first</div>
            <p className="pillar-desc">
              Fast load times, strong Core Web Vitals, and SEO-ready output —
              because speed wins users and rankings.
            </p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">❖</span>
            <div className="pillar-title">You own everything</div>
            <p className="pillar-desc">
              Full source code, documentation, and a clean handover. No
              lock-in, no hidden dependencies.
            </p>
          </div>
        </div>

        <div className="stats-strip">
          <div className="stat-item">
            <span className="stat-value">&lt;24h</span>
            <span className="stat-label">Response time</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">Code ownership</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">7+</span>
            <span className="stat-label">Years coding</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">∞</span>
            <span className="stat-label">Post-launch support</span>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="section" id="faq">
        <div className="section-label">FAQ</div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>
              How much does a project cost?
              <span className="faq-marker" aria-hidden="true" />
            </summary>
            <p className="faq-answer">
              It depends on scope. A landing page, a full web app, and a mobile
              app are very different efforts. Tell me what you need and I&apos;ll
              send a clear, itemised quote with no surprises — usually within a
              day.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              How long will it take?
              <span className="faq-marker" aria-hidden="true" />
            </summary>
            <p className="faq-answer">
              A polished landing page typically takes 1–2 weeks; a full web app
              with auth and a database runs 4–8 weeks depending on features.
              You&apos;ll get a milestone-based timeline before we start so you
              can plan around it.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Do I own the code and design?
              <span className="faq-marker" aria-hidden="true" />
            </summary>
            <p className="faq-answer">
              Yes — completely. On delivery you receive the full source code,
              documentation, and deployment setup. Everything lives in your
              repositories and accounts. No vendor lock-in.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              What happens after launch?
              <span className="faq-marker" aria-hidden="true" />
            </summary>
            <p className="faq-answer">
              I don&apos;t disappear after handover. I offer a support window
              for fixes and questions, and I&apos;m available for ongoing
              maintenance or new features whenever you need them.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Can you work with my existing team or codebase?
              <span className="faq-marker" aria-hidden="true" />
            </summary>
            <p className="faq-answer">
              Absolutely. I can join an existing project, follow your
              conventions, and collaborate through Git, code reviews, and your
              preferred tools — or take full ownership of a greenfield build.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              How do we get started?
              <span className="faq-marker" aria-hidden="true" />
            </summary>
            <p className="faq-answer">
              Just{' '}
              <a href="#contact">send me a message</a> describing your idea.
              We&apos;ll talk through the goals, I&apos;ll suggest an approach
              and a quote, and once it works for you, we begin. Simple.
            </p>
          </details>
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
              Available for freelance projects, short-term contracts, and
              full-time opportunities. Response within 24h.
            </p>
            <div className="contact-trust">
              <span className="trust-line">
                <span className="check">✓</span> Free initial consultation — no
                commitment
              </span>
              <span className="trust-line">
                <span className="check">✓</span> Clear, fixed quote before any
                work begins
              </span>
              <span className="trust-line">
                <span className="check">✓</span> Full code ownership handed over
                on delivery
              </span>
            </div>
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
