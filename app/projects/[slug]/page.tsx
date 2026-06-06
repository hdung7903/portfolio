import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectData {
  title: string;
  subtitle: string;
  num: string;
  role: string;
  duration: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  features: string[];
  architecture: {
    title: string;
    details: string;
  }[];
  challenges: {
    problem: string;
    solution: string;
  }[];
}

const PROJECTS_MAP: Record<string, ProjectData> = {
  "tram-hoc": {
    num: "01",
    title: "Trạm Học",
    subtitle: "Online study workspace built for FPT Education's student base.",
    role: "Fullstack Developer",
    duration: "04/2026 - 05/2026",
    tags: ["Next.js", "TypeScript", "FPT Education", "Tailwind CSS"],
    liveUrl: "https://tramhoc.fpt.edu.vn",
    overview: "Trạm Học is an immersive online study workspace developed for FPT Education's \"Đợi Mình Là Rực Rỡ\" campaign. It provides students with a peaceful, highly focused digital environment to study, featuring custom Pomodoro timers, interactive sticky notes, atmospheric ambient lo-fi music playlists, and a distractions-free minimalist view to increase efficiency during intense exam periods.",
    features: [
      "Customizable Pomodoro timer with pre-set intervals for session and breaks.",
      "Real-time lo-fi music player supporting dynamic tracks and atmospheric audio control.",
      "Interactive digital sticky notes stored per session for tasks tracking.",
      "Highly optimized dark ambient interface focusing on visual comfort."
    ],
    architecture: [
      {
        title: "Frontend Layer",
        details: "Built with Next.js App Router and TypeScript for fast rendering, reliable static assets loading, and type safety across complex reactive states."
      },
      {
        title: "State & Persistence",
        details: "Client-side state is managed with React Context and localStorage, enabling Pomodoro timers, sticky notes, and audio state to persist across sessions without any backend dependency."
      },
      {
        title: "Media Handling",
        details: "Highly responsive audio element management with customized web controls for smooth background playback across mobile and desktop devices."
      }
    ],
    challenges: [
      {
        problem: "Ensuring persistent timer and music playback when navigating between subpages or during network interruptions.",
        solution: "Configured a centralized client-side state provider in React and leveraged browser LocalStorage for session preservation and smooth transition states."
      },
      {
        problem: "Achieving near-zero page load times to ensure immediate focus for incoming students.",
        solution: "Implemented strict code-splitting, lazy-loaded heavy lo-fi audio tracks, and utilized Next.js Image Optimization to maintain exceptional Core Web Vitals."
      }
    ]
  },
  "tea-craft": {
    num: "02",
    title: "TeaCraft",
    subtitle: "Premium digital e-commerce experience for a specialty tea brand.",
    role: "Lead Frontend Developer",
    duration: "10/2025 - 11/2025",
    tags: ["React", "TypeScript", "Redux", "shadcn/ui", "React Query"],
    githubUrl: "https://github.com/hdung7903/teecraft-fe",
    overview: "TeaCraft is a fully featured, state-of-the-art e-commerce storefront designed for a luxury tea brand. It prioritizes stunning aesthetic presentation and micro-animations, while delivering high-speed commerce utilities like interactive product filtering, dynamic cart drawers, instant checkout flows, user profile management, and smooth responsive structures.",
    features: [
      "Dynamic catalog browser with smart client-side filters (by flavor, region, type).",
      "Interactive cart management using state-synchronized drawers.",
      "Full user account dashboard showing complete order history and tracking.",
      "Premium responsive UI/UX designed using custom shadcn/ui components."
    ],
    architecture: [
      {
        title: "UI Design System",
        details: "Crafted with shadcn/ui and custom CSS variables to ensure high-end visual elegance, harmonious color schemes, and seamless dark mode capabilities."
      },
      {
        title: "State Management",
        details: "Engineered with Redux Toolkit for complex cart operations, and React Query (TanStack) to handle seamless, cached client-side API requests."
      },
      {
        title: "API Layer",
        details: "Connected to a performant RESTful backend, utilizing Axios interceptors for automatic JWT authentication refresh and secure HTTP-only cookies."
      }
    ],
    challenges: [
      {
        problem: "Preventing cart state synchronization delays across tabs and maintaining performance during rapid quantity adjustments.",
        solution: "Debounced cart dispatch actions, optimized Redux selectors, and synchronized states across tabs using storage listener events."
      },
      {
        problem: "Maintaining layout stability and visual hierarchy with rich high-resolution tea product photography.",
        solution: "Used modern aspect-ratio CSS controls, layout containers, and loaded compressed modern WebP formats to prevent Content Layout Shift (CLS)."
      }
    ]
  },
  "erp-template": {
    num: "03",
    title: "ERP Template",
    subtitle: "Full-stack enterprise ERP with HRM, Agile project management, internal chat and real-time notifications.",
    role: "Fullstack Developer",
    duration: "05/2025 - Present",
    tags: ["Next.js", "React", "Spring Boot", "Java", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/hdung7903/erp-template",
    overview: "ERP Template is a full-stack enterprise resource planning system that unifies human resource management (HRM), Agile/Scrum project management, an internal team calendar, real-time chat and instant notifications into a single platform. The backend is a Spring Boot modular monolith backed by PostgreSQL and Redis, while the frontend is a Next.js dashboard. The system ships with role-based access control (RBAC), JWT authentication, OTP email verification and a fully implemented HRM suite covering employee records, labour contracts, leave approval workflows and geolocation-aware timekeeping.",
    features: [
      "Complete HRM suite: employee onboarding, skill profiles, labour contracts with Vietnamese labour-law validation, two-level leave approval, and IP/GPS-based timekeeping.",
      "Role-based access control with a visual permission matrix for managing roles and granular permissions.",
      "Secure authentication: email login, OTP verification, refresh tokens, forced first-login password change, and account locking enforced at the JWT filter level.",
      "Agile/Scrum workspace with projects, sprints, Kanban board, backlog and issue tracking (Epic, Story, Task, Bug).",
      "Internal collaboration: real-time chat channels and direct messages over WebSocket, team calendar and notification center."
    ],
    architecture: [
      {
        title: "Backend — Modular Monolith",
        details: "Spring Boot 4 on Java 17, organized into independent domain modules (auth, hrm, project, issue, ticket, calendar, chat, notification). Uses Spring Data JPA, Spring Security, Flyway migrations and WebSocket for real-time features."
      },
      {
        title: "Frontend — Next.js Dashboard",
        details: "Next.js 16 App Router with React 19 and TypeScript. State is managed with Redux Toolkit, the UI is built on Tailwind CSS v4 with shadcn/ui and Radix primitives, and dashboards are visualized with Recharts."
      },
      {
        title: "Data & Infrastructure",
        details: "PostgreSQL as the primary store with Flyway-versioned schema migrations, Redis for caching and sessions, Spring Mail + Thymeleaf for transactional emails, and Docker Compose to orchestrate the full stack locally."
      }
    ],
    challenges: [
      {
        problem: "Enforcing complex Vietnamese labour-law rules (probation limits, contract durations, regional minimum wage) consistently when creating contracts.",
        solution: "Centralized business validation in the contract service layer with explicit rule checks, surfacing clear, localized error messages to the frontend before persistence."
      },
      {
        problem: "Preventing access from locked accounts without hammering the database on every request.",
        solution: "Implemented a JwtAuthenticationFilter that validates account status from the token claims, rejecting requests from INACTIVE accounts without repeated database lookups."
      },
      {
        problem: "Keeping a large feature surface (HRM, Agile, chat, calendar) maintainable across a two-person stack split.",
        solution: "Adopted a modular monolith on the backend and route-group based App Router structure on the frontend, isolating each domain so modules can evolve and connect to APIs incrementally."
      }
    ]
  }
};

export function generateStaticParams() {
  return [{ slug: "tram-hoc" }, { slug: "tea-craft" }, { slug: "erp-template" }];
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = PROJECTS_MAP[slug];
  if (!project) return {};

  return {
    title: `${project.title} — Portfolio Case Study`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} — Portfolio Case Study`,
      description: project.subtitle,
      type: "article",
    }
  };
}

export default async function ProjectDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const project = PROJECTS_MAP[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="case-study-container">
      <div className="case-study-hero">
        {/* @ts-ignore — transitionTypes is an experimental Next.js prop */}
        <Link href="/#projects" className="back-link" transitionTypes={["nav-back"]}>
          ← Back to work
        </Link>
        <div className="cs-header">
          <span className="cs-num">{project.num}</span>
          <h1 className="cs-title">{project.title}</h1>
          <p className="cs-subtitle">{project.subtitle}</p>
        </div>
        <div className="cs-meta-grid">
          <div>
            <span className="cs-meta-label">Role</span>
            <span className="cs-meta-val">{project.role}</span>
          </div>
          <div>
            <span className="cs-meta-label">Duration</span>
            <span className="cs-meta-val">{project.duration}</span>
          </div>
          <div>
            <span className="cs-meta-label">Tech Stack</span>
            <div className="cs-meta-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="ptag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="case-study-body">
        <div className="cs-section">
          <h2 className="cs-section-title">Overview</h2>
          <p className="cs-section-text">{project.overview}</p>
          <div className="cs-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                ↗ Visit Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                ↗ View Repository
              </a>
            )}
          </div>
        </div>

        <div className="cs-section">
          <h2 className="cs-section-title">Core Features</h2>
          <ul className="cs-list">
            {project.features.map((feat, index) => (
              <li key={index} className="cs-list-item">
                {feat}
              </li>
            ))}
          </ul>
        </div>

        <div className="cs-section">
          <h2 className="cs-section-title">Technical Architecture</h2>
          <div className="cs-arch-grid">
            {project.architecture.map((arch, index) => (
              <div key={index} className="cs-arch-card">
                <h3 className="cs-arch-card-title">{arch.title}</h3>
                <p className="cs-arch-card-text">{arch.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2 className="cs-section-title">Challenges &amp; Solutions</h2>
          <div className="cs-challenges">
            {project.challenges.map((ch, index) => (
              <div key={index} className="cs-challenge-card">
                <div className="cs-challenge-block">
                  <span className="cs-block-label label-problem">Challenge</span>
                  <p className="cs-block-text">{ch.problem}</p>
                </div>
                <div className="cs-challenge-block">
                  <span className="cs-block-label label-solution">Solution</span>
                  <p className="cs-block-text">{ch.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="case-study-footer">
        <Link href="/#projects" className="btn-ghost">
          ← Back to work
        </Link>
      </div>
    </div>
  );
}
