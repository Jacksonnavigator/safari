import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Users as UsersIcon, Check } from "lucide-react";
import maasaiImg from "@/assets/maasai-women.jpg";
import chaggaImg from "@/assets/chagga-coffee.jpg";
import hadzabeImg from "@/assets/hadzabe-dawn.jpg";
import waterfallImg from "@/assets/materuni-falls.jpg";
import heroImg from "@/assets/hero-maasai.jpg";

type Section = { heading: string; body: string; list?: string[] };
type Experience = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  hero: string;
  location: string;
  durations: string[];
  suitableFor: string[];
  sections: Section[];
  highlights: string[];
  why: string;
  closer: string;
};

const EXPERIENCES: Record<string, Experience> = {
  maasai: {
    slug: "maasai",
    title: "Maasai Life Experience",
    subtitle: "Walk Beside a Culture That Has Thrived for Generations",
    intro:
      "Step beyond the safari vehicle and discover one of Africa's most iconic and resilient cultures. The Maasai Life Experience offers a rare opportunity to spend meaningful time with Maasai families, learning firsthand about their traditions, values, and deep connection to the land. Far more than a cultural visit, this immersive experience invites you to participate in daily activities, share stories, and gain a deeper understanding of a way of life that has endured for centuries across the plains of East Africa.",
    hero: maasaiImg,
    location: "Northern Tanzania",
    durations: ["Half-Day Experience", "Full-Day Experience", "Multi-Day Cultural Immersion"],
    suitableFor: ["Families", "Students", "Educational Groups", "Photographers", "Cultural Enthusiasts", "Responsible Travelers"],
    sections: [
      {
        heading: "Welcome to the Boma",
        body: "Your journey begins with a visit to a traditional Maasai homestead, known as a boma. Guided by community members, you will learn how Maasai families live, how homes are constructed using natural materials, and how the community organizes daily life around family, livestock, and tradition. Listen to stories passed down through generations and discover the cultural values that continue to shape Maasai society today.",
      },
      {
        heading: "Walk with Maasai Women",
        body: "Spend time with Maasai women as they carry out daily activities that sustain their households and communities. Depending on the season and community activities, you may have the opportunity to:",
        list: [
          "Milk cattle using traditional methods",
          "Collect firewood used for cooking and heating",
          "Fetch water from local sources",
          "Learn about traditional food preparation",
          "Discover the art of Maasai beadwork and craftsmanship",
        ],
      },
      {
        heading: "Learn Traditional Survival Skills",
        body: "For generations, the Maasai have lived in close relationship with nature, developing practical skills that allow them to thrive in challenging environments. Join local guides as they demonstrate:",
        list: [
          "Traditional fire-making techniques",
          "Livestock management practices",
          "Indigenous environmental knowledge",
          "Plant uses and traditional remedies",
          "Bush survival skills passed from one generation to the next",
        ],
      },
      {
        heading: "Cattle Grazing with Maasai Warriors",
        body: "One of the most memorable experiences is accompanying Maasai warriors as they guide cattle across grazing lands. Dressed in traditional Maasai attire, guests have the opportunity to walk alongside the warriors, learning about nomadic pastoralism, livestock management, wildlife coexistence, tracking animal signs, and traditional Maasai leadership and responsibilities.",
      },
      {
        heading: "Music, Dance, and Celebration",
        body: "No Maasai cultural experience is complete without music and dance. Join community members in traditional songs and dances that celebrate important moments in Maasai life. Learn the meaning behind these performances and experience the energy, pride, and joy that characterize Maasai cultural celebrations.",
      },
      {
        heading: "Taste Traditional Maasai Hospitality",
        body: "Share a meal prepared by local hosts and discover traditional flavors that have sustained Maasai communities for generations. Meals provide an opportunity to gather, exchange stories, and enjoy genuine cultural interaction in a welcoming and respectful environment.",
      },
    ],
    highlights: [
      "Traditional boma visit",
      "Time with Maasai women and warriors",
      "Fire-making & survival skills",
      "Cattle grazing on the plains",
      "Music, dance and shared meals",
    ],
    why:
      "Because the most meaningful journeys are not only about the places you visit, but also about the people you meet.",
    closer: "Come as a visitor. Leave as a friend.",
  },

  chagga: {
    slug: "chagga",
    title: "Chagga Heritage Experience",
    subtitle: "Coffee, Caves and the Living Heritage of Kilimanjaro",
    intro:
      "On the fertile southern slopes of Mount Kilimanjaro, the Chagga people have farmed coffee, built ingenious irrigation canals, and protected their heritage in hidden caves for centuries. This experience walks you through their villages, their farms and their stories — a coffee tour, but also a heritage journey.",
    hero: chaggaImg,
    location: "Moshi / Kilimanjaro foothills",
    durations: ["Full-Day Experience", "Multi-Day Heritage Trail"],
    suitableFor: ["Coffee Lovers", "Cultural Travelers", "Families", "Photographers", "History Enthusiasts"],
    sections: [
      {
        heading: "From Cherry to Cup",
        body: "Visit working coffee farms and learn the full journey of Chagga coffee — picking, pulping, drying, traditional roasting, hand grinding, brewing and tasting. Enjoy a freshly prepared cup of organic coffee while listening to stories about life on the mountain.",
      },
      {
        heading: "Materuni Waterfall Adventure",
        body: "Hike through banana and coffee plantations to reach the spectacular Materuni Waterfall — a sacred site for the Chagga people, surrounded by rainforest on Kilimanjaro's slopes.",
      },
      {
        heading: "Chagga Caves & Defensive Heritage",
        body: "Explore underground cave networks the Chagga built for shelter during times of conflict. Hear the oral histories that explain how generations protected their families, their cattle, and their independence.",
      },
      {
        heading: "Traditional Irrigation Systems",
        body: "Discover centuries-old irrigation canals that continue to supply water to farms throughout the mountain slopes. Learn how local farmers successfully cultivate:",
        list: ["Coffee", "Bananas", "Avocados", "Vegetables", "Medicinal plants"],
      },
      {
        heading: "Banana Beer & Mountain Hospitality",
        body: "Witness the traditional preparation of mbege — Chagga banana beer — and share a meal with local families. Visit traditional homes, exchange stories, and participate in daily activities.",
      },
    ],
    highlights: [
      "Materuni Waterfall",
      "Coffee farm & processing tour",
      "Chagga cave exploration",
      "Traditional irrigation systems",
      "Banana beer experience",
      "Local family visits",
      "Traditional cuisine",
      "Mountain village walks",
    ],
    why:
      "Because Chagga heritage is more than coffee — it is a centuries-old relationship between people, mountain and land.",
    closer: "Taste the mountain. Hear its stories.",
  },

  hadzabe: {
    slug: "hadzabe",
    title: "Hadzabe & Datoga Experience",
    subtitle: "Time with Two of Africa's Most Remarkable Living Cultures",
    intro:
      "Around Lake Eyasi live the Hadzabe — one of the last hunter-gatherer peoples on earth — and their pastoralist neighbours, the Datoga blacksmiths. Spend a day moving with them through the bushland, learning the skills, language and knowledge that have sustained them for tens of thousands of years.",
    hero: hadzabeImg,
    location: "Lake Eyasi, Northern Tanzania",
    durations: ["Full-Day Experience", "Multi-Day Cultural Immersion"],
    suitableFor: ["Adventurers", "Anthropology Enthusiasts", "Photographers", "Cultural Travelers"],
    sections: [
      {
        heading: "Join a Traditional Hunting Expedition",
        body: "Begin your day before sunrise as Hadzabe hunters prepare for their daily activities. Walk with them through the bush as they track game with handmade bows and arrows, reading signs in the landscape that have been read the same way for generations.",
      },
      {
        heading: "Learn the Knowledge of the Land",
        body: "The Hadzabe possess an extraordinary understanding of the natural world. During your time with the community, you will learn about:",
        list: [
          "Edible plants and fruits",
          "Medicinal plants",
          "Water sources",
          "Seasonal migration patterns",
          "Traditional shelter construction",
          "Sustainable resource use",
        ],
      },
      {
        heading: "Visit Traditional Datoga Blacksmiths",
        body: "The neighbouring Datoga people are master blacksmiths, forging tools and arrowheads from recycled metal. Watch the bellows work, hear the rhythm of the hammer, and learn how an entire trade economy sustains two very different cultures living side by side.",
      },
      {
        heading: "Shared Stories Around the Fire",
        body: "End the day around a fire, listening to stories shared in the Hadzabe's distinctive click language — one of the world's oldest. This experience is designed in partnership with local communities to ensure that tourism supports cultural preservation and meaningful cross-cultural understanding.",
      },
    ],
    highlights: [
      "Sunrise hunting walk with the Hadzabe",
      "Indigenous knowledge of plants and tracking",
      "Datoga blacksmith village",
      "Click-language storytelling",
      "Community-partnered visit",
    ],
    why:
      "Because some of the world's most valuable knowledge is not found in books or museums. It lives within communities that continue to pass their traditions, skills, and wisdom from one generation to the next.",
    closer: "Listen closely. There are 50,000 years of knowledge in these stories.",
  },

  "mto-wa-mbu": {
    slug: "mto-wa-mbu",
    title: "Mto wa Mbu Cultural Discovery",
    subtitle: "A Multi-Tribal Village at the Gateway to the Rift Valley",
    intro:
      "Mto wa Mbu is one of the only villages in Tanzania where more than 120 tribes live side by side. Walk its lanes, sample its food, meet its artisans — and see how Tanzania's diversity becomes a daily reality.",
    hero: waterfallImg,
    location: "Manyara region",
    durations: ["Full-Day Experience"],
    suitableFor: ["Cultural Travelers", "Families", "Food Lovers", "Educational Groups"],
    sections: [
      {
        heading: "Village Walks",
        body: "Walk through the village and meet farmers, artists and storytellers from across Tanzania's tribes.",
      },
      {
        heading: "Local Markets & Banana Plantations",
        body: "Explore vibrant local markets and walk through the banana plantations that feed the region.",
        list: ["Village walks", "Local market tours", "Banana plantations", "Traditional food tasting", "Art and craft workshops", "Cultural storytelling"],
      },
    ],
    highlights: ["Multi-tribal experience", "Local cuisine", "Art and craft workshops", "Cultural storytelling"],
    why: "Because in one village, you meet a whole country.",
    closer: "Tanzania's diversity, in a single day.",
  },

  culinary: {
    slug: "culinary",
    title: "Tanzanian Culinary Experience",
    subtitle: "Explore Tanzania Through Its Flavors",
    intro:
      "Food tells the story of a people. This experience introduces visitors to the ingredients, traditions, and cooking methods that shape Tanzanian cuisine — from coastal Swahili spices to mountain Chagga staples.",
    hero: chaggaImg,
    location: "Multiple regions",
    durations: ["Half-Day Experience", "Full-Day Experience"],
    suitableFor: ["Food Lovers", "Cultural Travelers", "Families"],
    sections: [
      { heading: "Market to Table", body: "Visit a Tanzanian market, choose ingredients with local cooks, and prepare a traditional meal together." },
      { heading: "Coastal & Highland Flavors", body: "Learn the difference between Swahili coastal cooking and the staples of the Tanzanian highlands." },
    ],
    highlights: ["Market tours", "Cooking classes", "Spice exploration", "Local storytelling"],
    why: "Because the kitchen is the friendliest classroom in Tanzania.",
    closer: "Taste the country.",
  },

  "swahili-coast": {
    slug: "swahili-coast",
    title: "Swahili Coast Heritage",
    subtitle: "Where Africa Meets Arabia and Asia",
    intro: "The Swahili Coast reflects centuries of trade, migration, and cultural exchange. Walk Stone Town, sail a traditional dhow, and taste the spices that built an empire.",
    hero: heroImg,
    location: "Zanzibar · Pangani",
    durations: ["Multi-Day Experience"],
    suitableFor: ["Cultural Travelers", "History Lovers", "Couples", "Families"],
    sections: [
      { heading: "Stone Town Walking Tours", body: "Wander narrow alleys, carved doors and centuries of Swahili-Arab-Indian heritage." },
      { heading: "Spice Farms & Dhow Sailing", body: "Visit working spice farms and sail traditional dhows at sunset.", list: ["Stone Town walking tours", "Spice farm visits", "Swahili cooking classes", "Traditional dhow experiences", "Historical site visits"] },
    ],
    highlights: ["Cultural exchange", "Handcraft experiences", "Spice heritage", "Dhow sailing"],
    why: "Because the Swahili Coast is a meeting place of worlds.",
    closer: "Where the monsoons brought worlds together.",
  },

  markets: {
    slug: "markets",
    title: "Market & Community Life",
    subtitle: "Experience Everyday Tanzania",
    intro: "Markets are the heartbeat of Tanzanian communities. Walk through them with local guides and discover the rhythms of daily life.",
    hero: maasaiImg,
    location: "Arusha · Moshi",
    durations: ["Half-Day Experience"],
    suitableFor: ["Cultural Travelers", "Photographers", "Families"],
    sections: [{ heading: "Walking the Market", body: "Meet vendors, taste fresh produce, and understand how food and community move through Tanzania." }],
    highlights: ["Local interactions", "Market storytelling", "Authentic everyday Tanzania"],
    why: "Because real Tanzania is in the marketplace.",
    closer: "The country at its most alive.",
  },

  kondoa: {
    slug: "kondoa",
    title: "Kondoa Rock Art Experience",
    subtitle: "Discover Tanzania's Ancient Artists",
    intro: "Visit UNESCO-listed rock art sites that preserve some of Africa's oldest visual storytelling traditions.",
    hero: hadzabeImg,
    location: "Dodoma region",
    durations: ["Full-Day Experience"],
    suitableFor: ["History Enthusiasts", "Educational Groups", "Cultural Travelers"],
    sections: [{ heading: "The Painted Shelters", body: "Hike to rock shelters where ancient artists painted humans, animals and rituals thousands of years ago." }],
    highlights: ["Human history", "Archaeology", "Anthropology", "Educational tourism"],
    why: "Because storytelling started here.",
    closer: "Where Africa first told its story.",
  },

  wasambaa: {
    slug: "wasambaa",
    title: "Wasambaa Heritage",
    subtitle: "Discover the Kingdom of the Shambaa",
    intro: "High in the Usambara Mountains, the Shambaa people built a kingdom of farms, forests and viewpoints. Walk to Irente, taste mountain produce, and meet the communities that keep the highlands alive.",
    hero: waterfallImg,
    location: "Usambara Mountains",
    durations: ["Multi-Day Experience"],
    suitableFor: ["Hikers", "Cultural Travelers", "Nature Lovers"],
    sections: [
      { heading: "Mountain Communities", body: "Walk village to village, meeting farmers and craftspeople.", list: ["Irente Viewpoint hike", "Wasambaa culture", "Mountain communities", "Traditional agriculture", "Colonial history", "Forest biodiversity"] },
    ],
    highlights: ["Wasambaa culture", "Mountain communities", "Traditional agriculture", "Forest biodiversity"],
    why: "Because the mountains carry the kingdom's memory.",
    closer: "Tanzania, from above.",
  },
};

