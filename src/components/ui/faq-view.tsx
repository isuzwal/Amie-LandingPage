import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

export const FAQ = () => {
  return (
    <div className=" py-10 sm:py-20  mt-8 sm:mt-16  w-full">
      <div className="flex flex-col gap-2  w-full justify-center items-center ">
        <h1 className="text-neutral-950 font-bold font-sans text-xl sm:text-3xl">
          FAQs
        </h1>
        <p className="text-neutral-500 font-sans font-medium text-center  text-[16px] px-2 ">
          If you can&apos;t find the answer to your question below, email us at{' '}
          <span className="text-black  cursor-pointer text-[15px] font-semibold font-sans underline">
            care@amie.so
          </span>
        </p>
      </div>
      <div className="px-4 mt-6 py-6 max-w-4xl mx-auto w-full ">
        <div className="px-2 bg-white border-neutral-200 border rounded-md shadow-xs mt-2 ">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full "
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[16px] font-sans font-semibold ">
                Can I use Amie at my company ?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  Yes,we offer centralized billing for companies. You can just
                  invites your colleagues to your workspace. If you want onboard
                  +10 members, send an email to dennis@amies.so for a personal
                  demo
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[16px] font-sans font-semibold ">
                I&apos; already uesd my trial.Can I get another one ?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  Yes, We&apos;ve rest the trial on April 07. You can just start
                  a trial again
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[16px] font-sans font-semibold ">
                Where do I connect more accounts ?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  In Setting {' >'} Connections, you can connects as many
                  Google-based accounts as you like .iCloud +Outlook are coming
                  some time in the future
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[16px] font-sans font-semibold ">
                How does Amie protect my privacy ?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  When you open Amie, we request your events directly from the
                  Google API. Generally we avoid storing information when
                  possible. We do store your contacts to offer additional
                  features. We plan to add end-to-end encryption. If you have
                  more specific questions, email us at care@amie.so. Yes,we
                  offer centralized billing for companies. You can just invites
                  your colleagues to your workspace. If you want onboard +10
                  members, send an email to dennis@amies.so for a personal demo
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[16px] font-sans font-semibold ">
                When can I use Amie on my device?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  Right now we support Google calendar accounts on macOS,
                  Windows and iPhone. Outlook can be connected through our Apple
                  Calendar integration.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-[16px] font-sans font-semibold ">
                Where can I send a feature request or report a bug?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  In Settings {'>'} Contact us. If you&apso;re not yet using the
                  product but want to request a feature you can email{' '}
                  <span className="underline text-neutral-900 cursor-pointer">
                    care@amie.so.
                  </span>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-[16px] font-sans font-semibold ">
                Which video call providers do you support?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  We support every video call provider since we don&apos;t rely
                  on a recorder bot.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
