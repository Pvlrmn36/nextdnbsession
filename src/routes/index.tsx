import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin, ParkingCircle, Beer, Tent, Banknote, HeartHandshake, Trees,
  Instagram, Facebook, Calendar, Ticket, Menu, X,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo transparent.png";
import logoneuroporn from "@/assets/Neuroporn.png";
import hero from "@/assets/backgroundhero.png";
import dj1 from "@/assets/drawback.png";
import dj2 from "@/assets/drawback.png";
import dj3 from "@/assets/drawback.png";
import dj4 from "@/assets/drawback.png";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "o-akci", label: "O AKCI" },
  { id: "lineup", label: "LINEUP" },
  { id: "timetable", label: "TIMETABLE" },
  { id: "info", label: "INFO" },
  { id: "galerie", label: "GALERIE" },
  { id: "faq", label: "FAQ" },
  { id: "kontakt", label: "KONTAKT" },
  { id: "vstupenky", label: "VSTUPENKY" },
];

const HEADLINERS = [
  { name: "TR TACTICS", style: "NEURO", img: dj1 },
  { name: "SYMPLEX", style: "NEURO", img: dj2 },
];

const SUPPORT = [
  { name: "SUKKI", style: "HARDCORE", img: dj2 },
  { name: "KRYPTIC", style: "NEUROFUNK", img: dj1 },
  { name: "DRAWBACK", style: "ROLLERS", img: dj1 },
  { name: "BASSLINE", style: "DEEP", img: dj4 },
  { name: "FLUX", style: "NEURO", img: dj1 },
  { name: "SHADOW", style: "ROLLERS", img: dj2 },
  { name: "REZIN", style: "DEEP", img: dj3 },
  { name: "VIPER", style: "HARDCORE", img: dj4 },
  { name: "ECHO", style: "NEURO", img: dj1 },
  { name: "OBSCURA", style: "DEEP", img: dj2 },
  { name: "MC PULSE", style: "MC", img: dj4 },
];

const TIMETABLE = [
  ["17:00", "OPEN SLOT"],
  ["18:00", "TOBI b2b JORIS"],
  ["19:00", "DRAWBACK"],
  ["20:00", "WATERONE b2b SPOONER"],
  ["21:00", "ONEBLOOD b2b POLIPHONIC b2b ADYX"],
  ["21:45", "ILLSICK B2B SHILLET"],
  ["22:30", "L-ORI & BABS"],
  ["23:15", "ILL-FATED B2B M.G."],
  ["00:00", "SYMPLEX B2B TR TACTICS"],
  ["01:00", "XENYH & TYBERUS B2B DR.AX"],
  ["02:00", "AUDIO ASSAULT B2B DOGMA  B2B SHOGUN TACTIC"],
  ["03:00", "AWOKEN B2B MIRO"],
  ["04:00", "NASAY B2B TOTO"],
  ["04:45", "THE END"],
];

const INFO = [
  { icon: MapPin, title: "LOKACE", text: "Těšetice u Olomouce • areál hřiště" },
  { icon: ParkingCircle, title: "PARKOVÁNÍ", text: "Omezená kapacita • doporučujeme spolujízdu" },

  { icon: Banknote, title: "PLATBA", text: "Vstup cash only • bar cash / QR platby" },
  { icon: Beer, title: "BAR", text: "Pivo • drinky • nealko\nBar otevřený po celou noc" },
  { icon: HeartHandshake, title: "RESPEKT", text: "Respekt k lidem, hudbě i místu\nZero tolerance pro konflikty" },
  { icon: Trees, title: "OPEN AIR", text: "DNB pod širým nebem až do rána\nStage u hřiště • rave atmosféra" },
];

