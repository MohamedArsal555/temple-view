import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/TempleNav";
import hero from "@/assets/gopuram.jpg";

export const Route = createFileRoute("/aalaya-amaippu")({
  head: () => ({
    meta: [
      { title: "ஆலய அமைப்பு | ஸ்ரீ முருகன் கோயில்" },
      { name: "description", content: "ராஜகோபுரம், கருவறை, வசந்த மண்டபம் — கோயில் கட்டிட அமைப்பு" },
    ],
  }),
  component: Page,
});

function Page() {
  const parts = [
    { name: "ராஜகோபுரம்", desc: "ஐந்து நிலைகள் கொண்ட 90 அடி உயர நுழைவாயில்.", icon: "🏛️" },
    { name: "கருவறை", desc: "வேலாயுத முருகப்பெருமான் எழுந்தருளியுள்ள மூலஸ்தானம்.", icon: "🕉️" },
    { name: "அர்த்த மண்டபம்", desc: "கருவறையை சுற்றியுள்ள உள் பிரகாரம், அபிஷேக நேரம்.", icon: "🪔" },
    { name: "மகா மண்டபம்", desc: "பக்தர்கள் பஜனை செய்யும் பெரிய திறந்தவெளி மண்டபம்.", icon: "🎶" },
    { name: "வசந்த மண்டபம்", desc: "108 கல் தூண்களுடன் கூடிய சிற்ப கலைக் கூடம்.", icon: "🪷" },
    { name: "தீர்த்த குளம்", desc: "புனித நீர் கொண்ட பக்தர்கள் நீராடும் தீர்த்தம்.", icon: "💧" },
    { name: "கொடிமரம்", desc: "தங்கப் பூச்சு கொடிமரம் — விழாக்களில் கொடி ஏற்றப்படும்.", icon: "🚩" },
    { name: "யாகசாலை", desc: "ஹோமம், யாகம் நடத்தப்படும் தனி கூடம்.", icon: "🔥" },
  ];

  return (
    <PageShell title="ஆலய அமைப்பு" subtitle="கோயிலின் ஒவ்வொரு பகுதியும் — அதன் முக்கியத்துவம்" hero={hero}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parts.map((p) => (
          <div key={p.name} className="bg-card rounded-2xl p-6 shadow-temple border border-gold/30 hover:shadow-gold transition-shadow">
            <div className="text-4xl mb-3">{p.icon}</div>
            <h3 className="font-tamil text-xl text-primary font-bold">{p.name}</h3>
            <p className="font-tamil text-muted-foreground mt-2 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="font-tamil text-3xl text-primary font-bold mt-16 mb-6">கோயில் வரைபடம்</h2>
      <div className="bg-gradient-to-br from-secondary to-background rounded-3xl p-8 border border-gold/40">
        <div className="grid grid-cols-3 gap-3 text-center font-tamil text-sm">
          <div className="bg-card rounded-xl p-4 border border-gold/30">தீர்த்த குளம்</div>
          <div className="bg-card rounded-xl p-4 border border-gold/30">கொடிமரம்</div>
          <div className="bg-card rounded-xl p-4 border border-gold/30">யாகசாலை</div>
          <div className="bg-card rounded-xl p-4 border border-gold/30">மகா மண்டபம்</div>
          <div className="bg-gradient-temple text-primary-foreground rounded-xl p-4 font-bold">கருவறை<br/>(வேலாயுதர்)</div>
          <div className="bg-card rounded-xl p-4 border border-gold/30">அர்த்த மண்டபம்</div>
          <div className="col-span-3 bg-accent text-accent-foreground rounded-xl p-5 font-bold">ராஜகோபுரம் (கிழக்கு நுழைவாயில்)</div>
        </div>
      </div>
    </PageShell>
  );
}