export const Route = createFileRoute("/_site/experiences/$slug")({
  loader: ({ params }) => {
    const exp = EXPERIENCES[params.slug];
    if (!exp) throw notFound();
    return { exp };
  },
  head: ({ loaderData }) => {
    const exp = loaderData?.exp;
    if (!exp) return { meta: [{ title: "Experience" }] };
    return {
      meta: [
        { title: `${exp.title} | Eagle Vision Safaris` },
        { name: "description", content: exp.subtitle },
        { property: "og:title", content: exp.title },
        { property: "og:description", content: exp.subtitle },
        { property: "og:image", content: exp.hero },
        { name: "twitter:image", content: exp.hero },
      ],
    };
  },
  component: ExperienceDetail,
  notFoundComponent: () => (
    <div className="pt-40 pb-32 px-6 text-center">
      <h1 className="font-display text-5xl">Experience not found</h1>
      <Link to="/experiences" className="mt-6 inline-block text-clay underline">Browse all experiences</Link>
    </div>
  ),
});

function ExperienceDetail() {
  const { exp } = Route.useLoaderData();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end text-bone">
        <img
          src={exp.hero}
          alt={exp.title}
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 pt-40 w-full">
          <Link to="/experiences" className="eyebrow text-accent inline-flex items-center gap-2 mb-6 hover:text-bone">
            ← Tanzania Through Local Eyes
          </Link>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl text-balance">
            {exp.title}
          </h1>
          <p className="mt-6 font-display italic text-2xl md:text-3xl text-accent max-w-3xl text-balance">
            {exp.subtitle}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-xl md:text-2xl leading-[1.55] font-display text-pretty text-ink">
            {exp.intro}
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-16">
          {exp.sections.map((s: { heading: string; body: string; list?: string[] }) => (
            <article key={s.heading}>
              <span className="rule mb-6" />
              <h2 className="font-display text-3xl md:text-4xl leading-tight">{s.heading}</h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85 text-pretty">{s.body}</p>
              {s.list && (
                <ul className="mt-6 space-y-3">
                  {s.list.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/80">
                      <Check size={18} className="text-clay mt-1 shrink-0" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="eyebrow mb-4">Experience Highlights</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {exp.highlights.map((h: string) => (
              <div key={h} className="flex items-start gap-3 py-2">
                <Check size={18} className="text-clay mt-1 shrink-0" />
                <span className="text-foreground/85">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOUR INFO */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-3 gap-10">
          <InfoBlock icon={MapPin} title="Location">
            {exp.location}
          </InfoBlock>
          <InfoBlock icon={Clock} title="Duration">
            <ul className="space-y-1.5">{exp.durations.map((d: string) => <li key={d}>{d}</li>)}</ul>
          </InfoBlock>
          <InfoBlock icon={UsersIcon} title="Suitable For">
            <ul className="space-y-1.5">{exp.suitableFor.map((s: string) => <li key={s}>{s}</li>)}</ul>
          </InfoBlock>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ink text-bone py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="eyebrow text-accent mb-6">Why Choose This Experience</div>
          <p className="font-display text-3xl md:text-4xl italic leading-[1.25] text-balance text-pretty">
            {exp.why}
          </p>
          <p className="mt-10 font-display text-2xl md:text-3xl text-accent">{exp.closer}</p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 bg-bone text-ink px-8 py-4 text-sm uppercase tracking-[0.18em] font-medium hover:bg-accent transition-all"
          >
            Plan Your Journey <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-6">
      <Icon size={20} className="text-clay" strokeWidth={1.5} />
      <div className="eyebrow mt-3 mb-3">{title}</div>
      <div className="text-foreground/85">{children}</div>
    </div>
  );
}
