import Link from "next/link";

const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <header className="nav-animate fixed left-0 top-0 z-40 w-full">
            <div className="container flex items-center justify-between py-6">
                <Link href="/" className="text-xl font-black tracking-tight">
                    <span className="text-2xl font-black tracking-tighter">NIRAJ</span>
                </Link>

                <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-black/40 px-7 py-3 backdrop-blur-md md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm uppercase tracking-wider text-white/70 transition hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <Link href="/contact" className="btn hidden md:inline-flex">
                    Start Project
                </Link>
            </div>
        </header>
    );
}