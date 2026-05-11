import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10">
            <div className="container">
                <div className="marquee border-b border-white/10 pb-10">
                    <span>LET&apos;S BUILD SOMETHING WILD — </span>
                    <span>LET&apos;S BUILD SOMETHING WILD — </span>
                </div>

                <div className="grid gap-8 pt-10 md:grid-cols-3">
                    <div>
                        <h3 className="text-2xl font-black">© 2026 Niraj • Built with React Next.js & GSAP</h3>
                        <p className="muted mt-3 max-w-sm">
                            A full-stack developer building modern, scalable, and user-focused web experiences.
                        </p>
                    </div>

                    <div>
                        <p className="mb-4 text-sm uppercase tracking-widest muted">Pages</p>
                        <div className="flex flex-col gap-3">
                            <Link href="/Project">Project</Link>
                            <Link href="/Skills">Skills</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <p className="mb-4 text-sm uppercase tracking-widest muted">
                            Contact
                        </p>
                        <p>nirajmaharjan783@gmail.com</p>
                        <p className="muted mt-2">Kathmandu / Remote Worldwide</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}