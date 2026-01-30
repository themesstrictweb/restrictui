import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/default/ui/accordion';

export default function AccordionDemo() {
  return (
    <Accordion type="single" variant="outline" collapsible className="w-full lg:w-[75%]">
      <AccordionItem value="restrictui-1">
        <AccordionTrigger>What is ReStrictUI?</AccordionTrigger>
        <AccordionContent>ReStrictUI provides ready-to-use CRUD examples for developers.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="restrictui-2">
        <AccordionTrigger>Who benefits from ReStrictUI?</AccordionTrigger>
        <AccordionContent>
          Developers looking to save time with pre-built CRUD solutions.
          <Accordion type="single" variant="outline" collapsible className="mt-4">
            <AccordionItem value="nested-1">
              <AccordionTrigger>How does ReStrictUI save time?</AccordionTrigger>
              <AccordionContent>
                By providing ready-to-use examples that developers can plug into their projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nested-2">
              <AccordionTrigger>What makes ReStrictUI unique?</AccordionTrigger>
              <AccordionContent>
                ReStrictUI offers optimized solutions that adapt to your backend with minimal setup.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="restrictui-3">
        <AccordionTrigger>Why choose ReStrictUI?</AccordionTrigger>
        <AccordionContent>
          ReStrictUI simplifies development with plug-and-play CRUDs.
          <Accordion type="single" variant="outline" collapsible className="mt-4">
            <AccordionItem value="nested-3">
              <AccordionTrigger>What types of CRUDs are included?</AccordionTrigger>
              <AccordionContent>Examples include user management, product catalogs, and more.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="nested-4">
              <AccordionTrigger>Can I customize ReStrictUI CRUDs?</AccordionTrigger>
              <AccordionContent>
                Yes! ReStrictUI CRUDs are fully customizable to suit your project&apos;s needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
