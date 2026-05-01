import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "முகப்பு" },
  { to: "/archagar", label: "அர்ச்சகர்" },
  { to: "/vizhakkal", label: "விழாக்கள்" },
  { to: "/nigalvugal", label: "நிகழ்வுகள்" },
];

export function TempleNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-gold/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-temple flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
            <span className="text-primary-foreground text-xl font-display">ௐ</span>
          </div>
          <div className="leading-tight">
            <div className="font-tamil text-lg text-primary font-bold">ஸ்ரீ கோயில்</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Divine Sanctum</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-tamil px-4 py-2 rounded-full text-foreground/80 hover:text-primary hover:bg-secondary transition-colors text-base"
              activeProps={{ className: "font-tamil px-4 py-2 rounded-full bg-primary text-primary-foreground text-base" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function TempleFooter() {
  return (
    <footer className="mt-24 bg-gradient-sunset text-primary-foreground">
      <div className="kolam-divider" />
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="text-5xl mb-3">ௐ</div>
        <p className="font-tamil text-lg">அன்புடன் பணியாற்றும் ஸ்ரீ கோயில்</p>
        <p className="text-xs mt-2 opacity-80 tracking-widest uppercase">Sarvam Krishnarpanam</p>
      </div>
    </footer>
  );
}
