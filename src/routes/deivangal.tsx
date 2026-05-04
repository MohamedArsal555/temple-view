import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/TempleNav";
import hero from "@/assets/murugan-deity.jpg";
import murugan from "@/assets/murugan-deity.jpg";

export const Route = createFileRoute("/deivangal")({
  head: () => ({
    meta: [
      { title: "முக்கிய தெய்வங்கள் | ஸ்ரீ முருகன் கோயில்" },
      { name: "description", content: "மூலவர் வேலாயுதர், வள்ளி, தெய்வானை, விநாயகர், நவகிரகங்கள்" },
    ],
  }),
  component: Page,
});

function Page() {
  const deities = [
    { name: "ஸ்ரீ வேலாயுதர் (மூலவர்)", role: "கருவறையில் எழுந்தருளியுள்ள மூல மூர்த்தி", mantra: "ௐ சரவண பவ" },
    { name: "ஸ்ரீ வள்ளி அம்மன்", role: "முருகனின் இடப்பாகம் — பக்தியின் வடிவம்", mantra: "ௐ வள்ளியே நமஹ" },
    { name: "ஸ்ரீ தெய்வானை அம்மன்", role: "வலப்பாகம் — ஞானத்தின் வடிவம்", mantra: "ௐ தெய்வானயை நமஹ" },
    { name: "ஸ்ரீ விநாயகர்", role: "நுழைவாயிலில் — அனைத்துத் தடைகளையும் நீக்குபவர்", mantra: "ௐ கணேசாய நமஹ" },
    { name: "நவ கிரகங்கள்", role: "ஒன்பது கிரக சந்நிதி — தோஷ பரிகாரம்", mantra: "ௐ நவ கிரஹாய நமஹ" },
    { name: "நாக தம்பதி", role: "சர்ப்ப தோஷ நிவர்த்தி தெய்வங்கள்", mantra: "ௐ நாக ராஜாய நமஹ" },
  ];

  return (
    <PageShell title="முக்கிய தெய்வங்கள்" subtitle="கருவறையும் சுற்று சந்நிதிகளும்" hero={hero}>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img src={murugan} alt="மூலவர் வேலாயுதர்" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-temple border-4 border-gold/40" />
        <div className="font-tamil">
          <div className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-4">மூலவர்</div>
          <h2 className="text-4xl text-primary font-bold">ஸ்ரீ வேலாயுத சுவாமி</h2>
          <p className="text-lg text-foreground/80 mt-4 leading-relaxed">
            கருவறையில் கிழக்கு நோக்கி அமர்ந்துள்ள ஆறு திருமுகங்களைக் கொண்ட கந்தப் பெருமான், சக்தி வேலை ஏந்தி பக்தர்களுக்கு அருள்பாலிக்கிறார். மயில் வாகனம், சேவல் கொடி, வள்ளி-தெய்வானை சகிதமாக காட்சி தருகிறார்.
          </p>
          <div className="mt-6 p-5 bg-gradient-gold rounded-2xl text-maroon-deep">
            <div className="text-xs uppercase tracking-widest opacity-80">மூல மந்திரம்</div>
            <div className="text-2xl font-bold mt-1">ௐ சரவண பவ</div>
          </div>
        </div>
      </div>

      <h2 className="font-tamil text-3xl text-primary font-bold mt-20 mb-8">பரிவார தெய்வங்கள்</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deities.map((d) => (
          <div key={d.name} className="bg-card rounded-2xl p-6 shadow-temple border border-gold/30">
            <div className="text-3xl">🪔</div>
            <h3 className="font-tamil text-lg text-primary font-bold mt-2">{d.name}</h3>
            <p className="font-tamil text-sm text-muted-foreground mt-2">{d.role}</p>
            <div className="mt-4 text-xs font-tamil text-accent-foreground bg-accent/40 inline-block px-3 py-1 rounded-full">{d.mantra}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
