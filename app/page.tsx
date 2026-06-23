"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["about", "experience", "projects"] as const;
type NavItem = (typeof NAV_ITEMS)[number];

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const EXPERIENCE = [
  {
    dates: "Oct 2025 — Present",
    role: "Senior Software Engineer",
    company: "Onpeeps",
    url: "https://onpeeps.com",
    description:
      "Architecting a multi-tenant SaaS platform with tenant isolation, RBAC, and scalable backend services. Led the migration to OAuth 2.0 + OpenID Connect via Keycloak, improving SSO capabilities and eliminating a class of authentication defects entirely. Designed JWT-based auth flows and built reusable oidc-client-ts adapters supporting Keycloak, Active Directory, and federated identity providers with silent token refresh. Shipping customer-facing features across REST and GraphQL APIs while owning Docker + GitHub Actions CI/CD.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "OAuth 2.0",
      "Keycloak",
      "OIDC",
      "GraphQL",
      "Docker",
    ],
  },
  {
    dates: "Nov 2024 — Sept 2025",
    role: "Senior Technology Consultant",
    company: "Accenture",
    url: "https://accenture.com",
    description:
      "Architecting a micro-frontend platform using Webpack Module Federation, enabling 4 independent teams to deploy without coordination overhead and cutting cross-team release conflicts by 60%. Replaced REST with GraphQL + Apollo Client across a multi-tenant SaaS platform, reducing average API response time by 35%. Integrated OpenSearch to deliver sub-100ms queries on datasets with millions of records. Led monorepo migration across 8 services, cutting new engineer onboarding from 3 days to under 1 day.",
    tech: [
      "TypeScript",
      "React",
      "GraphQL",
      "Apollo",
      "Webpack",
      "Module Federation",
      "AWS",
      "OpenSearch",
    ],
  },
  {
    dates: "Nov 2023 — Oct 2024",
    role: "Senior Frontend Developer",
    company: "Kindred · Publicis Groupe",
    url: "https://publicisgroupe.com",
    description:
      "Led frontend rebuild of core CRM views in React, TypeScript, and Astro.js, achieving sub-200ms render times on tables that previously took 1.2s; used daily by 200+ sales representatives. Implemented Playwright + Jest test suite raising coverage from 40% to 85% and cutting production regressions by 50%. Mentored 3 junior developers; 2 were promoted within 6 months and began independently leading feature streams.",
    tech: [
      "React",
      "TypeScript",
      "Astro.js",
      "Playwright",
      "Jest",
      "SSR",
      "Veeva CRM",
    ],
  },
  {
    dates: "Dec 2022 — Oct 2023",
    role: "Frontend Developer",
    company: "Aubay",
    url: "https://aubay.com",
    description:
      "Built a reusable React component library consumed across 5 product teams, reducing duplicate UI code by 30% and enforcing consistent UX patterns. Designed and consumed GraphQL APIs (Apollo + Relay + Prisma) for a real-time audio/video application handling complex state synchronisation across concurrent user sessions. Optimised via lazy loading and code splitting, improving average page load by 45% on the most-visited routes.",
    tech: [
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "Relay",
      "Prisma",
      "WebSockets",
    ],
  },
  {
    dates: "Jun 2022 — Dec 2022",
    role: "Full-Stack Developer",
    company: "MVP Factory",
    url: "https://mvpfactory.co",
    description:
      "Delivered end-to-end full-stack features on a fast-moving startup product within 2-week sprint cycles using Next.js, TypeScript, Node.js, and Prisma ORM. Built and maintained CI/CD pipelines via GitHub Actions, achieving zero-downtime deployments and automated test gating across all environments.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "GitHub Actions",
      "Docker",
    ],
  },
  {
    dates: "Mar 2022 — May 2022",
    role: "Blockchain Frontend Developer",
    company: "Livetree",
    url: "https://livetree.com",
    description:
      "Led frontend development of a social NFT platform (React, Next.js, TypeScript) integrating Ethereum smart contracts via ethers.js, enabling users to create collectives and trade stakes. Developed and deployed Solidity smart contracts using Hardhat and Truffle, shipping a functional dApp to Ethereum mainnet within 3 months.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "ethers.js",
      "Solidity",
      "Hardhat",
      "Ethereum",
    ],
  },
  {
    dates: "May 2021 — Mar 2022",
    role: "Co-Founder & Lead Engineer",
    company: "Pantry",
    url: "#",
    description:
      "Co-founded a food-waste reduction startup; led all engineering from zero, conducted user research, and shipped an investor-pitched MVP over 12+ months. Built a Progressive Web App (Next.js, TypeScript, Node.js, Twilio API) handling meal planning, inventory management, and behavioural waste-reduction nudges.",
    tech: ["Next.js", "TypeScript", "Node.js", "Twilio", "PWA", "PostgreSQL"],
  },
  {
    dates: "Oct 2017 — Oct 2020",
    role: "Software Engineer & Programme Assistant",
    company: "Andela",
    url: "https://andela.com",
    description:
      "Contributed to the #BuildforSDG initiative, a Facebook + Andela partnership upskilling 1,000+ developers across 6 Sub-Saharan African countries in agile, remote software development. Mentored developers and coordinated technical delivery across distributed teams spanning multiple time zones.",
    tech: ["JavaScript", "React", "Node.js", "Python", "Agile"],
  },
];

