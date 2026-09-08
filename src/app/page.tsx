"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Coffee } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { menuItems, formatPrice } from "@/data/menuData";

/* ========================================
   Featured Menu Data (subset)
   ======================================== */
const featuredItems = menuItems.slice(0, 6);

/* ========================================
   Homepage
   ======================================== */
export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ── Hero Section ── */}
      <HeroSection />

      {/* ── Introduction / Our Vibe ── */}
      <OurVibeSection />

      {/* ── Featured Menu ── */}
      <FeaturedMenuSection />

      {/* ── CTA Band ── */}
      <CTABand />
    </motion.div>
  );
}

/* ========================================
   Hero Section
   ======================================== */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-espresso">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/src/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center pb-20 md:pb-28 px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading leading-tight drop-shadow-md"
        >
          <span className="text-canvas-white">A Historic Gathering House,</span>{" "}
          <span className="italic font-normal text-amber-gold">Now Brewing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-white/60 text-base md:text-lg font-body leading-relaxed max-w-xl mx-auto"
        >
          Where community meets craft coffee in a space designed for warmth and
          belonging.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-oak text-white text-sm font-body font-medium tracking-wider uppercase rounded-sm hover:bg-oak-dark transition-colors duration-300"
          >
            Order Now
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-body font-medium tracking-wider uppercase rounded-sm hover:bg-white/10 transition-colors duration-300"
          >
            Book an Event
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ========================================
   Our Vibe / Introduction Section
   ======================================== */
function OurVibeSection() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
        {/* Text – 40% */}
        <div className="md:col-span-2">
          <ScrollReveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
              Our Vibe
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 text-espresso">
              More Than Just <br className="hidden md:block" />
              <span className="italic font-normal">a Coffee Shop</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-ash text-base leading-relaxed">
              KopiRuang is a heritage space reimagined as a modern gathering
              house. We believe great coffee starts with community — a place
              where freelancers find focus, friends find warmth, and every cup
              tells a story rooted in local craft.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 mt-8 text-sm font-body font-medium text-oak hover:text-oak-dark transition-colors group"
            >
              Read Our Story
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </ScrollReveal>
        </div>

        {/* Image Placeholder – 60% */}
        <ScrollReveal className="md:col-span-3" delay={0.2} direction="right">
          <div className="aspect-[3/4] md:aspect-[4/5] bg-warm-offwhite rounded-sm overflow-hidden flex items-center justify-center">
            <div className="text-center text-ash/30">
              <Coffee size={64} strokeWidth={0.5} />
              <p className="mt-3 text-xs tracking-widest uppercase font-body">
                Café Atmosphere Photo
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========================================
   Featured Menu Section
   ======================================== */
function FeaturedMenuSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-warm-offwhite">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
                Featured
              </span>
              <h2 className="mt-3 text-espresso">
                What We&rsquo;re <span className="italic font-normal">Brewing</span>
              </h2>
            </div>
            <Link
              href="/menu"
              className="hidden md:inline-flex items-center gap-2 text-sm font-body font-medium text-oak hover:text-oak-dark transition-colors group"
            >
              Full Menu
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </ScrollReveal>

        {/* Menu List – text only, image on hover */}
        <div className="relative">
          {featuredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <div
                className="group border-t border-soft-line py-6 cursor-pointer flex items-center justify-between transition-colors hover:bg-canvas-white/50"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-heading text-lg md:text-xl text-espresso group-hover:text-oak transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-xs text-ash font-body uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ash/70 font-body max-w-lg">
                    {item.description}
                  </p>
                </div>
                <span className="text-sm font-body font-medium text-espresso ml-4 whitespace-nowrap">
                  {formatPrice(item.price)}
                </span>
              </div>
            </ScrollReveal>
          ))}
          {/* Last border */}
          <div className="border-t border-soft-line" />

          {/* Hover image preview – premium interaction */}
          <motion.div
            className="hidden lg:block fixed top-1/2 right-16 -translate-y-1/2 w-56 h-72 pointer-events-none z-30"
            animate={{
              opacity: hoveredIndex !== null ? 1 : 0,
              scale: hoveredIndex !== null ? 1 : 0.95,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full h-full bg-warm-offwhite border border-soft-line rounded-sm flex items-center justify-center shadow-lg">
              <div className="text-center text-ash/20">
                <Coffee size={40} strokeWidth={0.5} />
                <p className="mt-2 text-[10px] tracking-widest uppercase font-body">
                  {hoveredIndex !== null
                    ? featuredItems[hoveredIndex].name
                    : ""}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile link */}
        <div className="mt-10 md:hidden text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-oak text-white text-sm font-body font-medium tracking-wider uppercase rounded-sm hover:bg-oak-dark transition-colors"
          >
            View Full Menu
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ========================================
   CTA Band
   ======================================== */
function CTABand() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-espresso">
            Planning an <span className="italic font-normal">Event?</span>
          </h2>
          <p className="mt-4 text-ash text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From intimate gatherings to corporate retreats, our heritage space
            and dedicated catering team bring warmth to every occasion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-oak text-white text-sm font-body font-medium tracking-wider uppercase rounded-sm hover:bg-oak-dark transition-colors"
            >
              Inquire Now
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-espresso text-espresso text-sm font-body font-medium tracking-wider uppercase rounded-sm hover:bg-warm-offwhite transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
