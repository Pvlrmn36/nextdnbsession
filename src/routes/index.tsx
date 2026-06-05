import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin, ParkingCircle, Beer, Tent, Banknote, HeartHandshake, Trees,
  Instagram, Facebook, Calendar, Ticket, Menu, X,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/Logo NxtDNB.png";
import logoneuroporn from "@/assets/Neuroporn.png";
import hero from "@/assets/backgroundhero.png";
import dj1 from "@/assets/SYMPLEX x TR TACTICS.png";
import dj2 from "@/assets/DRAX x TYBERUS x XENYH.png";
import gallery1 from "@/assets/pořadatelé NxtDNB.jpg";
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
  {
    name: "SYMPLEX × TR TACTICS",
    style: "HOOFBEATS × EATBRAIN / BLACKOUT",
    img: dj1,
    bio: "Speciální společný set dvou výrazných jmen evropské DNB scény. SYMPLEX přináší energii českého neurofunku a zkušenosti z velkých pódií, TR TACTICS přidává rakouskou preciznost, masivní basy a technicky propracovaný zvuk. Spojení, které bude patřit mezi nejsilnější momenty noci.",
  },
  {
    name: "DR.AX × TYBERUS & XENYH",
    style: "DARKSHIRE / NEUROFUNK",
    img: dj2,
    bio: "Trojice DJs, která společně doručí tvrdý, temný a energický neurofunk set. Rychlé mixy, neúprosné tempo, temná atmosféra a výběr tracků postavený tak, aby gradoval od začátku až do konce.",
  },
];

const SUPPORT = [
  { name: "AUDIO ASSAULT", style: "MC"},
  { name: "DOGMA", style: "MC"},
  { name: "SHOGUN TACTIC", style: "MC"},
  { name: "AWOKEN", style: "DEEP"},
  { name: "MIRO", style: "NEURO", },
  { name: "NASAY", style: "ROLLERS" },
  { name: "TOTO", style: "DEEP"},
  { name: "ILL-FATED", style: "HARDCORE"},
  { name: "M.G.", style: "NEURO"},
  { name: "L-ORI", style: "DEEP"},
  { name: "ILLSICK", style: "MC"},
  { name: "SHILLET", style: "MC",},
  { name: "ONEBLOOD", style: "MC",},
  { name: "POLIPHONIC", style: "MC"},
  { name: "ADYX", style: "MC" },
  { name: "WATERONE", style: "MC", },
  { name: "SPOONER", style: "MC", },
  { name: "DRAWBACK", style: "ROLLERS", },
  { name: "BABS", style: "MC", },
  { name: "TOBI", style: "MC", },
  { name: "JORIS", style: "MC", },
  { name: "COOLMEAN", style: "MC" },
];

const TIMETABLE = [
  ["17:00", "OPEN SLOT"],
  ["18:00", "COOLMEAN × JORIS"],
  ["19:00", "DRAWBACK"],
  ["20:00", "WATERONE & SPOONER"],
  ["21:00", "ONEBLOOD × POLIPHONIC × ADYX"],
  ["21:45", "ILL;S1CK"],
  ["22:30", "ILL-FATED × M.G."],
  ["23:15", "L-ORI × BABS"],
  ["00:00", "TR TACTICS × SYMPLEX"],
  ["01:00", "DR.AX × XENYH & TYBERUS"],
  ["02:00", "AUDIO ASSAULT × DOGMA × SHOGUN TACTICS"],
  ["03:00", "AWOKEN × MIRO"],
  ["04:00", "NASAY × TOTO"],
  ["04:45", "THE END"],
];

