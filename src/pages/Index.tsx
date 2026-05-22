import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/site/Nav";
import { StickyCTA } from "@/components/site/StickyCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero.jpg";
import readerImg from "@/assets/reader.jpg";
import textureImg from "@/assets/texture.jpg";

const SQUARE_URL = "https://square.link/u/IrMSDPf0";
const CONTACT_EMAIL = "mysticmary43@gmail.com";

const painPoints = [
  {
    title: "Mixed Signals",
    body: "When his words say one thing and his actions whisper another — and you're left translating silence into hope.",
  },
  {
    title: "No Closure",
    body: "The conversation that never happened. The goodbye you never got. The chapter that refuses to close.",
  },
  {
    title: "Fear of Letting Go",
    body: "Holding on to what was, terrified of what isn't, unsure if love is asking you to stay or to release.",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose Your Reading",
    body: "Select the guidance that meets you where you are — clarity, closure, or direction.",
  },
  {
    n: "02",
    title: "Share Your Situation",
    body: "In a private, judgment-free space, tell me what's been weighing on your heart.",
  },
  {
    n: "03",
    title: "Receive Your Clarity",
    body: "Walk away with calm, perspective, and a quiet knowing of your next gentle step.",
  },
];

const testimonials = [
  {
    quote:
      "I finally exhaled. After months of overthinking, Mary gave me language for what I was feeling — and the courage to trust it.",
    name: "Sophia R.",
    location: "London",
  },
  {
    quote:
      "She didn't tell me what I wanted to hear. She told me what I needed. It was the most compassionate reading I've ever had.",
    name: "Amelia K.",
    location: "Paris",
  },
  {
    quote:
      "I came in heartbroken and left with clarity. Not a fairytale — something better. Peace.",
    name: "Noor A.",
    location: "New York",
  },
  {
    quote:
      "Mary saw things about my situation I had never spoken out loud. I cried — not from sadness, but from finally feeling understood.",
    name: "Isabella M.",
    location: "Toronto",
  },
  {
    quote:
      "I was stuck in a loop of waiting and wondering. One call with Mary and I knew exactly what to do next.",
    name: "Hannah L.",
    location: "Sydney",
  },
  {
    quote:
      "Her voice alone is healing. She held space for me in a way no therapist or friend ever has.",
    name: "Priya S.",
    location: "Dubai",
  },
  {
    quote:
      "I booked a Whisper reading on a whim during my lunch break and it changed the entire trajectory of my week. So accurate.",
    name: "Camille D.",
    location: "Montréal",
  },
  {
    quote:
      "Mary is the real deal. Gentle, grounded, and unflinchingly honest. I trust her completely.",
    name: "Rachel B.",
    location: "Los Angeles",
  },
  {
    quote:
      "Six months later and everything she said has unfolded exactly as she described. I'm a client for life.",
    name: "Elena V.",
    location: "Madrid",
  },
];

const faqs = [
  {
    q: "What can I ask during a reading?",
    a: "Anything that's weighing on your heart — a specific person, a situation, a decision. Most women come with questions about love, reconciliation, mixed signals, timing, or simply needing to know they're going to be okay.",
  },
  {
    q: "Are readings completely confidential?",
    a: "Always. What is shared in a reading stays between us. You will never be named, recorded, or referenced. This space is yours alone.",
  },
  {
    q: "How do phone or text readings work?",
    a: "All readings are conducted by phone or text. After booking, you'll receive a confirmation and we'll connect at your chosen time — call or message, whichever feels most comfortable.",
  },
  {
    q: "Will I be judged?",
    a: "Never. There is no situation too messy, no story too complicated, no question too small. You will be met with warmth, presence, and zero judgment.",
  },
  {
    q: "How soon can I book?",
    a: "Most readings are available within 24–72 hours. Same-day sessions can be requested when urgency calls.",
  },
  {
    q: "Can a reading really help after a breakup?",
    a: "Yes — and it often becomes a turning point. Readings offer perspective, closure, and the emotional clarity that helps you move from spiraling to grounded.",
  },
];

