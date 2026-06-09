import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/experiences", label: "Experiences" },
  { to: "/impact", label: "Our Impact" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const onHome = pathname === "/";
  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-bone"
          : "bg-background/90 backdrop-blur-md text-foreground border-b border-border"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl tracking-tight">
            Eagle Vision <span className="italic text-accent">Safaris</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative py-1 hover:opacity-70 transition"
              activeProps={{ className: "after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-current" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium border border-current hover:bg-current hover:text-background transition-all"
        >
          Plan Your Journey
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background text-foreground border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="text-base font-medium py-2">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2 inline-flex items-center justify-center px-5 py-3 text-xs uppercase tracking-[0.18em] font-medium bg-primary text-primary-foreground">
              Plan Your Journey
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bone mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-tight">
            Eagle Vision <span className="italic text-accent">Safaris</span>
          </div>
          <p className="mt-4 max-w-sm text-bone/70 text-sm leading-relaxed">
            Tanzania's leading cultural, community and impact travel company.
            Wildlife. Culture. Community. Impact.
          </p>
          <p className="mt-6 text-sm text-bone/60 italic font-display">
            "Come as a visitor. Leave as a friend."
          </p>
        </div>

        <div>
          <div className="eyebrow text-accent mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-bone/80">
            <li><Link to="/experiences" className="hover:text-accent">All Experiences</Link></li>
            <li><Link to="/experiences/maasai" className="hover:text-accent">Maasai Life</Link></li>
            <li><Link to="/experiences/chagga" className="hover:text-accent">Chagga Heritage</Link></li>
            <li><Link to="/experiences/hadzabe" className="hover:text-accent">Hadzabe &amp; Datoga</Link></li>
            <li><Link to="/impact" className="hover:text-accent">Our Impact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-accent mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-bone/80">
            <li>Arusha, Tanzania</li>
            <li><a href="mailto:hello@eaglevisionsafaris.com" className="hover:text-accent">hello@eaglevisionsafaris.com</a></li>
            <li><a href="tel:+255000000000" className="hover:text-accent">+255 000 000 000</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/10 py-6 px-6 lg:px-10 text-xs text-bone/50 text-center">
        © {new Date().getFullYear()} Eagle Vision Safaris. Travel with purpose.
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
