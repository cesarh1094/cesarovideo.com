import { createSignal, createEffect } from "solid-js";
import 'solid-devtools';
import { Logo } from "./logo";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function Header() {

  return (
    <header class="block w-full">
      <div class="flex justify-between max-w-7xl items-center ml-auto mr-auto px-8 py-8 md:px-12 gap-12 md:justify-space-between">
        <div class="max-w-[70px] md:max-w-[100px] xl:max-w-[120px]">
          <Logo />
        </div>
        <div class="md:grow">
          <nav
            class={cn('relative font-heading md:text-right flex flex-row  md:gap-14 lg:gap-20 xl:gap-24 md:justify-end')}
          >
            <ul class="flex flex-row md:flex-row items-center gap-8 md:gap-6  lg:gap-12">
              <li>
                <a
                  href="https://www.linkedin.com/in/cesarovideo"
                  class="block h-[17px] w-[17px] lg:h-[25px] lg:w-[25px]"
                >
                  <span class="sr-only">Go to Cesar's LinkedIn Profile</span>
<svg class="w-full h-auto" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"/></svg>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/cesarovideo"
                  class="block h-[17px] w-[17px] lg:h-[25px] lg:w-[25px]"
                  rel="noreferrer"
                >
                  <span class="sr-only">Go to Cesar's Twitter/X Profile</span>
                  <svg  class="w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="1200" height="1227" fill="none" viewBox="0 0 1200 1227"><path fill="#fff" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/></svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
