import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/TempleNav";
import { useState } from "react";
import hero from "@/assets/temple-structure.jpg";

export const Route = createFileRoute("/naatkaatti")({
  head: () => ({
    meta: [
      { title: "தமிழ் நாட்காட்டி | ஸ்ரீ முருகன் கோயில்" },
      { name: "description", content: "தமிழ் மாத நாட்காட்டி, விசேஷ நாட்கள், திதி, நட்சத்திரம்" },
    ],
  }),
  component: Page,
});

const tamilMonths = ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"];
const days = ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"];
const specialDays: Record<number, string> = { 5: "சஷ்டி", 12: "கார்த்திகை", 18: "பௌர்ணமி", 24: "ஏகாதசி", 28: "அமாவாசை" };

function Page() {
  const [monthIdx, setMonthIdx] = useState(0);
  const daysInMonth = 30;
  const startDay = 2;

  return (
    <PageShell title="தமிழ் நாட்காட்டி" subtitle="மாத விசேஷ நாட்கள், திதி, நட்சத்திரம்" hero={hero}>
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setMonthIdx((m) => (m - 1 + 12) % 12)} className="px-4 py-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground font-tamil">← முந்தைய</button>
        <h2 className="font-tamil text-3xl text-primary font-bold">{tamilMonths[monthIdx]}</h2>
        <button onClick={() => setMonthIdx((m) => (m + 1) % 12)} className="px-4 py-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground font-tamil">அடுத்தது →</button>
      </div>

      <div className="bg-card rounded-3xl p-6 shadow-temple border border-gold/30">
        <div className="grid grid-cols-7 gap-2 mb-3">
          {days.map((d) => (
            <div key={d} className="text-center font-tamil font-bold text-primary py-2">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: startDay }).map((_, i) => <div key={`e${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const date = i + 1;
            const special = specialDays[date];
            return (
              <div key={date} className={`relative aspect-square rounded-xl flex flex-col items-center justify-center border ${special ? "bg-gradient-gold border-gold-deep" : "bg-background border-gold/20 hover:border-primary"} transition-colors`}>
                <span className={`font-display font-bold text-lg ${special ? "text-maroon-deep" : "text-foreground"}`}>{date}</span>
                {special && <span className="font-tamil text-[10px] text-maroon-deep font-bold">{special}</span>}
              </div>
            );
          })}
        </div>
      </div>

      <h3 className="font-tamil text-2xl text-primary font-bold mt-12 mb-4">இம்மாத விசேஷங்கள்</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(specialDays).map(([d, name]) => (
          <div key={d} className="flex items-center gap-4 bg-card p-4 rounded-2xl border border-gold/30">
            <div className="w-14 h-14 rounded-full bg-gradient-temple text-primary-foreground flex items-center justify-center font-display font-bold text-xl">{d}</div>
            <div className="font-tamil">
              <div className="font-bold text-primary">{name}</div>
              <div className="text-sm text-muted-foreground">{tamilMonths[monthIdx]} {d}</div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
