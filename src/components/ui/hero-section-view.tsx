import { Pointer, Star } from "lucide-react";
import Image from "next/image";
import { Marquee } from "./marquee";
import { CompaniesList } from "@/types";

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
        <div className=" w-full flex  justify-start md:leading-[3rem]  text-neutral-800  leading-10 tracking-tighter px-1">
          <h1 className=" font-sans text-[24px] md:text-[40px] font-bold tracking-tight">
            <span className="text-neutral-500 bg-neutral-500/10 rounded-[6px] p-0.5">
              Within 47 seconds:{" "}
            </span>
            <br className="md:hidden block" />
            Share summary.
            <p className=" text-start font-sans font-bold text-[24px] md:text-[40px] tracking-tighter">
              Keep CRM updated.
              <br className="md:hidden block" />
              Plan action items.
              <br className="block md:hidden" />
              Schedule next meeting
            </p>
          </h1>
        </div>
        <button className="border mt-1  max-w-[8rem] w-full px-5 py-2.5 font-sans border-blue-400  bg-blue-500 text-white text-[14px] font-medium rounded-md  shadow-[inset_1px_2px_1px_rgba(30,30,30,0.5)_inset_-1px_-2px_-1px_rgba(30,3030,0.5)] hover:bg-blue-400 hover:text-neutral-100   cursor-pointer  transition-transform duration-300 ease-in-out">
          Get started
        </button>{" "}
      </div>
    </div>
  );
};
