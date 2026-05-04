import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/TempleNav";
import hero from "@/assets/sthala-puranam.jpg";

export const Route = createFileRoute("/varalaru")({
  head: () => ({
    meta: [
      { title: "கோயில் வரலாறு | ஸ்ரீ முருகன் கோயில்" },
      { name: "description", content: "ஸ்ரீ முருகன் கோயிலின் ஆயிரம் ஆண்டுகால வரலாறும், மரபும், சேவையும்" },
    ],
  }),
  component: Page,
});

function Page() {
  const timeline = [
    { year: "கி.பி. 925", title: "கோயிலின் தொடக்கம்", desc: "சோழ மன்னர் பராந்தக சோழனால் முருகப்பெருமான் வழிபாடு தொடங்கப்பட்டது." },
    { year: "கி.பி. 1145", title: "கருவறை விரிவாக்கம்", desc: "இரண்டாம் குலோத்துங்க சோழன் காலத்தில் கருவறை செம்பு கூரையுடன் புதுப்பிக்கப்பட்டது." },
    { year: "கி.பி. 1378", title: "ராஜகோபுரம் எழுச்சி", desc: "விஜயநகர மன்னர் ஹரிஹரர் ஐந்து நிலை ராஜகோபுரத்தைக் கட்டினார்." },
    { year: "கி.பி. 1684", title: "வசந்த மண்டபம்", desc: "நாயக்க மன்னர்கள் காலத்தில் 108 கல் தூண்களுடன் வசந்த மண்டபம் அமைக்கப்பட்டது." },
    { year: "கி.பி. 1923", title: "கும்பாபிஷேகம்", desc: "சுதந்திரப் போராட்ட காலத்தில் முதல் பெரும் கும்பாபிஷேகம் நடைபெற்றது." },
    { year: "கி.பி. 2018", title: "சமீப கும்பாபிஷேகம்", desc: "12 ஆண்டு கால சீரமைப்புக்குப் பின் மீண்டும் கும்பாபிஷேகம் நடைபெற்றது." },
  ];

  return (
    <PageShell title="கோயில் வரலாறு" subtitle="ஆயிரம் ஆண்டுகால பக்தி மரபின் கதை" hero={hero}>
      <div className="prose prose-lg max-w-none font-tamil text-foreground">
        <p className="text-xl leading-relaxed">
          ஸ்ரீ முருகப்பெருமான் கோயில் தமிழகத்தின் தொன்மையான ஆலயங்களுள் ஒன்றாகும். ஆறுபடைவீடுகளின் மரபை உள்வாங்கி கட்டப்பட்ட இக்கோயில் ஆயிரம் ஆண்டுகளுக்கு மேலாக பக்தர்களின் இதயத்தில் அமைந்துள்ளது. வேலாயுதன், சரவணப்பெருமான், கந்தன், குமரன் என பல திருநாமங்களால் வழிபடப்படும் முருகனுக்கு இங்கு அபிஷேகமும் அர்ச்சனையும் தினமும் நடைபெறுகின்றன.
        </p>
      </div>

      <h2 className="font-tamil text-3xl text-primary font-bold mt-16 mb-8">கால வரிசை</h2>
      <div className="relative pl-8 border-l-4 border-gold/60 space-y-8">
        {timeline.map((t) => (
          <div key={t.year} className="relative">
            <div className="absolute -left-[42px] w-6 h-6 rounded-full bg-gradient-temple shadow-gold border-4 border-background" />
            <div className="bg-card rounded-2xl p-6 shadow-temple border border-gold/30">
              <div className="font-display text-accent-foreground bg-accent inline-block px-3 py-1 rounded-full text-sm">{t.year}</div>
              <h3 className="font-tamil text-2xl text-primary font-bold mt-3">{t.title}</h3>
              <p className="font-tamil text-muted-foreground mt-2">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
