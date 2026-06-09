import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-maasai.jpg";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About Eagle Vision Safaris | Cultural Travel Tanzania" },
      { name: "description", content: "A Tanzanian-led team building authentic cultural, community and impact travel experiences." },
      { property: "og:title", content: "About Eagle Vision Safaris" },
      { property: "og:description", content: "Local knowledge. Global perspective." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="eyebrow mb-5">About Eagle Vision</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.98] text-balance max-w-3xl">
            Local knowledge. <em className="italic font-light">Global perspective.</em>
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-8 text-lg leading-relaxed text-foreground/85">
          <p>
            Eagle Vision Safaris is a Tanzanian-led travel company building a new
            model of African tourism — one that goes beyond the safari vehicle and
            invites travelers into the lives, cultures and landscapes that make
            Tanzania extraordinary.
          </p>
          <p>
            Our team is made up of guides, storytellers, conservationists and
            community organizers from across the country. We design every journey
            with the communities our guests visit, ensuring that tourism strengthens
            cultural heritage and contributes directly to local livelihoods.
          </p>
          <p>
            From the Maasai plains to the Kilimanjaro foothills, from the Hadzabe
            bushlands to the Swahili Coast — we believe the best of Tanzania can
            only be experienced through the eyes of its people.
          </p>
        </div>
      </section>

      <section className="relative">
        <img src={heroImg} alt="Tanzania savanna" className="w-full h-[60vh] object-cover" loading="lazy" width={1920} height={1280} />
      </section>

      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-5">Our Promise</div>
          <p className="font-display text-3xl md:text-4xl italic leading-[1.2] text-balance">
            "Every journey should create value for both visitors and the communities
            that welcome them."
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.18em] font-medium hover:bg-ink transition-all">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
