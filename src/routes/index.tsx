import { createFileRoute, Link } from "@tanstack/react-router";
import { TempleNav, TempleFooter } from "@/components/TempleNav";
import heroImg from "@/assets/temple-hero.jpg";
import muruganImg from "@/assets/murugan-deity.jpg";
import archanaiImg from "@/assets/archanai.jpg";
import abhiImg from "@/assets/abhishekam.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ஸ்ரீ முருகன் கோயில் | Sri Murugan Temple" },
      { name: "description", content: "ஆறுபடைவீடு மரபில் அமைந்த ஸ்ரீ முருகப்பெருமான் ஆலயம் — வரலாறு, விழாக்கள், அர்ச்சகர், நன்கொடை" },
    ],
  }),
  component: Index,
});

function Index() {
  const modules = [
    { to: "/varalaru", title: "கோயில் வரலாறு", icon: "📜", desc: "1000+ ஆண்டுகால சரித்திரம்" },
    { to: "/sthala-puranam", title: "ஸ்தல புராணம்", icon: "🕉️", desc: "புனித கதைகள்" },
    { to: "/aalaya-amaippu", title: "ஆலய அமைப்பு", icon: "🏛️", desc: "கோயில் கட்டிட பகுதிகள்" },
    { to: "/deivangal", title: "தெய்வங்கள்", icon: "🪔", desc: "மூலவர் & பரிவாரம்" },
    { to: "/archagar", title: "அர்ச்சகர் / நிர்வாகம்", icon: "🙏", desc: "பூஜை செய்பவர்கள்" },
    { to: "/vizhakkal", title: "விழாக்கள்", icon: "🎆", desc: "ஆண்டு திருவிழாக்கள்" },
    { to: "/nigalvugal", title: "நிகழ்வுகள்", icon: "🔔", desc: "தினசரி பூஜை நேரம்" },
    { to: "/nankodai", title: "நன்கொடை", icon: "💝", desc: "ஆன்லைன் காணிக்கை" },
    { to: "/naatkaatti", title: "தமிழ் நாட்காட்டி", icon: "📅", desc: "திதி & விசேஷ நாட்கள்" },
  ];

  return (
    <div className="min-h-screen">
      <TempleNav />

      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <img src={heroImg} alt="ஸ்ரீ முருகன் கோயில்" width={1536} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/75 via-maroon-deep/40 to-background" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="text-7xl mb-4 drop-shadow-lg animate-pulse">ௐ</div>
          <p className="font-tamil text-accent text-lg tracking-widest uppercase">வேல் வேல் வெற்றி வேல்</p>
          <h1 className="font-tamil text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-2xl mt-2">
            ஸ்ரீ முருகன் கோயில்
          </h1>
          <p className="font-tamil text-xl md:text-2xl text-primary-foreground/90 mt-4 max-w-2xl">
            ஆறுபடைவீடு மரபில் — வேலாயுத சுவாமியின் தெய்வீக சந்நிதி
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/nankodai" className="font-tamil px-8 py-3 rounded-full bg-gradient-gold text-maroon-deep font-bold shadow-gold hover:scale-105 transition-transform">
              நன்கொடை வழங்க
            </Link>
            <Link to="/varalaru" className="font-tamil px-8 py-3 rounded-full border-2 border-gold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
              வரலாறு அறிய
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome strip */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src={muruganImg} alt="மூலவர் வேலாயுதர்" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-temple border-4 border-gold/40" />
        <div>
          <div className="kolam-divider mb-6" />
          <h2 className="font-tamil text-4xl text-primary font-bold">வரவேற்கிறோம்</h2>
          <p className="font-tamil text-lg text-foreground/80 mt-4 leading-relaxed">
            ஆறுபடைவீடு மரபில் அமைந்த இக்கோயில் ஆயிரம் ஆண்டுகளுக்கு மேல் முருகப்பெருமான் வழிபாடு நடைபெற்று வரும் புனித தலம். தினசரி அபிஷேகம், அர்ச்சனை, அன்னதானம், மற்றும் சிறப்பு விழாக்கள் இங்கு நடைபெறுகின்றன.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center font-tamil">
            <div className="bg-secondary p-4 rounded-2xl"><div className="font-display text-3xl text-primary font-bold">1100+</div><div className="text-xs text-muted-foreground">ஆண்டு பழமை</div></div>
            <div className="bg-secondary p-4 rounded-2xl"><div className="font-display text-3xl text-primary font-bold">6</div><div className="text-xs text-muted-foreground">தினசரி பூஜை</div></div>
            <div className="bg-secondary p-4 rounded-2xl"><div className="font-display text-3xl text-primary font-bold">24+</div><div className="text-xs text-muted-foreground">ஆண்டு விழாக்கள்</div></div>
          </div>
        </div>
      </section>

      {/* All modules */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="kolam-divider mb-12" />
        <h2 className="font-tamil text-4xl md:text-5xl text-center text-primary font-bold">முக்கிய பகுதிகள்</h2>
        <p className="font-tamil text-center text-muted-foreground mt-3 text-lg">கோயிலின் அனைத்து தகவல்களும் ஒரே இடத்தில்</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {modules.map((c) => (
            <Link key={c.to} to={c.to} className="group relative bg-card rounded-3xl p-7 shadow-temple border border-gold/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-gold opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="text-5xl mb-3 relative">{c.icon}</div>
              <h3 className="font-tamil text-2xl text-primary font-bold relative">{c.title}</h3>
              <p className="font-tamil text-muted-foreground mt-2 relative">{c.desc}</p>
              <div className="mt-5 font-tamil text-accent-foreground bg-accent inline-block px-4 py-1.5 rounded-full text-sm relative">
                பார்வையிட →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Highlight banner */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        <div className="relative h-72 rounded-3xl overflow-hidden shadow-temple group">
          <img src={archanaiImg} alt="அர்ச்சனை" loading="lazy" width={1280} height={896} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/90 to-transparent" />
          <div className="absolute bottom-6 left-6 text-primary-foreground font-tamil">
            <h3 className="text-3xl font-bold">தினசரி அர்ச்சனை</h3>
            <p className="opacity-90 mt-1">உங்கள் பெயரில் சங்கல்பம்</p>
          </div>
        </div>
        <div className="relative h-72 rounded-3xl overflow-hidden shadow-temple group">
          <img src={abhiImg} alt="அபிஷேகம்" loading="lazy" width={1280} height={896} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/90 to-transparent" />
          <div className="absolute bottom-6 left-6 text-primary-foreground font-tamil">
            <h3 className="text-3xl font-bold">சிறப்பு அபிஷேகம்</h3>
            <p className="opacity-90 mt-1">பௌர்ணமி & சஷ்டி நாட்களில்</p>
          </div>
        </div>
      </section>

      <TempleFooter />
    </div>
  );
}
