import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "முகப்பு" },
  { to: "/varalaru", label: "வரலாறு" },
  { to: "/sthala-puranam", label: "ஸ்தல புராணம்" },
  { to: "/aalaya-amaippu", label: "ஆலய அமைப்பு" },
  { to: "/deivangal", label: "தெய்வங்கள்" },
  { to: "/archagar", label: "அர்ச்சகர்" },
  { to: "/vizhakkal", label: "விழாக்கள்" },
  { to: "/nigalvugal", label: "நிகழ்வுகள்" },
  { to: "/nankodai", label: "நன்கொடை" },
  { to: "/naatkaatti", label: "நாட்காட்டி" },
  { to: "/admin", label: "நிர்வாகம்" },
] as const;

export function TempleNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-gold/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 rounded-full bg-gradient-temple flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
            <span className="text-primary-foreground text-xl font-display">ௐ</span>
          </div>
          <div className="leading-tight">
            <div className="font-tamil text-sm md:text-base text-primary font-bold">ஸ்ரீ வள்ளி தேவசேனா சமேத சுப்பிரமணியர் ஆலயம்</div>
            <div className="font-tamil text-[11px] text-muted-foreground">இனாம்காரியந்தல், திருவண்ணாமலை மாவட்டம் – 606604</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-tamil px-3 py-1.5 rounded-full text-foreground/80 hover:text-primary hover:bg-secondary transition-colors text-sm"
              activeProps={{ className: "font-tamil px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/30 bg-background">
          <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-tamil px-3 py-2 rounded-lg text-foreground/80 hover:bg-secondary text-sm"
                activeProps={{ className: "font-tamil px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function TempleFooter() {
  return (
    <footer className="mt-24 bg-gradient-sunset text-primary-foreground">
      <div className="kolam-divider" />
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <div className="text-5xl mb-3">ௐ</div>
          <p className="font-tamil text-base font-bold leading-snug">ஸ்ரீ வள்ளி தேவசேனா சமேத<br/>சுப்பிரமணியர் ஆலயம்</p>
          <p className="text-xs mt-2 opacity-80 tracking-widest uppercase">Vel Vel Vetri Vel</p>
        </div>
        <div className="font-tamil">
          <p className="font-bold mb-2">தொடர்பு</p>
          <p className="text-sm opacity-90">இனாம்காரியந்தல்</p>
          <p className="text-sm opacity-90">திருவண்ணாமலை மாவட்டம் – 606604</p>
          <p className="text-sm opacity-90">+91 98765 43210</p>
        </div>
        <div className="font-tamil">
          <p className="font-bold mb-2">திறப்பு நேரம்</p>
          <p className="text-sm opacity-90">காலை: 5:30 - 12:30</p>
          <p className="text-sm opacity-90">மாலை: 4:00 - 9:00</p>
        </div>
      </div>
      <div className="text-center pb-6 text-xs opacity-80 font-tamil">© ஸ்ரீ வள்ளி தேவசேனா சமேத சுப்பிரமணியர் ஆலயம், இனாம்காரியந்தல் — அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை</div>
    </footer>
  );
}

export function PageShell({ title, subtitle, hero, children }: { title: string; subtitle?: string; hero?: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <TempleNav />
      <section className="relative h-[42vh] min-h-[300px] overflow-hidden">
        {hero && <img src={hero} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={896} />}
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/80 via-maroon-deep/50 to-background" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="text-4xl mb-3">ௐ</div>
          <h1 className="font-tamil text-4xl md:text-6xl font-bold text-primary-foreground drop-shadow-2xl">{title}</h1>
          {subtitle && <p className="font-tamil text-lg md:text-xl text-primary-foreground/90 mt-3 max-w-3xl">{subtitle}</p>}
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="kolam-divider mb-12" />
        {children}
      </main>
      <TempleFooter />
    </div>
  );
}
