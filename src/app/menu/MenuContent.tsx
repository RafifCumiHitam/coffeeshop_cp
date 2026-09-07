"use client";

import { useState, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { Plus, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useCart } from "@/context/CartContext";
import {
  menuItems,
  categories,
  formatPrice,
  type MenuItem,
} from "@/data/menuData";

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addItem } = useCart();

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ── Page Header ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-oak">
              Menu &amp; Order
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 text-espresso">
              What&rsquo;s <span className="italic font-normal">On Today</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-ash text-base max-w-xl">
              Browse our curated selection and add items to your cart. Order
              ahead for pick-up — no waiting, just great coffee.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div className="sticky top-16 z-30 bg-canvas-white/90 backdrop-blur-md border-b border-soft-line">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 text-xs font-body font-medium tracking-wider uppercase rounded-sm transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-oak text-white"
                  : "text-ash hover:text-espresso hover:bg-warm-offwhite"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── Menu Grid ── */}
      <section className="py-12 md:py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
          >
            {filteredItems.map((item) => (
              <MenuItemRow key={item.id} item={item} onAdd={addItem} />
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <p className="text-center text-ash py-20 text-sm">
              No items in this category yet.
            </p>
          )}
        </div>
      </section>
    </motion.div>
  );
}

/* ========================================
   Single Menu Item Row
   ======================================== */
function MenuItemRow({
  item,
  onAdd,
}: {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}) {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAdd(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <motion.div
      variants={staggerItemVariants}
      className="group border-b border-soft-line py-5 px-3 flex items-start justify-between gap-4 hover:bg-warm-offwhite/50 transition-colors duration-300"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="font-heading text-base md:text-lg text-espresso group-hover:text-oak transition-colors duration-300">
            {item.name}
          </h3>
        </div>
        <p className="mt-1 text-xs md:text-sm text-ash/70 font-body line-clamp-2">
          {item.description}
        </p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-sm font-body font-medium text-espresso whitespace-nowrap">
          {formatPrice(item.price)}
        </span>
        <button
          onClick={handleAdd}
          className={`w-8 h-8 flex items-center justify-center rounded-sm transition-all duration-300 cursor-pointer ${
            justAdded
              ? "bg-oak text-white scale-110"
              : "border border-soft-line text-ash hover:border-oak hover:text-oak"
          }`}
          aria-label={`Add ${item.name} to cart`}
        >
          {justAdded ? (
            <Check size={14} strokeWidth={2} />
          ) : (
            <Plus size={14} strokeWidth={1.5} />
          )}
        </button>
      </div>
    </motion.div>
  );
}
