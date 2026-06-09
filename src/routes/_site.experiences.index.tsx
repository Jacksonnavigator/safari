import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import maasaiImg from "@/assets/maasai-women.jpg";
import chaggaImg from "@/assets/chagga-coffee.jpg";
import hadzabeImg from "@/assets/hadzabe-dawn.jpg";
import waterfallImg from "@/assets/materuni-falls.jpg";
import heroImg from "@/assets/hero-maasai.jpg";

export const Route = createFileRoute("/_site/experiences/")({
  head: () => ({
    meta: [
      { title: "Cultural Experiences in Tanzania | Eagle Vision Safaris" },
      { name: "description", content: "Maasai life, Chagga heritage, Hadzabe & Datoga, Mto wa Mbu, Swahili Coast and more — Tanzania's most authentic cultural journeys." },
      { property: "og:title", content: "Cultural Experiences in Tanzania" },
      { property: "og:description", content: "Authentic cultural journeys curated by local Tanzanian guides." },
    ],
  }),
  component: ExperiencesIndex,
});

export const experiences = [
  { slug: "maasai", title: "Maasai Life Experience", tagline: "Walk beside a culture that has thrived for generations.", region: "Northern Tanzania", duration: "Half-day · Full-day · Multi-day", img: maasaiImg, tier: 1 },
  { slug: "chagga", title: "Chagga Heritage Experience", tagline: "Coffee, caves and the slopes of Kilimanjaro.", region: "Moshi / Kilimanjaro", duration: "Full-day · Multi-day", img: chaggaImg, tier: 1 },
  { slug: "hadzabe", title: "Hadzabe & Datoga Experience", tagline: "Time with one of Africa's last hunter-gatherer peoples.", region: "Lake Eyasi", duration: "Full-day · Multi-day", img: hadzabeImg, tier: 1 },
  { slug: "mto-wa-mbu", title: "Mto wa Mbu Cultural Discovery", tagline: "A multi-tribal village at the gateway to the Rift Valley.", region: "Manyara", duration: "Full-day", img: waterfallImg, tier: 2 },
  { slug: "culinary", title: "Tanzanian Culinary Experience", tagline: "Tanzania told through its flavors, markets and kitchens.", region: "Multiple regions", duration: "Half-day · Full-day", img: chaggaImg, tier: 2 },
  { slug: "swahili-coast", title: "Swahili Coast Heritage", tagline: "Where Africa meets Arabia and Asia.", region: "Zanzibar · Pangani", duration: "Multi-day", img: heroImg, tier: 2 },
  { slug: "markets", title: "Market & Community Life", tagline: "The heartbeat of everyday Tanzania.", region: "Arusha · Moshi", duration: "Half-day", img: maasaiImg, tier: 3 },
  { slug: "kondoa", title: "Kondoa Rock Art Experience", tagline: "UNESCO-listed art from Africa's earliest storytellers.", region: "Dodoma region", duration: "Full-day", img: hadzabeImg, tier: 3 },
  { slug: "wasambaa", title: "Wasambaa Heritage", tagline: "Mountain communities of the Usambara kingdom.", region: "Usambara Mountains", duration: "Multi-day", img: waterfallImg, tier: 3 },
];

function ExperiencesIndex() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-40 pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="eyebrow mb-5">Tanzania Through Local Eyes</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.98] max-w-4xl text-balance">
            Cultural experiences, <em className="italic font-light">curated by Tanzanians.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From the plains of the Maasai to the mountain villages of the Chagga and
            the bushland of the Hadzabe — these are the journeys that move people most.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {experiences.map((e) => (
              <Link
                key={e.slug}
                to="/experiences/$slug"
                params={{ slug: e.slug }}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-muted">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    width={1600}
                    height={1100}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-bone">
                    <div className="eyebrow text-accent">{e.region}</div>
                    <div className="font-display text-2xl mt-2 leading-tight">{e.title}</div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-muted-foreground text-pretty">{e.tagline}</p>
                  <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.18em]">
                    <span className="text-muted-foreground">{e.duration}</span>
                    <span className="inline-flex items-center gap-2 text-clay group-hover:gap-3 transition-all">
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
