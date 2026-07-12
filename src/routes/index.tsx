import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  MapPin, ParkingCircle, Beer, Tent, Banknote, HeartHandshake, Trees,
  Instagram, Youtube, Facebook, Calendar, Ticket, Menu, X,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/Logo NxtDNB.png";
import logoneuroporn from "@/assets/Neuroporn.png";
import hero from "@/assets/backgroundhero.png";
import dj1 from "@/assets/SYMPLEX x TR TACTICS.png";
import dj2 from "@/assets/DRAX x TYBERUS x XENYH.png";

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
  { name: "BABS", style: "NEURO"},
  { name: "DRAWBACK", style: "DEEP · ROLLERS", instagram: "https://www.instagram.com/drawback_dnb/"},
  { name: "L-ORI", style: "NEURO", instagram: "https://www.instagram.com/l_ori.dnb/" },
  { name: "ONEBLOOB", style: "NEURO", instagram: "https://www.instagram.com/onebloodnb/"},
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

  { icon: Banknote, title: "PLATBA", text: "Vstup na místš i bar\nHotově • QR platby" },
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
const EVENT_DATE = new Date("2027-06-06T17:00:00");

const galleryImages = [
  "/gallery/2026/gallery-01.webp",
  "/gallery/2026/gallery-02.webp",
  "/gallery/2026/gallery-03.webp",
  "/gallery/2026/gallery-04.webp",
  "/gallery/2026/gallery-05.webp",
  "/gallery/2026/gallery-06.webp",
  "/gallery/2026/gallery-07.webp",
  "/gallery/2026/gallery-08.webp",
  "/gallery/2026/gallery-09.webp",
];

