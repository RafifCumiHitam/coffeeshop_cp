"use client";

import Link from "next/link";
import { Send, MapPin, Clock, ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-warm-offwhite">
      {/* Newsletter Band */}
      <ScrollReveal>
        <div className="border-t border-soft-line">
          <div className="mx-auto max-w-6xl px-6 lg:px-12 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading text-espresso">
                Stay in the Loop
              </h2>
              <p className="mt-2 text-ash text-sm max-w-md">
                Get updates on seasonal specials, events, and new menu items
                delivered to your inbox.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-3 bg-canvas-white border border-soft-line text-sm font-body text-espresso placeholder:text-ash/50 focus:outline-none focus:border-oak transition-colors rounded-l-sm"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-oak text-white hover:bg-oak-dark transition-colors rounded-r-sm cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      </ScrollReveal>

      {/* Main Footer Content */}
      <div className="border-t border-soft-line">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand & About */}
          <div>
            <Link href="/" className="font-heading text-xl text-espresso">
              <span className="font-bold">Kopi</span>
              <span className="font-normal opacity-70">Ruang</span>
            </Link>
            <p className="mt-4 text-ash text-sm leading-relaxed">
              A historic gathering house, now brewing. Where community meets
              craft coffee in a space designed for warmth and belonging.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ash hover:text-oak transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ash hover:text-oak transition-colors"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ash hover:text-oak transition-colors"
                aria-label="X / Twitter"
              >
                <Send size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Hours */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-espresso mb-4">
                Navigate
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "/", label: "Home" },
                  { href: "/story", label: "Our Story" },
                  { href: "/menu", label: "Menu" },
                  { href: "/events", label: "Events" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ash hover:text-espresso transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-espresso mb-4 flex items-center gap-1.5">
                <Clock size={12} strokeWidth={1.5} />
                Hours
              </h4>
              <ul className="space-y-2 text-sm text-ash">
                <li>
                  <span className="text-espresso text-xs font-medium">Mon – Fri</span>
                  <br />
                  07:00 – 22:00
                </li>
                <li>
                  <span className="text-espresso text-xs font-medium">Saturday</span>
                  <br />
                  08:00 – 23:00
                </li>
                <li>
                  <span className="text-espresso text-xs font-medium">Sunday</span>
                  <br />
                  08:00 – 21:00
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Map */}
          <div>
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-espresso mb-4 flex items-center gap-1.5">
              <MapPin size={12} strokeWidth={1.5} />
              Find Us
            </h4>
            <div className="w-full aspect-[4/3] bg-soft-line rounded-sm overflow-hidden">
              {/* Google Maps iframe placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395513631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMonas!5e0!3m2!1sen!2sid!4v1633090000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KopiRuang Location"
              />
            </div>
            <p className="mt-3 text-xs text-ash">
              Jl. Heritage No. 12, Menteng, Jakarta Pusat
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-soft-line">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ash">
            &copy; {new Date().getFullYear()} KopiRuang. All rights reserved.
          </p>
          <p className="text-xs text-ash/50">
            Crafted with warmth &amp; minimalism
          </p>
        </div>
      </div>
    </footer>
  );
}
