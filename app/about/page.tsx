export default function AboutPage() {
    return (
        <main className="pt-36">
            <section className="container">
                <p className="hero-fade mb-6 uppercase tracking-[0.3em] muted">
                    About Me
                </p>

                <h1 className="section-title mb-12">
                    <span className="reveal-line">
                        <span>I AM A</span>
                    </span>
                    <span className="reveal-line">
                        <span>WEB DEVELOPER</span>
                    </span>
                </h1>

                <p className="hero-fade max-w-4xl text-2xl leading-relaxed muted">
                    I am Niraj, a web developer focused on building practical full-stack
                    applications. My current work includes ecommerce websites, product
                    platforms, authentication systems, RBAC dashboards, landing pages, and
                    MERN stack projects.
                </p>
            </section>

            <section className="skills-section container py-24">
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="skill-card card p-8">
                        <h2 className="big-text">React</h2>
                        <p className="muted mt-3">Frontend apps and interfaces</p>
                    </div>

                    <div className="skill-card card p-8">
                        <h2 className="big-text">Next.js</h2>
                        <p className="muted mt-3">Full-stack web applications</p>
                    </div>

                    <div className="skill-card card p-8">
                        <h2 className="big-text">MERN</h2>
                        <p className="muted mt-3">MongoDB, Express, React, Node.js</p>
                    </div>
                </div>
            </section>

            <section className="section-reveal container pb-24">
                <div className="card p-10">
                    <p className="mb-8 uppercase tracking-[0.3em] muted">My Focus</p>
                    <h2 className="big-text">
                        BUILDING CLEAN, RESPONSIVE, AND DATABASE-BACKED WEB APPLICATIONS.
                    </h2>
                </div>
            </section>
        </main>
    );
}