const INFO = [
  { icon: MapPin, title: "LOKACE", text: "Těšetice u Olomouce • areál hřiště" },
  { icon: ParkingCircle, title: "PARKOVÁNÍ", text: "Omezená kapacita parkoviště\nDoporučujeme spolujízdu" },

  { icon: Banknote, title: "PLATBA", text: "Vstup pouze hotově\nBar hotově i QR platby" },
  { icon: Beer, title: "BAR", text: "Pivo • drinky • nealko\nOtevřený po celou noc" },
  { icon: HeartHandshake, title: "RESPEKT", text: "Respekt k lidem, hudbě i místu\nBez konfliktů a problémů" },
  { icon: Trees, title: "OPEN AIR", text: "Hudba pod širým nebem\nLasery • kouř • rave atmosféra" },
];

const FAQ = [
  { q: "KDE SE AKCE KONÁ?", a: "Akce se koná v Těšeticích u Olomouce u fotbalového hřiště. Přesnou trasu a mapu najdeš v sekci INFO ." },
  { q: "JAK JE TO S PARKOVÁNÍM?", a: "Kapacita parkování je omezená. Doporučujeme přijet společně autem nebo využít spolujízdu." },
  { q: "JAK U NÁS ZAPLATÍŠ?", a: "Vstup na místě pouze hotově. Bar přijímá hotovost i QR platby." },
  { q: "MŮŽU PŘIJÍT POZDĚJI??", a: "Ano. Dorazit můžeš kdykoliv během akce." },
  { q: "CO NA MÍSTĚ NAJDU?", a: "Kvalitní sound a lidi, kteří jedou DNB naplno až do rána." },
];
const EVENT_DATE = new Date("2026-06-06T17:00:00");
function Index() {
  const [showAllSupport, setShowAllSupport] = useState(false);

  const visibleSupport = showAllSupport ? SUPPORT : SUPPORT.slice(0, 12);
  const hiddenSupportCount = SUPPORT.length - 12;
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [flippedHeadliner, setFlippedHeadliner] = useState<string | null>(null);
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
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 80
      ) {
        setActiveSection("kontakt");
        return;
      }
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
        <div className="mx-auto max-w-7xl px-4 lg:px-10 h-14 flex items-center justify-between">
          <button onClick={() => go("hero")} className="flex items-center group">
            <img
              src={logo}
              alt="NEXT DNB SESSION"
              className="h-8 sm:h-10 md:h-14 w-auto max-w-[180px] sm:max-w-none object-contain bg-transparent opacity-95 group-hover:opacity-100 transition"
            />
          </button>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {NAV.filter((n) => n.id !== "vstupenky").map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`text-[11px] tracking-[0.25em] font-display transition-colors ${activeSection === n.id
                  ? "text-[#4f35bf]"
                  : "text-muted-foreground hover:text-[var(--cyan)]"
                  }`}
              >
                {n.label}
              </button>
            ))}

            <button
              onClick={() => go("vstupenky")}
              className={`px-5 py-2 rounded-md text-primary-foreground font-display tracking-[0.25em] text-[11px] transition ${activeSection === "vstupenky"
                ? "bg-[#4f35bf] text-white"
                : "bg-[#1AC7D4] hover:bg-[#4f35bf] hover:text-white hover:brightness-110"
                }`}
            >
              VSTUPENKY
            </button>
          </nav>

          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
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
                className="mt-2 px-5 py-2.5 rounded-md bg-[#1AC7D4] text-primary-foreground font-display tracking-[0.25em] text-sm"
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
        <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
  <div className="laser-sweep" />
