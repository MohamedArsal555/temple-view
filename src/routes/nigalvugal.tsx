import { createFileRoute } from "@tanstack/react-router";
import { TempleNav, TempleFooter } from "@/components/TempleNav";
import nigalvuImg from "@/assets/moolavar-utsavar.jpg";

export const Route = createFileRoute("/nigalvugal")({
  head: () => ({
    meta: [
      { title: "நிகழ்வுகள் | ஸ்ரீ கோயில்" },
      { name: "description", content: "தினசரி பூஜை நேரம், விசேஷ தரிசனம் மற்றும் கோயில் நிகழ்வுகள்." },
    ],
  }),
  component: NigalvugalPage,
});

function NigalvugalPage() {
  const dailyPuja = [
    { time: "காலை 5:30", name: "திருப்பள்ளியெழுச்சி", desc: "சுவாமிக்கு திருப்பள்ளி எழுச்சி பாடல்." },
    { time: "காலை 6:30", name: "உஷத்காலம் பூஜை", desc: "முதல் அபிஷேகம் மற்றும் ஆராதனை." },
    { time: "காலை 9:00", name: "காலசந்தி பூஜை", desc: "இரண்டாம் அபிஷேகம், நைவேத்யம்." },
    { time: "மதியம் 12:00", name: "உச்சிகால பூஜை", desc: "மதிய ஆராதனை, மஹா நைவேத்யம்." },
    { time: "மாலை 6:00", name: "சாயரட்சை பூஜை", desc: "மாலை தீபாராதனை." },
    { time: "இரவு 8:30", name: "அர்த்தஜாம பூஜை", desc: "இறுதி ஆராதனை, கருவறை மூடுதல்." },
  ];

  const events = [
    { date: "15", month: "சித்திரை", title: "பிரம்மோற்சவம் தொடக்கம்", tag: "முக்கியம்" },
    { date: "21", month: "சித்திரை", title: "தேர் திருவிழா", tag: "முக்கியம்" },
    { date: "08", month: "வைகாசி", title: "வைகாசி விசாகம்", tag: "வழக்கம்" },
    { date: "18", month: "ஆடி", title: "ஆடிப் பெருக்கு", tag: "வழக்கம்" },
    { date: "12", month: "புரட்டாசி", title: "நவராத்திரி கொலு", tag: "முக்கியம்" },
  ];

  return (
    <div className="min-h-screen">
      <TempleNav />

      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={nigalvuImg} alt="நிகழ்வுகள்" width={1024} height={1024} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/85 via-maroon-deep/50 to-transparent" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="font-tamil text-accent text-sm tracking-widest uppercase">தினசரி வழிபாடு</div>
          <h1 className="font-tamil text-5xl md:text-7xl font-bold text-primary-foreground mt-2 drop-shadow-xl">நிகழ்வுகள்</h1>
          <p className="font-tamil text-xl text-primary-foreground/90 mt-3 max-w-xl">
            வரவிருக்கும் நிகழ்ச்சிகள், தினசரி பூஜை நேரம் மற்றும் விசேஷ தரிசனம்
          </p>
        </div>
      </section>

      {/* Daily Puja Schedule */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="kolam-divider mx-auto max-w-md" />
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-primary mt-6">தினசரி பூஜை நேரம்</h2>
          <p className="font-tamil text-muted-foreground mt-2 text-lg">ஆறு கால பூஜை அட்டவணை</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-primary to-gold -translate-x-1/2 hidden sm:block" />
          <div className="space-y-6">
            {dailyPuja.map((p, i) => (
              <div key={i} className={`relative sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"}`}>
                <div className={`bg-card border border-gold/40 rounded-2xl p-6 shadow-temple ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                  <div className="font-tamil text-accent-foreground bg-accent inline-block px-3 py-1 rounded-full text-sm font-semibold">{p.time}</div>
                  <h3 className="font-tamil text-2xl font-bold text-primary mt-3">{p.name}</h3>
                  <p className="font-tamil text-muted-foreground mt-2">{p.desc}</p>
                </div>
                <div className="hidden sm:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-temple flex items-center justify-center text-primary-foreground font-display text-lg shadow-gold relative z-10">
                    {i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events list */}
      <section className="bg-secondary/60 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-tamil text-4xl md:text-5xl font-bold text-primary">வரவிருக்கும் நிகழ்ச்சிகள்</h2>
            <p className="font-tamil text-muted-foreground mt-2 text-lg">அடுத்தடுத்து வரும் சிறப்பு நாட்கள்</p>
          </div>
          <div className="space-y-4">
            {events.map((e, i) => (
              <article key={i} className="bg-card rounded-2xl border border-gold/30 p-5 flex items-center gap-6 hover:shadow-gold transition-shadow">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-temple text-primary-foreground flex flex-col items-center justify-center">
                  <div className="font-display text-3xl leading-none">{e.date}</div>
                  <div className="font-tamil text-xs mt-1">{e.month}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-tamil text-xl font-bold text-foreground">{e.title}</h3>
                  <p className="font-tamil text-sm text-muted-foreground mt-1">பூஜை மற்றும் விசேஷ தரிசனம்</p>
                </div>
                <span className={`font-tamil text-xs px-3 py-1.5 rounded-full ${e.tag === "முக்கியம்" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                  {e.tag}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Special darshan note */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="ornate-border bg-card rounded-3xl p-10 text-center">
          <div className="text-5xl mb-3">🪔</div>
          <h3 className="font-tamil text-3xl font-bold text-primary">விசேஷ தரிசனம்</h3>
          <p className="font-tamil text-muted-foreground mt-4 leading-relaxed">
            பௌர்ணமி, அமாவாசை, பிரதோஷம் மற்றும் ஏகாதசி நாட்களில் சிறப்பு அபிஷேகம்
            மற்றும் தரிசன ஏற்பாடுகள் உள்ளன. பக்தர்கள் காலை 5:30 முதல் வந்து தரிசிக்கலாம்.
          </p>
          <div className="font-tamil mt-6 inline-block bg-gradient-gold text-maroon-deep px-6 py-2.5 rounded-full font-bold shadow-gold">
            அனைவரும் வருக!
          </div>
        </div>
      </section>

      <TempleFooter />
    </div>
  );
}
