import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Plan Your Journey | Eagle Vision Safaris" },
      { name: "description", content: "Start planning your cultural travel experience in Tanzania with Eagle Vision Safaris." },
      { property: "og:title", content: "Plan Your Journey — Eagle Vision Safaris" },
      { property: "og:description", content: "Reach out to our Tanzanian team to design your trip." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="eyebrow mb-5">Plan Your Journey</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.98] text-balance max-w-3xl">
            Tell us about <em className="italic font-light">your Tanzania.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Share a few details and a member of our Tanzanian team will be in touch
            within 24 hours to begin designing your journey.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="border border-clay/30 bg-secondary p-8">
                <h2 className="font-display text-2xl">Karibu sana — thank you.</h2>
                <p className="mt-3 text-muted-foreground">
                  Your message has been received. Our team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-6"
              >
                <Field label="Your name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Where are you traveling from?" name="origin" />
                <Field label="When would you like to travel?" name="dates" placeholder="e.g. March 2027" />
                <div>
                  <label className="block eyebrow mb-2">What interests you most?</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us which experiences excite you, who's traveling, and what you hope to take home."
                    className="w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-clay transition"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.18em] font-medium hover:bg-ink transition-all"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <aside className="md:col-span-2 space-y-8">
            <ContactRow icon={MapPin} title="Visit">
              Arusha, Tanzania<br />
              Gateway to the Northern Circuit
            </ContactRow>
            <ContactRow icon={Mail} title="Email">
              <a href="mailto:hello@eaglevisionsafaris.com" className="hover:text-clay">
                hello@eaglevisionsafaris.com
              </a>
            </ContactRow>
            <ContactRow icon={Phone} title="Call / WhatsApp">
              <a href="tel:+255000000000" className="hover:text-clay">+255 000 000 000</a>
            </ContactRow>
            <div className="border-t border-border pt-6">
              <p className="font-display italic text-xl text-pretty">
                "Come as a visitor. Leave as a friend."
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block eyebrow mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-clay transition"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, title, children }: { icon: typeof Mail; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-6">
      <Icon size={20} className="text-clay" strokeWidth={1.5} />
      <div className="eyebrow mt-3 mb-2">{title}</div>
      <div className="text-foreground/85">{children}</div>
    </div>
  );
}
