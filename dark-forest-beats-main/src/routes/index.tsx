import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin, ParkingCircle, Beer, Tent, Banknote, HeartHandshake, Trees,
  Instagram, Facebook, Calendar, Ticket, Menu, X,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo.png";
import neuroporn from "@/assets/neuroporn.png";
import hero from "@/assets/hero.jpg";
import dj1 from "@/assets/dj1.jpg";
import dj2 from "@/assets/dj2.jpg";
import dj3 from "@/assets/dj3.jpg";
import dj4 from "@/assets/dj4.jpg";
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
  { id: "faq", label: "FAQ" },
  { id: "kontakt", label: "KONTAKT" },
  { id: "vstupenky", label: "VSTUPENKY" },
];

const HEADLINERS = [
  { name: "MANDIDEXTROUS", style: "HARDCORE DNB", img: dj1 },
  { name: "CHANGING FACES", style: "DEEP / ROLLERS", img: dj2 },
  { name: "AKIRA", style: "NEUROFUNK", img: dj3 },
  { name: "MC DART", style: "MC", img: dj4 },
];

const SUPPORT = [
  { name: "SUKKI", style: "HARDCORE", img: dj2 },
  { name: "KRYPTIC", style: "NEUROFUNK", img: dj1 },
  { name: "NOVA", style: "ROLLERS", img: dj3 },
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
  ["18:00", "OPEN DOORS"],
  ["19:00", "BASSLINE"],
  ["20:00", "NOVA"],
  ["21:00", "AKIRA"],
  ["22:00", "CHANGING FACES"],
  ["23:30", "MANDIDEXTROUS"],
  ["01:00", "SUKKI"],
  ["02:30", "MC DART B2B KRYPTIC"],
  ["04:00", "AFTERPARTY"],
];

const INFO = [
  { icon: MapPin, title: "LOKACE", text: "Těšetice u Olomouce • u fotbalového hřiště" },
  { icon: ParkingCircle, title: "PARKOVÁNÍ", text: "Omezená kapacita • doporučujeme spolujízdu" },

  { icon: Banknote, title: "PLATBA", text: "Vstup cash only • bar cash / QR" },
  { icon: Beer, title: "BAR", text: "Pivo • drinky • nealko" },
  { icon: HeartHandshake, title: "RESPEKT", text: "Respekt k lidem, hudbě i místu" },
  { icon: Trees, title: "OPEN AIR", text: "Hudba pod širým nebem až do rána" },
];