const offers = [
  {
    name: "Whisper",
    duration: "10 minutes",
    price: "$35",
    desc: "A focused reading on one pressing question — perfect when you need a quick, clear answer.",
    cta: "Book Whisper",
  },
  {
    name: "Clarity",
    duration: "20 minutes",
    price: "$65",
    desc: "Deeper insight on your situation, the person involved, and what's unfolding next.",
    cta: "Book Clarity",
    featured: true,
  },
  {
    name: "Sanctuary",
    duration: "30 minutes",
    price: "$90",
    desc: "An unhurried session for full emotional reset — guidance and a personal next-steps blueprint.",
    cta: "Book Sanctuary",
  },
  {
    name: "Healing",
    duration: "60 minutes",
    price: "$150",
    desc: "Our most immersive reading. Complete clarity, deep healing, and a path forward held with care.",
    cta: "Book Healing",
  },
];

const Index = () => {
  useReveal();

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const message =
      (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
    const subject = encodeURIComponent(`New reading inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end md:items-center pt-24 pb-16 md:pb-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Soft golden light through sheer curtains, evoking calm and clarity"
          className="absolute inset-0 w-full h-full object-cover"
          width={1080}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30 md:bg-gradient-to-r md:from-background md:via-background/80 md:to-transparent" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-glow animate-glow-pulse" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs uppercase tracking-luxe text-gold mb-6">
              Intuitive Relationship Guidance
            </p>
            <h1 className="font-serif text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl text-foreground">
              Clarity for the moments that keep your <em className="text-gold not-italic">heart awake</em> at night.
            </h1>
            <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Compassionate, intuitive readings for women navigating heartbreak, ghosting,
              situationships, and the quiet questions love leaves behind.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={SQUARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-foreground text-primary-foreground rounded-full px-8 py-4 text-sm uppercase tracking-luxe shadow-luxe hover:shadow-glow hover:-translate-y-0.5 transition-silk"
              >
                Book Your Reading
              </a>
              <a
                href="#how"
                className="inline-flex justify-center items-center border border-foreground/30 rounded-full px-8 py-4 text-sm uppercase tracking-luxe hover:border-foreground hover:bg-foreground/5 transition-silk"
              >
                How It Works
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-luxe text-muted-foreground">
              <span>★ ★ ★ ★ ★ &nbsp; 1,200+ Readings</span>
              <span className="hidden sm:inline">·</span>
              <span>Confidential</span>
              <span className="hidden sm:inline">·</span>
              <span>20+ Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / PAIN POINTS */}
      <section className="py-24 md:py-36 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center reveal">
            <p className="text-xs uppercase tracking-luxe text-gold mb-5">You are not alone</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Some questions don't quiet themselves with logic.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              When your mind keeps replaying the same conversation, the same silence, the same
              "what if" — it's not weakness. It's your intuition asking to be heard.
            </p>
            <div className="gold-divider mt-10 w-24 mx-auto" />
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
            {painPoints.map((p, i) => (
              <div
                key={p.title}
                className="reveal group relative bg-card rounded-3xl p-10 border border-border/60 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-silk"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-8 right-8 font-serif italic text-gold/70 text-xl">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-3xl mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-luxe border border-border/60">
              <img
                src={readerImg}
                alt="Mary, intuitive relationship guide"
                className="w-full h-auto"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-background rounded-2xl px-6 py-4 shadow-luxe border border-border/60">
              <p className="font-serif text-3xl text-gold leading-none">20+</p>
              <p className="text-xs uppercase tracking-luxe text-muted-foreground mt-1">
                Years of Readings
              </p>
            </div>
          </div>

          <div className="reveal">
            <p className="text-xs uppercase tracking-luxe text-gold mb-5">Meet Mary</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              An intuitive who listens before she speaks.
            </h2>
            <div className="gold-divider w-20 my-8" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              For over twenty years, I've sat with women in their tenderest moments — the
              breakup that broke them open, the love that left them guessing, the silence that
              felt louder than any answer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              My readings aren't fortune-telling. They're a quiet conversation between your
              intuition and mine — honest, warm, and always returned to you with care.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You'll never be judged here. You'll only be heard.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="stories" className="relative py-24 md:py-36 bg-gradient-luxe">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-xl mx-auto reveal">
            <p className="text-xs uppercase tracking-luxe text-gold mb-5">Quiet Stories</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Words from women who finally exhaled.
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="reveal bg-background/70 backdrop-blur-sm rounded-3xl p-10 border border-background/80 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-silk"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="font-serif text-5xl text-gold leading-none mb-4">"</div>
                <blockquote className="font-serif text-xl md:text-[1.35rem] leading-snug text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/60">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs uppercase tracking-luxe text-muted-foreground mt-1">
                    {t.location}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center reveal">
            <p className="text-xs uppercase tracking-luxe text-gold mb-5">Gentle Answers</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Everything you may be wondering.
            </h2>
            <div className="gold-divider w-20 mx-auto mt-8" />
          </div>

          <div className="mt-14 reveal">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-border/70"
                >
                  <AccordionTrigger className="font-serif text-xl md:text-2xl text-left py-6 hover:no-underline hover:text-gold transition-colors">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — moved closer to booking */}
      <section id="how" className="relative py-24 md:py-36 bg-secondary/40">
        <div
          className="absolute inset-0 opacity-30 mix-blend-multiply"
          style={{ backgroundImage: `url(${textureImg})`, backgroundSize: "cover" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-xl reveal">
            <p className="text-xs uppercase tracking-luxe text-gold mb-5">The Process</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              A gentle path from confusion to clarity.
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-12 md:gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal text-center md:text-left"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-background border border-gold/40 shadow-soft mb-6">
                  <span className="font-serif text-xl text-gold">{s.n}</span>
                </div>
                <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto md:mx-0">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="relative py-24 md:py-36 bg-gradient-noir text-primary-foreground overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-40 animate-glow-pulse" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="text-xs uppercase tracking-luxe text-champagne mb-5">Book Your Reading</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Step into the quiet you've been longing for.
            </h2>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed">
              Every reading is conducted by <span className="text-champagne">phone or text</span> —
              private, unhurried, and held with the care your story deserves.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {offers.map((o, i) => (
              <div
                key={o.name}
                className={`reveal relative rounded-3xl p-10 border transition-silk hover:-translate-y-1 ${
                  o.featured
                    ? "bg-gradient-gold text-foreground border-transparent shadow-glow scale-[1.02]"
                    : "bg-primary-foreground/5 border-primary-foreground/15 hover:bg-primary-foreground/10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {o.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-primary-foreground text-[10px] uppercase tracking-luxe px-4 py-1.5 rounded-full">
                    Most Chosen
                  </div>
                )}
                <h3 className="font-serif text-3xl mb-2">{o.name}</h3>
                <p className={`text-xs uppercase tracking-luxe ${o.featured ? "text-foreground/70" : "text-champagne"}`}>
                  {o.duration}
                </p>
                <p className="font-serif text-5xl mt-6 mb-4">{o.price}</p>
                <p className={`leading-relaxed mb-8 ${o.featured ? "text-foreground/80" : "text-primary-foreground/70"}`}>
                  {o.desc}
                </p>
                <a
                  href={SQUARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center rounded-full py-3.5 text-sm uppercase tracking-luxe transition-silk ${
                    o.featured
                      ? "bg-foreground text-primary-foreground hover:opacity-90"
                      : "border border-primary-foreground/40 hover:bg-primary-foreground hover:text-foreground"
                  }`}
                >
                  {o.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Mini contact form */}
          <div id="contact" className="reveal mt-20 max-w-xl mx-auto bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/15 rounded-3xl p-8 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl text-center">
              Or simply reach out
            </h3>
            <p className="text-center text-primary-foreground/60 text-sm mt-2 mb-8">
              Tell me a little about what's on your heart. I personally read every message.
            </p>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <input
                required
                name="name"
                placeholder="Your first name"
                className="w-full bg-transparent border border-primary-foreground/20 rounded-full px-6 py-4 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-champagne transition-colors"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-primary-foreground/20 rounded-full px-6 py-4 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-champagne transition-colors"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="What would you like clarity on? (optional)"
                className="w-full bg-transparent border border-primary-foreground/20 rounded-3xl px-6 py-4 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-champagne transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-gold text-foreground rounded-full py-4 text-sm uppercase tracking-luxe shadow-glow hover:opacity-95 transition-silk"
              >
                Send & Begin
              </button>
              <p className="text-center text-xs text-primary-foreground/40 mt-4">
                Always private. Never shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-xl mx-auto">
            <p className="font-serif text-2xl md:text-3xl italic text-foreground/80 leading-snug">
              "The answers you're looking for have been waiting quietly inside you all along."
            </p>
            <div className="gold-divider w-20 mx-auto my-8" />
            <p className="font-serif text-xl">Love Psychic Mary</p>
            <p className="text-xs uppercase tracking-luxe text-muted-foreground mt-2">
              Intuitive Relationship Guidance
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center text-xs uppercase tracking-luxe text-muted-foreground">
            <p>© {new Date().getFullYear()} Love Psychic Mary. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
};

export default Index;