const FAQ = [
  { q: "KDE SE AKCE KONÁ?", a: "Akce se koná v Těšeticích u Olomouce u fotbalového hřiště. Přesnou trasu a mapu najdeš v sekci INFO ." },
  { q: "JAK JE TO S PARKOVÁNÍM?", a: "Kapacita parkování je omezená. Doporučujeme přijet společně autem nebo využít spolujízdu." },
  { q: "JAK U NÁS ZAPLATÍŠ?", a: "Vstup na místě pouze hotově. Bar přijímá cash i QR platby." },
  { q: "JE MOŽNÉ PŘESPAT?", a: "Oficiální camp není k dispozici. Mysli na bezpečný odvoz domů." },
  { q: "CO NA MÍSTĚ NAJDU?", a: "Kvalitní sound a lidi, kteří jedou drum and bass naplno až do rána." },
];
const EVENT_DATE = new Date("2026-06-06T17:00:00");
function Index() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 300) {
        setActiveSection("hero");
        return;
      }
      setScrolled(window.scrollY > 30);

      const sections = NAV.map((n) => n.id);
      const scrollY = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);

        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (
          scrollY >= top &&
          scrollY < bottom
        ) {
          setActiveSection(id);
        }
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-[#4f35bf]/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-background/60 to-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-10 h-11 md:h-14 flex items-center justify-between">
          <button onClick={() => go("hero")} className="flex items-center group">
            <img
              src={logo}
              alt="NEXT DNB SESSION"
              className="h-8 sm:h-10 md:h-16 w-auto max-w-[180px] sm:max-w-none object-contain bg-transparent opacity-95 group-hover:opacity-100 transition drop-shadow-[0_0_14px_oklch(0.85_0.18_190/0.5)]"
            />
          </button>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {NAV.filter((n) => n.id !== "vstupenky").map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`text-[11px] tracking-[0.25em] font-display transition-colors ${activeSection === n.id
                    ? "text-[#6a4cff]"
                    : "text-muted-foreground hover:text-[var(--cyan)]"
                  }`}
              >
                {n.label}
              </button>
            ))}

            <button
              onClick={() => go("vstupenky")}
              className="px-5 py-2 rounded-md bg-[#14bccd] hover:bg-[#4f35bf] text-primary-foreground font-display tracking-[0.25em] text-[11px] glow-cyan hover:brightness-110 transition"
            >
              VSTUPENKY
            </button>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-5 py-6 flex flex-col gap-4">
              {NAV.filter((n) => n.id !== "vstupenky").map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="text-left text-sm tracking-[0.25em] font-display text-muted-foreground hover:text-[var(--cyan)]"
                >
                  {n.label}
                </button>
              ))}

              <button
                onClick={() => go("vstupenky")}
                className="mt-2 px-5 py-2.5 rounded-md bg-[var(--cyan)] text-primary-foreground font-display tracking-[0.25em] text-sm"
              >
                VSTUPENKY
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden min-h-[88svh] md:min-h-screen bg-black flex items-center justify-center overflow-hidden grain"
      >
        <div
          className="pointer-events-none absolute inset-0 z-10 transition duration-300"
          style={{
            background: `radial-gradient(
      500px circle at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(0,255,255,0.10),
      transparent 40%
    )`,
          }}
        />
        {/* Background image — crowd, lasers, smoke, forest */}
        <img
          src={hero}
          alt="NEXT DNB SESSION open air rave"
          className="absolute inset-0 w-full h-full object-cover object-[center_10%] transition-transform duration-300"
          width={1920}
          height={1080}
        />

        {/* Cinematic dark overlays — vignette + bottom fade for contrast */}
        <div className="absolute inset-0 bg-background/25" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/45 z-[1]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background)/0.85)_100%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />


        {/* ATMOSPHERIC FOG */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">

          <div className="absolute right-[-200px] bottom-[-100px] w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full animate-fog-two" />

          <div className="absolute left-1/3 bottom-0 w-[500px] h-[500px] bg-cyan-300/6 blur-[90px] rounded-full animate-fog-three" />
        </div>

        {/* Subtle color bleed from lasers */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--cyan)] opacity-[0.10] blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--violet)] opacity-[0.10] blur-[140px]" />
        {/* Animated light beams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
          <div className="absolute left-[-10%] top-[20%] w-[70%] h-[2px]
  bg-cyan-300/55 blur-sm rotate-[12deg]
  animate-beam-cyan" />

          <div className="absolute right-[-10%] top-[35%] w-[60%] h-[2px]
  bg-purple-400/55 blur-sm rotate-[-10deg]
  animate-beam-purple" />

          <div className="absolute left-[20%] bottom-[25%] w-[50%] h-[1px]
  bg-cyan-200/20 blur-sm rotate-[8deg]
  animate-beam-soft" />
        </div>

        {/* Centered cinematic composition */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 lg:px-10 pt-24 pb-20 flex flex-col items-center text-center">
          {/* Top tagline */}
          <p className="font-display tracking-[0.99em] hidden md:block font-display tracking-[0.45em] text-xs text-cyan-300/90 text-cyan-300/80">
            — DNB · OPEN AIR · CZ —
          </p>

          {/* Headline */}
          <div className="absolute top-[18%] w-[420px] h-[220px] bg-cyan-400/6 blur-[90px] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-[20%] w-[320px] h-[120px] bg-black/35 blur-[55px] rounded-full pointer-events-none z-0" />
          <div
            className="
    absolute
    top-[7%]
    left-1/2
    -translate-x-1/2
    w-[240px]
    h-[90px]
    bg-black/35
    blur-[35px]
    rounded-full
    pointer-events-none
  "
          />
          <img
            src={logo}
            alt="NEXT DNB SESSION"

            className="
    animate-float
    duration-300
    will-change-transform
    w-[240px]
    sm:w-[280px]
    md:w-[340px]
    lg:w-[380px]
  "
          />
          {/* Tagline under headline */}
          <p className="font-display tracking-[0.35em] text-lg md:text-xl text-white/85">
            <span className="text-[#6a4cff]">DEEP</span>
            {" · "}
            <span className="text-[#6a4cff]">ROLLERS</span>
            {" · "}
            <span className="text-[#6a4cff]">NEURO</span>
            {" · "}
            <span className="text-[#6a4cff]">CROSSBREED</span>
          </p>
          {/* COUNTDOWN */}

          <div className="mt-7 flex items-center justify-center gap-4 md:gap-8 text-center">

            <div className="w-[52px]">
              <div className="text-3xl md:text-2xl font-display text-white/90 tracking-[0.2em]">
                {String(timeLeft.days).padStart(2, "0")}
              </div>

              <div className="mt-1 text-[9px] md:text-xs tracking-[0.18em] text-cyan-300/55">
                DAYS
              </div>
            </div>

            <div className="w-[52px]">
              <div className="text-3xl md:text-2xl font-display text-white/90 tracking-[0.2em]">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>

              <div className="mt-1 text-[9px] md:text-xs tracking-[0.18em] text-cyan-300/55">
                HOURS
              </div>
            </div>

            <div className="w-[52px]">
              <div className="text-3xl md:text-2xl font-display text-white/90 tracking-[0.2em]">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>

              <div className="mt-1 text-[9px] md:text-xs tracking-[0.18em] text-cyan-300/55">
                MINUTES
              </div>
            </div>

          </div>

          {/* Hairline divider */}
          <div className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" />

          {/* Event meta */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-foreground/90">
              <Calendar size={18} className="text-[var(--cyan)]" />
              <span className="tracking-[0.25em] font-display text-sm">06 / 06 / 2026</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-foreground/90">
              <MapPin size={18} className="text-[var(--cyan)]" />
              <a
                href="https://www.google.com/maps/place/49%C2%B035'41.2%22N+17%C2%B007'17.4%22E/@49.5947804,17.1030331,2057m/data=!3m2!1e3!4b1!4m13!1m8!3m7!1s0x47124515a86ccca3:0x105f269da1c03cd!2zVMSbxaFldGljZSwgNzgzIDQ2IFTEm8WhZXRpY2U!3b1!8m2!3d49.5931724!4d17.1260751!16s%2Fm%2F06zk_qd!3m3!8m2!3d49.594768!4d17.121487?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-[0.25em] font-display text-sm hover:text-cyan-300 transition"
              >
                Těšetice u Olomouce
              </a>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-foreground/90">
              <Ticket size={18} className="text-[var(--cyan)]" />
              <span className="tracking-[0.25em] font-display text-sm">17:00 — 04:45</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => go("vstupenky")}
              className="px-8 py-3.5 rounded-md bg-[#14bccd] text-primary-foreground font-display tracking-[0.3em] text-[13px] glow-cyan hover:brightness-110 transition"
            >
              KOUPIT VSTUPENKY
            </button>
            <button
              onClick={() => go("lineup")}
              className="px-8 py-4 rounded-md border border-[var(--cyan)] text-foreground font-display tracking-[0.3em] text-sm shadow-[0_0_24px_oklch(0.85_0.18_190/0.2)] hover:bg-[var(--cyan)]/10 hover:shadow-[0_0_32px_oklch(0.85_0.18_190/0.35)] transition"
            >
              LINEUP
            </button>
          </div>
        </div>

        {/* Bottom edge fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-b from-transparent via-background/70 to-background z-[3]" />

        {/* Scroll cue */}
        <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-90">
          <span className="text-[10px] tracking-[0.4em] font-display text-cyan-300/70">
            SCROLL
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[var(--cyan)] to-transparent animate-pulse" />
        </div>
      </section>

      {/* O AKCI */}
      <section id="o-akci" className="relative pt-20 pb-14 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl text-foreground">
            O AKCI
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
            <p className="text-base md:text-lg leading-[1.9] text-white/70">
              <span className="text-foreground font-semibold">NEXT DNB SESSION</span> je letní open air akce pro všechny, kteří milují deep vibe, těžkou basu a noční atmosféru pod širým nebem. Každý rok spojujeme komunitu lidí, které baví kvalitní DNB, silný sound a energie, kterou musíš zažít na vlastní kůži.

            </p>
            <p className="text-base md:text-lg leading-[1.9] text-white/70">
              Žádný přeplácaný festival. Jen hudba, lasery, kouř a lidi, kteří přišli kvůli stejné věci. Od západu slunce až do rána jedeme deep, rollers, neuro i hard DNB v atmosféře, kterou jinde nenajdeš.
            </p>

          </div>
        </div>
      </section>
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
      </div>

      {/* LINEUP */}
      <section
        id="lineup"
        className="relative pt-6 pb-24 md:pt-16 md:pb-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl text-foreground">
            LINEUP
          </h2>
          <p className="mt-4 text-sm tracking-[0.2em] text-muted-foreground font-display">
            HEADLINERS
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HEADLINERS.map((dj) => (
              <article
                key={dj.name}
                className="group relative aspect-[5/6] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.08)] transition-all duration-500"
              >
                <img
                  src={dj.img}
                  alt={dj.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="font-display text-2xl md:text-4xl text-white tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">{dj.name}</h3>
                  <p className="mt-1 text-xs tracking-[0.2em] text-[var(--cyan)] font-display">
                    {dj.style}
                  </p>
                </div>
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[var(--cyan)]/90 text-primary-foreground text-[10px] font-display tracking-[0.2em]">
                  HEADLINER
                </div>
              </article>
            ))}
          </div>

          <p className="mt-16 text-sm tracking-[0.25em] text-white/55 font-display">
            SUPPORT
          </p>
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-10 w-[420px] h-[420px] rounded-full bg-cyan-500/5 blur-[120px]" />
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-5">
            {SUPPORT.map((dj) => (
              <article
                key={dj.name}
                className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/25 hover:shadow-[0_0_22px_rgba(0,255,255,0.06)] transition-all duration-500"
              >
                <img
                  src={dj.img}
                  alt={dj.name}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h4 className="font-display text-base text-foreground">{dj.name}</h4>
                  <p className="text-[10px] tracking-[0.2em] text-[var(--cyan)] font-display">
                    {dj.style}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMETABLE */}
      <div className="mx-auto w-[75%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mb-16" />

      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />
      <section
        id="timetable"
        className="relative pt-6 pb-24 md:pt-10 md:pb-32"
      >
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl">TIMETABLE</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,255,0.04)]">
            {TIMETABLE.map(([time, name], i) => (
              <div
                key={time}
                className={`flex items-center gap-4 px-6 py-3 ${i !== TIMETABLE.length - 1
                  ? "border-b border-white/10"
                  : ""
                  } hover:bg-cyan-400/[0.03] transition-colors duration-300`}
              >
                <div className="font-display text-lg md:text-xl text-[var(--cyan)] tracking-widest w-20">
                  {time}
                </div>
                <div className="font-display text-sm md:text-lg tracking-widest text-foreground">
                  {name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO */}
      <section id="info" className="relative py-24 md:py-32 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl">INFO</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INFO.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group relative p-6 rounded-lg border border-border border-[var(--cyan)]/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)]/30 hover:shadow-[0_0_25px_rgba(0,255,255,0.08)]"
              >
                <div className="w-12 h-12 rounded-md border border-[var(--cyan)]/40 flex
items-center justify-center text-[var(--cyan)] transition">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl tracking-wider text-foreground group-hover:text-[#6a4cff] transition-colors duration-300">
                  {title}
                </h3>
                <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
                  {text}
                </p>
                {title === "LOKACE" && (
                  <a
                    href="https://www.google.com/maps/place/49%C2%B035'41.2%22N+17%C2%B007'17.4%22E/@49.5947666,17.1208207,153m/data=!3m1!1e3!4m13!1m8!3m7!1s0x47124515a86ccca3:0x105f269da1c03cd!2zVMSbxaFldGljZSwgNzgzIDQ2IFTEm8WhZXRpY2U!3b1!8m2!3d49.5931724!4d17.1260751!16s%2Fm%2F06zk_qd!3m3!8m2!3d49.5947778!4d17.1215?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 mx-auto flex w-fit items-center gap-1.5 rounded-md border border-[#6a4cff]/40 px-3 py-1.5 text-[10px] tracking-[0.16em] text-white/70 hover:border-[#6a4cff] hover:text-[#6a4cff] transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4" />
                    NAVIGOVAT
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerie" className="relative py-24 md:py-32 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl">GALERIE / AFTERMOVIE</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Vzpomínky z minulých ročníků. Atmosféra, kterou musíš zažít naživo.
          </p>
          <div className="mt-10 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 relative aspect-[16/9] overflow-hidden rounded-lg border border-border group">
              <img src={gallery1} alt="Aftermovie" loading="lazy" width={1536} height={896}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4">
              <div className="relative overflow-hidden rounded-lg border border-border group">
                <img src={gallery2} alt="" loading="lazy" width={1024} height={1024}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative overflow-hidden rounded-lg border border-border group">
                <img src={gallery3} alt="" loading="lazy" width={1024} height={1024}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-12 relative aspect-[21/7] overflow-hidden rounded-lg border border-border group">
              <img src={gallery4} alt="" loading="lazy" width={1024} height={1024}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24 md:py-32 border-t border-border/40">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl">FAQ</h2>
          <Accordion
            type="single"
            collapsible
            className="mt-10 space-y-4"
          >
            {FAQ.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border/60 bg-white/[0.02] px-6 transition-all duration-300 hover:border-[#6a4cff]/40"
              >
                <AccordionTrigger className="font-display text-lg tracking-[0.18em] text-foreground hover:text-[#6a4cff] hover:no-underline text-left py-6 transition-colors duration-300">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* TICKETS CTA */}
      <section id="vstupenky" className="relative py-24 md:py-36 border-t border-border/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={gallery1} alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--cyan)] opacity-10 blur-[160px]" />

        <div className="relative mx-auto max-w-3xl px-5 lg:px-10 text-center">
          <p className="font-display tracking-[0.4em] text-sm text-[var(--cyan)]">
            VSTUPENKY
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-7xl text-foreground leading-none">
            PŘEDPRODEJ A VSTUP NA MÍSTĚ
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Vstupenky můžeš koupit online v předprodeji nebo na místě při vstupu na akci.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              { tier: "PŘEDPRODEJ", price: "430", note: "Online vstupenka" },
              { tier: "NA MÍSTĚ", price: "450", note: "Hotově při vstupu" },
            ].map((t) => (
              <div
                key={t.tier}
                className="relative p-6 rounded-lg border bg-card/60 backdrop-blur border-border opacity-70"
              >
                <p className="font-display tracking-[0.2em] text-xs text-[var(--cyan)]">
                  {t.tier}
                </p>

                <p className="mt-2 font-display text-4xl text-foreground">
                  {t.price} Kč
                </p>

                <p className="mt-2 text-xs text-muted-foreground">
                  {t.note}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-md bg-[#14bccd] text-primary-foreground font-display tracking-[0.25em] text-base glow-cyan hover:brightness-110 transition"
          >
            <Ticket size={20} />
            KOUPIT VSTUPENKY
          </a>
        </div>
      </section>

      {/* POWERED BY NEUROPORN */}
      <div className="py-10 text-center border-t border-border/40">

        <p className="text-xs tracking-[0.3em] text-muted-foreground">
          POWERED BY NEUROPORN
        </p>

        <a
          href="https://www.instagram.com/neuropor.n/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all duration-300"
        >
          <img
            src={logoneuroporn}
            alt="NEUROPORN"
            className="w-28 mx-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>

      </div>
      {/* SOCIAL / FOOTER */}
      <footer id="kontakt" className="relative py-10 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-3 gap-10 items-center">

          <div>
            <img src={logo} alt="NEXT DNB SESSION" className="h-12 w-auto" />

            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              DNB OPEN AIR
              <br />
              Těšetice u Olomouce
              <br />
              06 / 06 / 2026
            </p>
          </div>

          <div className="text-center">

            <p className="mt-2 font-display text-l tracking-[0.2em] text-foreground">
              sociální sítě
            </p>

            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://instagram.com/nextdnbsession"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
      group
      w-11 h-11 rounded-xl
      border border-border
      flex items-center justify-center
      text-foreground/80
      transition-all duration-300
      hover:border-[#6a4cff]
      hover:text-[#6a4cff]
      hover:shadow-[0_0_18px_rgba(106,76,255,0.35)]
      hover:-translate-y-[2px]
    "
              >
                <Instagram
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
      group
      w-11 h-11 rounded-xl
      border border-border
      flex items-center justify-center
      text-foreground/80
      transition-all duration-300
      hover:border-[#6a4cff]
      hover:text-[#6a4cff]
      hover:shadow-[0_0_18px_rgba(106,76,255,0.35)]
      hover:-translate-y-[2px]
    "
              >
                <Facebook
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">

            </p>

          </div>

          <div className="md:text-right text-sm text-muted-foreground">
            <p>info@nextdnbsession.cz</p>

            <p className="mt-2 text-xs tracking-widest">
              NEXT DNB SESSION © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>

  );
}
