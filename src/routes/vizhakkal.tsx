import { createFileRoute } from "@tanstack/react-router";
import { TempleNav, TempleFooter } from "@/components/TempleNav";
import vizhaImg from "@/assets/vizha.jpg";

export const Route = createFileRoute("/vizhakkal")({
  head: () => ({
    meta: [
      { title: "விழாக்கள் | ஸ்ரீ கோயில்" },
      { name: "description", content: "ஸ்ரீ கோயிலில் கொண்டாடப்படும் அனைத்து விழாக்களும் ஆண்டுவிழாக்களும்." },
    ],
  }),
  component: VizhakkalPage,
});

function VizhakkalPage() {
  const festivals = [
    { name: "பிரம்மோற்சவம்", date: "சித்திரை 15 – 24", days: "10 நாட்கள்", desc: "ஆண்டின் மிகப்பெரிய திருவிழா — தேர் திருவிழா, கொடியேற்றம் உட்பட." },
    { name: "தீபாவளி", date: "ஐப்பசி அமாவாசை", days: "1 நாள்", desc: "தீப ஒளி திருநாள் — விசேஷ அபிஷேகம் மற்றும் தீபாராதனை." },
    { name: "தைப்பூசம்", date: "தை மாதம் பூச நட்சத்திரம்", days: "1 நாள்", desc: "முருகப் பெருமானுக்கு காவடி எடுத்து வழிபடும் புனித நாள்." },
    { name: "பங்குனி உத்திரம்", date: "பங்குனி உத்திர நட்சத்திரம்", days: "1 நாள்", desc: "திருக்கல்யாண மகோத்சவம் கோலாகலமாக நடைபெறும்." },
    { name: "ஆடிப் பெருக்கு", date: "ஆடி 18", days: "1 நாள்", desc: "காவிரி நதி வழிபாடும் அன்னதான விழாவும்." },
    { name: "நவராத்திரி", date: "புரட்டாசி – ஐப்பசி", days: "9 நாட்கள்", desc: "அம்பாள் வழிபாடு — கொலு, சரஸ்வதி பூஜை, விஜயதசமி." },
  ];

  return (
    <div className="min-h-screen">
      <TempleNav />

      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <img src={vizhaImg} alt="விழாக்கள்" width={1024} height={1024} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-maroon-deep/60 to-maroon-deep/40" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-center items-center">
          <div className="text-6xl mb-3">🎆</div>
          <h1 className="font-tamil text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-xl">விழாக்கள்</h1>
          <p className="font-tamil text-xl text-primary-foreground/90 mt-4 max-w-2xl">
            வருடம் முழுவதும் கொண்டாடப்படும் தெய்வீக ஆண்டுவிழாக்கள்
          </p>
        </div>
      </section>

      {/* Timeline of festivals */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="kolam-divider mx-auto max-w-md" />
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-primary mt-6">வரும் திருவிழாக்கள்</h2>
          <p className="font-tamil text-muted-foreground mt-2 text-lg">இந்த ஆண்டின் முக்கிய கொண்டாட்டங்கள்</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {festivals.map((f, i) => (
            <article key={i} className="group relative bg-card rounded-3xl p-7 border border-gold/40 shadow-temple overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-15 rounded-full -translate-y-12 translate-x-12 group-hover:opacity-30 transition-opacity" />
              <div className="flex items-start justify-between gap-4 relative">
                <div>
                  <h3 className="font-tamil text-2xl font-bold text-primary">{f.name}</h3>
                  <p className="font-tamil text-accent-foreground mt-1">{f.date}</p>
                </div>
                <span className="font-tamil text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full whitespace-nowrap">{f.days}</span>
              </div>
              <p className="font-tamil text-muted-foreground mt-4 leading-relaxed relative">{f.desc}</p>
              <div className="mt-5 pt-4 border-t border-gold/30 flex items-center justify-between font-tamil relative">
                <span className="text-sm text-muted-foreground">விசேஷ அபிஷேகம்</span>
                <span className="text-primary font-semibold text-sm">மேலும் →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Special darshan banner */}
      <section className="bg-gradient-sunset text-primary-foreground py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">🪔</div>
            <h4 className="font-tamil text-xl font-bold">விசேஷ தரிசனம்</h4>
            <p className="font-tamil text-sm mt-2 opacity-90">விழா நாட்களில் சிறப்பு தரிசன ஏற்பாடுகள்</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🌺</div>
            <h4 className="font-tamil text-xl font-bold">அலங்காரம்</h4>
            <p className="font-tamil text-sm mt-2 opacity-90">பூ அலங்காரம் மற்றும் தீப அலங்காரம்</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🍛</div>
            <h4 className="font-tamil text-xl font-bold">அன்னதானம்</h4>
            <p className="font-tamil text-sm mt-2 opacity-90">அனைத்து பக்தர்களுக்கும் இலவச உணவு</p>
          </div>
        </div>
      </section>

      <TempleFooter />
    </div>
  );
}
