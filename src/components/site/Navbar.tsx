import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/ChatGPT_Image_Jun_26__2026__02_11_58_PM-removebg-preview.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-18 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="Raj Enterprise Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                activeProps={{
                  className: scrolled
                    ? "px-4 py-2 rounded-lg text-sm font-semibold text-primary bg-secondary"
                    : "px-4 py-2 rounded-lg text-sm font-semibold text-white bg-white/15",
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+917383303388"
              className="ml-3 inline-flex items-center gap-2 rounded-lg gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-elegant hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" />
              Request Quote
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid place-items-center h-10 w-10 rounded-lg ${scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-5 animate-fade-in-up">
            <div className="rounded-2xl bg-background border border-border shadow-elegant p-3 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-secondary"
                  activeProps={{
                    className:
                      "px-4 py-3 rounded-lg text-sm font-semibold text-primary bg-secondary",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:+917383303388"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg gradient-accent px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" /> Request Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
