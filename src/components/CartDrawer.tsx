"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/menuData";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-espresso/25 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[90] w-full max-w-md bg-warm-offwhite flex flex-col shadow-[-4px_0_24px_rgba(0,0,0,0.06)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-soft-line">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={18} strokeWidth={1.5} className="text-espresso" />
                <h2 className="font-heading text-lg text-espresso">
                  Your Order
                </h2>
                {totalItems > 0 && (
                  <span className="text-xs text-ash font-body">
                    ({totalItems} {totalItems === 1 ? "item" : "items"})
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-ash hover:text-espresso transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag
                    size={48}
                    strokeWidth={1}
                    className="text-soft-line mb-4"
                  />
                  <p className="text-ash text-sm">Your cart is empty</p>
                  <p className="text-ash/50 text-xs mt-1">
                    Browse our menu and add something delicious
                  </p>
                </div>
              ) : (
                <div className="space-y-0">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-4 py-4 border-b border-soft-line/60"
                    >
                      {/* Item Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-body font-medium text-espresso truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-ash mt-0.5">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-soft-line rounded-sm text-ash hover:text-espresso hover:border-espresso transition-colors cursor-pointer"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-6 text-center text-sm font-body font-medium text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-soft-line rounded-sm text-ash hover:text-espresso hover:border-espresso transition-colors cursor-pointer"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-ash/40 hover:text-terracotta transition-colors cursor-pointer"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Summary */}
            {items.length > 0 && (
              <div className="border-t border-soft-line px-6 py-5 space-y-4">
                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ash font-body">Total</span>
                  <span className="text-lg font-heading font-bold text-espresso">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                {/* Checkout CTA */}
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    `Hi, I'd like to place an order:\n${items
                      .map(
                        (i) =>
                          `• ${i.name} x${i.quantity} — ${formatPrice(
                            i.price * i.quantity
                          )}`
                      )
                      .join("\n")}\n\nTotal: ${formatPrice(totalPrice)}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-oak text-white text-sm font-body font-medium tracking-wider uppercase rounded-sm hover:bg-oak-dark transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={1.5} />
                  Checkout via WhatsApp
                </a>

                {/* Clear */}
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-ash hover:text-terracotta transition-colors cursor-pointer"
                >
                  Clear all items
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
