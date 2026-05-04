import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/TempleNav";
import hero from "@/assets/annadhanam.jpg";
import annaImg from "@/assets/annadhanam.jpg";
import abhiImg from "@/assets/abhishekam.jpg";
import kumbaImg from "@/assets/kumbabhishekam.jpg";

export const Route = createFileRoute("/nankodai")({
  head: () => ({
    meta: [
      { title: "நன்கொடை | ஸ்ரீ முருகன் கோயில்" },
      { name: "description", content: "ஆன்லைன் நன்கொடை — அன்னதானம், அபிஷேகம், கோயில் புதுப்பிப்பு" },
    ],
  }),
  component: Page,
});

function Page() {
  const categories = [
    { title: "அன்னதானம்", amount: "₹ 1,116", desc: "100 பக்தர்களுக்கு உணவு வழங்க", img: annaImg, icon: "🍛" },
    { title: "அபிஷேகம் / கும்பாபிஷேகம்", amount: "₹ 5,001", desc: "சிறப்பு அபிஷேக ஸ்பான்சர்", img: abhiImg, icon: "🌊" },
    { title: "கோயில் புதுப்பிப்பு", amount: "₹ 11,000", desc: "சீரமைப்பு மற்றும் கோபுர பணி", img: kumbaImg, icon: "🛠️" },
  ];

  const presets = [101, 501, 1001, 2501, 5001, 10000];

  return (
    <PageShell title="நன்கொடை" subtitle="உங்கள் பங்களிப்பு — கோயில் சேவையின் முதுகெலும்பு" hero={hero}>
      <div className="grid lg:grid-cols-3 gap-6">
        {categories.map((c) => (
          <div key={c.title} className="bg-card rounded-3xl overflow-hidden shadow-temple border border-gold/30 hover:-translate-y-1 transition-transform">
            <img src={c.img} alt={c.title} loading="lazy" width={1280} height={896} className="w-full h-44 object-cover" />
            <div className="p-6">
              <div className="text-3xl">{c.icon}</div>
              <h3 className="font-tamil text-2xl text-primary font-bold mt-2">{c.title}</h3>
              <p className="font-tamil text-muted-foreground text-sm mt-2">{c.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-display text-2xl text-gradient-gold font-bold">{c.amount}</div>
                <button className="font-tamil px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:bg-maroon-deep transition-colors">வழங்க</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid lg:grid-cols-2 gap-10 bg-gradient-to-br from-secondary to-background rounded-3xl p-8 border border-gold/40">
        <div>
          <h2 className="font-tamil text-3xl text-primary font-bold">ஆன்லைன் நன்கொடை</h2>
          <p className="font-tamil text-muted-foreground mt-2">UPI ஸ்கேனர் மூலம் நேரடியாக வழங்கலாம்.</p>
          <div className="mt-6 space-y-4 font-tamil">
            <div>
              <label className="text-sm text-muted-foreground">பெயர்</label>
              <input className="w-full mt-1 px-4 py-3 rounded-xl bg-background border border-gold/40 focus:outline-none focus:border-primary" placeholder="உங்கள் பெயர்" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">தொலைபேசி எண்</label>
              <input className="w-full mt-1 px-4 py-3 rounded-xl bg-background border border-gold/40 focus:outline-none focus:border-primary" placeholder="+91" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">தொகை தேர்வு</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {presets.map((p) => (
                  <button key={p} className="px-3 py-2 rounded-xl border border-gold/40 hover:bg-primary hover:text-primary-foreground transition-colors font-display">₹{p}</button>
                ))}
              </div>
            </div>
            <button className="w-full mt-2 py-3 rounded-full bg-gradient-temple text-primary-foreground font-bold shadow-temple hover:scale-[1.01] transition-transform">
              நன்கொடை வழங்க →
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-background p-6 rounded-3xl ornate-border">
            <div className="w-56 h-56 grid grid-cols-12 grid-rows-12 gap-px bg-foreground p-2 rounded-lg">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className={`${(i * 7 + (i % 5) * 3) % 3 === 0 ? "bg-background" : "bg-foreground"}`} />
              ))}
            </div>
          </div>
          <p className="font-tamil text-center mt-4 text-primary font-bold">UPI: srimurugan@oksbi</p>
          <p className="font-tamil text-center text-sm text-muted-foreground">மொபைல் கேமராவில் ஸ்கேன் செய்யவும்</p>
        </div>
      </div>

      <div className="mt-10 text-center font-tamil text-sm text-muted-foreground">
        * அனைத்து நன்கொடைகளுக்கும் 80G வரி விலக்கு வழங்கப்படும்.
      </div>
    </PageShell>
  );
}
