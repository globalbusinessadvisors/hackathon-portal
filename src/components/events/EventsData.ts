import { Event } from "./types";
import { upcomingEvents } from "./data/upcoming-events";
import { eventsQ4 } from "./data/events-2024-q4";
import { eventsQ3 } from "./data/events-2024-q3";
import { eventsQ2 } from "./data/events-2024-q2";

export const events: Event[] = [
  ...upcomingEvents,
  ...eventsQ4,
  ...eventsQ3,
  ...eventsQ2
];