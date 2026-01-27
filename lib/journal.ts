export type JournalCategory =
  | "Formation"
  | "Location"
  | "Access"
  | "Safety"
  | "Naming"
  | "Funding";

export interface JournalPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: JournalCategory;
}

export const journalPosts: JournalPost[] = [
  {
    slug: "why-trade-skills-day-exists",
    title: "Why Trade Skills Day Exists",
    summary:
      "There is a gap between wanting to try a trade and being able to. Most local courses assume you have already decided. We wanted to fix that.",
    content: `The idea behind Trade Skills Day came from a straightforward observation: there is almost no way for an adult in our area to try a trade before committing to a full course or apprenticeship.

If you are curious about plumbing, tiling, or plastering, your options are limited. You can watch videos online, which teaches theory but not feel. You can enrol on a multi-week college course, which demands time and money before you know whether the work suits you. Or you can ask someone you know — assuming you know someone in that trade.

None of those options are accessible enough. We believe people should be able to walk into a workshop, spend a day learning the basics with real tools and real materials, and walk out knowing whether this is something they want to pursue further.

Trade Skills Day exists to provide that first step. Not a qualification. Not a career promise. Just a genuine, hands-on experience that helps people make better decisions about their next move — whether that is enrolling on a formal course, applying for an apprenticeship, or simply gaining the confidence to tackle a job at home.

We also wanted the day itself to be something worth putting on a CV. Employers and training providers value initiative. Showing that you spent a day in a real workshop, learning from a working tradesperson, signals that you are serious — even if you ultimately choose a different path.

This is not about replacing formal training. It is about making the entry point wider so more people can find their way in.`,
    date: "2025-01-06",
    category: "Formation",
  },
  {
    slug: "experience-days-not-qualifications",
    title: "Experience Days, Not Qualifications",
    summary:
      "We deliberately chose not to offer certificates or accreditation. Here is why honesty about what we provide matters more than inflated claims.",
    content: `One of the first decisions we made was that Trade Skills Day would not offer qualifications. No certificates, no NVQs, no accredited outcomes. This was a deliberate choice, not a limitation.

The reason is honesty. A one-day or two-day taster workshop cannot make someone a competent tradesperson. It takes years of practice, formal training, and on-site experience to reach that level. Claiming otherwise would be misleading — and potentially dangerous.

What a taster day can do is give someone a real sense of what the work involves. You learn how a tool feels in your hand. You discover whether you enjoy the patience required for tiling, or the physical demands of plastering. You find out whether the trade matches the version of it you had in your head.

That experience has genuine value, but it is experiential value, not credentialing value. We think the distinction matters.

There are also practical reasons. Offering accredited courses requires specific insurance, regulatory compliance, qualified assessors, and a level of overhead that would push prices up significantly. We would rather keep the days affordable and honest than expensive and overstated.

Safety is another factor. If someone believes a one-day course has qualified them to carry out plumbing work, that is a safety risk. We are clear from the outset: these are taster days. They are designed to inform your next decision, not replace the training you would need to work professionally.

We have found that this honesty actually builds trust. Participants appreciate knowing exactly what they are signing up for. There are no hidden upsells, no pressure to book further courses, and no inflated promises. Just a good day learning something new.`,
    date: "2025-01-13",
    category: "Formation",
  },
  {
    slug: "choosing-locations-access-comes-first",
    title: "Choosing Locations: Access Comes First",
    summary:
      "We chose Andover and Marlborough for practical reasons — transport links, parking, and making sure people can actually get there.",
    content: `Choosing where to run Trade Skills Day was not about finding the most impressive venue. It was about access.

We looked at the area we serve — broadly, north Hampshire and east Wiltshire — and asked a simple question: where can people actually get to? Not everyone drives. Not everyone can take a full day away from home without reliable transport back. If someone is already hesitant about trying something new, a difficult journey is one more reason not to bother.

Andover made sense as a primary location. It has reasonable bus links within Hampshire, free parking near the centre, and sits close to the A303 for anyone coming from further afield. It is not a city, but that is part of the point — we are trying to serve people in smaller towns who are often underserved by skills providers.

Marlborough offers something similar for the Wiltshire side. It has its own character as a market town, good road access from the M4 corridor, and a community that has shown interest in practical skills training. Running sessions in two locations also means we can serve a wider area without asking anyone to travel too far.

We looked at other options. Salisbury has more facilities but also more competition from established providers. Swindon is larger but felt disconnected from the rural communities we wanted to reach. In both cases, the existing provision was better than what we could add.

Accessibility goes beyond transport. We also considered venue accessibility — step-free access, adequate facilities, and enough space for small groups to work safely without feeling cramped. These are practical requirements, but they shape the experience significantly.

We expect to add more locations over time, but only where there is genuine demand and where we can maintain the same standard of access and experience. Growing for its own sake is not the goal.`,
    date: "2025-01-20",
    category: "Location",
  },
  {
    slug: "starting-with-plumbing",
    title: "Starting with Plumbing",
    summary:
      "We chose plumbing as our pilot trade because it matched our existing skills and had the clearest path to being self-funding.",
    content: `When we planned Trade Skills Day, we knew we could not launch with every trade at once. We needed a pilot — one trade to prove the model, test the logistics, and learn from real participants before expanding.

We chose plumbing for several reasons, all practical.

First, we had the skills in-house. Our founding instructor has years of hands-on plumbing experience and the ability to teach clearly. Starting with a trade where we already had credible expertise meant we could focus on getting the format right rather than recruiting and vetting external instructors from day one.

Second, plumbing has a broad appeal. Almost everyone has dealt with a leaky tap, a blocked drain, or the mystery of what happens behind the bathroom wall. It is a trade people are curious about because it connects directly to their everyday lives. That curiosity lowers the barrier to booking a first session.

Third, the materials and tools for a basic plumbing taster are relatively affordable. Copper pipe, fittings, a few hand tools — the cost per participant is manageable, which matters when you are trying to keep prices accessible. Compare this with electrical work, which requires expensive testing equipment, or bricklaying, which needs significant quantities of materials and outdoor space.

Fourth, plumbing taster sessions have a clear path to being self-funding. The price point covers materials, venue hire, and instruction without needing external subsidy. That matters because we want Trade Skills Day to be sustainable, not dependent on grants that may not continue.

We plan to add tiling and plastering next. Each new trade will follow the same process — we will pilot it, learn from it, and only scale it once we are confident in the quality and the demand.`,
    date: "2025-01-27",
    category: "Funding",
  },
  {
    slug: "health-safety-and-keeping-it-small",
    title: "Health, Safety, and Keeping It Small",
    summary:
      "Small groups are not a marketing choice. They are how we keep participants safe while giving them genuine hands-on time.",
    content: `We cap Trade Skills Day sessions at small groups. This is not a marketing decision designed to create exclusivity. It is a safety decision.

Trade workshops involve real tools, real materials, and real risks. Hot soldering irons, sharp tile cutters, heavy plaster — these are not props. Participants are often handling them for the first time. The instructor needs to see every person, correct grip and technique in real time, and intervene quickly if something is going wrong.

With a group of six or fewer, one experienced instructor can maintain genuine oversight. Everyone gets direct feedback. No one is left struggling unsupervised in a corner while the instructor helps someone else. That ratio is not luxury — it is the minimum standard for doing this responsibly.

We also restrict participation to adults aged 18 and over. This is partly an insurance requirement, but it also reflects the nature of the work. These workshops use professional-grade tools in a real workshop environment. The risks are manageable for adults who can follow safety instructions, but they are not appropriate for younger participants without additional supervision and safeguarding measures that would change the format significantly.

Our safety approach is designed in, not bolted on. Every session begins with a safety briefing. Protective equipment — goggles, gloves, appropriate clothing guidance — is part of the standard setup. The workshop layout is planned so that participants have enough space to work without being in each other's way.

We reviewed the health and safety requirements for similar providers and built our approach to meet or exceed them. This includes risk assessments for each trade, public liability insurance, and first aid provision on site.

Keeping groups small also improves the learning experience. Participants get more hands-on time, more individual instruction, and more opportunity to ask questions. But the primary driver is safety. Everything else is a benefit that follows from getting that right.`,
    date: "2025-02-03",
    category: "Safety",
  },
  {
    slug: "naming-the-project",
    title: "Naming the Project",
    summary:
      "We chose Trade Skills Day for clarity. Councils, parents, and landlords all need to understand what this is at a glance.",
    content: `Naming a project like this is harder than it sounds. The name needs to work for several different audiences at once, and clever or creative names often fail that test.

We considered various options. Workshop-based names. Acronyms. Names that tried to sound exciting or disruptive. In the end, we kept coming back to the same question: if a council officer, a parent, or a landlord sees this name, do they immediately understand what it is?

Trade Skills Day passed that test. It says what it is. Trade — these are traditional, hands-on trades. Skills — you will learn something practical. Day — it is a defined, manageable commitment.

That clarity matters for different reasons depending on the audience. For a potential participant, it sets expectations. You know this is a single day, not a multi-week commitment. For a parent or partner, it explains where someone is going and why. For a council or funding body, it communicates the offering without needing a lengthy explanation.

We also needed the name to work well online. Trade Skills Day is searchable, readable, and does not compete with established brands or confusingly similar names. The domain was available. The social media handles were clean. These are practical considerations, but they affect how easily people can find and share the project.

There was a temptation to choose something more distinctive — something that would stand out at a glance. But standing out is less important than being understood. We are not selling a lifestyle brand. We are offering practical workshops to people who want to try a trade. The name should reflect that straightforwardness.

If the project grows and the name no longer fits, we can revisit it. But for now, clarity over cleverness feels like the right call.`,
    date: "2025-02-10",
    category: "Naming",
  },
];

export function getJournalPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((post) => post.slug === slug);
}

export function getAllJournalSlugs(): string[] {
  return journalPosts.map((post) => post.slug);
}

export function getJournalPostsSorted(): JournalPost[] {
  return [...journalPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
