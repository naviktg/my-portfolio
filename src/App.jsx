import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  ArrowDown,
  Cloud,
  Terminal,
  Code2,
  GitBranch,
  Container,
  Menu,
  X,
  Layers,
  Activity,
  GraduationCap,
  Mail,
  ExternalLink,
  Workflow,
} from 'lucide-react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    title: 'Cloud & AWS',
    icon: Cloud,
    items: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'RDS'],
  },
  {
    title: 'CI/CD & Version Control',
    icon: Workflow,
    items: ['Jenkins', 'Git', 'GitHub', 'CI/CD', 'GitHub Webhooks'],
  },
  {
    title: 'Containers & Orchestration',
    icon: Container,
    items: ['Docker', 'Kubernetes', 'Amazon EKS', 'Amazon ECR'],
  },
  {
    title: 'Infrastructure as Code',
    icon: Layers,
    items: ['Terraform', 'Remote State', 'S3 Backend'],
  },
  {
    title: 'Monitoring & Automation',
    icon: Activity,
    items: ['Prometheus', 'Grafana', 'Ansible'],
  },
  {
    title: 'Operating Systems & Build',
    icon: Terminal,
    items: ['Linux', 'Ubuntu', 'Bash', 'Maven', 'Java'],
  },
]

const projects = [
  {
    number: '01',
    category: 'CLOUD ARCHITECTURE',
    title: 'Three-Tier Web Application',
    description:
      'Explored a three-tier application architecture, separating presentation, application and database layers using AWS cloud services.',
    tags: ['AWS', 'EC2', 'VPC', 'RDS'],
    icon: Layers,
    link: '',
  },
  {
    number: '02',
    category: 'CI/CD AUTOMATION',
    title: 'Automated CI/CD Pipeline',
    description:
      'Built an automated pipeline connecting GitHub, Jenkins and Docker, with image publishing, EC2 deployment and application health validation.',
    tags: ['Jenkins', 'Docker', 'GitHub', 'AWS EC2'],
    icon: Workflow,
    link: 'https://github.com/naviktg/Guvi-Project-2',
  },
  {
    number: '03',
    category: 'INFRASTRUCTURE AS CODE',
    title: 'AWS Infrastructure with Terraform',
    description:
      'Provisioned AWS infrastructure using Terraform, including VPC, public subnets, routing, EC2 and remote state management.',
    tags: ['Terraform', 'AWS VPC', 'EC2', 'S3'],
    icon: Cloud,
    link: 'https://github.com/naviktg/Guvi-Project-3',
  },
  {
    number: '04',
    category: 'CONTAINER ORCHESTRATION',
    title: 'Kubernetes Monitoring on EKS',
    description:
      'Worked with Amazon EKS and explored Kubernetes cluster monitoring using Prometheus and Grafana.',
    tags: ['Amazon EKS', 'Kubernetes', 'Prometheus', 'Grafana'],
    icon: Activity,
    link: 'https://github.com/naviktg/Guvi-Project-4',
  },
  {
    number: '05',
    category: 'DOCKER & JAVA',
    title: 'Java Habit Tracker',
    description:
      'Built a Java Habit Tracker application using Maven and packaged it into a Docker image with a multi-stage Docker build.',
    tags: ['Java', 'Maven', 'Docker'],
    icon: Code2,
    link: 'https://github.com/naviktg/Guvi-Project-5',
  },
]

const journey = [
  {
    year: '2023',
    title: 'Master of Business Administration',
    place: 'MBA',
    description: 'Completed postgraduate management education.',
    icon: GraduationCap,
  },
  {
    year: 'TRAINING',
    title: 'DevOps & Cloud Learning',
    place: 'GUVI / HCL GUVI',
    description:
      'Developed practical skills in AWS, Linux, Docker, Jenkins, Terraform and cloud technologies.',
    icon: Terminal,
  },
  {
    year: 'HANDS-ON',
    title: 'Practical Project Development',
    place: 'Five Technical Projects',
    description:
      'Applied DevOps concepts through cloud infrastructure, CI/CD, containers and Kubernetes projects.',
    icon: Code2,
  },
]

