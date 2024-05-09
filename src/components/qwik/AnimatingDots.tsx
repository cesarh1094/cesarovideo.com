/** @jsxImportSource @builder.io/qwik */

import { component$, useVisibleTask$ } from "@builder.io/qwik";
import gsap from "gsap";

export default component$(() => {
  useVisibleTask$(() => {
    let blockAnimationTimeline = gsap.timeline({
      repeat: 2,
      yoyo: true,
      delay: 0.01,
    });

    let blocks = document.querySelectorAll("#blocks > div");

    blockAnimationTimeline
      .set(blocks, {
        opacity: 0,
        xPercent: -10,
      })
      .add("blockLoad")
      .to(
        blocks,
        {
          opacity: 1,
          xPercent: 0,
          duration: 0.35,
          delay: 0.25,
          stagger: 0.15,
        },
        "blockLoad",
      );
  });

  return (
    <div id="blocks" class="flex justify-center gap-6 md:gap-10 relative" inert>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-green"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-light-blue"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-pale-purple"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-purple"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-orange"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-red"></div>
    </div>
  );
});
