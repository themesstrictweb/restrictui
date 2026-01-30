import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/registry/default/ui/base-accordion';

export default function Component() {
  return (
    <Accordion variant="outline" openMultiple={false} className="w-full lg:w-[75%]">
      <AccordionItem value="restrictui-1">
        <AccordionHeader>
          <AccordionTrigger>What is ReStrictUI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>ReStrictUI provides ready-to-use CRUD examples for developers.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="restrictui-2">
        <AccordionHeader>
          <AccordionTrigger>Who benefits from ReStrictUI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Developers looking to save time with pre-built CRUD solutions.
          <Accordion variant="outline" openMultiple={false} className="mt-4">
            <AccordionItem value="nested-1">
              <AccordionHeader>
                <AccordionTrigger>How does ReStrictUI save time?</AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>
                By providing ready-to-use examples that developers can plug into their projects.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="nested-2">
              <AccordionHeader>
                <AccordionTrigger>What makes ReStrictUI unique?</AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>
                ReStrictUI offers optimized solutions that adapt to your backend with minimal setup.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="restrictui-3">
        <AccordionHeader>
          <AccordionTrigger>Why choose ReStrictUI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          ReStrictUI simplifies development with plug-and-play CRUDs.
          <Accordion variant="outline" openMultiple={false} className="mt-4">
            <AccordionItem value="nested-3">
              <AccordionHeader>
                <AccordionTrigger>What types of CRUDs are included?</AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>Examples include user management, product catalogs, and more.</AccordionPanel>
            </AccordionItem>
            <AccordionItem value="nested-4">
              <AccordionHeader>
                <AccordionTrigger>Can I customize ReStrictUI CRUDs?</AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>Yes! ReStrictUI CRUDs are fully customizable to suit your project&apos;s needs.</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
