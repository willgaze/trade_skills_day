export type Trade = "tiling" | "plastering" | "plumbing";
export type Duration = "1 day" | "2 days";
export type LocationSlug = "andover" | "marlborough";

export interface Course {
  slug: string;
  title: string;
  trade: Trade;
  duration: Duration;
  locations: LocationSlug[];
  price: number;
  summary: string;
  description: string;
  whatYouLearn: string[];
  includes: string[];
  suitableFor: string;
}

export const courses: Course[] = [
  {
    slug: "tiling-basics",
    title: "Tiling Basics",
    trade: "tiling",
    duration: "1 day",
    locations: ["andover", "marlborough"],
    price: 149,
    summary:
      "Learn the fundamentals of wall and floor tiling in this hands-on taster day.",
    description:
      "A practical introduction to tiling where you will learn to measure, cut and fix tiles to walls and floors. By the end of the day you will have completed a tiled sample board to take home. This is a taster workshop — not an accredited qualification.",
    whatYouLearn: [
      "Surface preparation and setting out",
      "Adhesive mixing and application",
      "Tile cutting with manual and electric cutters",
      "Grouting and finishing techniques",
      "Common mistakes and how to avoid them",
    ],
    includes: [
      "All materials and tools provided",
      "PPE (safety glasses, gloves, knee pads)",
      "Safety briefing and supervised tool use",
      "Tea, coffee and lunch",
      "Sample board to take home",
    ],
    suitableFor:
      "Complete beginners and DIY enthusiasts aged 18+ who want to try tiling for the first time.",
  },
  {
    slug: "plastering-intro",
    title: "Introduction to Plastering",
    trade: "plastering",
    duration: "1 day",
    locations: ["andover", "marlborough"],
    price: 149,
    summary:
      "Get to grips with plastering basics — mixing, applying and finishing a plaster skim.",
    description:
      "Discover the art of plastering in this hands-on taster day. You will learn to mix plaster, apply a skim coat to a practice board, and achieve a smooth finish. This is a taster workshop — not an accredited qualification.",
    whatYouLearn: [
      "Understanding plaster types and when to use them",
      "Mixing plaster to the correct consistency",
      "Applying a first and second coat",
      "Trowel techniques for a smooth finish",
      "Patching and repair basics",
    ],
    includes: [
      "All materials and tools provided",
      "PPE (dust mask, safety glasses, gloves)",
      "Safety briefing and supervised tool use",
      "Tea, coffee and lunch",
      "Practice board to take home",
    ],
    suitableFor:
      "Complete beginners and DIY enthusiasts aged 18+ who want to learn basic plastering skills.",
  },
  {
    slug: "basic-plumbing",
    title: "Basic Plumbing Skills",
    trade: "plumbing",
    duration: "1 day",
    locations: ["andover"],
    price: 159,
    summary:
      "Learn essential plumbing skills — pipework, fittings and basic repairs.",
    description:
      "A practical introduction to domestic plumbing. You will work with copper and plastic pipework, learn to make soldered and push-fit joints, and tackle common repairs like replacing a tap washer. This is a taster workshop — not an accredited qualification.",
    whatYouLearn: [
      "Types of pipes and fittings used in UK homes",
      "Measuring and cutting copper and plastic pipe",
      "Making soldered and push-fit joints",
      "Replacing a tap washer and isolating water supply",
      "Reading basic plumbing diagrams",
    ],
    includes: [
      "All materials and tools provided",
      "PPE (safety glasses, gloves)",
      "Safety briefing and supervised tool use",
      "Tea, coffee and lunch",
      "Completed pipework sample to take home",
    ],
    suitableFor:
      "Complete beginners and DIY enthusiasts aged 18+ who want to understand basic plumbing.",
  },
  {
    slug: "tiling-advanced-patterns",
    title: "Tiling: Patterns & Cuts",
    trade: "tiling",
    duration: "2 days",
    locations: ["marlborough"],
    price: 279,
    summary:
      "Take your tiling further with pattern layouts, diagonal cuts and mosaic work.",
    description:
      "Build on basic tiling skills with this two-day workshop focused on decorative layouts. You will learn herringbone and brick-bond patterns, tackle tricky cuts around pipes and corners, and create a mosaic feature panel. This is a taster workshop — not an accredited qualification.",
    whatYouLearn: [
      "Planning and setting out pattern layouts",
      "Herringbone, brick-bond and diagonal patterns",
      "Cutting around pipes, sockets and corners",
      "Working with mosaic and small-format tiles",
      "Waterproofing basics for wet areas",
    ],
    includes: [
      "All materials and tools provided",
      "PPE (safety glasses, gloves, knee pads)",
      "Safety briefing and supervised tool use",
      "Tea, coffee and lunch both days",
      "Finished sample panels to take home",
    ],
    suitableFor:
      "Those with some tiling experience or who have completed our Tiling Basics course. Aged 18+.",
  },
  {
    slug: "plastering-repair",
    title: "Plaster Repair & Patching",
    trade: "plastering",
    duration: "1 day",
    locations: ["andover"],
    price: 149,
    summary:
      "Learn to repair damaged plaster — cracks, holes and blown plaster patches.",
    description:
      "Focused on the repair skills every homeowner needs. You will learn to assess plaster damage, cut out and prepare damaged areas, and apply patch repairs that blend seamlessly with existing walls. This is a taster workshop — not an accredited qualification.",
    whatYouLearn: [
      "Assessing types of plaster damage",
      "Cutting out and preparing damaged areas",
      "Mixing and applying repair plaster",
      "Feathering edges for a seamless finish",
      "When to replaster vs when to patch",
    ],
    includes: [
      "All materials and tools provided",
      "PPE (dust mask, safety glasses, gloves)",
      "Safety briefing and supervised tool use",
      "Tea, coffee and lunch",
      "Before/after photos of your repairs",
    ],
    suitableFor:
      "Complete beginners and homeowners aged 18+ who want to learn plaster repair techniques.",
  },
  {
    slug: "plumbing-bathroom-basics",
    title: "Bathroom Plumbing Essentials",
    trade: "plumbing",
    duration: "2 days",
    locations: ["andover", "marlborough"],
    price: 289,
    summary:
      "A two-day deep dive into bathroom plumbing — taps, toilets, showers and waste.",
    description:
      "Over two days you will learn to install and connect bathroom fixtures including basin taps, a toilet cistern, shower valve and waste pipework. Hands-on practice on realistic training rigs. This is a taster workshop — not an accredited qualification.",
    whatYouLearn: [
      "Basin tap and waste installation",
      "Toilet cistern fitting and adjustment",
      "Shower valve and riser rail installation",
      "Waste pipework and trap fitting",
      "Testing for leaks and basic fault-finding",
    ],
    includes: [
      "All materials and tools provided",
      "PPE (safety glasses, gloves)",
      "Safety briefing and supervised tool use",
      "Tea, coffee and lunch both days",
      "Certificate of attendance",
    ],
    suitableFor:
      "Those with some plumbing knowledge or who have completed our Basic Plumbing course. Aged 18+.",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return courses.map((c) => c.slug);
}

export function getCoursesByTrade(trade: Trade): Course[] {
  return courses.filter((c) => c.trade === trade);
}

export function getCoursesByLocation(location: LocationSlug): Course[] {
  return courses.filter((c) => c.locations.includes(location));
}

export function getCoursesByDuration(duration: Duration): Course[] {
  return courses.filter((c) => c.duration === duration);
}

export function filterCourses(filters: {
  trade?: Trade;
  duration?: Duration;
  location?: LocationSlug;
}): Course[] {
  return courses.filter((c) => {
    if (filters.trade && c.trade !== filters.trade) return false;
    if (filters.duration && c.duration !== filters.duration) return false;
    if (filters.location && !c.locations.includes(filters.location))
      return false;
    return true;
  });
}

export const tradeLabels: Record<Trade, string> = {
  tiling: "Tiling",
  plastering: "Plastering",
  plumbing: "Plumbing",
};