</div>

        {/* Cinematic dark overlays — vignette + bottom fade for contrast */}
        <div className="absolute inset-0 bg-background/25" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/45 z-[1]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background)/0.85)_100%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />


        {/* ATMOSPHERIC FOG */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">

          <div className="hidden md:block absolute right-[-200px] bottom-[-100px] w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full animate-fog-two" />

          <div className="hidden md:block absolute left-1/3 bottom-0 w-[500px] h-[500px] bg-cyan-300/6 blur-[90px] rounded-full animate-fog-three" />
        </div>

        {/* Subtle color bleed from lasers */}
        <div className="hidden md:block absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--cyan)] opacity-[0.10] blur-[140px]" />
        <div className="hidden md:block absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--violet)] opacity-[0.10] blur-[140px]" />
        
        {/* Centered cinematic composition */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 lg:px-10 pt-24 pb-20 flex flex-col items-center text-center">
          {/* Top tagline */}
          <p className="hidden md:block font-display tracking-[0.6em] text-xs text-cyan-300/85">
            — DNB · OPEN AIR · CZ —
          </p>

          {/* Headline */}
          <div className="hidden md:block absolute top-[18%] w-[420px] h-[220px] bg-cyan-400/6 blur-[90px] blur-[120px] rounded-full pointer-events-none" />
          <div className="hidden md:block absolute top-[20%] w-[320px] h-[120px] bg-black/35 blur-[55px] rounded-full pointer-events-none z-0" />
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
    mt-6 md:mt-8
    mb-3 md:mb-4
    w-[220px]
    sm:w-[260px]
    md:w-[320px]
    lg:w-[360px]
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
            <span className="text-[#6a4cff]">HARD DNB</span>
          </p>
          {/* COUNTDOWN */}

          <div className="mt-8 flex items-center justify-center gap-4 md:gap-6 text-center">

            <div className="w-[52px]">
              <div className="text-3xl md:text-3xl font-display text-white/90 tracking-[0.12em]">
                {String(timeLeft.days).padStart(2, "0")}
              </div>

              <div className="mt-1 text-[9px] md:text-xs tracking-[0.18em] text-cyan-300/55">
                DAYS
              </div>
            </div>

            <div className="w-[52px]">
              <div className="text-3xl md:text-3xl font-display text-white/90 tracking-[0.12em]">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>

              <div className="mt-1 text-[9px] md:text-xs tracking-[0.18em] text-cyan-300/55">
                HOURS
              </div>
            </div>

            <div className="w-[52px]">
              <div className="text-3xl md:text-3xl font-display text-white/90 tracking-[0.12em]">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>

              <div className="mt-1 text-[9px] md:text-xs tracking-[0.1em] text-cyan-300/55 pl-0 -ml-[2px]">
                MINUTES
              </div>
            </div>

          </div>

          {/* Hairline divider */}
          <div className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" />

          {/* Event meta */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <div className="flex items-center gap-2 text-foreground/90">
              <Calendar size={18} className="text-[var(--cyan)]" />
              <span className="tracking-[0.2em] font-display text-sm">06 / 06 / 2026</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-foreground/90">
              <MapPin size={18} className="text-[var(--cyan)]" />
              <a
                href="https://www.google.com/maps/place/T%C4%9B%C5%A1etice+175,+783+46+T%C4%9B%C5%A1etice/@49.5949735,17.1176936,514m/data=!3m1!1e3!4m6!3m5!1s0x471245112c9ea357:0x203486ef4f5c77c!8m2!3d49.5948664!4d17.1215685!16s%2Fg%2F11c4l_rh_k?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-[0.2em] font-display text-sm hover:text-cyan-300 transition"
              >
                Těšetice u Olomouce
              </a>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-foreground/90">
              <Ticket size={18} className="text-[var(--cyan)]" />
              <span className="tracking-[0.2em] font-display text-sm">17:00 — 04:45</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
  window.open(
    "https://www.smsticket.cz/vstupenky/70162-next-d-n-b-session-w-tr-tactics-b2b-symplex-fotbalove-hriste-tesetice",
    "_blank"
  )
}
              className="px-8 py-3.5 rounded-md bg-[#1AC7D4] text-primary-foreground font-display tracking-[0.3em] text-[13px] hover:bg-[#4f35bf] hover:text-white
hover:shadow-[0_0_28px_rgba(79,53,191,0.35)]"
            >
              KOUPIT V PŘEDPRODEJI
            </button>
            <button
              onClick={() => go("lineup")}
              className="px-10 py-5 rounded-md border border-[#1AC7D4] text-foreground font-display tracking-[0.3em] text-sm shadow-[0_0_24px_oklch(0.85_0.18_190/0.2)] hover:bg-[#4f35bf]/15
hover:border-[#4f35bf]
hover:shadow-[0_0_28px_rgba(106,76,255,0.35)]"
            >
              LINEUP
            </button>
          </div>
        </div>

        {/* Bottom edge fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-b from-transparent via-background/50 via-60% to-background z-[3]" />
      </section>
      <div className="mx-auto w-[75%] h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />

      {/* O AKCI */}
      <div className="md:hidden mx-auto w-[75%] h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent mb-16" />
      <section id="o-akci" className="relative pt-20 pb-24 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl text-foreground">
            O AKCI
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
            <p className="text-base md:text-lg leading-[1.9] text-white/70">
              <span className="text-foreground font-semibold">NEXT DNB SESSION</span> je letní open air akce pro ty, kteří milují deep vibe, těžkou basu a noční atmosféru pod širým nebem. Místo, kde se každé léto potkávají milovníci DNB.

            </p>
            <p className="text-base md:text-lg leading-[1.9] text-white/70">
              Žádný přeplácaný festival. Jen hudba a lidi, kteří přišli kvůli stejné věci. Od západu slunce až do rána jedeme naplno deep, rollers, neuro i hard DNB. Přidáš se?
            </p>

          </div>
        </div>
      </section>
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
      </div>

      {/* LINEUP */}
      <section
        id="lineup"
        className="relative pt-12 pb-20 md:pt-16 md:pb-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl text-foreground">
            LINEUP
          </h2>

          <p className="mt-4 text-sm tracking-[0.2em] text-muted-foreground font-display">
            HEADLINERS
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-7xl mx-auto">
            {HEADLINERS.map((dj, index) => (
              <article
                key={`${dj.name}-${index}`}
                onClick={() => {
                  setFlippedHeadliner(dj.name)

                  setTimeout(() => {
                    setFlippedHeadliner(null)
                  }, 6000)
                }}
                className="group relative aspect-[4/4.5] overflow-hidden rounded-2xl border
border-cyan-400/25
shadow-[0_0_25px_rgba(0,255,255,0.08)]
bg-white/[0.02]
hover:border-[#4f35bf]
hover:shadow-[0_0_30px_rgba(168,85,247,0.10)]
transition-all duration-500"
              >
                <div className="relative w-full h-full">
                  <div
                    className={`absolute inset-0 transition-all duration-700 ${flippedHeadliner === dj.name
                      ? "opacity-0 rotate-y-180"
                      : "opacity-100"
                      }`}
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
                      <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                        {dj.name}
                      </h3>
                      <p className="mt-1 text-xs tracking-[0.2em] text-cyan-300/75 font-display">
                        {dj.style}
                      </p>
                    </div>
                    <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[var(--cyan)]/90 text-primary-foreground text-[10px] font-display tracking-[0.2em]">
                      HEADLINER
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 flex flex-col justify-center p-8 text-center bg-gradient-to-br from-[#060611] to-[#0b0b18] transition-all duration-700 ${flippedHeadliner === dj.name
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                      }`}
                  >
                    <h3 className="font-display text-2xl text-white mb-4">
                      {dj.name}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/75">
                      {dj.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-sm tracking-[0.25em] text-white/55 font-display">
            SUPPORT DJ<small className="text-[0.8em] normal-case">s</small>
          </p>

          <div className="hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 mt-10 w-[420px] h-[420px] rounded-full bg-cyan-500/5 blur-[120px]" />

          {/* MOBILE SUPPORT LIST */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:hidden">
            {(showAllSupport ? SUPPORT : SUPPORT.slice(0, 8)).map((dj) => (
              <div
                key={dj.name}
                className="rounded-xl border border-violet-400/20 bg-white/[0.03] px-4 py-3 text-center"
              >
                <p className="font-display text-base tracking-[0.08em] text-white">
                  {dj.name}
                </p>
                <p className="mt-1 text-[10px] tracking-[0.14em] text-cyan-300/75 font-display">
                  {dj.style}
                </p>
              </div>
            ))}
          </div>
          {SUPPORT.length > 8 && (
            <div className="mt-8 md:hidden">
              <button
                type="button"
                onClick={() => setShowAllSupport((prev) => !prev)}
                className="w-full rounded-xl border border-cyan-400/40 px-7 py-3 font-display text-xs tracking-[0.25em] text-cyan-300/80 transition-all duration-300 hover:border-[#4f35bf] hover:bg-[#4f35bf]/15 hover:text-white"
              >
                {showAllSupport ? "SKRÝT" : `+ ${SUPPORT.length - 8} DALŠÍCH DJs`}
                </button>
          </div>
          )}
          {/* DESKTOP SUPPORT CARDS */}
          <div className="hidden md:grid mt-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-5">
            {visibleSupport.map((dj, index) => (
              <article
  key={`${dj.name}-${index}`}
  className="relative rounded-xl border border-cyan-400/15 bg-white/[0.025] p-6 min-h-[120px] flex flex-col justify-center overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(79,53,191,0.22),transparent_45%)]" />

  <div className="relative z-10">
    <h4 className="font-display text-1xl text-white tracking-wide">
      {dj.name}
    </h4>

    <p className="mt-2 text-xs tracking-[0.25em] text-cyan-300/75 font-display">
      {dj.style}
    </p>

    <div
  className="mt-4 h-[2px] w-16 rounded-full"
  style={{ background: "var(--gradient-logo)" }}
/>
  </div>
</article>
            ))}
            {hiddenSupportCount > 0 && (
              <div className="col-span-full mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllSupport((prev) => !prev)}
                  className={`
  rounded-xl border px-12 py-5 font-display text-sm tracking-[0.25em]
  transition-all duration-300
  ${showAllSupport
                      ? "border-[#4f35bf] bg-[#4f35bf]/20 text-white shadow-[0_0_18px_rgba(79,53,191,0.25)]"
                      : "border-cyan-400/40 text-cyan-300/80 hover:border-[#4f35bf] hover:bg-[#4f35bf]/15 hover:text-white hover:shadow-[0_0_18px_rgba(79,53,191,0.20)]"
                    }
`}
                >
                  {showAllSupport ? "SKRÝT" : `+${hiddenSupportCount} DALŠÍCH DJs`}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14 animate-pulse">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
  <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
</div>

      {/* TIMETABLE */}
      <div className="md:hidden mx-auto w-[75%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mb-16" />

      <div className="hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />
      <section
        id="timetable"
        className="relative pt-12 pb-24 md:pt-16 md:pb-32"
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
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14 animate-pulse">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
  <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
</div>

      {/* INFO */}
      <div className="md:hidden mx-auto w-[75%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mb-16" />
      <section id="info"className="pt-12 pb-24 md:pt-16 md:pb-32">
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
                <h3 className="mt-4 font-display text-xl tracking-wider text-foreground group-hover:text-[#4f35bf] transition-colors duration-300">
                  {title}
                </h3>
                <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
                  {text}
                </p>
                {title === "LOKACE" && (
                  <a
                    href="https://www.google.com/maps/place/T%C4%9B%C5%A1etice+175,+783+46+T%C4%9B%C5%A1etice/@49.5949735,17.1176936,514m/data=!3m1!1e3!4m6!3m5!1s0x471245112c9ea357:0x203486ef4f5c77c!8m2!3d49.5948664!4d17.1215685!16s%2Fg%2F11c4l_rh_k?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 mx-auto flex w-fit items-center gap-1.5 rounded-md border-1
border-cyan-400/40 px-3 py-1.5 text-[11px] tracking-[0.16em] text-cyan-300
hover:border-[#4f35bf] hover:bg-[#4f35bf]/15 hover:text-white
shadow-[0_0_12px_rgba(79,53,191,0.15)]
transition-all duration-300"
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
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14 animate-pulse">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
  <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
</div>

      {/* GALLERY */}
      <div className="md:hidden mx-auto w-[75%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mb-16" />
      <section id="galerie" className="relative pt-6 pb-24 md:pt-10 md:pb-32">
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
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14 animate-pulse">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
  <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
</div>

      {/* FAQ */}
      <div className="md:hidden mx-auto w-[75%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mb-16" />
      <section id="faq" className="relative pt-12 pb-24 md:pt-16 md:pb-32">
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
                className="rounded-2xl border border-cyan-400/15 bg-white/[0.02] px-6 transition-all duration-300 hover:border-[#4f35bf]/40 bg-[#4f35bf]/5"
              >
                <AccordionTrigger className="font-display text-lg tracking-[0.18em] text-foreground hover:text-[#4f35bf] hover:no-underline text-left py-6 transition-colors duration-300">
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
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14 animate-pulse">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
  <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
</div>

      {/* TICKETS CTA */}
      <div className="md:hidden mx-auto w-[75%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mb-16" />
      <section id="vstupenky" className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden">

        <div className="relative mx-auto max-w-3xl px-5 lg:px-10 text-center">
          <p className="font-display tracking-[0.4em] text-sm text-[var(--cyan)]">
            VSTUPENKY
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-foreground leading-none">
            PŘEDPRODEJ A VSTUP NA MÍSTĚ
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Kup online v předprodeji, nebo zaplať hotově na místě.
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
  href="https://www.smsticket.cz/vstupenky/70162-next-d-n-b-session-w-tr-tactics-b2b-symplex-fotbalove-hriste-tesetice"
  target="_blank"
  rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-md bg-[#1AC7D4]
text-primary-foreground font-display tracking-[0.25em] text-base glow-cyan
hover:bg-[#4f35bf] hover:text-white
hover:shadow-[0_0_28px_rgba(79,53,191,0.35)]
transition"
          >
            <Ticket size={20} />
            KOUPIT VSTUPENKY
          </a>
        </div>
      </section>

      {/* POWERED BY NEUROPORN */}
      <div className="pt-6 pb-24 text-center">

        <p className="text-xs tracking-[0.3em] text-muted-foreground">
          POWERED BY NEUROPORN
        </p>

        <a
          href="https://www.instagram.com/neuropor.n/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block opacity-80 hover:opacity-100 hover:scale-[1.03] hover:scale-[1.03] transition-all duration-300"
        >
          <img
            src={logoneuroporn}
            alt="NEUROPORN"
            className="w-33 mx-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>

      </div>
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
  <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
</div>
      {/* SOCIAL / FOOTER */}
      <div className="md:hidden mx-auto w-[75%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mb-16" />
      <footer id="kontakt" className="relative pt-12 pb-10 md:pt-16 md:pb-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-3 gap-10 items-center">

          <div>
            <img src={logo} alt="NEXT DNB SESSION" className="h-16 w-16" />

            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              DNB OPEN AIR
              <br />
              Těšetice u Olomouce
              <br />
              06 / 06 / 2026
            </p>
          </div>

          <div className="text-center">

            <p className="mt-2 font-display text-l tracking-[0.2em] text-muted-foreground">
              sociální sítě
            </p>

            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://www.instagram.com/next_dnb_session/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
      group
w-14 h-14 rounded-xl
border border-cyan-400/40
flex items-center justify-center
text-cyan-300
transition-all duration-300
hover:border-[#4f35bf]
hover:bg-[#4f35bf]/15
hover:text-white
hover:shadow-[0_0_18px_rgba(79,53,191,0.20)]
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
w-14 h-14 rounded-xl
border border-cyan-400/40
flex items-center justify-center
text-cyan-300
transition-all duration-300
hover:border-[#4f35bf]
hover:bg-[#4f35bf]/15
hover:text-white
hover:shadow-[0_0_18px_rgba(79,53,191,0.20)]
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
              © 2026 NEXT DNB SESSION

              <p className="mt-2 text-xs tracking-widest">
              All Rights Reserved
            </p>
            </p>
          </div>
        </div>
      </footer>
    </div>

  );
}
