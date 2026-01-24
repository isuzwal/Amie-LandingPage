import { Bot, Check, Earth, ScrollText } from 'lucide-react';
import Image from 'next/image';

export const AchieveView = () => {
  return (
    <div className="w-full mt-6  py-4 ">
      <div className="w-full  flex-col  gap-2 flex justify-center items-center py-10 px-2 ">
        <div className="flex text-center flex-col gap-1">
          <h1 className=" text-xl sm:text-3xl font-sans font-bold ">
            What you can achieve with{' '}
          </h1>
          <p className="text-xl sm:text-3xl font-sans font-bold">
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
            <div className="bg-white  shadow-xs rounded-md border border-neutral-100 gap-2   grid grid-cols-1 sm:grid-cols-3 max-w-5xl w-full">
              <div className=" border-b sm:border-r border-neutral-100">
                <div className=" sm:hidden flex justify-center  font-sans p-1  mt-2  items-center ">
                  <span className="px-6 py-2 text-[12px] bg-neutral-600 rounded-4xl  font-semibold text-center text-white">
                    Toady
                  </span>
                </div>
                <h2 className="font-sans text-center font-bold text-[20px] py-4 px-2 ">
                  Start recording
                </h2>
                <div className="flex flex-col gap-2  justify-start px-2 py-1 mt-2">
                  <p className="flex gap-2  text-neutral-700 text-[16px]  font-medium  text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Record you first meeting in seconds
                  </p>
                  <p className="flex gap-2  text-neutral-700 text-[16px]   font-medium  text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Get AI summmaries and ask questions about your meetings
                  </p>
                  <p className="flex gap-2  text-neutral-700 text-[16px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Connect with your calendar, email, and task apps
                  </p>
                </div>
              </div>
              <div className="  border-b sm:border-r border-neutral-100">
                <div className=" sm:hidden flex justify-center  font-sans p-1 mt-2  items-center ">
                  <span className="px-6 py-2 text-[12px] bg-neutral-300 rounded-4xl  font-semibold text-center text-white">
                    Day-3
                  </span>
                </div>
                <h2 className="font-sans text-center font-bold text-[20px] py-4 px-2 ">
                  Get organized
                </h2>
                <div className="flex flex-col gap-2  justify-start px-2 py-1 mt-2 ">
                  <p className="flex gap-2 items-center  text-neutral-700 text-[16px]  font-medium  text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Connect Hubspot, Notion, Slack etc.
                  </p>
                  <p className="flex gap-2  items-center text-neutral-700 text-[16px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Auto-create action items and have AI plan them
                  </p>
                  <p className="flex gap-2 items-center text-neutral-700 text-[16px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Search your knowledge base from meetings
                  </p>
                </div>
              </div>
              <div className=" sm:border-r border-neutral-100">
                <div className=" sm:hidden flex justify-center  font-sans p-1  mt-2 items-center">
                  <span className="px-6 py-2 text-[12px] bg-neutral-300 rounded-4xl  font-semibold text-center text-white">
                    Day-7
                  </span>
                </div>
                <h2 className="font-sans text-center font-bold text-[20px] py-4 px-2">
                  Automate your workflows
                </h2>
                <div className="flex flex-col gap-2  justify-start px-2 py-1 mt-2 ">
                  <p className="flex gap-2 items-center  text-neutral-700 text-[16px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Automate 90% of meeting follow-up tasks
                  </p>
                  <p className="flex gap-2  items-center text-neutral-700 text-[16px]  font-medium   text-start font-sans">
                    <span>
                      <Check className="size-3 text-green-400" />
                    </span>
                    Generate meeting preparation 10x faster
                  </p>
                  <p className="flex gap-2 items-center text-neutral-700 text-[16px]  font-medium  text-start font-sans">
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
      <div className="w-full  py-8 px-1">
        <div className="flex flex-col gap-1 justify-start items-start">
          <span className="text-blue-500 00 font-sans font-bold text-[14px]">
            AI Chat
          </span>
          <p className="font-sans font-bold  text-2xl  sm:text-3xl lg:text-5xl text-start">
            Ask Amie to do or find anything
          </p>
        </div>
        <div className="w-full flex  gap-1 justify-start items-start mt-4  py-4 px-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="none"
            className="sm:block hidden"
          >
            <path
              fill="rgba(163,163,163,0.6)"
              d="M30.632 33.25c4.345 0 7.868-3.526 7.868-7.875 0-4.35-3.523-7.875-7.868-7.875-1.085 0-2.12.22-3.06.618.187-.343.39-.666.608-.974 1.374-1.945 3.406-3.427 6.044-5.188a1.751 1.751 0 0 0 .485-2.427 1.747 1.747 0 0 0-2.424-.485c-2.606 1.74-5.164 3.538-6.96 6.078-1.845 2.611-2.787 5.85-2.56 10.301.026 4.327 3.538 7.827 7.867 7.827ZM11.4 33.25c4.346 0 7.868-3.526 7.868-7.875 0-4.35-3.522-7.875-7.867-7.875-1.086 0-2.12.22-3.061.618.187-.343.391-.666.609-.974 1.374-1.945 3.405-3.427 6.044-5.188a1.751 1.751 0 0 0 .485-2.427 1.747 1.747 0 0 0-2.425-.485c-2.606 1.74-5.164 3.538-6.959 6.078-1.845 2.611-2.788 5.85-2.56 10.301.025 4.327 3.538 7.827 7.867 7.827Z"
            ></path>
          </svg>
          <div className="flex flex-col gap-1 justify-start">
            <div className="bg-neutral-300/60 rounded-lg max-w-96  w-full px-3 py-4 border-neutral-200/60 border">
              <p className=" font-sans font-medium  text-[14px]  text-start text-neutral-700">
                It&apos;s like ChatGPT, but it has full context about my company
                and job. it&apos;s integrated with Gcal and Gmail. So no more
                copy+pasting
              </p>
            </div>
            <p className=" font-medium px-1 text-neutral-600 flex items-center font-sans text-[12px] text-start">
              Dennis Muller Founder,Amie
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pb-8  p-4">
        <div className=" max-w-xl w-full  py-2  px-8   h-auto">
          <Image
            src={'/images/chat.webp'}
            width={300}
            height={800}
            alt="chat"
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="w-full flex justify-center items-center ">
          <div className="max-w-xl  w-full rounded-md bg-neutral-200/50 border border-neutral-200 overflow-hidden  shadow">
            <div className="flex gap-1 justify-start items-end p-1.5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <linearGradient
                      id="mailGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stop-color="#4DA3FF" />
                      <stop offset="100%" stop-color="#0A84FF" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="4"
                    y="8"
                    width="40"
                    height="32"
                    rx="6"
                    fill="url(#mailGradient)"
                  />

                  <path
                    d="M6 12l18 14 18-14"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[10px]  font-bold font-sans text-neutral-700">
                Email
              </p>
            </div>
            <div className="bg-white border-t border-neutral-200 rounded-t-lg">
              <div className="flex gap-3 justify-start items-center py-3 px-1.5">
                <span className="text-neutral-500  font-medium text-[12px] font-sans">
                  From
                </span>
                <p className="text-neutral-700 font-sans font-medium text-[13px]">
                  Nish Budhraja
                </p>
              </div>
              <div className="flex gap-3 justify-start border-t border-neutral-100 items-center py-3 px-1.5">
                <span className="text-neutral-500   text-[12px]  font-medium font-sans">
                  Subject
                </span>
                <p className="text-neutral-700   font-sans text-[13px] font-medium">
                  Feedback - Loving the new Amie!
                </p>
              </div>
              <div className="border-t border-neutral-100  flex  flex-col gap-2 justify-start py-3 px-2">
                <p className="text-neutral-700 font-sans font-medium text-start text-[12.5px]">
                  You absolutely cooked - loving the new Amie. Was an instant
                  upgrade to Business for me. I had churned last year but you
                  won me back. With tasks / calendar / meeting recordings, you
                  replaced Superlist, Notion Calendar, and Granola for me.
                </p>
                <p className="font-semibold text-black font-sans text-start text-[12.5px]">
                  All-in-one solution has enabled some pretty magical workflows
                  for me:
                </p>
                <div className="flex flex-col gap-2 justify-start">
                  <p className="font-medium text-neutral-700 font-sans text-start text-[12.5px]">
                    1. Record meeting {'-->'} follow up tasks logged {'-->'} add
                    tasks to mylist {'-->'} add to calendar
                  </p>
                  <p className="text-[12.5px] font-medium text-neutral-700    font-sans text-start">
                    2. Having meeting {'-->'} have AI assistant write follow up
                    eamil {'-->'} AI assistant has all of the context needed
                    {'-->'} writes amzaing eamil {'-->'} send directly from Amie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 py-10 w-full ">
        <div className="flex  flex-col  justify-start w-full  p-1.5 ">
          <h2 className="text-black font-sans  font-bold text-[20px]">
            Chat Actions
          </h2>
          <p className=" text-[14px] text-neutral-500 font-sans  py-2 text-start ">
            Saving you time is our priority. And chat actions is the way we
            achieve that. You can ask Amie to draft emails, create or update
            meetings, rewrite summaries, create mind maps from summaries, and
            more.
          </p>
        </div>
        <p className=" px-2 w-full text-start text-neutral-500 font-sans text-[14px] mt-4">
          <span className="bg-blue-300/50 rounded-[6px] text-neutral-600  p-1">
            One of my favorites use cases:
          </span>{' '}
          &quot;I&apos;m sick, move everthing to Thursday.&quot; and Amie will
          do it for you
        </p>
        <div className="w-full  rounded-md mt-6 ">
          <div className=" relative border border-neutral-100 shadow-md w-full rounded-md  flex justify-center items-center backdrop-blur-md bg-[#719cc2]/90 overflow-hidden  ">
            <div className=" hidden md:grid grid-cols-3 z-50  bg-[#5681a6] backdrop-blur-md   text-white rounded-t-md gap-2 items-center justify-between   h-10 absolute top-0 left-0 w-full">
              <div className="flex gap-2 items-center justify-center border-r border-neutral-600/60  h-full">
                <Bot className="size-4.5" />
                <span className="font-sans font-semibold text-[16px] ">
                  Send follow-up email
                </span>
              </div>
              <div className="flex gap-2 items-center justify-center border-r border-neutral-600/60  h-full ">
                <ScrollText className="size-4.5" />
                <span className="font-sans font-semibold text-[16px] ">
                  Combine actions
                </span>
              </div>
              <div className="flex gap-2 items-center justify-center h-full">
                <Earth className="size-4.5" />
                <span className="font-sans font-semibold text-[16px]">
                  Create Linear ticket
                </span>
              </div>
            </div>
            <Image
              src={'/images/chat-actions.webp'}
              alt="chat-actions"
              width={800}
              height={600}
              className="object-contain  mt-2 md:mt-8 rounded-md w-full h-auto max-h-[45rem]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
