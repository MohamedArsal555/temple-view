import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/TempleNav";
import { useState } from "react";
import hero from "@/assets/sthala-puranam.jpg";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "நிர்வாக பலகம் | ஸ்ரீ முருகன் கோயில்" },
      { name: "description", content: "Admin Panel CMS — உள்ளடக்கம், நன்கொடை, விழா மேலாண்மை" },
    ],
  }),
  component: Page,
});

function Page() {
  const [tab, setTab] = useState("dashboard");
  const tabs = [
    { id: "dashboard", label: "முகப்பு" },
    { id: "events", label: "விழா/நிகழ்வு" },
    { id: "donations", label: "நன்கொடை" },
    { id: "content", label: "உள்ளடக்கம்" },
    { id: "users", label: "பயனாளர்" },
  ];

  const stats = [
    { label: "மொத்த நன்கொடை", value: "₹ 4,82,150", trend: "+12%" },
    { label: "இம்மாத பக்தர்கள்", value: "12,450", trend: "+8%" },
    { label: "வரும் விழாக்கள்", value: "6", trend: "இம்மாதம்" },
    { label: "பதிவான அர்ச்சகர்", value: "9", trend: "செயலில்" },
  ];

  const events = [
    { name: "தைப்பூசம்", date: "2026 பிப்ரவரி 1", status: "திட்டமிடப்பட்டது" },
    { name: "பங்குனி உத்தரம்", date: "2026 மார்ச் 12", status: "வரைவு" },
    { name: "வைகாசி விசாகம்", date: "2026 மே 22", status: "திட்டமிடப்பட்டது" },
  ];

  const donations = [
    { name: "ராமசாமி", amount: "₹ 5,001", type: "அபிஷேகம்", date: "30 ஏப்ரல்" },
    { name: "லக்ஷ்மி", amount: "₹ 1,116", type: "அன்னதானம்", date: "29 ஏப்ரல்" },
    { name: "முருகேசன்", amount: "₹ 11,000", type: "புதுப்பிப்பு", date: "28 ஏப்ரல்" },
  ];

  return (
    <PageShell title="நிர்வாக பலகம்" subtitle="Admin Panel · CMS" hero={hero}>
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`font-tamil px-5 py-2 rounded-full transition-colors ${tab === t.id ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70 hover:bg-accent"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "dashboard" && (
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-2xl p-5 border border-gold/30 shadow-temple">
                <div className="font-tamil text-sm text-muted-foreground">{s.label}</div>
                <div className="font-display text-3xl text-primary font-bold mt-2">{s.value}</div>
                <div className="text-xs text-accent-foreground bg-accent/40 inline-block px-2 py-0.5 rounded-full mt-2 font-tamil">{s.trend}</div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-6 border border-gold/30">
            <h3 className="font-tamil text-xl text-primary font-bold mb-4">இம்மாத நன்கொடை வரைபடம்</h3>
            <div className="flex items-end gap-2 h-48">
              {[40, 65, 50, 80, 95, 70, 88, 100, 75, 60, 85, 92].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-temple rounded-t-lg hover:opacity-80 transition-opacity" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "events" && (
        <div className="space-y-4">
          <button className="font-tamil px-5 py-2 rounded-full bg-gradient-temple text-primary-foreground">+ புதிய விழா</button>
          {events.map((e) => (
            <div key={e.name} className="flex items-center justify-between bg-card rounded-2xl p-5 border border-gold/30">
              <div>
                <div className="font-tamil text-lg text-primary font-bold">{e.name}</div>
                <div className="font-tamil text-sm text-muted-foreground">{e.date}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-tamil text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">{e.status}</span>
                <button className="text-sm text-primary hover:underline font-tamil">திருத்து</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "donations" && (
        <div className="bg-card rounded-2xl border border-gold/30 overflow-hidden">
          <table className="w-full font-tamil">
            <thead className="bg-secondary">
              <tr>
                <th className="px-5 py-3 text-left">பெயர்</th>
                <th className="px-5 py-3 text-left">தொகை</th>
                <th className="px-5 py-3 text-left">வகை</th>
                <th className="px-5 py-3 text-left">தேதி</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d, i) => (
                <tr key={i} className="border-t border-gold/20">
                  <td className="px-5 py-3">{d.name}</td>
                  <td className="px-5 py-3 font-display font-bold text-primary">{d.amount}</td>
                  <td className="px-5 py-3">{d.type}</td>
                  <td className="px-5 py-3 text-muted-foreground">{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "content" && (
        <div className="space-y-4 font-tamil">
          {["கோயில் வரலாறு", "ஸ்தல புராணம்", "ஆலய அமைப்பு", "தெய்வங்கள்"].map((c) => (
            <div key={c} className="flex items-center justify-between bg-card rounded-2xl p-5 border border-gold/30">
              <span className="text-primary font-bold">{c}</span>
              <button className="text-sm px-4 py-1.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">திருத்து</button>
            </div>
          ))}
        </div>
      )}

      {tab === "users" && (
        <div className="bg-card rounded-2xl p-6 border border-gold/30 font-tamil">
          <p className="text-muted-foreground">பயனாளர்/அர்ச்சகர் கணக்குகள் இங்கு நிர்வகிக்கப்படும்.</p>
          <div className="mt-4 grid gap-3">
            {["சிவ ஐயா (தலைமை அர்ச்சகர்)", "சுந்தரம் ஐயா", "கணேசன் ஐயா", "நிர்வாக குழு உறுப்பினர் — 3"].map((u) => (
              <div key={u} className="flex items-center justify-between bg-background rounded-xl p-4 border border-gold/20">
                <span>{u}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">Active</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 p-5 bg-secondary/40 rounded-2xl text-center font-tamil text-sm text-muted-foreground">
        🔒 இது demo நிர்வாக பலகம். உண்மையான authentication & database-க்கு Lovable Cloud-ஐ enable செய்ய வேண்டும்.
      </div>
    </PageShell>
  );
}
