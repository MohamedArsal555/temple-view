import { createFileRoute, Link } from "@tanstack/react-router";
import { TempleNav, TempleFooter } from "@/components/TempleNav";
import heroImg from "@/assets/temple-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ஸ்ரீ கோயில் | Tamil Temple" },
      { name: "description", content: "அர்ச்சகர், விழாக்கள், நிகழ்வுகள் — ஸ்ரீ கோயில் இணையதளம்" },
    ],
  }),
  component: Index,
});

function Index() {
  const cards = [
    { to: "/archagar", title: "அர்ச்சகர்", sub: "/ நிர்வாகம்", icon: "🪔" },
    { to: "/vizhakkal", title: "விழாக்கள்", sub: "ஆண்டுவிழா", icon: "🎆" },
    { to: "/nigalvugal", title: "நிகழ்வுகள்", sub: "தினசரி பூஜை", icon: "🔔" },
  ];

  return (
    <div className="min-h-screen">
      <TempleNav />
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img src={heroImg} alt="கோயில்" width={1536} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/70 via-maroon-deep/40 to-background" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="text-7xl mb-4 drop-shadow-lg">ௐ</div>
          <h1 className="font-tamil text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-2xl">
            ஸ்ரீ கோயில்
          </h1>
          <p className="font-tamil text-xl md:text-2xl text-primary-foreground/90 mt-4 max-w-2xl">
            பக்தியின் தளம் — தெய்வீக சேவையின் இல்லம்
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/vizhakkal" className="font-tamil px-8 py-3 rounded-full bg-gradient-gold text-maroon-deep font-bold shadow-gold hover:scale-105 transition-transform">
              விழாக்கள் பார்க்க
            </Link>
            <Link to="/archagar" className="font-tamil px-8 py-3 rounded-full border-2 border-gold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
              அர்ச்சகர் தொடர்பு
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="kolam-divider mb-12" />
        <h2 className="font-tamil text-4xl md:text-5xl text-center text-primary font-bold">முக்கிய பகுதிகள்</h2>
        <p className="font-tamil text-center text-muted-foreground mt-3 text-lg">கோயிலின் முழு தகவல்களை அறியுங்கள்</p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {cards.map((c) => (
            <Link key={c.to} to={c.to} className="group relative bg-card rounded-3xl p-8 shadow-temple border border-gold/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-gold opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="text-6xl mb-4 relative">{c.icon}</div>
              <h3 className="font-tamil text-3xl text-primary font-bold relative">{c.title}</h3>
              <p className="font-tamil text-muted-foreground mt-2 relative">{c.sub}</p>
              <div className="mt-6 font-tamil text-accent-foreground bg-accent inline-block px-4 py-1.5 rounded-full text-sm relative">
                பார்வையிடவும் →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <TempleFooter />
    </div>
  );
}
