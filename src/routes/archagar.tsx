import { createFileRoute } from "@tanstack/react-router";
import { TempleNav, TempleFooter } from "@/components/TempleNav";
import archagarImg from "@/assets/archagar.jpg";

export const Route = createFileRoute("/archagar")({
  head: () => ({
    meta: [
      { title: "அர்ச்சகர் / நிர்வாகம் | ஸ்ரீ கோயில்" },
      { name: "description", content: "ஸ்ரீ கோயிலின் அர்ச்சகர்கள் மற்றும் நிர்வாக குழுவைப் பற்றி அறியுங்கள்." },
    ],
  }),
  component: ArchagarPage,
});

function ArchagarPage() {
  const archagars = [
    { name: "ஸ்ரீ ராமசாமி சிவாச்சாரியார்", role: "தலைமை அர்ச்சகர்", exp: "30 ஆண்டுகள்", phone: "+91 98765 43210" },
    { name: "ஸ்ரீ கிருஷ்ணமூர்த்தி பட்டர்", role: "உப அர்ச்சகர்", exp: "18 ஆண்டுகள்", phone: "+91 98765 43211" },
    { name: "ஸ்ரீ வேங்கடேசன் சாஸ்திரி", role: "ஆகம வித்வான்", exp: "22 ஆண்டுகள்", phone: "+91 98765 43212" },
  ];

  const admin = [
    { name: "திரு. முருகன்", role: "தலைவர்" },
    { name: "திரு. சுந்தரம்", role: "செயலாளர்" },
    { name: "திருமதி. லட்சுமி", role: "பொருளாளர்" },
    { name: "திரு. ராஜா", role: "உறுப்பினர்" },
  ];

  return (
    <div className="min-h-screen">
      <TempleNav />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={archagarImg} alt="அர்ச்சகர்" width={1024} height={1024} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/85 to-maroon-deep/30" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
          <div className="font-tamil text-accent text-sm tracking-widest uppercase">ஸ்ரீ கோயில்</div>
          <h1 className="font-tamil text-5xl md:text-7xl font-bold text-primary-foreground mt-2">
            அர்ச்சகர் / நிர்வாகம்
          </h1>
          <p className="font-tamil text-primary-foreground/90 text-lg md:text-xl mt-3 max-w-2xl">
            தெய்வீக சேவையில் ஈடுபட்டுள்ள ஆகம பண்டிதர்கள் மற்றும் நிர்வாகக் குழு
          </p>
        </div>
      </section>

      {/* Archagars */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="kolam-divider mx-auto max-w-md" />
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-primary mt-6">அர்ச்சகர்கள்</h2>
          <p className="font-tamil text-muted-foreground mt-2 text-lg">ஆகம விதிமுறைகளில் சிறந்த தேர்ச்சி பெற்றவர்கள்</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {archagars.map((a, i) => (
            <article key={i} className="bg-card rounded-3xl border border-gold/40 shadow-temple overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="h-2 bg-gradient-temple" />
              <div className="p-8 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-gold flex items-center justify-center text-4xl shadow-gold mb-5">
                  🕉
                </div>
                <h3 className="font-tamil text-2xl font-bold text-primary">{a.name}</h3>
                <p className="font-tamil text-accent-foreground bg-accent/40 inline-block px-3 py-1 rounded-full text-sm mt-3">{a.role}</p>
                <div className="mt-6 space-y-2 text-left border-t border-gold/30 pt-4">
                  <div className="flex justify-between font-tamil">
                    <span className="text-muted-foreground">அனுபவம்</span>
                    <span className="text-foreground font-semibold">{a.exp}</span>
                  </div>
                  <div className="flex justify-between font-tamil">
                    <span className="text-muted-foreground">தொடர்பு</span>
                    <span className="text-primary font-semibold">{a.phone}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Administration */}
      <section className="bg-secondary/60 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="font-tamil text-4xl md:text-5xl font-bold text-primary">நிர்வாக குழு</h2>
            <p className="font-tamil text-muted-foreground mt-2 text-lg">கோயிலின் அன்றாட நடவடிக்கைகளை மேற்பார்வை இடும் குழு</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {admin.map((m, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 text-center border border-gold/30 shadow-sm hover:shadow-gold transition-shadow">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-temple text-primary-foreground flex items-center justify-center text-2xl font-display">
                  {m.name.charAt(m.name.indexOf(".") + 2)}
                </div>
                <h4 className="font-tamil text-lg font-bold text-foreground mt-4">{m.name}</h4>
                <p className="font-tamil text-sm text-primary mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-temple text-primary-foreground rounded-3xl p-12 shadow-temple relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
          <div className="text-5xl mb-4">📞</div>
          <h3 className="font-tamil text-3xl font-bold">அர்ச்சனை முன்பதிவு</h3>
          <p className="font-tamil mt-3 opacity-90">விசேஷ பூஜை அல்லது அர்ச்சனைக்கு முன்பதிவு செய்ய அழைக்கவும்</p>
          <div className="font-tamil text-2xl mt-6 font-bold">+91 98765 43210</div>
          <p className="font-tamil text-sm mt-2 opacity-80">காலை 6:00 – இரவு 9:00</p>
        </div>
      </section>

      <TempleFooter />
    </div>
  );
}
