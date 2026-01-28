import { Accordion } from "@/shared/ui/Accordion";
import { AccordionGroup } from "@/shared/ui/AccordionGroup";
import { InternalLink } from "@/shared/ui/AppLink/InternalLink";
import { InternalLinkButtonMode } from "@/shared/ui/AppLink/InternalLink/InternalLink";
import { Section } from "@/shared/ui/Section";

export const Questions = () => {
  const questionItems = [
    "What is StreamVibe?",
    "How much does StreamVibe cost?",
    "What content is available on StreamVibe?",
    "How can I watch StreamVibe?",
    "How do I sign up for StreamVibe?",
    "What is the StreamVibe free trial?",
    "How do I contact StreamVibe customer support?",
    "What are the StreamVibe payment methods?",
  ];

  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={<InternalLink linkText="Ask a Question" to="/support" buttonMode={InternalLinkButtonMode.RED_45} />}
    >
      <AccordionGroup columns={2}>
        {questionItems.map((question, index) => (
          <Accordion title={question} titleId={`question-${index}`} name="questions" isOpen={index === 0} key={index}>
            <p>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  );
};
