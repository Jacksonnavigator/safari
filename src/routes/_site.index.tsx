import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Compass, HandHeart, Users, Sparkles, MapPin, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-maasai.jpg";
import chaggaImg from "@/assets/chagga-coffee.jpg";
import hadzabeImg from "@/assets/hadzabe-dawn.jpg";
import maasaiWomenImg from "@/assets/maasai-women.jpg";
import impactImg from "@/assets/impact-community.jpg";
import falls from "@/assets/materuni-falls.jpg";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Eagle Vision Safaris — Beyond the Safari | Cultural Travel Tanzania" },
      { name: "description", content: "Tanzania's leading cultural, community and impact travel company. Wildlife, culture, community and conservation through the eyes of local people." },
      { property: "og:title", content: "Eagle Vision Safaris — Beyond the Safari" },
      { property: "og:description", content: "Wildlife. Culture. Community. Impact. Cultural travel in Tanzania." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end text-bone overflow-hidden">
        <img
          src={heroImg}
          alt="Maasai warrior at golden hour with cattle and acacia tree"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        {/* corner meta */}
        <div className="hidden md:flex absolute top-28 right-10 items-center gap-3 text-bone/70 text-xs uppercase tracking-[0.22em]">
          <MapPin size={14} className="text-accent" /> Arusha · Tanzania
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 pt-40 w-full">
          <div className="max-w-3xl">
            <div className="eyebrow text-accent mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent" />
              Wildlife · Culture · Community · Impact
            </div>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] text-balance">
              Beyond the <span className="italic font-extralight text-accent">safari.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-bone/85 text-pretty leading-relaxed">
              Experience Tanzania through its wildlife, cultures, communities and
              conservation stories — guided by the people who call it home.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/experiences"
                className="group inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 rounded-full text-sm uppercase tracking-[0.16em] font-semibold hover:bg-accent hover:text-ink transition-all shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              >
                Explore experiences
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-4 rounded-full text-sm uppercase tracking-[0.16em] font-semibold border border-bone/50 hover:bg-bone/10 transition-all"
              >
                Plan your journey
              </Link>
            </div>
          </div>

          {/* stats strip */}
          <div className="mt-20 grid grid-cols-3 max-w-2xl gap-8 border-t border-bone/20 pt-8">
            {[
              ["9+", "Cultural experiences"],
              ["100%", "Local guides"],
              ["12yrs", "On the ground"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl md:text-4xl text-bone">{n}</div>
                <div className="text-bone/60 text-xs uppercase tracking-[0.18em] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO + WHY */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-5">Why Eagle Vision</div>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.05] text-balance">
                Travel that means something — <span className="italic text-primary">to you and to Tanzania.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
                We design journeys that move beyond observation into participation —
                where every visitor becomes part of a story bigger than themselves.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-12">
              <WhyCard icon={Users} title="Authentic cultural connections">
                Walk with Maasai herders, brew coffee with Chagga farmers, share a
                fire with Hadzabe hunter-gatherers.
              </WhyCard>
              <WhyCard icon={HandHeart} title="Travel with purpose">
                Every booking funds education, conservation, and direct community
                partnerships across Northern Tanzania.
              </WhyCard>
              <WhyCard icon={Compass} title="Local knowledge, global craft">
                A Tanzanian-led team designing journeys with the precision of
                seasoned travelers and the heart of locals.
              </WhyCard>
              <WhyCard icon={Sparkles} title="Stories over checklists">
                We sell transformation, not itineraries. You return changed by the
                people you met — not just the places you saw.
              </WhyCard>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO — TANZANIA THROUGH LOCAL EYES */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow mb-4">Tanzania through local eyes</div>
              <h2 className="font-display font-light text-4xl md:text-6xl text-balance leading-[1.02]">
                Living cultures. <span className="italic text-primary">One country.</span>
              </h2>
            </div>
            <Link to="/experiences" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] font-semibold hover:text-primary transition">
              All experiences <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[14rem] gap-4 lg:gap-5">
            {/* Maasai — large */}
            <BentoTile
              to="/experiences/$slug"
              params={{ slug: "maasai" }}
              img={maasaiWomenImg}
              eyebrow="01 · Maasai"
              title="Walk beside a culture that has thrived for generations."
              className="md:col-span-4 md:row-span-2"
              big
            />

            {/* Chagga */}
            <BentoTile
              to="/experiences/$slug"
              params={{ slug: "chagga" }}
              img={chaggaImg}
              eyebrow="02 · Chagga"
              title="Coffee, caves & Kilimanjaro slopes."
              className="md:col-span-2 md:row-span-1"
            />

            {/* Impact tile (text card) */}
            <Link
              to="/impact"
              className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-7 flex flex-col justify-between hover:bg-ink transition-colors duration-500"
            >
              <Leaf size={22} className="text-accent" strokeWidth={1.5} />
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-bone/70 mb-2">Our impact</div>
                <h3 className="font-display text-2xl leading-tight">Your journey. Their future.</h3>
                <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-accent">
                  Read more <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>

            {/* Hadzabe */}
            <BentoTile
              to="/experiences/$slug"
              params={{ slug: "hadzabe" }}
              img={hadzabeImg}
              eyebrow="03 · Hadzabe"
              title="Dawn with one of Africa's last hunter-gatherers."
              className="md:col-span-3 md:row-span-2"
            />

            {/* Falls / nature */}
            <BentoTile
              to="/experiences"
              img={falls}
              eyebrow="Nature"
              title="Waterfalls, forests & sacred springs."
              className="md:col-span-3 md:row-span-1"
            />

            {/* Quote tile */}
            <div className="md:col-span-3 md:row-span-1 rounded-2xl bg-secondary p-7 flex flex-col justify-center">
              <span className="rule mb-4" />
              <p className="font-display text-xl md:text-2xl italic font-light leading-[1.25] text-ink text-balance">
                "The most meaningful journeys are about the people you meet."
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Eagle Vision Safaris</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT BAND */}
      <section className="relative bg-ink text-bone overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <img
              src={impactImg}
              alt="Tanzanian children laughing in a village classroom"
              loading="lazy"
              width={1600}
              height={1100}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/40 lg:to-transparent" />
          </div>
          <div className="px-6 lg:px-16 py-20 lg:py-28 flex flex-col justify-center">
            <div className="eyebrow text-accent mb-5">Our impact</div>
            <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.02] text-balance">
              Your journey. <span className="italic text-accent">Their future.</span>
            </h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed max-w-lg">
              Since our founding, Eagle Vision Safaris has ensured tourism benefits
              the communities that make Tanzania extraordinary — through education,
              conservation and direct community partnerships.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-bone/15 pt-6">
              {[
                ["320+", "Students supported"],
                ["18", "Partner villages"],
                ["100%", "Local team"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl md:text-3xl">{n}</div>
                  <div className="text-bone/55 text-[10px] uppercase tracking-[0.2em] mt-1">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/impact"
                className="inline-flex items-center gap-3 border border-bone/50 text-bone px-7 py-4 rounded-full text-sm uppercase tracking-[0.16em] font-semibold hover:bg-bone hover:text-ink transition-all"
              >
                See our impact <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-6">Your Tanzania awaits</div>
          <h2 className="font-display font-light text-4xl md:text-6xl text-balance leading-[1.03]">
            Come as a visitor. <span className="italic text-primary">Leave as a friend.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-[0.16em] font-semibold hover:bg-ink transition-all"
          >
            Start planning <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function WhyCard({ icon: Icon, title, children }: { icon: typeof Users; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-6">
      <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-4">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-xl leading-tight font-medium">{title}</h3>
      <p className="mt-3 text-muted-foreground text-pretty leading-relaxed">{children}</p>
    </div>
  );
}

type BentoProps = {
  to: string;
  params?: Record<string, string>;
  img: string;
  eyebrow: string;
  title: string;
  className?: string;
  big?: boolean;
};

function BentoTile({ to, params, img, eyebrow, title, className = "", big = false }: BentoProps) {
  return (
    <Link
      to={to as "/"}
      params={params as never}
      className={`group relative overflow-hidden rounded-2xl bg-muted block ${className}`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[1400ms] ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      <div className="relative h-full w-full p-5 lg:p-6 flex flex-col justify-end text-bone">
        <div className="text-[10px] uppercase tracking-[0.22em] text-accent mb-2">{eyebrow}</div>
        <h3 className={`font-display ${big ? "text-2xl md:text-4xl" : "text-lg md:text-xl"} leading-[1.1] text-balance`}>
          {title}
        </h3>
        <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-80 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
          Discover <ArrowUpRight size={12} />
        </div>
      </div>
    </Link>
  );
}
