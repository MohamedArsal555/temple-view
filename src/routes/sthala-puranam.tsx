import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/TempleNav";
import hero from "@/assets/murugan-deity.jpg";

export const Route = createFileRoute("/sthala-puranam")({
  head: () => ({
    meta: [
      { title: "ஸ்தல புராணம் | ஸ்ரீ முருகன் கோயில்" },
      { name: "description", content: "சூரசம்ஹாரம், வேல் வழங்கல், ஆறுபடைவீடு — ஸ்தல புராண கதைகள்" },
    ],
  }),
  component: Page,
});

function Page() {
  const stories = [
    { title: "வேல் வழங்கப்பட்டது", body: "பார்வதி தேவியால் முருகனுக்கு வழங்கப்பட்ட சக்தி வேல், அறியாமையை அழிக்கும் ஞான ஆயுதமாகும். இக்கோயிலின் கருவறை மீது அமர்ந்துள்ள வேலாயுதர் இதையே நினைவூட்டுகிறார்." },
    { title: "சூரபத்மன் சம்ஹாரம்", body: "தேவர்களைத் துன்புறுத்திய சூரபத்மனை முருகன் வேலால் வென்று மயில் மற்றும் சேவல் கொடியாக்கினார். அந்த வெற்றியின் நினைவு நாள் கந்த சஷ்டியாகும்." },
    { title: "வள்ளி தெய்வானை திருமணம்", body: "இறை அன்பின் வடிவமான வள்ளியையும், தெய்வீக ஞானத்தின் வடிவமான தெய்வானையையும் மணந்த முருகன், பக்தி-ஞான இணைவின் சின்னமாக விளங்குகிறார்." },
    { title: "ஓம் என்பதின் பொருள்", body: "தந்தையான சிவனுக்கே ஓம்காரத்தின் பொருளை உபதேசித்த ஞான குருவாக முருகன் இவ்விடத்தில் ஸ்வாமிநாதனாகக் காட்சி தருகிறார்." },
  ];

  return (
    <PageShell title="ஸ்தல புராணம்" subtitle="இக்கோயிலின் தோற்றம் பற்றிய புனிதக் கதைகள்" hero={hero}>
      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((s) => (
          <article key={s.title} className="bg-card rounded-2xl p-7 shadow-temple border border-gold/30 hover:-translate-y-1 transition-transform">
            <div className="text-3xl mb-3">📜</div>
            <h2 className="font-tamil text-2xl text-primary font-bold">{s.title}</h2>
            <p className="font-tamil text-foreground/80 leading-relaxed mt-3">{s.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 ornate-border rounded-2xl p-8 bg-secondary/40 text-center">
        <p className="font-tamil text-2xl text-primary font-bold">“வேல் முருகா! ஹரோஹரா!”</p>
        <p className="font-tamil text-muted-foreground mt-2">— கந்த புராணம்</p>
      </div>
    </PageShell>
  );
}