function Index() {
  const [playAftermovie, setPlayAftermovie] = useState(false);
const aftermovieRef = useRef<HTMLVideoElement>(null);
const [isPlaying, setIsPlaying] = useState(false);
const toggleAftermovie = () => {
  const video = aftermovieRef.current;
  if (!video) return;

  if (video.paused) {
    setPlayAftermovie(true);
    setIsPlaying(true);
    video.play();
  } else {
    setIsPlaying(false);
    video.pause();
  }
};
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
          ? "backdrop-blur-xl bg-background/55 border-b border-[#4f35bf]/30"
          : "bg-gradient-to-b from-background/35 to-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-10 h-14 flex items-center justify-between">
          <button onClick={() => go("hero")} className="flex items-center group">
            <img
              src={logo}
              alt="NEXT DNB SESSION"
              className="h-12 sm:h-10 md:h-14 w-auto object-contain bg-transparent opacity-95 group-hover:opacity-100 transition"
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
  className={`md:hidden p-2 rounded-lg border transition-all duration-300 ${
    open
      ? "text-[#4f35bf] border-[#4f35bf]/40 bg-[#4f35bf]/10"
      : "text-[#1AC7D4] border-cyan-400/15 bg-white/[0.02] hover:text-[#4f35bf] hover:border-[#4f35bf]/40"
  }`}
  onClick={() => setOpen(!open)}
  aria-label="Menu"
>
            {open ? <X size={24} /> : <Menu size={24} />}
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

          <div className="mt-8 text-center">
<div className="mt-4 text-[9px] md:text-sm tracking-[0.25em] text-cyan-300/70">
    DATUM AKCE BUDE BRZY OZNÁMENO
  </div>
</div>

          {/* Hairline divider */}
          <div className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" />

          {/* Event meta */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <div className="flex items-center gap-2 text-foreground/90">
              <Calendar size={18} className="text-[var(--cyan)]" />
              <span className="tracking-[0.2em] font-display text-sm">?? / 06 / 2027</span>
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
              <span className="tracking-[0.2em] font-display text-sm">??:?? — ??:??</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
  document.getElementById("kontakt")?.scrollIntoView({
    behavior: "smooth",
  })
}
              className="px-8 py-3.5 rounded-md bg-[#1AC7D4] text-primary-foreground font-display tracking-[0.3em] text-[13px] hover:bg-[#4f35bf] hover:text-white
hover:shadow-[0_0_28px_rgba(79,53,191,0.35)]"
            >
              SLEDUJ NOVINKY
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
        <div className="absolute bottom-0 left-1/2 z-20 h-px w-[75%] -translate-x-1/2 animate-pulse bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
      </section>
      

      {/* O AKCI */}
      <section id="o-akci" className="relative pt-20 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl text-foreground">
            O AKCI
          </h2>
          <div className="mt-10 max-w-5xl grid md:grid-cols-2 gap-10 items-start">
            <p className="text-base md:text-lg leading-[1.9] text-white/70">
              <span className="text-foreground font-semibold">NEXT DNB SESSION</span> je od roku 2018 letní open air akce pro ty, které spojuje deep vibe, těžká basa a noční atmosféra pod širým nebem. Místo, kde se každý rok potkávají milovníci DNB.

            </p>
            <p className="text-base md:text-lg leading-[1.9] text-white/70">
              Žádný přeplácaný festival. Jen hudba a lidé, kteří přišli kvůli stejné věci. Od západu slunce až do rána jedeme naplno deep, rollers, neuro i hard DNB. Přidáš se?
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
            HEADLINERS{" · "}hosté posledního ročníku
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-7xl mx-auto">
            {HEADLINERS.map((dj, index) => (
              <article
                key={`${dj.name}-${index}`}
                onClick={() => {
                  setFlippedHeadliner(dj.name)

                  setTimeout(() => {
                    setFlippedHeadliner(null)
                  }, 9000)
                }}
                className={`group relative aspect-[4/4.5] overflow-hidden rounded-2xl border bg-white/[0.02] transition-all duration-500 ${
  flippedHeadliner === dj.name
    ? "border-[#4f35bf] shadow-[0_0_30px_rgba(79,53,191,0.25)]"
    : "border-cyan-400/25 shadow-[0_0_25px_rgba(0,255,255,0.08)] hover:border-[#4f35bf] hover:shadow-[0_0_30px_rgba(168,85,247,0.10)]"
}`}
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
            NEXT DNB SESSION CREW
          </p>

          <div className="hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 mt-10 w-[420px] h-[420px] rounded-full bg-cyan-500/5 blur-[120px]" />

          {/* MOBILE SUPPORT LIST */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:hidden">
            {(showAllSupport ? SUPPORT : SUPPORT.slice(0, 8)).map((dj) => (
                <a
  key={dj.name}
  href={dj.instagram || undefined}
  target={dj.instagram ? "_blank" : undefined}
  rel={dj.instagram ? "noopener noreferrer" : undefined}
  className={`group relative rounded-xl border border-cyan-400/20 bg-white/[0.03] px-4 py-3 text-center transition-all duration-300 ${
    dj.instagram
      ? "cursor-pointer active:border-[#4f35bf] hover:-translate-y-1"
      : "cursor-default"
  }`}
>
  {dj.instagram && (
    <Instagram
      size={14}
      className="absolute top-3 right-3 text-cyan-300/30 transition-all duration-300 group-active:text-cyan-300 group-active:scale-110"
    />
  )}

  <p className="font-display text-base tracking-[0.08em] text-white">
    {dj.name}
  </p>

  <p className="mt-1 text-[10px] tracking-[0.14em] text-cyan-300/75 font-display">
    {dj.style}
  </p>
</a>
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
              <a
  key={`${dj.name}-${index}`}
  href={dj.instagram || undefined}
  target={dj.instagram ? "_blank" : undefined}
  rel={dj.instagram ? "noopener noreferrer" : undefined}
  className={`group relative rounded-xl border border-cyan-400/15 bg-white/[0.025] p-6 min-h-[120px] flex flex-col justify-center overflow-hidden transition-all duration-300 ${
    dj.instagram
      ? "cursor-pointer hover:border-[#4f35bf] hover:shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:scale-[1.015]"
      : "cursor-default"
  }`}
>
  {dj.instagram && (
  <Instagram
    size={14}
    className="absolute top-3 right-3 z-20 text-cyan-300/25 transition-all duration-200 group-hover:text-cyan-300 group-hover:scale-110"
  />
)}
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
</a>
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
<div className="hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />
      <section
        id="timetable"
        className="relative pt-12 pb-24 md:pt-16 md:pb-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl">PŘÍPRAVA ROČNÍKU 2027</h2>
          <div className="mt-10 max-w-4xl mx-auto grid gap-4 md:grid-cols-4">
  {[
    ["NEXT DNB SESSION 2027", "PŘIPRAVUJEME DALŠÍ ROČNÍK AKCE"],
    ["LINEUP", "BUDE POSTUPNĚ OZNÁMEN"],
    ["TIMETABLE", "HARMONOGRAM ZVEŘEJNÍME PO UZAVŘENÍ LINEUPU"],
    ["PŘEDPRODEJ", "BUDE SPUŠTĚN PO OZNÁMENÍ TERMÍNU"],
    
  ].map(([title, text]) => (
    <div
      key={title}
      className="group relative p-6 min-h-[170px] flex flex-col justify-between rounded-lg border border-border border-[var(--cyan)]/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)]/30 hover:shadow-[0_0_25px_rgba(0,255,255,0.08)]"
    >
      <div className="font-display text-xl text-white tracking-wide">
        {title}
      </div>

      <div className="mt-6 text-xs tracking-[0.22em] text-cyan-300/75 font-display leading-relaxed">
        {text}
      </div>

      <div className="mt-5 h-[2px] w-12 rounded-full bg-[#5b5cff]" />
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
<section id="galerie" className="relative pt-12 pb-24 md:pt-16 md:pb-32">
  <div className="mx-auto max-w-7xl px-5 lg:px-10">
    <h2 className="section-title font-display text-3xl md:text-5xl">
      GALERIE
    </h2>

    <p className="mt-4 max-w-xl text-muted-foreground">
      Ohlédnutí za ročníkem 2026. Momentky a energie jedné letní noci.
    </p>

<div className="mt-10">
  
  <div
  onClick={!playAftermovie ? () => setPlayAftermovie(true) : undefined}
  className={`group relative aspect-video overflow-hidden rounded-xl border border-transparent transition-all duration-500 hover:border-[#4f35bf]/40 hover:shadow-[0_0_24px_rgba(79,53,191,0.18)] ${
  !playAftermovie ? "cursor-pointer" : ""
}`}
>
  {playAftermovie && (
  <iframe
    className="absolute inset-0 z-20 h-full w-full"
    src="https://www.youtube.com/embed/hTSPsjQgzLM?autoplay=1&rel=0"
    title="NEXT DNB SESSION 2026 Official Aftermovie"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
)}

  {!isPlaying && !playAftermovie && (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <img
        src="/video/aftermovie-cover.webp"
        alt="NEXT DNB SESSION 2026 aftermovie"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
          <span className="ml-1 text-3xl">▶</span>
        </div>

        {!isPlaying && (
  <>
    <p className="font-display text-2xl md:text-4xl tracking-wide text-white">
      AFTERMOVIE 2026
    </p>

    <p className="mt-3 max-w-xl px-6 text-sm md:text-base text-white/75">
      Nezapomenutelná atmosféra. Skvělí lidé. Těžké basy.
    </p>
  </>
)}
{!isPlaying && playAftermovie && (
  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
      <span className="ml-1 text-3xl">▶</span>
    </div>
  </div>
)}
      </div>
    </div>
  )}
</div>
</div>

<div className="mt-14">
  <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide">
    FOTOGALERIE
  </h3>
</div>

    <div className="mt-10 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {galleryImages.slice(0, 2).map((image, index) => (
          <div
  key={image}
  className="relative aspect-[16/9] overflow-hidden rounded-lg border border-transparent group hover:border-[#4f35bf]/40 hover:shadow-[0_0_15px_rgba(79,53,191,0.12)] transition-all duration-500"
>
            <img
              src={image}
              alt={`Next DNB Session galerie ${index + 1}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {galleryImages.slice(2, 5).map((image, index) => (
          <div key={image} className="relative w-full md:w-[31%] aspect-[4/3] overflow-hidden rounded-lg border border-transparent group hover:border-[#4f35bf]/40 hover:shadow-[0_0_15px_rgba(79,53,191,0.12)] transition-all duration-500">
            <img
              src={image}
              alt={`Next DNB Session galerie ${index + 3}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {galleryImages.slice(5, 9).map((image, index) => (
          <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-transparent group hover:border-[#4f35bf]/40
hover:shadow-[0_0_15px_rgba(79,53,191,0.12)] transition-all duration-500">
            <img
              src={image}
              alt={`Next DNB Session galerie ${index + 6}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14 animate-pulse">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
  <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
</div>

      {/* FAQ */}
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
                className="rounded-2xl border border-cyan-400/15 bg-white/[0.02] px-6 transition-all duration-300 data-[state=open]:border-[#4f35bf] data-[state=open]:bg-[#4f35bf]/5 hover:border-[#4f35bf]/40"
              >
                <AccordionTrigger className="font-display text-lg tracking-[0.18em] text-foreground hover:text-[#4f35bf] hover:no-underline text-left py-6 transition-colors duration-300 [&[data-state=open]>svg]:text-[#4f35bf]">
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
      <section id="vstupenky" className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden">

        <div className="relative mx-auto max-w-3xl px-5 lg:px-10 text-center">
          <p className="font-display tracking-[0.4em] text-sm text-[var(--cyan)]">
            VSTUPENKY
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-foreground leading-none">
            PŘEDPRODEJ PŘIPRAVUJEME
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Vstupenky spustíme společně s oznámením data akce a s oznámením prvních jmen lineupu. Sleduj naše sociální sítě, ať ti nic neuteče.
          </p>

          <a
  href="#kontakt"
  className="mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-md bg-[#1AC7D4]
  text-primary-foreground font-display tracking-[0.25em] text-base glow-cyan
  hover:bg-[#4f35bf] hover:text-white
  hover:shadow-[0_0_28px_rgba(79,53,191,0.35)]
  transition"
>
            <Ticket size={20} />
            SOCIÁLNÍ SÍTĚ
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
            className="w-33 mx-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </a>

      </div>
      <div className="relative mx-auto w-[70%] h-px mb-7 md:mb-14 animate-pulse">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
  <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
</div>
      {/* SOCIAL / FOOTER */}
      <footer id="kontakt" className="relative pt-12 pb-10 md:pt-12 md:pb-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-3 gap-10 items-center">

          <div>
            <img src={logo} alt="NEXT DNB SESSION" className="h-16 w-16" />

            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              DNB OPEN AIR
              <br />
              Těšetice u Olomouce
              <br />
              ?? / 06 / 2027
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
  href="https://www.youtube.com/@NEXTDNBSESSION"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube"
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
  <Youtube
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
              © NEXT DNB SESSION

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
