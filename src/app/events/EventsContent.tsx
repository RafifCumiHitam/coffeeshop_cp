"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Send, Calendar, Users, Utensils, Music } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const galleryPlaceholders = [
  { label: "Private Dining Setup", icon: Utensils },
  { label: "Corporate Workshop", icon: Users },
  { label: "Live Music Night", icon: Music },
  { label: "Birthday Celebration", icon: Calendar },
  { label: "Coffee Workshop", icon: Utensils },
  { label: "Art Exhibition", icon: Camera },
];

const eventFeatures = [
  {
    icon: Users,
    title: "Capacity up to 80 guests",
    description: "Flexible seating arrangements for intimate or larger gatherings.",
  },
  {
    icon: Utensils,
    title: "Custom Catering Menu",
    description: "From coffee bars to full course meals, tailored to your event.",
  },
  {
    icon: Music,
    title: "AV Equipment Available",
    description: "Projector, sound system, and microphone ready for presentations.",
  },
  {
    icon: Calendar,
    title: "Flexible Booking",
    description: "Morning, afternoon, or evening slots. Full-day available on request.",
  },
];

export default function EventsContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = encodeURIComponent(
      `Hi, I'd like to inquire about hosting an event.\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Preferred Date: ${formData.date}\n` +
        `Estimated Guests: ${formData.guests}\n` +
        `Details: ${formData.message}`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 lg:px-12 bg-warm-offwhite">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
              Catering &amp; Events
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 text-espresso">
              Your Event,{" "}
              <span className="italic font-normal">Our Heritage Space</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-ash text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether it&apos;s a private dinner, a product launch, or a weekend
              workshop, KopiRuang offers a unique blend of history and
              hospitality to make your occasion unforgettable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
                Gallery
              </span>
              <h2 className="mt-3 text-espresso">
                Moments We&rsquo;ve{" "}
                <span className="italic font-normal">Hosted</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryPlaceholders.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.08}>
                <div
                  className={`bg-warm-offwhite rounded-sm overflow-hidden flex items-center justify-center group cursor-pointer ${
                    index === 0 || index === 5
                      ? "aspect-[4/5]"
                      : "aspect-square"
                  }`}
                >
                  <div className="text-center text-ash/20 group-hover:text-ash/40 transition-colors duration-500">
                    <item.icon size={40} strokeWidth={0.5} className="mx-auto" />
                    <p className="mt-2 text-[10px] tracking-widest uppercase font-body">
                      {item.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-warm-offwhite">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
                What We Offer
              </span>
              <h2 className="mt-3 text-espresso">
                Event <span className="italic font-normal">Amenities</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center text-oak">
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-heading text-base text-espresso">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs text-ash leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry Form ── */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
                Get in Touch
              </span>
              <h2 className="mt-3 text-espresso">
                Reserve{" "}
                <span className="italic font-normal">Your Date</span>
              </h2>
              <p className="mt-4 text-ash text-sm max-w-md mx-auto">
                Fill out the form below and we&apos;ll connect with you via
                WhatsApp to finalize the details.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-body font-medium text-espresso mb-1.5 uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-warm-offwhite border border-soft-line text-sm font-body text-espresso placeholder:text-ash/40 rounded-sm focus:outline-none focus:border-oak transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-body font-medium text-espresso mb-1.5 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-warm-offwhite border border-soft-line text-sm font-body text-espresso placeholder:text-ash/40 rounded-sm focus:outline-none focus:border-oak transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-body font-medium text-espresso mb-1.5 uppercase tracking-wider"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-warm-offwhite border border-soft-line text-sm font-body text-espresso placeholder:text-ash/40 rounded-sm focus:outline-none focus:border-oak transition-colors"
                    placeholder="08xx"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-xs font-body font-medium text-espresso mb-1.5 uppercase tracking-wider"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-warm-offwhite border border-soft-line text-sm font-body text-espresso placeholder:text-ash/40 rounded-sm focus:outline-none focus:border-oak transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-xs font-body font-medium text-espresso mb-1.5 uppercase tracking-wider"
                  >
                    Guests
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="200"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-warm-offwhite border border-soft-line text-sm font-body text-espresso placeholder:text-ash/40 rounded-sm focus:outline-none focus:border-oak transition-colors"
                    placeholder="~30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-body font-medium text-espresso mb-1.5 uppercase tracking-wider"
                >
                  Tell Us About Your Event
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-warm-offwhite border border-soft-line text-sm font-body text-espresso placeholder:text-ash/40 rounded-sm focus:outline-none focus:border-oak transition-colors resize-none"
                  placeholder="Event type, special requests, dietary needs..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-2 py-3.5 text-sm font-body font-medium tracking-wider uppercase rounded-sm transition-all duration-300 cursor-pointer ${
                  submitted
                    ? "bg-oak/60 text-white cursor-default"
                    : "bg-oak text-white hover:bg-oak-dark"
                }`}
              >
                {submitted ? (
                  "Opening WhatsApp..."
                ) : (
                  <>
                    <Send size={14} strokeWidth={1.5} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
