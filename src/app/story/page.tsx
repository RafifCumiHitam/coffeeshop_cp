import type { Metadata } from "next";
import StoryContent from "./StoryContent";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the heritage, philosophy, and community behind KopiRuang — a historic gathering house reimagined as a modern craft coffee destination.",
};

export default function StoryPage() {
  return <StoryContent />;
}
