import { Check } from 'lucide-react';

export const MiddleView = () => {
  return (
    <div className="w-full mt-6  py-4">
      <div className="w-full  flex-col  gap-2 flex justify-center items-center py-10 px-2 ">
        <div className="flex text-center flex-col gap-1">
          <h1 className=" text-xl sm:text-2xl font-sans font-bold ">
            What you can achieve with{' '}
          </h1>
          <p className="text-xl sm:text-2xl font-sans font-bold">
            Anime{' '}
            <span className="bg-blue-300 rounded-md p-1.5 text-neutral-700">
              in just 7 days
            </span>
          </p>
        </div>
        <div className=" mt-12  flex flex-col  w-full p-2">
          <div className=" hidden relative  sm:grid grid-cols-3 w-full gap-2">
            <div
              className="absolute left-0 top-1/2 h-px bg-neutral-400 "
              style={{
                width: 'calc(100% - 56px)',
                clipPath: 'inset(0 0 0 20%)',

                transform: 'translateX(-7%)',
              }}
            />
            <div className="flex justify-center font-sans p-1  items-center z-20">
              <span className="px-6 py-2.5 text-[12px] bg-neutral-600 rounded-4xl  font-semibold text-center text-white">
                Toady
              </span>
            </div>
            <div className="flex justify-center font-semibold font-sans   items-center p-1 z-20">
              <span className="text-center text-[12px] font-semibold font-sans bg-neutral-300  text-white px-6 py-2.5 rounded-4xl">
                Day 3
              </span>
            </div>
            <div className=" font-sans font-medium flex justify-center items-center p-1 z-20">
              <span className="text-center text-[12px] font-semibold font-sans bg-neutral-200 text-white px-6 py-2.5 rounded-4xl">
                Day 7
              </span>
            </div>
          </div>
          <div className="w-full p-2 flex justify-center mt-2">
            <div className="bg-white shadowd-xs rounded-md border border-neutral-100 gap-2   grid grid-cols-1 sm:grid-cols-3 max-w-4xl w-full">
              <div className=" border-b sm:border-r border-neutral-100">
                <div className=" sm:hidden flex justify-center  font-sans p-1  mt-2  items-center ">
                  <span className="px-6 py-2 text-[10px] bg-neutral-600 rounded-4xl  font-semibold text-center text-white">
                    Toady
                  </span>
                </div>
                <h2 className="font-sans text-center font-semibold text-[16px] py-2">
                  Start recording
                </h2>
                <div className="flex flex-col gap-2  justify-start px-2 py-1 mt-2">
                  <p className="flex gap-2  text-neutral-700 text-[12px]  font-medium  text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Record you first meeting in seconds
                  </p>
                  <p className="flex gap-2  text-neutral-700 text-[12px]   font-medium  text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Get AI summmaries and ask questions about your meetings
                  </p>
                  <p className="flex gap-2  text-neutral-700 text-[12px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Connect with your calendar, email, and task apps
                  </p>
                </div>
              </div>
              <div className="  border-b sm:border-r border-neutral-100">
                <div className=" sm:hidden flex justify-center  font-sans p-1 mt-2  items-center ">
                  <span className="px-6 py-2 text-[10px] bg-neutral-300 rounded-4xl  font-semibold text-center text-white">
                    Day-3
                  </span>
                </div>
                <h2 className="font-sans text-center font-semibold text-[16px] py-2">
                  Get organized
                </h2>
                <div className="flex flex-col gap-2  justify-start px-2 py-1 mt-2 ">
                  <p className="flex gap-2 items-center  text-neutral-700 text-[12px]  font-medium  text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Connect Hubspot, Notion, Slack etc.
                  </p>
                  <p className="flex gap-2  items-center text-neutral-700 text-[12px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Auto-create action items and have AI plan them
                  </p>
                  <p className="flex gap-2 items-center text-neutral-700 text-[12px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Search your knowledge base from meetings
                  </p>
                </div>
              </div>
              <div className=" sm:border-r border-neutral-100">
                <div className=" sm:hidden flex justify-center  font-sans p-1  mt-2 items-center">
                  <span className="px-6 py-2 text-[10px] bg-neutral-300 rounded-4xl  font-semibold text-center text-white">
                    Day-7
                  </span>
                </div>
                <h2 className="font-sans text-center font-semibold text-[16px] py-2">
                  Automate your workflows
                </h2>
                <div className="flex flex-col gap-2  justify-start px-2 py-1 mt-2 ">
                  <p className="flex gap-2 items-center  text-neutral-700 text-[12px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Automate 90% of meeting follow-up tasks
                  </p>
                  <p className="flex gap-2  items-center text-neutral-700 text-[12px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Generate meeting preparation 10x faster
                  </p>
                  <p className="flex gap-2 items-center text-neutral-700 text-[12px]  font-medium  text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Win back hours per week, per team member
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  flex justify-center items-center py-8 mt-6 ">
            <button className="border mt-1   px-5 py-2.5 font-sans   bg-blue-500 text-white text-[14px] font-medium rounded-md  shadow-[inset_1px_2px_1px_rgba(30,30,30,0.5)_inset_-1px_-2px_-1px_rgba(30,3030,0.5)]  hover:text-neutral-100   cursor-pointer  transition-transform duration-300 ease-in-out">
              Get start free trial
            </button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
