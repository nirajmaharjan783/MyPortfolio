const services = [
    {
        title: "Frontend Development",
        text: "I build responsive and modern user interfaces using React, Next.js, TypeScript, Tailwind CSS, React Router, forms, and reusable components.",
    },
    {
        title: "Backend Development",
        text: "I create backend APIs using Node.js, Express, REST API structure, authentication logic, server-side validation, and database integration.",
    },
    {
        title: "Database Integration",
        text: "I work with MongoDB, Mongoose, PostgreSQL, Prisma, Drizzle ORM, and Neon to build database-backed applications.",
    },
    {
        title: "Authentication & Dashboards",
        text: "I build login systems, protected routes, role-based access control, admin dashboards, JWT authentication, bcrypt password hashing, and Clerk-based authentication.",
    },
];

export default function ServicesPage() {
    return (
        <main className="pt-36">
            <section className="skills-section container">
                <p className="hero-fade mb-6 uppercase tracking-[0.3em] muted">
                    Skills & Services
                </p>

                <h1 className="section-title mb-16">
                    <span className="reveal-line">
                        <span>WHAT I</span>
                    </span>
                    <span className="reveal-line">
                        <span>CAN BUILD</span>
                    </span>
                </h1>

                <div className="grid gap-5">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="skill-card card grid gap-6 p-8 md:grid-cols-[120px_1fr_1.2fr]"
                        >
                            <p className="muted">
                                {String(index + 1).padStart(2, "0")}
                            </p>
                            <h2 className="text-4xl font-black">{service.title}</h2>
                            <p className="text-lg leading-relaxed muted">{service.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="skills-section container py-24">
                <div className="section-reveal mb-12">
                    <h2 className="section-title">
                        MY <br /> WORKFLOW
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                    {["Plan", "Design", "Develop", "Deploy"].map((item, index) => (
                        <div key={item} className="skill-card card p-8">
                            <p className="mb-10 muted">
                                {String(index + 1).padStart(2, "0")}
                            </p>
                            <h3 className="text-2xl font-black">{item}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}