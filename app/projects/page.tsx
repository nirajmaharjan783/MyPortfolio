import { projects } from "@/data/projects";

export default function ProjectPage() {
    return (
        <main className="pt-36">
            <section className="projects-section container">
                <p className="hero-fade mb-6 uppercase tracking-[0.3em] muted">
                    My Projects
                </p>

                <h1 className="section-title mb-16">
                    <span className="reveal-line">
                        <span>SELECTED</span>
                    </span>
                    <span className="reveal-line">
                        <span>DEVELOPMENT WORK</span>
                    </span>
                </h1>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <article key={project.title} className="project-card card p-5">
                            <div className="project-image h-[320px]" />

                            <div className="p-4">
                                <p className="mb-3 text-sm uppercase tracking-widest muted">
                                    {String(index + 1).padStart(2, "0")} / {project.category}
                                </p>

                                <h2 className="text-3xl font-black tracking-tight">
                                    {project.title}
                                </h2>

                                <p className="muted mt-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn w-full sm:w-fit"
                                    >
                                        GitHub
                                    </a>

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn w-full sm:w-fit"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}