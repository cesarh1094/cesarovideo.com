import { createSignal } from "solid-js";
import { Logo } from "./logo";

export function Header() {
  const [navOpen, setNavOpen] = createSignal(true);

  return (
    <header class="block w-full">
      <div class="flex justify-between max-w-7xl items-center ml-auto mr-auto px-6 py-8 gap-12 md:justify-space-between">
        <div class="max-w-[70px] md:max-w-[100px] xl:max-w-[120px]">
          <Logo />
        </div>
        <div class="md:grow">
          <button
            class="inline-block md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setNavOpen(() => !navOpen())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
          <nav
            class="hidden font-heading md:text-right md:flex flex-col md:flex-row md:gap-14 lg:gap-20 xl:gap-24 md:justify-end"
            inert={!navOpen()}
          >
            <ul class="flex flex-col md:flex-row md:text-2xl items-center gap-4 md:gap-12"></ul>
            <ul class="flex flex-col md:flex-row items-center gap-4 md:gap-6  lg:gap-10">
              <li>
                <a
                  href=""
                  class="block h-[17px] w-[17px] lg:h-[20px] lg:w-[20px]"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#ffffff"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="block h-[17px] w-[17px] lg:h-[20px] lg:w-[20px]"
                  rel="noreferrer"
                >
                  <span class="sr-only">Twitter/X</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#ffffff"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
