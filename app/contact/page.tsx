"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus("");

        if (
            !formData.name ||
            !formData.email ||
            !formData.projectType ||
            !formData.message
        ) {
            setStatus("Please fill all fields.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                setStatus(result.error || "Failed to send message.");
                return;
            }

            setStatus("Thank you! Your message has been sent.");

            setFormData({
                name: "",
                email: "",
                projectType: "",
                message: "",
            });
        } catch {
            setStatus("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="pt-36">
            <section className="container">
                <p className="mb-6 uppercase tracking-[0.3em] muted">Contact</p>

                <h1 className="section-title mb-12">
                    LET&apos;S START <br /> A PROJECT
                </h1>

                <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
                    <div>
                        <p className="text-xl leading-relaxed muted">
                            Have an idea or project in mind? Let&apos;s build a modern digital experience together.
                        </p>

                        <div className="mt-10">
                            <p className="muted">Email</p>
                            <h3 className="text-2xl font-black">nirajmaharjan783@gmail.com</h3>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="card grid gap-5 p-6">
                        <input
                            className="input"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <input
                            className="input"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <input
                            className="input"
                            name="projectType"
                            placeholder="Project Type"
                            value={formData.projectType}
                            onChange={handleChange}
                        />

                        <textarea
                            className="input min-h-40"
                            name="message"
                            placeholder="Tell us about your project"
                            value={formData.message}
                            onChange={handleChange}
                        />

                        {status && <p className="text-sm text-white/70">{status}</p>}

                        <button className="btn w-fit" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}