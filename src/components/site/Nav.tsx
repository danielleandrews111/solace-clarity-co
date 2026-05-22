import { useEffect, useState } from "react";

const SQUARE_URL = "https://square.link/u/IrMSDPf0";

const links = [
  { href: "#how", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#stories", label: "Stories" },
  { href: "#booking", label: "Book" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-silk ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl md:text-2xl tracking-wide">
          Love Psychic <span className="text-gold">·</span> Mary
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-luxe text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={SQUARE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-xs uppercase tracking-luxe border border-foreground/80 px-5 py-3 rounded-full hover:bg-foreground hover:text-primary-foreground transition-silk"
        >
          Book a Reading
        </a>
      </div>
    </header>
  );
};
