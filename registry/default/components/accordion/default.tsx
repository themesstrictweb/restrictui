import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/default/ui/accordion';

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full lg:w-[75%]">
      <AccordionItem value="restrictui-1">
        <AccordionTrigger>What is ReStrictUI?</AccordionTrigger>
        <AccordionContent>ReStrictUI provides ready-to-use CRUD examples for developers.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="restrictui-2">
        <AccordionTrigger>Who benefits from ReStrictUI?</AccordionTrigger>
        <AccordionContent>Developers looking to save time with pre-built CRUD solutions.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="restrictui-3">
        <AccordionTrigger>Why choose ReStrictUI?</AccordionTrigger>
        <AccordionContent>ReStrictUI simplifies development with plug-and-play CRUDs.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
