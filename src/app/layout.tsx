import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "KopiRuang — A Historic Gathering House, Now Brewing",
    template: "%s | KopiRuang",
  },
  description:
    "Discover KopiRuang, a warm minimalist café where community meets craft coffee. Browse our menu, order ahead for pick-up, or book an event in our heritage space.",
  keywords: [
    "coffee shop",
    "café",
    "kopi",
    "specialty coffee",
    "Jakarta",
    "order online",
    "catering",
    "events",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kopiruang.id",
    siteName: "KopiRuang",
    title: "KopiRuang — A Historic Gathering House, Now Brewing",
    description:
      "Community meets craft coffee in a space designed for warmth and belonging.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-canvas-white text-espresso font-body">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