function App() {
  const mainRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from('.hero-animate', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.13,
        ease: 'power3.out',
      })

      // Profile photo entrance animation
      gsap.from('.hero-photo', {
        x: 45,
        opacity: 0,
        duration: 1.2,
        delay: 0.25,
        ease: 'power3.out',
      })

      // Scroll motion is applied to the photo wrapper, not the image card.
      // This keeps the portrait's 3D tilt separate from its scroll position.
      gsap.to('.hero-photo', {
        y: 34,
        scale: 0.96,
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Scroll reveal animation
      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.from(element, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        })
      })

    }, mainRef)

    return () => ctx.revert()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main
      ref={mainRef}
      className="relative min-h-screen overflow-x-clip bg-[#080F1D] text-white"
    >
      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
          }}
        />
      </div>

      {/* NAVIGATION */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080F1D]/90 backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#home"
            className="text-xl font-bold tracking-wider"
          >
            NAVI<span className="text-blue-400">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-blue-400"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <a
            href="https://github.com/naviktg"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-blue-400/30 px-4 py-2 text-sm transition hover:border-blue-400 hover:bg-blue-400/10 sm:flex"
          >
            <GitBranch size={17} />
            GitHub
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#0D1728] px-6 py-6 md:hidden">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="text-sm text-slate-300 transition hover:text-blue-400"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        )}
      </header>

      {/* HERO SECTION */}

      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-12"
      >
        {/* LEFT CONTENT */}

        <div className="hero-copy relative z-10">
          <div className="hero-animate mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs tracking-[0.18em] text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            DEVOPS & CLOUD TECHNOLOGY
          </div>

          <p className="hero-animate mb-4 text-lg text-slate-400">
            Hello, I'm
          </p>

          <h1 className="hero-animate text-6xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[94px]">
            NAVI
            <br />
            KARAN<span className="text-blue-400">.</span>
            <span className="mt-3 block text-4xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)] sm:text-5xl lg:text-6xl">
              N.
            </span>
          </h1>

          <h2 className="hero-animate mt-8 text-xl font-medium text-slate-200 sm:text-2xl">
            DevOps Engineer
            <span className="text-blue-400"> | </span>
            AWS Cloud
          </h2>

          <p className="hero-animate mt-6 max-w-xl text-base leading-8 text-slate-400">
            Passionate about cloud infrastructure, automation and
            continuous delivery. Building reliable solutions through
            modern DevOps tools and cloud technologies.
          </p>

          {/* SKILLS PREVIEW */}

          <div className="hero-animate mt-7 flex flex-wrap gap-2">
            {[
              'AWS',
              'Docker',
              'Jenkins',
              'Terraform',
              'Kubernetes',
              'Linux',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-slate-700/80 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition hover:border-blue-400/60 hover:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* BUTTONS */}

          <div className="hero-animate mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-lg bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-400"
            >
              Explore Projects
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="https://github.com/naviktg"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-slate-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-400"
            >
              <GitBranch size={19} />
              View GitHub
            </a>
          </div>

          <div className="hero-animate mt-12 flex items-center gap-3 text-sm text-slate-500">
            <ArrowDown size={17} className="text-blue-400" />
            Scroll to explore
          </div>
        </div>

        {/* RIGHT PROFILE PHOTO — clean interactive 3D portrait */}

        <div
          className="hero-photo relative mx-auto w-full max-w-[440px]"
          style={{ perspective: '1400px' }}
        >
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -inset-5 rounded-[48%] border border-dashed border-blue-400/25" />

          <div
            className="hero-photo-card relative overflow-hidden rounded-[48%_48%_22px_22px] border border-blue-300/25 bg-[#0D1728] shadow-[0_35px_100px_rgba(0,0,0,0.5)] will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(0deg) rotateY(0deg)',
            }}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect()
              const x = (event.clientX - rect.left) / rect.width - 0.5
              const y = (event.clientY - rect.top) / rect.height - 0.5
              gsap.to(event.currentTarget, {
                rotateY: x * 14,
                rotateX: y * -12,
                duration: 0.45,
                ease: 'power2.out',
                transformPerspective: 1400,
                overwrite: 'auto',
              })
            }}
            onMouseLeave={(event) => {
              gsap.to(event.currentTarget, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.55)',
                overwrite: 'auto',
              })
            }}
          >
            <img
              src="/images/profile.png"
              alt="Navikaran N - DevOps Engineer"
              className="block aspect-[4/5] w-full object-cover object-top"
              draggable="false"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080F1D]/35 to-transparent" />
          </div>
          <p className="mt-5 text-center text-xs tracking-[0.24em] text-blue-300/80">
            NAVIKARAN N. <span className="text-slate-500">/ DEVOPS & CLOUD</span>
          </p>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}

      <section className="relative z-10 border-y border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-9 sm:grid-cols-4 lg:px-12">
          {[
            ['05', 'Practical Projects'],
            ['AWS', 'Cloud Platform'],
            ['CI/CD', 'Automation'],
            ['IaC', 'Infrastructure'],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-blue-400">
                {value}
              </p>

              <p className="mt-2 text-xs tracking-wide text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12"
      >
        <div className="reveal grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs tracking-[0.25em] text-blue-400">
              01 / ABOUT ME
            </p>

            <h2 className="text-5xl font-bold leading-tight sm:text-6xl">
              Building my
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)]">
                cloud journey.
              </span>
            </h2>
          </div>

          <div className="lg:pt-12">
            <p className="text-lg leading-9 text-slate-300">
              I'm Navikaran, an aspiring DevOps Engineer with a
              background in business management and a strong interest
              in cloud technologies. I'm focused on developing practical
              skills in AWS, automation, containerization and
              infrastructure as code.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Through hands-on projects, I've explored CI/CD pipelines,
              Terraform-based infrastructure, Docker applications and
              Kubernetes monitoring. My goal is to keep learning and
              contribute to real-world engineering teams.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300">
                <GraduationCap
                  className="mr-2 inline text-blue-400"
                  size={15}
                />
                MBA — 2023
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300">
                <Code2
                  className="mr-2 inline text-blue-400"
                  size={15}
                />
                GUVI DevOps Training
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}

      <section
        id="skills"
        className="relative z-10 border-y border-white/[0.07] bg-[#0D1728]/70"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="reveal mb-14">
            <p className="mb-4 text-xs tracking-[0.25em] text-blue-400">
              02 / TECHNICAL TOOLKIT
            </p>

            <h2 className="text-5xl font-bold sm:text-6xl">
              Technologies I
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)]">
                work with.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Tools and technologies I have explored through learning
              and hands-on project development.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => {
              const Icon = group.icon

              return (
                <div
                  key={group.title}
                  className="reveal rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition hover:border-blue-400/40"
                >
                  <div className="mb-6 inline-flex rounded-xl bg-blue-400/10 p-3 text-blue-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {group.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}

      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12"
      >
        <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs tracking-[0.25em] text-blue-400">
              03 / SELECTED WORK
            </p>

            <h2 className="text-5xl font-bold sm:text-6xl">
              Things I've
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)]">
                built.
              </span>
            </h2>
          </div>

          <a
            href="https://github.com/naviktg"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-400"
          >
            Explore GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon

            return (
              <article
                key={project.number}
                className="reveal group rounded-2xl border border-white/10 bg-[#0D1728]/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-slate-500">
                    / {project.number}
                  </span>

                  <div className="rounded-xl border border-white/10 p-3 text-blue-400 transition group-hover:border-blue-400/40">
                    <Icon size={22} />
                  </div>
                </div>

                <p className="mt-10 text-[10px] font-semibold tracking-[0.22em] text-blue-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-[76px] text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-400"
                  >
                    View project
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500">
                    Project overview
                    <Code2 size={16} />
                  </span>
                )}
              </article>
            )
          })}
        </div>
      </section>

      {/* JOURNEY SECTION */}

      <section className="relative z-10 border-y border-white/[0.07] bg-[#0D1728]/70">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="reveal mb-14">
            <p className="mb-4 text-xs tracking-[0.25em] text-blue-400">
              04 / MY JOURNEY
            </p>

            <h2 className="text-5xl font-bold sm:text-6xl">
              Learning.
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)]">
                {' '}Building.
              </span>
              <br />
              Growing.
            </h2>
          </div>

          <div className="max-w-3xl">
            {journey.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="reveal relative grid gap-5 border-l border-white/10 pb-12 pl-8 sm:grid-cols-[150px_1fr] sm:gap-10"
                >
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]" />

                  <p className="text-xs tracking-widest text-blue-400">
                    {item.year}
                  </p>

                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <Icon size={19} className="text-slate-400" />

                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-400">
                      {item.place}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12"
      >
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-[#0D1728] px-7 py-16 text-center sm:px-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto mb-7 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 p-3 text-blue-400">
              <Mail size={22} />
            </div>

            <p className="mb-4 text-xs tracking-[0.25em] text-blue-400">
              05 / GET IN TOUCH
            </p>

            <h2 className="text-5xl font-bold sm:text-7xl">
              Let's build
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)]">
                something great.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-slate-400">
              I'm interested in DevOps and Cloud opportunities,
              collaboration and connecting with people in technology.
            </p>

            <a
              href="https://github.com/naviktg"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-400"
            >
              Connect on GitHub
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-slate-500 sm:flex-row lg:px-12">
          <p>
            © {new Date().getFullYear()} NAVIKARAN N. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-blue-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App