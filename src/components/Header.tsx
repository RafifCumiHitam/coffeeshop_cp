"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { toggleCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-canvas-white/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-soft-line)]"
            : isHome
              ? "bg-transparent"
              : "bg-canvas-white"
        }`}
      >
        <nav
          className={`mx-auto flex items-center justify-between px-6 lg:px-12 transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group transition-transform duration-300 hover:scale-105"
            aria-label="PATDUA Home"
          >
            <div
              className={`relative overflow-hidden rounded-2xl shadow-sm transition-all duration-500 flex items-center justify-center bg-white ${
                scrolled
                  ? "h-11 w-11 md:h-12 md:w-12"
                  : "h-13 w-13 md:h-15 md:w-15"
              }`}
            >
              <Image
                src="/src/logo.jpeg"
                alt="PATDUA Logo"
                fill
                sizes="(max-width: 768px) 60px, 72px"
                className="object-cover scale-125 transition-transform duration-300 group-hover:scale-135"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-body tracking-wider uppercase transition-colors duration-300 ${
                  !scrolled && isHome
                    ? "text-white/80 hover:text-white"
                    : "text-ash hover:text-espresso"
                } ${pathname === link.href ? (!scrolled && isHome ? "text-white" : "text-espresso") : ""}`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-1 left-0 right-0 h-[1.5px] ${
                      !scrolled && isHome ? "bg-white" : "bg-oak"
                    }`}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className={`relative p-2 transition-colors duration-300 cursor-pointer ${
                !scrolled && isHome ? "text-white" : "text-espresso"
              }`}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-terracotta text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 transition-colors duration-300 cursor-pointer ${
                !scrolled && isHome ? "text-white" : "text-espresso"
              }`}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-espresso/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-canvas-white flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-soft-line">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="relative w-11 h-11 rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-white"
                  aria-label="PATDUA Home"
                >
                  <Image
                    src="/src/logo.jpeg"
                    alt="PATDUA Logo"
                    fill
                    sizes="44px"
                    className="object-cover scale-125"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-espresso cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col px-6 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 text-base font-body tracking-wide border-b border-soft-line transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-oak font-medium"
                        : "text-ash hover:text-espresso"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto p-6">
                <Link
                  href="/menu"
                  className="block w-full text-center py-3 bg-oak text-white text-sm font-body tracking-wider uppercase rounded-sm hover:bg-oak-dark transition-colors duration-300"
                >
                  Order Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
