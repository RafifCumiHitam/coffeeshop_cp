import type { Metadata } from "next";
import MenuContent from "./MenuContent";

export const metadata: Metadata = {
  title: "Menu & Order",
  description:
    "Browse our curated menu of specialty coffees, filter brews, pastries, and food. Add to cart and order ahead for pick-up at KopiRuang.",
};

export default function MenuPage() {
  return <MenuContent />;
}
