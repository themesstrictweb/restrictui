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
        <AccordionPanel>Developers looking to save time with pre-built CRUD solutions.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="restrictui-3">
        <AccordionHeader>
          <AccordionTrigger>Why choose ReStrictUI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>ReStrictUI simplifies development with plug-and-play CRUDs.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
