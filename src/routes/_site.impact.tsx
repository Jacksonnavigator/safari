import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, TreePine, HandHeart, Building2 } from "lucide-react";
import impactImg from "@/assets/impact-community.jpg";

export const Route = createFileRoute("/_site/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact | Eagle Vision Safaris" },
      { name: "description", content: "How Eagle Vision Safaris ensures tourism benefits Tanzania's communities through education, conservation and partnerships." },
      { property: "og:title", content: "Our Impact — Eagle Vision Safaris" },
      { property: "og:description", content: "Travel that creates value for both visitors and local communities." },
      { property: "og:image", content: impactImg },
    ],
  }),
  component: ImpactPage,
});

const areas = [
  { icon: GraduationCap, title: "Education", body: "Supporting schools, scholarships, and educational programs in the communities we visit." },
  { icon: Building2, title: "Community Partnerships", body: "Every cultural experience is co-designed with the community, ensuring fair income flows directly to local hosts." },
  { icon: TreePine, title: "Conservation", body: "Partnering with wildlife and habitat protection initiatives across northern Tanzania." },
  { icon: HandHeart, title: "Cultural Preservation", body: "Tourism that strengthens, rather than commodifies, the traditions of Tanzania's peoples." },
];

function ImpactPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-end text-bone">
        <img src={impactImg} alt="Children in a Tanzanian classroom" className="absolute inset-0 w-full h-full object-cover" width={1600} height={1100} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 pt-40">
          <div className="eyebrow text-accent mb-5">Our Impact</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-3xl text-balance">
            Your journey. <em className="italic font-light">Their future.</em>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-xl md:text-2xl font-display leading-[1.5] text-pretty">
            Since our founding, Eagle Vision Safaris has worked to ensure tourism
            benefits local communities. We believe travel should give as much as it
            takes — to the people, the cultures, and the landscapes that make Tanzania
            extraordinary.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="eyebrow mb-8">Areas of Impact</div>
          <div className="grid sm:grid-cols-2 gap-10">
            {areas.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-t border-border pt-6">
                <Icon size={24} className="text-clay" strokeWidth={1.5} />
                <h2 className="mt-4 font-display text-2xl">{title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-5">Our Vision</div>
          <p className="font-display text-3xl md:text-4xl italic leading-[1.2] text-balance">
            To build a tourism company where every journey creates value for both
            visitors and local communities.
          </p>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            Travel with purpose. <em className="italic font-light">Travel with us.</em>
          </h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.18em] font-medium hover:bg-ink transition-all">
            Plan Your Journey <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
