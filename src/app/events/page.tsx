import type { Metadata } from "next";
import EventsContent from "./EventsContent";

export const metadata: Metadata = {
  title: "Catering & Events",
  description:
    "Host your next event at KopiRuang. From intimate gatherings to corporate retreats, explore our heritage event space and submit a catering inquiry.",
};

export default function EventsPage() {
  return <EventsContent />;
}
