import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "Do I need any experience?",
    answer:
      "No. Our taster workshops are designed for complete beginners. You will learn everything from scratch with the support of experienced instructors.",
  },
  {
    question: "What should I wear?",
    answer:
      "Wear comfortable clothes you do not mind getting dusty or dirty. Steel-toe boots are recommended but not essential — we have spare PPE available. All specialist safety equipment (glasses, gloves, masks) is provided.",
  },
  {
    question: "Is this an accredited qualification?",
    answer:
      "No. These are taster workshops and experience days designed to give you a practical introduction to a trade. They are not NVQ, City & Guilds or any other formal qualification. They are great for your CV and for deciding whether a trade career is right for you.",
  },
  {
    question: "What age do I need to be?",
    answer:
      "You must be 18 or over to attend our workshops. This is confirmed during the booking process.",
  },
  {
    question: "What is included in the price?",
    answer:
      "All materials, tools and PPE are provided. Tea, coffee and lunch are included. You also take home a sample of your work (e.g. a tiled board or plastered panel).",
  },
  {
    question: "Where are the workshops held?",
    answer:
      "We run workshops in Andover (Hampshire) and Marlborough (Wiltshire). Check each course listing for available locations.",
  },
  {
    question: "How do I book?",
    answer:
      "Use the booking request form on our website. We will confirm your place and send payment details within 2 working days. Places are limited to 8 per session.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes. We offer a full refund if you cancel at least 7 days before your workshop date. Cancellations within 7 days may be eligible for a transfer to another date. See our Terms & Conditions for full details.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, both our Andover and Marlborough venues have free on-site or nearby parking.",
  },
  {
    question: "What safety measures are in place?",
    answer:
      "All sessions include a safety briefing before any tools are used. PPE is provided and mandatory. All tool use is supervised by qualified instructors. We maintain a maximum group size of 8 to ensure everyone gets individual attention.",
  },
];

export function FAQAccordion({ items }: { items?: FAQItem[] }) {
  const faqs = items ?? faqData;

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