const PROJECTS = [
  {
    name: "Vaultly",
    image: "/vaultly.png" as string | null,
    description:
      "Full-stack CIAM / SSO platform built from first principles. Auth server issues RS256 JWTs with a locally-managed RSA key pair and exposes a JWKS endpoint so any service can verify tokens without a shared secret. OAuth 2.0 PKCE for Google and GitHub. TOTP MFA (RFC 6238). Refresh token rotation with reuse detection: a replayed token revokes the entire family. Multi-tenant orgs with email invitations, RBAC, and a full audit log.",
    tech: [
      "Next.js 15",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "iron-session",
      "otplib",
      "Docker",
    ],
    url: "/vaultly",
    live: "https://much-auth-my-app.vercel.app/dashboard" as string | null,
    github: "https://github.com/akinsikuoluwafemi/much-auth",
  },
  {
    name: "Waveroom",
    image: "/waveroom.png" as string | null,
    description:
      "Collaborative album editor with Spotify API integration, built full-stack from 0 to production at Explorator Labs. Handles real-time audio editing sessions, playlist management, and a clean consumer-grade UX.",
    tech: ["Next.js", "TypeScript", "GraphQL", "Spotify API", "Node.js"],
    url: "https://custom.thewavroom.com/design",
    live: "https://custom.thewavroom.com/design" as string | null,
    github: null as string | null,
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<NavItem>("about");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [hoveredExpCard, setHoveredExpCard] = useState<string | null>(null);
  const [hoveredProjCard, setHoveredProjCard] = useState<string | null>(null);

  // Cursor radial gradient tracking
  useEffect(() => {
    if (prefersReducedMotion()) return; // Disable for accessibility
    
    const handle = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // Active section via intersection observer
  useEffect(() => {
    const sections = NAV_ITEMS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveSection(entry.target.id as NavItem);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Nav line: wider + brighter when active, slightly wider + lighter on hover
  const navLineWidth = (s: string) =>
    activeSection === s ? "64px" : hoveredNav === s ? "48px" : "32px";
  const navColor = (s: string) =>
    activeSection === s
      ? "var(--lightest-slate)"
      : hoveredNav === s
        ? "var(--light-slate)"
        : "var(--slate)";

  // Card: dim siblings when any card is hovered
  const expCardStyle = (company: string) => ({
    backgroundColor:
      hoveredExpCard === company ? "var(--light-navy)" : "transparent",
    opacity: hoveredExpCard && hoveredExpCard !== company ? 0.5 : 1,
    borderRadius: "8px",
    padding: "16px",
    transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
    cursor: "default",
  });

  const projCardStyle = (name: string) => ({
    backgroundColor:
      hoveredProjCard === name ? "var(--light-navy)" : "transparent",
    opacity: hoveredProjCard && hoveredProjCard !== name ? 0.5 : 1,
    borderRadius: "8px",
    padding: "16px",
    transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
    cursor: "default",
  });

  return (
    <div
      className="relative min-h-screen max-w-[1380px] mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0"
      style={{ backgroundColor: "#0a192f", color: "var(--slate)" }}
    >
      {/* ── Mouse radial gradient overlay ── */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(100,255,218,0.06), transparent 80%)`,
        }}
      />

      <div className="lg:flex lg:gap-4">
        {/* ══════════════ LEFT SIDEBAR ══════════════ */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: "var(--lightest-slate)" }}
            >
              Femi Akinsiku
            </h1>
            <h2
              className="mt-3 text-xl font-medium tracking-tight"
              style={{ color: "var(--lightest-slate)" }}
            >
              Senior Software Engineer
            </h2>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--slate)" }}
            >
              Senior engineer focused on auth infrastructure, micro-frontend
              architecture, and the full-stack systems that support them. I care
              about the decisions that are hard to undo.
            </p>

            {/* ── Section Nav ── */}
            <nav className="mt-16 hidden lg:block" aria-label="In-page links">
              <ul className="space-y-1">
                {NAV_ITEMS.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollTo(section)}
                      onMouseEnter={() => setHoveredNav(section)}
                      onMouseLeave={() => setHoveredNav(null)}
                      className="group flex items-center gap-4 py-3 cursor-pointer"
                    >
                      {/* Expanding indicator line */}
                      <span
                        className="block h-px"
                        style={{
                          width: navLineWidth(section),
                          backgroundColor: navColor(section),
                          transition:
                            "width 0.3s ease, background-color 0.3s ease",
                        }}
                      />
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{
                          color: navColor(section),
                          transition: "color 0.3s ease",
                        }}
                      >
                        {section}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Social Icons ── */}
          <ul className="mt-8 flex items-center gap-5 lg:mt-0">
            {[
              {
                href: "https://github.com/akinsikuoluwafemi",
                label: "GitHub",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
              },
              {
                href: "https://linkedin.com/in/femiakinsiku",
                label: "LinkedIn",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                href: "mailto:akinsiku13@gmail.com",
                label: "Email",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
              },
            ].map(({ href, label, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="block"
                  style={{
                    color: "var(--slate)",
                    transition: "color 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--lightest-slate)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--slate)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </header>

        {/* ══════════════ RIGHT CONTENT ══════════════ */}
        <main className="pt-24 lg:w-[55%] lg:py-24">
          {/* ── ABOUT ── */}
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            {/* Mobile sticky section label */}
            <div
              className="sticky top-0 z-20 mb-4 w-screen -mx-6 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only"
              style={{ backgroundColor: "rgba(10,25,47,0.85)" }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--lightest-slate)" }}
              >
                About
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                I&apos;m a full-stack engineer with 7+ years building
                production-scale web applications across Telco, ad-tech, SaaS, and
                fintech. Currently at{" "}
                <a
                  href="https://onpeeps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--lightest-slate)", fontWeight: 500 }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--teal)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--lightest-slate)")
                  }
                >
                  Onpeeps
                </a>
                , leading multi-tenant SaaS and OAuth 2.0 / OIDC auth
                infrastructure. Previously at Accenture and Publicis Groupe.
              </p>
              <p>
                I specialise in React, TypeScript, and Node.js, with deep
                experience in micro-frontend architecture (Module Federation),
                GraphQL API design, and auth systems that need to be correct the
                first time. I care about measurable performance, clean
                abstractions, and engineering that holds up under real load.
              </p>
              <p>
                <a
                  href="/vaultly"
                  style={{ color: "var(--teal)", fontWeight: 500 }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.textDecoration =
                      "underline")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.textDecoration =
                      "none")
                  }
                >
                  Vaultly
                </a>{" "}
                is my deep dive into identity infrastructure from first
                principles: a full CIAM / SSO platform with RS256 JWTs, OAuth
                2.0 PKCE, TOTP MFA, and refresh token rotation with reuse
                detection.
              </p>
              <p>
                Based in Lisbon, Portugal. Open to relocation.{" "}
                <a
                  href="mailto:akinsiku13@gmail.com"
                  style={{ color: "var(--teal)", fontWeight: 500 }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.textDecoration =
                      "underline")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.textDecoration =
                      "none")
                  }
                >
                  Let&apos;s talk.
                </a>
              </p>
            </div>
          </section>

          {/* ── EXPERIENCE ── */}
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div
              className="sticky top-0 z-20 mb-4 w-screen -mx-6 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only"
              style={{ backgroundColor: "rgba(10,25,47,0.85)" }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--lightest-slate)" }}
              >
                Experience
              </h2>
            </div>
            <ol>
              {EXPERIENCE.map((job) => (
                <li
                  key={job.company}
                  className="mb-3"
                  style={expCardStyle(job.company)}
                  onMouseEnter={() => setHoveredExpCard(job.company)}
                  onMouseLeave={() => setHoveredExpCard(null)}
                >
                  <div className="sm:flex sm:gap-6">
                    <p
                      className="mt-1 mb-2 text-xs font-semibold uppercase tracking-wide sm:mt-0 sm:mb-0 sm:w-32 sm:shrink-0"
                      style={{ color: "var(--slate)" }}
                    >
                      {job.dates}
                    </p>
                    <div>
                      <h3 className="font-medium leading-snug mb-2">
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline gap-1.5"
                          style={{
                            color: "var(--lightest-slate)",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              "var(--teal)")
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              "var(--lightest-slate)")
                          }
                        >
                          {job.role} · {job.company}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flexShrink: 0, marginBottom: "1px" }}
                          >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </svg>
                        </a>
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {job.description}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                          <li
                            key={t}
                            className="rounded-full px-3 py-1 text-xs font-medium"
                            style={{
                              backgroundColor: "rgba(100,255,218,0.1)",
                              color: "var(--teal)",
                            }}
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-4 pl-4">
              <a
                href="https://docs.google.com/document/d/1Id8zZPEHECqxZMvzFG0hJForQtBgSGiNKSSPCSGIB7g/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold"
                style={{
                  color: "var(--lightest-slate)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--teal)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--lightest-slate)")
                }
              >
                View Full Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: "transform 0.2s ease" }}
                  className="group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </section>

          {/* ── PROJECTS ── */}
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div
              className="sticky top-0 z-20 mb-4 w-screen -mx-6 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only"
              style={{ backgroundColor: "rgba(10,25,47,0.85)" }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--lightest-slate)" }}
              >
                Projects
              </h2>
            </div>
            <ol>
              {PROJECTS.map((project) => (
                <li
                  key={project.name}
                  className="mb-3"
                  style={projCardStyle(project.name)}
                  onMouseEnter={() => setHoveredProjCard(project.name)}
                  onMouseLeave={() => setHoveredProjCard(null)}
                >
                  <div className="flex gap-4 sm:gap-5">
                    {/* Thumbnail */}
                    <div
                      className="shrink-0 mt-1"
                      style={{
                        width: 160,
                        height: 105,
                        borderRadius: 6,
                        overflow: "hidden",
                        border: "1px solid var(--lightest-navy)",
                        backgroundColor: "var(--light-navy)",
                      }}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.name} preview`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--lightest-navy)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-5-5L5 21" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-2 font-medium leading-snug text-base">
                        <a
                          href={project.url}
                          target={
                            project.url.startsWith("/") ? undefined : "_blank"
                          }
                          rel={
                            project.url.startsWith("/")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="group/title inline-flex items-baseline gap-1"
                          style={{
                            color: "var(--lightest-slate)",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              "var(--teal)")
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              "var(--lightest-slate)")
                          }
                        >
                          {project.name}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="translate-y-px transition-transform group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5"
                          >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </svg>
                        </a>
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <li
                            key={t}
                            className="rounded-full px-3 py-1 text-xs font-medium"
                            style={{
                              backgroundColor: "rgba(100,255,218,0.1)",
                              color: "var(--teal)",
                            }}
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                      {(project.live || project.github) && (
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide"
                              style={{
                                color: "var(--teal)",
                                transition: "opacity 0.2s ease",
                              }}
                              onMouseEnter={(e) =>
                                ((
                                  e.currentTarget as HTMLElement
                                ).style.opacity = "0.75")
                              }
                              onMouseLeave={(e) =>
                                ((
                                  e.currentTarget as HTMLElement
                                ).style.opacity = "1")
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                              Live Site
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide"
                              style={{
                                color: "var(--teal)",
                                transition: "opacity 0.2s ease",
                              }}
                              onMouseEnter={(e) =>
                                ((
                                  e.currentTarget as HTMLElement
                                ).style.opacity = "0.75")
                              }
                              onMouseLeave={(e) =>
                                ((
                                  e.currentTarget as HTMLElement
                                ).style.opacity = "1")
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                              GitHub
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    {/* end text */}
                  </div>
                  {/* end flex row */}
                </li>
              ))}
            </ol>
          </section>

          <footer className="pb-16">
            <section className="mt-24 mb-16">
              <div className="text-center space-y-6">
                <h2
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--lightest-slate)" }}
                >
                  Let&apos;s build something great together.
                </h2>
                <p
                  className="text-base leading-relaxed max-w-md mx-auto"
                  style={{ color: "var(--slate)" }}
                >
                  I&apos;m always interested in hearing about new challenges and
                  opportunities. Feel free to reach out.
                </p>
                <a
                  href="mailto:akinsiku13@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wide border-2 transition-all"
                  style={{
                    borderColor: "var(--teal)",
                    color: "var(--teal)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "rgba(100,255,218,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "transparent";
                  }}
                >
                  Get in Touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </section>

            <div
              className="mt-16 pt-8 border-t text-center text-xs"
              style={{ borderColor: "var(--lightest-navy)", color: "var(--slate)" }}
            >
              <p>
                Built with{" "}
                <span style={{ color: "var(--teal)" }}>♦</span> using Next.js,
                TypeScript & Tailwind CSS
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
