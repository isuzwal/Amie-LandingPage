import { Pointer, Star } from "lucide-react";
import Image from "next/image";

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
    </div>
  );
};
