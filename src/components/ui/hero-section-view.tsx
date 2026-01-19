import { Bot, Check, Earth, Pointer, Star } from "lucide-react";
import Image from "next/image";
import { Marquee } from "./marquee";
import { CompaniesList, Greeatings } from "@/types";

export const HeroSection = () => {
  return (
    <div className="w-full  py-6 mt-20  px-2 ">
      <div className=" w-full gap-6   flex flex-col  justify-start  items-start ">
        <div className="flex flex-col gap-1  mt-4 justify-start items-start">
          <h1 className="font-sans font-bold  text-[24px] md:text-[30px] tracking-tighter leading-8">
            Manage your meetings <br className="block sm:hidden" /> with your
          </h1>
          <p className="bg-blue-100  rounded-[5px] text-[20px]   px-1 py-0.5 font-sans text-base  md:text-[30px] font-bold tracking-tight">
            AI personal assistant
          </p>
        </div>
        <div className="flex gap-2  items-center">
          <button className="font-sans text-[14px] font-semibold border-blue-300 border  px-5 py-2 rounded-lg bg-blue-400 text-white shadow cursor-pointer duration-300 ease-in-out transition-all hover:bg-blue-300 te">
            Get Stated
          </button>
          <button className="flex gap-2 text-[14px] items-center cursor-pointer border rounded-lg px-5 py-2 font-sans font-semibold text-neutral-600 shadow bg-white  border-neutral-100 duration-300 transition-all ease-in-out  hover:text-neutral-400 group">
            {" "}
            <Pointer className="size-3.5 text-neutral-600  group-hover:text-neutral-400 group-hover:-translate-y-0.5 duration-300  ease-in-out transition-all" />{" "}
            Request a demo
          </button>
        </div>
      </div>
      <div className="py-6   w-full mt-2">
        <p className="flex gap-1  tracking-tighter text-[12px]  font-sans items-center text-neutral-500 font-medium">
          <Star className="size-3" />
          Nov 24:ai chat draft events,action items in linear,ui fixes
        </p>
        <div className="mt-2 relative border border-neutral-100 shadow-md w-full rounded-md overflow-hidden flex justify-center items-center">
          <Image
            src={"/images/hero.webp"}
            alt="Hero_Image"
            width={800}
            height={600}
            className="object-contain rounded-md w-full h-auto max-h-[45rem]"
            priority
          />
        </div>
      </div>
      <div className="w-full py-2 mt-2 ">
        <h2 className="text-neutral-500 font-semibold font-sans text-xs ">
          Trusted by teams at
        </h2>
        <div className=" relative w-full  overflow-hidden">
          <Marquee reverse={false}>
            {CompaniesList.map((comp) => (
              <div
                key={comp.name}
                className="flex gap-1 items-center font-sans font-medium text-[16px] px-2 py-0.5 text-neutral-700"
              >
                <span>{comp.icon}</span>
                <p className="italic">{comp.name}</p>
              </div>
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
        <Image
          src={"/images/logos.webp"}
          width={270}
          height={270}
          alt="log"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-2  justify-start items-start ">
        <div className=" w-full flex  justify-start md:leading-[3rem]  text-neutral-800  leading-8 tracking-tighter px-0.5">
          <h1 className=" font-sans text-[26px] sm:text-[30px] lg:text-[40px] font-bold tracking-tight   w-full">
            <span className="text-neutral-500 bg-neutral-500/10 rounded-[6px] p-0.5">
              Within 47 seconds:{" "}
            </span>
            <br className="block sm:hidden" />
            Share summary.
            <p className=" text-start font-sans font-bold text-[26px] sm:text-[30px] lg:text-[40px] tracking-tighter  leading-8 sm:leading-12">
              Keep CRM updated.
              <br className=" block sm:hidden" />
              Plan action items.
              <br className=" block xs:hidden" />
              Schedule next meeting
            </p>
          </h1>
        </div>
        <button className="border mt-1  max-w-[8rem] w-full px-5 py-2.5 font-sans border-blue-400  bg-blue-500 text-white text-[14px] font-medium rounded-md  shadow-[inset_1px_2px_1px_rgba(30,30,30,0.5)_inset_-1px_-2px_-1px_rgba(30,3030,0.5)] hover:bg-blue-400 hover:text-neutral-100   cursor-pointer  transition-transform duration-300 ease-in-out">
          Get started
        </button>{" "}
      </div>
      <div className="w-full py-16 ">
        <div className="flex flex-col gap-2 ">
          <h3 className="font-sans font-semibold text-green-500 text-base">
            Meeting Notes
          </h3>
          <p className="text-neutral-950 font-sans font-bold  text-xl  sm:text-2xl lg:text-4xl  tracking-tight">
            Summarize any meeting, without a bot
          </p>
          <div className="flex  mt-2  items-center">
            <span className="text-neutral-900 font-semibold font-sans text-[18px]">
              Replaces:
            </span>
            <div className="ml-1 flex gap-0.5  items-center  text-neutral-500 text-[14px] font-sans font-medium">
              <Image
                src="/images/fireflies.webp"
                width={18}
                height={18}
                alt="Fireflies"
                className="object-cover grayscale"
              />
              <p>Fireflies</p>
              {","}
              <Image
                src="/images/otter.webp"
                width={18}
                height={18}
                alt="Fireflies"
                className="object-cover grayscale"
              />
              <p>Otter</p>
              {","}
              <Image
                src="/images/fathom.webp"
                width={18}
                height={18}
                alt="Fireflies"
                className="object-cover grayscale"
              />
              <p>Fathom</p>
            </div>
          </div>
        </div>
        <div className=" w-full  py-6 mt-2 ">
          <h2 className="text-neutral-900 font-sans font-semibold text-xl">
            Why Amie ?
          </h2>
          <div className="flex flex-col gap-6 mt-2">
            <p className="text-neutral-500   font-sans text-start text-[15px] leading-normal  font-medium  tracking-tight  ">
              There are 27 meeting notes apps out there. If summaries is all you
              need, any of them will do. Many of them will even be cheaper.
            </p>
            <p className="text-neutral-500  tracking-tight  font-sans  font-medium text-[15px]">
              If you want to use them to become better at your job, you&apos;ll
              need Amie. An app that knows your conversations, should be able to
              take over your busy work.
            </p>
          </div>
        </div>
      </div>
      <div className="border border-r-0 border-l-0 border-b-0 border-t-neutral-100 rounded-md  grid  grid-cols-1 lg:grid-cols-2 gap-2   w-full   ">
        <div className=" w-full py-1.5">
          <div className="flex items-center  justify-between px-2 ">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <div className="  flex items-center ">
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[4px]"
              >
                <rect width="32" height="32" rx="8" fill="purple" />
                <g>
                  <rect
                    x="14"
                    y="2"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#36C5F0"
                  />
                  <rect
                    x="2"
                    y="14"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#2EB67D"
                  />
                  <rect
                    x="16"
                    y="18"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#ECB22E"
                  />
                  <rect
                    x="18"
                    y="16"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#E01E5A"
                  />
                  <rect
                    x="22"
                    y="2"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#E01E5A"
                  />
                  <rect
                    x="2"
                    y="22"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#36C5F0"
                  />
                  <rect
                    x="14"
                    y="18"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#2EB67D"
                  />
                  <rect
                    x="18"
                    y="14"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#ECB22E"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className=" py-4 ">
            <div className="flex gap-2">
              <div className="rounded-full relative overflow-hidden flex justify-center items-center">
                <Image
                  src="/images/quentin.webp"
                  width={28}
                  height={24}
                  alt="Quentin di"
                  priority
                  className="rounded-full object-contain h-auto "
                />
              </div>
              <div className="flex gap-1 items-center">
                <h1 className="text-neutral-950 font-sans   tracking-tight font-semibold  text-[15px] sm:text-[18px]">
                  Quentin di Silvestro
                </h1>
                {","}
                <span className="text-neutral-500 mt-0.5  font-sans font-semibold text-[12px]">
                  GTM Lead beam.ai
                </span>
              </div>
            </div>
            <p className=" mt-4 text-neutral-500 font-sans text-[14px]  w-full l font-medium  text-start ">
              We use Amie daily, and without it ,we&apos;d be least 50% less
              productive .It helps me to follow-up faster, which directly
              translates into more revenue cloesd.
            </p>
          </div>
        </div>

        <div className=" w-full py-1.5">
          <div className="flex items-center  justify-between px-2 ">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <div className="  flex items-center ">
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[4px]"
              >
                <rect width="32" height="32" rx="8" fill="purple" />
                <g>
                  <rect
                    x="14"
                    y="2"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#36C5F0"
                  />
                  <rect
                    x="2"
                    y="14"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#2EB67D"
                  />
                  <rect
                    x="16"
                    y="18"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#ECB22E"
                  />
                  <rect
                    x="18"
                    y="16"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#E01E5A"
                  />
                  <rect
                    x="22"
                    y="2"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#E01E5A"
                  />
                  <rect
                    x="2"
                    y="22"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#36C5F0"
                  />
                  <rect
                    x="14"
                    y="18"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#2EB67D"
                  />
                  <rect
                    x="18"
                    y="14"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#ECB22E"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className=" py-4 ">
            <div className="flex gap-2">
              <div className="overflow-hidden relative rounded-full flex justify-center items-center">
                <Image
                  src="/images/arnaud.webp"
                  width={28}
                  height={24}
                  alt="Arnaud Mun"
                  className="rounded-full object-contain h-auto "
                />
              </div>
              <div className="flex gap-1 items-center w-full ">
                <h1 className="text-neutral-950 font-sans   tracking-tight font-semibold  text-[15px] sm:text-[18px]">
                  Arnaud Mun
                </h1>
                {","}
                <span className="text-neutral-500 mt-0.5  font-sans font-semibold text-[12px]">
                  Co-founder dev-id
                </span>
              </div>
            </div>
            <p className=" mt-4 w-full  text-neutral-500   text-[14px] font-sans font-medium  text-start ">
              Because of Amie we understand our customer&apos;s projects better:
              It summarizes all our meetings and we ask AI questions to speed up
              our workflow. There is not tool better than Amie to save time. And
              that is priceless
            </p>
          </div>
        </div>
      </div>
      <div className=" py-4  mt-6">
        <h1 className="text-[20px]  font-sans font-semibold text-neutral-950">
          Summaries & Actions Items
        </h1>
        <div className="flex  flex-col gap-10 ">
          <p className="mt-1.5 text-neutral-500 font-sans font-medium leading-normal text-[15px]">
            When meetings go undocumented, progress rarely happens. Topics
            resurface week after week. But every conversation should move your
            team forward. AI summaries often miss the mark because they
            don&asop;t understand your business. Ours do, and turn every meeting
            into clear next steps.
          </p>
          <p className="text-neutral-500 font-sans font-medium leading-normal text-[15px]">
            The common problem with AI summaries is that they don&asop;t know
            the context of your meeting and company. We ensure great summaries
            in two ways.
          </p>
        </div>
        <div className="w-full  rounded-md mt-2 ">
          <div className=" relative border border-neutral-100 shadow-md w-full rounded-md  flex justify-center items-center backdrop-blur-md bg-[#719cc2]/90 overflow-hidden  ">
            <div className=" hidden md:grid grid-cols-3 z-50  bg-[#5681a6] backdrop-blur-md   text-white rounded-t-md gap-2 items-center justify-between   h-10 absolute top-0 left-0 w-full">
              <div className="flex gap-1 items-center justify-center border-r border-neutral-600/60  h-full">
                <Bot className="size-5" />
                <span className="font-sans font-semibold text-base ">
                  No bots in calls
                </span>
              </div>
              <div className="flex gap-1 items-center justify-center border-r border-neutral-600/60  h-full ">
                <Bot className="size-5" />
                <span className="font-sans font-semibold text-base ">
                  Summary
                </span>
              </div>
              <div className="flex gap-1 items-center justify-center h-full">
                <Earth className="size-5" />
                <span className="font-sans font-semibold text-base">
                  Action items
                </span>
              </div>
            </div>
            <Image
              src={"/images/notes.webp"}
              alt="Note"
              width={800}
              height={600}
              className="object-contain  mt-2 md:mt-6 rounded-md w-full h-auto max-h-[45rem]"
              priority
            />
          </div>
        </div>
        <div className="py-6">
          <div className=" relative w-full  overflow-hidden">
            <Marquee reverse={false}>
              {Greeatings.map((comp) => (
                <div
                  key={comp.name}
                  className="flex gap-1 items-center font-sans font-light text-[20px] px-2 py-0.5 text-neutral-700"
                >
                  <p className="italic">{comp.name}</p>
                </div>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
          <div className="w-full   flex justify-center items-center py-4 px-2">
            <p className="text-neutral-400 font-sans font-medium text-[13px]">
              We speak <span className="underline">17 languages </span>really
              well .And <span className="underline">82 more </span> without
              speaker labeling
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-3">
        <div className="p-2">
          <h3 className="font-sans font-bold text-[18px]">No more bot in your calls</h3>
          <p className="mt-2 text-neutral-400  text-[16px]  font-sans text-start">When you record with Amie,you control everything from your notch. Without the weird bots joining, we  can offer a better experience:</p>
        </div>
        <div className="mt-2 flex flex-col gap-4 py-4">
          <div className="flex gap-4 justify-start items-center">
          <div className="w-5 h-5 rounded-full  bg-green-200 flex justify-center items-center border border-green-200">
          <Check className="text-green-400 size-3.5" />
          </div>
          <p className="text-neutral-500  text-[16px]  font-sans  text-start">Pasue recording to speak off the record</p>
          </div>
          <div className="flex gap-4 justify-start items-center">
          <div className="w-5 h-5 rounded-full  bg-green-200 flex justify-center items-center border border-green-200">
          <Check className="text-green-400 size-3.5" />
          </div>
          <p className="text-neutral-500  text-[16px]  font-sans  text-start">Stop automatically if microphone is unused</p>
          </div>
          <div className="flex gap-4 justify-start items-center">
          <div className="w-5 h-5 rounded-full  bg-green-200 flex justify-center items-center border border-green-200">
          <Check className="text-green-400 size-3.5" />
          </div>
          <p className="text-neutral-500  text-[16px]  font-sans  text-start">Split recordings if you&apos;re staying in the same room</p>
          </div>
          <div className="flex gap-4 justify-start items-center">
          <div className="w-5 h-5 rounded-full  bg-green-200 flex justify-center items-center border border-green-200">
          <Check className="text-green-400 size-3.5" />
          </div>
          <p className="text-neutral-500  text-[16px]  font-sans  text-start">Separates speakers and remebers their names</p>
          </div>
        </div>
        <div className="p-3">
          Video part HeroSection
          <div className="w-full  px-5 py-2 mt-4  relative">
            <div className=" absolute left-0 inset-0 h-auto w-1.5 bg-green-400  border border-green-400">

            </div>
            <p className="text-neutral-800 font-sans font-medium text-start text-[16px]">
            The notch-like overlay UI is super neat and out of the way, the transcription works  great and is multilingual which is super powerful. The automatic todo suggestions that can just add to my tsaks inone click is killer feature.
            </p>
            <span className="text-neutral-400 font-sans text-[14px] ">Gabriel Saillard. Software Enginner</span>
          </div>
        </div>
        <div>
        <div className="p-2">
          <h1 className="text-neutral-950 font-sans font-semibold text-[20px] text-start">Works wherever you have meetings</h1>
          <p className="text-neutral-400  font-sans text-start text-[16px]">
           Recording works or calls across all provides. Whether you use zoom ,Google Meet ,Slack, Huddle ,or Microsoft Teams, we&apos;ll get the notes
            </p>
          <div className="sm:p-4 p-2  mt-2">
             <div className=" grid   grid-cols-2  sm:grid-cols-4 bg-white shadow-xs w-full border border-neutral-100 rounded-md">
               <div className=" flex justify-center items-center  border border-neutral-100">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
               <circle cx="24" cy="24" r="20" fill="#2196f3"></circle><path fill="#fff" d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"></path><polygon fill="#fff" points="37,31 31,27 31,21 37,17"></polygon>
               </svg>
               </div>
               <div className=" flex justify-center items-center  border border-neutral-100">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
               <rect width="16" height="16" x="12" y="16" fill="#fff" transform="rotate(-90 20 24)"></rect><polygon fill="#1e88e5" points="3,17 3,31 8,32 13,31 13,17 8,16"></polygon><path fill="#4caf50" d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"></path><path fill="#fbc02d" d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"></path><path fill="#1565c0" d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"></path><polygon fill="#e53935" points="13,7 13,17 3,17"></polygon><polygon fill="#2e7d32" points="38,24 37,32.45 27,24 37,15.55"></polygon><path fill="#4caf50" d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"></path>
              </svg>
               </div>
               <div className=" flex justify-center items-center  border border-neutral-100">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
               <path fill="#5c6bc0" d="M41.5 13A3.5 3.5 0 1 0 41.5 20 3.5 3.5 0 1 0 41.5 13zM4 40l23 4V4L4 8V40z"></path><path fill="#fff" d="M21 16.27L21 19 17.01 19.18 16.99 31.04 14.01 30.95 14.01 19.29 10 19.45 10 16.94z"></path><path fill="#5c6bc0" d="M36 14c0 2.21-1.79 4-4 4-1.2 0-2.27-.53-3-1.36v-5.28c.73-.83 1.8-1.36 3-1.36C34.21 10 36 11.79 36 14zM38 23v11c0 0 1.567 0 3.5 0 1.762 0 3.205-1.306 3.45-3H45v-8H38zM29 20v17c0 0 1.567 0 3.5 0 1.762 0 3.205-1.306 3.45-3H36V20H29z"></path>
               </svg>
                </div>
                <div className=" flex justify-center items-center  border border-neutral-100">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                <path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"></path><path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"></path><path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"></path><path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"></path><path fill="#e91e63" d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"></path><path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"></path><path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"></path><path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"></path>
                </svg>
                  </div>
             </div>
          </div>
   
        </div>
        </div>
      </div>
    </div>
  );
};