const FAQ = [
  { q: "KDE SE AKCE KONÁ?", a: "Akce se koná v Těšeticích u Olomouce v areálu u fotbalového hřiště. Přesnou trasu a mapu najdeš níže na webu.." },
  { q: "JAK JE TO S PARKOVÁNÍM?", a: "Kapacita parkování je omezená. Doporučujeme přijet společně autem nebo využít spolujízdu." },
  { q: "JAK SE DÁ PLATIT?", a: "Vstup na místě pouze hotově. Na baru lze platit hotově i přes QR." },
  { q: "JE MOŽNÉ PŘESPAT?", a: "Oficiální camp není k dispozici. Mysli na bezpečný odvoz domů." },
  { q: "CO NA MÍSTĚ NAJDU?", a: "Pivo, drinky, nealko, kvalitní sound a lidi, kteří jedou drum and bass naplno až do rána." },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
          ? "backdrop-blur-xl bg-background/80 border-b border-[var(--cyan)]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-background/60 to-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10 h-14 flex items-center justify-between">
          <button onClick={() => go("hero")} className="flex items-center group -my-2">
            <img
              src={logo}
              alt="NEXT D'N'B SESSION"
              className="h-11 sm:h-12 md:h-16 w-auto max-w-[180px] sm:max-w-none object-contain bg-transparent opacity-95 group-hover:opacity-100 transition drop-shadow-[0_0_14px_oklch(0.85_0.18_190/0.5)]"
            />
          </button>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {NAV.filter((n) => n.id !== "vstupenky").map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-[11px] tracking-[0.25em] font-display text-muted-foreground hover:text-[var(--cyan)] transition-colors"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => go("vstupenky")}
              className="px-5 py-2 rounded-md bg-[var(--cyan)] text-primary-foreground font-display tracking-[0.25em] text-[11px] glow-cyan hover:brightness-110 transition"
            >
              VSTUPENKY
            </button>
          </nav>
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
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
                className="mt-2 px-5 py-3 rounded-md bg-[var(--cyan)] text-primary-foreground font-display tracking-[0.25em] text-sm"
              >
                VSTUPENKY
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden grain">
        {/* Background image — crowd, lasers, smoke, forest */}
        <img
          src={hero}
          alt="NEXT D'N'B SESSION open air rave"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />

        {/* Cinematic dark overlays — vignette + bottom fade for contrast */}
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background)/0.85)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />

        {/* Subtle color bleed from lasers */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--cyan)] opacity-[0.10] blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--violet)] opacity-[0.10] blur-[140px]" />

        {/* Centered cinematic composition */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 lg:px-10 pt-24 pb-20 flex flex-col items-center text-center">
          {/* Top tagline */}
          <p className="font-display tracking-[0.6em] text-[10px] md:text-xs text-[var(--cyan)]/90">
            — OPEN AIR · DRUM &amp; BASS · CZ —
          </p>

          {/* Headline */}
          <h1 className="font-display tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground drop-shadow-[0_0_40px_rgba(56,189,248,0.25)]">
            NEXT D'N'B
            <br />
            <span className="bg-gradient-to-r from-[var(--cyan)] via-foreground to-[var(--violet)] bg-clip-text text-transparent">
              SESSION
            </span>
          </h1>

          {/* Tagline under headline */}
          <p className="mt-6 font-display tracking-[0.5em] text-xs md:text-sm text-foreground/80">
            DEEP · ROLLERS · NEURO · HARDCORE
          </p>

          {/* Hairline divider */}
          <div className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" />

          {/* Event meta */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-foreground/90">
              <Calendar size={18} className="text-[var(--cyan)]" />
              <span className="tracking-[0.25em] font-display text-sm">14 / 06 / 2025</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-foreground/90">
              <MapPin size={18} className="text-[var(--cyan)]" />
              <span className="tracking-[0.25em] font-display text-sm">TAJNÁ LOKACE · ČR</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-foreground/90">
              <Ticket size={18} className="text-[var(--cyan)]" />
              <span className="tracking-[0.25em] font-display text-sm">18:00 — 06:00</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => go("vstupenky")}
              className="px-8 py-3.5 rounded-md bg-[var(--cyan)] text-primary-foreground font-display tracking-[0.3em] text-[13px] glow-cyan hover:brightness-110 transition"
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
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-70">
          <span className="text-[10px] tracking-[0.4em] font-display text-muted-foreground">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-[var(--cyan)] to-transparent" />
        </div>
      </section>

      {/* O AKCI */}
      <section id="o-akci" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl text-foreground">O AKCI</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              <span className="text-foreground font-semibold">NEXT D'N'B SESSION</span> je letní open air drum and bass akce pro všechny, kteří milují deep vibe, těžkou basu a noční atmosféru pod širým nebem. Každý rok spojujeme komunitu lidí, které baví kvalitní DNB, silný sound a energie, kterou musíš zažít na vlastní kůži.

            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Žádný přeplácaný festival. Jen hudba, lasery, kouř a lidi, kteří přišli kvůli stejné věci. Od západu slunce až do rána jedeme deep, rollers, neuro i hard DNB v atmosféře, kterou jinde nenajdeš.
            </p>
          </div>
        </div>
      </section>

      {/* LINEUP */}
      <section id="lineup" className="relative py-24 md:py-32 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl">LINEUP</h2>
          <p className="mt-4 text-sm tracking-[0.2em] text-muted-foreground font-display">
            HEADLINERS
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HEADLINERS.map((dj) => (
              <article
                key={dj.name}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-card"
              >
                <img
                  src={dj.img}
                  alt={dj.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl text-foreground tracking-wide">{dj.name}</h3>
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

          <p className="mt-16 text-sm tracking-[0.2em] text-muted-foreground font-display">
            SUPPORT
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SUPPORT.map((dj) => (
              <article
                key={dj.name}
                className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-card"
              >
                <img
                  src={dj.img}
                  alt={dj.name}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
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
      <section id="timetable" className="relative py-24 md:py-32 border-t border-border/40">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <h2 className="section-title font-display text-3xl md:text-5xl">TIMETABLE</h2>
          <div className="mt-10 rounded-lg border border-border bg-card/40 backdrop-blur overflow-hidden">
            {TIMETABLE.map(([time, name], i) => (
              <div
                key={time}
                className={`flex items-center gap-6 px-6 py-4 ${i !== TIMETABLE.length - 1 ? "border-b border-border/60" : ""
                  } hover:bg-[var(--cyan)]/5 transition-colors`}
              >
                <div className="font-display text-xl text-[var(--cyan)] tracking-widest w-20">
                  {time}
                </div>
                <div className="font-display text-lg tracking-widest text-foreground">{name}</div>
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
                className="group relative p-6 rounded-lg border border-border bg-card/40 backdrop-blur hover:border-[var(--cyan)]/60 hover:bg-card/70 transition-all"
              >
                <div className="w-12 h-12 rounded-md border border-[var(--cyan)]/40 flex items-center justify-center text-[var(--cyan)] group-hover:glow-cyan transition">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl tracking-wider text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-24 md:py-32 border-t border-border/40">
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
          <Accordion type="single" collapsible className="mt-10">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="font-display text-lg tracking-wider text-foreground hover:text-[var(--cyan)] hover:no-underline text-left">
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
            className="mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-md bg-[var(--cyan)] text-primary-foreground font-display tracking-[0.25em] text-base glow-cyan hover:brightness-110 transition"
          >
            <Ticket size={20} />
            KOUPIT VSTUPENKU
          </a>
        </div>
      </section>

      {/* POWERED BY NEUROPORN */}
      
      

      {/* SOCIAL / FOOTER */}
      <footer id="kontakt" className="relative py-10 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-3 gap-10 items-center">
          <div>
            <img src={logo} alt="NEXT D'N'B SESSION" className="h-12 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              NEXT D'N'B SESSION

Drum & Bass Open air  Těšetice u Olomouce
            </p>
          </div>
          <div className="text-center">
            
            <p className="mt-2 font-display text-xl text-[var(--cyan)]">sociální sítě</p>
            <div className="mt-4 flex justify-center gap-4">
              <a href="#" aria-label="Instagram"
                className="w-11 h-11 rounded-md border border-border flex items-center justify-center hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook"
                className="w-11 h-11 rounded-md border border-border flex items-center justify-center hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          <div className="md:text-right text-sm text-muted-foreground">
            <p>info@nextdnbsession.cz</p>
            <p className="mt-2 text-xs tracking-widest">NEXT D'N'B SESSION © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
