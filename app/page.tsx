import Link from "next/link";
import { projects, skills } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden pt-36">
        <div className="gradient-orb right-10 top-24" />

        <div className="container">
          <p className="mb-8 max-w-xl text-lg uppercase tracking-[0.3em] muted">
            Full-Stack Web Developer
          </p>

          <h1 className="hero-title">
            I BUILD <br />
            MODERN <br />
            WEB APPS
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl text-xl leading-relaxed muted">
              Hi, I am Niraj. I create full-stack web applications using
              Next.js, React, TypeScript, Node.js, Express, MongoDB,
              PostgreSQL, Prisma, and modern authentication systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/Project" className="btn">
                View Projects
              </Link>
              <Link href="/contact" className="btn">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="section-title">
              FEATURED <br /> PROJECTS
            </h2>

            <Link href="/Project" className="btn w-fit">
              All Projects
            </Link>
          </div>

          <div className="grid gap-8">
            {featuredProjects.map((project, index) => (
              <article key={project.title} className="card p-4">
                <div className="project-image" />

                <div className="grid gap-6 p-4 md:grid-cols-[1fr_1.2fr] md:items-end">
                  <div>
                    <p className="mb-3 text-sm uppercase tracking-widest muted">
                      0{index + 1} / {project.category}
                    </p>

                    <h3 className="text-3xl font-black tracking-tight md:text-5xl">
                      {project.title}
                    </h3>
                  </div>

                  <div>
                    <p className="muted leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        GitHub
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-20">
        <div className="container grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="big-text">6+</h3>
            <p className="muted mt-2">GitHub projects added to portfolio</p>
          </div>

          <div>
            <h3 className="big-text">3</h3>
            <p className="muted mt-2">Main stacks: MERN, Next.js, PostgreSQL</p>
          </div>

          <div>
            <h3 className="big-text">100%</h3>
            <p className="muted mt-2">Focused on practical web development</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <h2 className="section-title mb-12">
            TECH <br /> STACK
          </h2>

          <div className="grid gap-4 md:grid-cols-3 transition duration-300 hover:text-rose-400 hover:translate-y-1 hover:underline">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="card flex items-center justify-between p-6 transition hover:bg-white  "
              >
                <h3 className="text-xl font-black">{skill}</h3>
                <span className="text-sm">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}