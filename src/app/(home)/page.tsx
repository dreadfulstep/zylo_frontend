import Link from 'next/link';
import Image from 'next/image';
import { LucideChevronRight } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

export default function Page() {
  return (
    <div>
        <div className="overflow-hidden min-h-screen">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl duration-300 animate-in fade-in-0 slide-in-from-left-8">
                <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
                Revolutionise your discord server
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground sm:max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae ut autem.
              </p>
              <div className="mt-10 flex flex-col md:flex-row items-center gap-6">
                <Link
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary/20 border border-primary text-primary-foreground hover:bg-primary/40 transition-all duration-300 h-12 px-10 text-base font-medium"
                  href="/invite"
                >
                  Get Started
                  <LucideChevronRight className="ml-2" />
                </Link>
                <Link
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary/10 border border-primary/60 text-primary-foreground hover:bg-primary/30 transition-all duration-300 h-12 px-10 text-base font-medium"
                  href="/support"
                >
                  <FaDiscord className="mr-2" />
                  Support Server
                </Link>
              </div>
            </div>

            <div className="animate-in fade-in-0 slide-in-from-right-8 mt-14 flex justify-end gap-8 duration-300 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative w-44 h-44">
                  <Link href="/bots/zylo">
                    <Image
                      alt="Zylo"
                      fill
                      className="bg-secondary aspect-square w-full rounded-xl object-cover shadow-lg"
                      src="/Zylo.svg"
                    />
                  </Link>
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>

              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative w-44 h-44">
                  <Link href="/bots/zylo">
                    <Image
                      alt="Zylo"
                      fill
                      className="bg-secondary aspect-square w-full rounded-xl object-cover shadow-lg"
                      src="/Zylo.svg"
                    />
                  </Link>
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>

                <div className="relative w-44 h-44">
                  <Link href="/bots/zylo">
                    <Image
                      alt="Zylo"
                      fill
                      className="bg-secondary aspect-square w-full rounded-xl object-cover shadow-lg"
                      src="/Zylo.svg"
                    />
                  </Link>
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>

              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative w-44 h-44">
                  <Link href="/bots/zylo">
                    <Image
                      alt="Zylo"
                      fill
                      className="bg-secondary aspect-square w-full rounded-xl object-cover shadow-lg"
                      src="/Zylo.svg"
                    />
                  </Link>
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>

                <div className="relative w-44 h-44">
                  <Link href="/bots/zylo">
                    <Image
                      alt="Zylo"
                      fill
                      className="bg-secondary aspect-square w-full rounded-xl object-cover shadow-lg"
                      src="/Zylo.svg"
                    />
                  </Link>
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
