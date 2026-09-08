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
    default: "PATDUA Eatery & Coffee — Industrial Modern & Botanical Warmth",
    template: "%s | PATDUA Eatery & Coffee",
  },
  description:
    "Discover PATDUA Eatery & Coffee Surabaya, an industrial modern café with botanical warmth. Browse our curated specialty coffee and eatery menu, order ahead, or enjoy our cozy workspace.",
  keywords: [
    "coffee shop",
    "café",
    "kopi",
    "specialty coffee",
    "Surabaya",
    "PATDUA",
    "Patdua Eatery",
    "order online",
    "eatery",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://patdua.id",
    siteName: "PATDUA Eatery & Coffee",
    title: "PATDUA Eatery & Coffee — Industrial Modern & Botanical Warmth",
    description:
      "Where industrial aesthetics meet botanical warmth. Specialty coffee and signature dishes in Surabaya.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
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
