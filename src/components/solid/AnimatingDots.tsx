import { onMount } from "solid-js";
import gsap from "gsap";

export default function AnimatingDots() {
  let blocksRef: HTMLDivElement | undefined;

  onMount(() => {
    // Wait for next tick to ensure DOM is fully rendered
      if (!blocksRef) return;
      
      let blocks = blocksRef.querySelectorAll("div");
      
      if (blocks.length === 0) {
        console.warn("No blocks found for animation");
        return;
      }

      let blockAnimationTimeline = gsap.timeline({
        delay: 0.01,
      });

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
    <div ref={blocksRef} class="flex justify-center gap-6 md:gap-10 relative" inert>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-green opacity-0"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-light-blue opacity-0"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-pale-purple opacity-0"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-purple opacity-0"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-orange opacity-0"></div>
      <div class="block w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-terminal-red opacity-0"></div>
    </div>
  );
}
