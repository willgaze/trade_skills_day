export const siteConfig = {
  name: "Trade Skills Day",
  description:
    "Hands-on taster workshops in tiling, plastering and plumbing. 1–2 day experience days in Andover & Marlborough, UK.",
  url: "https://tradeskillsday.co.uk",
  ogImage: "/images/og-default.jpg",
  email: "hello@tradeskillsday.co.uk",
  phone: "01234 567890",
  pilotBanner: {
    enabled: true,
    text: "Pilot Launch — Limited places available for our first cohort of taster workshops!",
  },
} as const;

export type NavItem = {
  title: string;
  href: string;
};

export const navItems: NavItem[] = [
  { title: "Courses", href: "/courses" },
  { title: "Locations", href: "/locations" },
  { title: "Book", href: "/book" },
  { title: "About", href: "/about" },
  { title: "FAQ", href: "/faq" },
  { title: "Journal", href: "/journal" },
  { title: "Contact", href: "/contact" },
];

export const footerLinks = {
  courses: [
    { title: "All Courses", href: "/courses" },
    { title: "Tiling", href: "/courses?trade=tiling" },
    { title: "Plastering", href: "/courses?trade=plastering" },
    { title: "Plumbing", href: "/courses?trade=plumbing" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Locations", href: "/locations" },
    { title: "Instructors", href: "/instructors" },
    { title: "Journal", href: "/journal" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Terms & Conditions", href: "/legal#terms" },
    { title: "Privacy Policy", href: "/legal#privacy" },
    { title: "Safeguarding", href: "/legal#safeguarding" },
    { title: "FAQ", href: "/faq" },
  ],
} as const;

export type Location = {
  name: string;
  slug: string;
  address: string;
  postcode: string;
  description: string;
  mapQuery: string;
};

export const locations: Location[] = [
  {
    name: "Andover",
    slug: "andover",
    address: "Andover, Hampshire",
    postcode: "SP10",
    description:
      "Our Andover venue offers a fully equipped workshop space with professional-grade tools and materials. Conveniently located with free parking and easy access from the A303.",
    mapQuery: "Andover+Hampshire+UK",
  },
  {
    name: "Marlborough",
    slug: "marlborough",
    address: "Marlborough, Wiltshire",
    postcode: "SN8",
    description:
      "Our Marlborough workshop is set in the heart of this historic market town. A purpose-built training space with excellent facilities and straightforward access from the M4.",
    mapQuery: "Marlborough+Wiltshire+UK",
  },
];
