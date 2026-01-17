import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center  py-6 border-t border-gray-200 bg-white text-gray-700 text-sm">
      <div className=" w-full    justify-between  mx-auto px-2 grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-3  justify-center flex">
          <ul className="space-y-2 text-neutral-950  text-[16px] font-sans">
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Our Story</Link>
            </li>
            <li>
              <Link href="/">Calendar</Link>
            </li>
            <li>
              <Link href="/">Changelog</Link>
            </li>
            <li>
              <Link href="/">Tools</Link>
            </li>
            <li>
              <Link href="/">Routines</Link>
            </li>
            <li>
              <Link href="/">AI Response Generator</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3  flex justify-center">
          <ul className="space-y-2  text-neutral-950 font-sans text-[16px]">
            <li>
              <Link href="/" className="">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                Download
              </Link>
            </li>
            <li>Affiliates</li>
            <li>
              <Link href="/" className="">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                Art
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-1 col-span-2 lg:col-span-1 flex justify-center">
          <ul className="space-y-2 flex lg:flex-col  gap-2  text-neutral-950 font-sans  text-[16px]">
            <li>
              <a href="https://linkedin.com/company/amie-so" className="">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://instagram.com/amie.so" className="">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com/amie_so" className="">
                x.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
