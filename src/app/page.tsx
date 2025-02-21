import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full min-h-screen flex flex-col select-none overflow-x-hidden space-y-6 align-center items-center justify-start relative">
      <div className="text-neutral-100 select-none flex flex-col items-center gap-6 ">
        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
          <span>
            <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
          <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-purple-700/40"></span>
          <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
            <span>✨</span>
            Social Media Integrations
          </span>
        </button>

        <div className="text-5xl font-bold flex text-shadow">
          <span>
            All-in-one
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 10" fill="none">
              <defs>
                <linearGradient id="paint0_linear" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8e44ad', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#9b59b6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.53706 5.93802C48.6133 0.705111 96.4856 3.5995 143.68 2.65731C174.888 2.02692 206.098 0.508531 237.283 0.000152042C238.218 -0.0134047 238.987 0.881315 239 2.00653C239.012 3.13174 238.264 4.05362 237.329 4.06718C206.148 4.57556 174.941 6.09395 143.737 6.72434C96.6267 7.66653 48.8448 4.76535 1.85321 9.99148C0.921631 10.0932 0.0973511 9.273 0.00701904 8.15457C-0.0776672 7.03613 0.61113 6.04648 1.53706 5.93802Z" fill="url(#paint0_linear)"></path>
            </svg>
          </span>
          &nbsp;
          <span>Solutions for your Server</span>
        </div>
        <span className="max-w-[620px] text-center text-shadow">
          More than 2 servers of all sizes use Zylo to protect their server and increase user engagement. Try it out!
        </span>

        <div className="flex gap-4 mt-8">
          <button className="bg-[#6a2c8460] font-medium hover:bg-[#915ea690] transition-all ease-in-out duration-200 py-2 px-4 rounded-full border border-[#8e44ad]">
            <span className="flex items-center whitespace-pre-wrap text-center text-sm leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Get started
              <ChevronRight className="bg-[#8e44ad] rounded-full w-6 h-6 p-1 ml-2"/>
            </span>
          </button>
          <ShimmerButton className="shadow-2xl py-2" shimmerColor="#8e44ad" shimmerSize="2px" shimmerDuration="1.5s" background="rgba(24, 8, 31, 1)">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Learn more
            </span>
          </ShimmerButton>
        </div>
      </div>

        <div className="w-full flex justify-center align-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#10111c] to-transparent z-10"></div>
            <Image
              src="/dashboard.png"
              alt="Dashboard"
              height={5129}
              width={1000}
              className="object-cover object-left"
            />
        </div>
    </div>
  );
}
