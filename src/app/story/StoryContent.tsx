"use client";

import { motion } from "framer-motion";
import { Coffee, Heart, Users, Leaf } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: Coffee,
    title: "Craft & Quality",
    description:
      "Every bean is ethically sourced from Indonesian highlands. We roast in small batches to preserve origin character and deliver a cup that's true to its roots.",
  },
  {
    icon: Heart,
    title: "Heritage & Warmth",
    description:
      "Our space is a restored heritage building — original timber beams, exposed brick, and natural light. We preserved its soul while designing for modern comfort.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "From barista workshops to local art exhibitions, KopiRuang is a platform for the neighborhood. Great coffee is better when shared with great people.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Compostable packaging, zero single-use plastics, and direct partnerships with farmers. We're committed to leaving a lighter footprint, one cup at a time.",
  },
];

export default function StoryContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ── Hero Banner ── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 lg:px-12 bg-warm-offwhite">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
              Our Story
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 text-espresso leading-tight">
              Rooted in Heritage,{" "}
              <br className="hidden md:block" />
              <span className="italic font-normal">Brewed with Purpose</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-ash text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              In the heart of the city, a century-old gathering house found new
              life. KopiRuang is where the past meets the present — where
              timber and stone embrace the aroma of freshly ground beans, and
              every corner invites you to stay a little longer.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Editorial Block 1: The Beginning ── */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <div className="aspect-[4/5] bg-warm-offwhite rounded-sm flex items-center justify-center overflow-hidden">
              <div className="text-center text-ash/20">
                <Coffee size={64} strokeWidth={0.5} />
                <p className="mt-3 text-xs tracking-widest uppercase font-body">
                  Heritage Building Photo
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={0.1}>
              <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
                The Beginning
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="mt-4 text-espresso">
                A House That{" "}
                <span className="italic font-normal">Remembers</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-ash leading-relaxed">
                Built in the 1930s as a community hall, the building at Jl.
                Heritage No. 12 has witnessed decades of gatherings — from
                neighborhood celebrations to quiet afternoon teas. When we
                discovered it, the walls still whispered stories. We knew this
                space deserved to gather people again.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-ash leading-relaxed">
                The restoration took eighteen months. We preserved the original
                teak columns, the terrazzo floors, and the arched doorways. Then
                we added what was missing: the unmistakable aroma of
                single-origin coffee, the gentle hum of a grinder, and the
                warmth of a community that feels like home.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Editorial Block 2: The Coffee ── */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-warm-offwhite">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="md:order-2">
            <ScrollReveal direction="right">
              <div className="aspect-[4/5] bg-canvas-white rounded-sm flex items-center justify-center overflow-hidden">
                <div className="text-center text-ash/20">
                  <Coffee size={64} strokeWidth={0.5} />
                  <p className="mt-3 text-xs tracking-widest uppercase font-body">
                    Coffee Brewing Photo
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:order-1">
            <ScrollReveal delay={0.1}>
              <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
                The Coffee
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="mt-4 text-espresso">
                From Highlands{" "}
                <span className="italic font-normal">to Your Cup</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-ash leading-relaxed">
                We source directly from smallholder farmers across the
                Indonesian archipelago — from the volcanic slopes of Flores to
                the misty highlands of Aceh Gayo. Each origin is selected for
                its character, roasted to highlight its unique terroir, and
                brewed with precision.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-ash leading-relaxed">
                Our baristas are trained not just in technique, but in
                storytelling. Every cup comes with a narrative — the farm it came
                from, the altitude it grew at, and the hands that picked it. We
                believe knowing the story makes the coffee taste even better.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
                What We Stand For
              </span>
              <h2 className="mt-3 text-espresso">
                Our <span className="italic font-normal">Values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-oak">
                    <value.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-espresso">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-ash leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote / Pull Quote ── */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-warm-offwhite">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-oak text-5xl font-heading leading-none mb-6">
              &ldquo;
            </div>
            <blockquote className="font-heading text-2xl md:text-3xl text-espresso italic font-normal leading-relaxed">
              We don&apos;t just serve coffee. We create a space where every
              sip feels like coming home.
            </blockquote>
            <p className="mt-6 text-sm text-ash font-body tracking-wide uppercase">
              — The KopiRuang Team
            </p>
          </div>
        </ScrollReveal>
      </section>
    </motion.div>
  );
}
