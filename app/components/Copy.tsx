"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

type CopyProps = {
  children: React.ReactNode;
  animatedScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
  direction?: "left" | "right";
  once?: boolean;
};

export default function Copy({
  children,
  animatedScroll = true,
  delay = 0,
  blockColor = "#111",
  stagger = 0.08,
  duration = 0.6,
  direction = "left",
  once = true,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (context) => {
      const container = containerRef.current;
      if (!container) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(container, { opacity: 1 });
        return;
      }

      const lines: HTMLElement[] = [];
      const blocks: HTMLElement[] = [];
      const splits: SplitText[] = [];

      Array.from(container.children).forEach((el) => {
        const split = new SplitText(el as HTMLElement, {
          type: "lines",
          linesClass: "block-line",
        });

        splits.push(split);

        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.className = "block-line-wrapper";

          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);

          const block = document.createElement("div");
          block.className = "block-revealer";
          block.style.backgroundColor = blockColor;

          wrapper.appendChild(block);

          lines.push(line);
          blocks.push(block);
        });
      });

      // INITIAL STATE
      gsap.set(lines, { opacity: 0 });

      gsap.set(blocks, {
        scaleX: 0,
        transformOrigin:
          direction === "left" ? "left center" : "right center",
      });

      const tl = gsap.timeline({
        delay,
        scrollTrigger: animatedScroll
          ? {
              trigger: container,
              start: "top 85%",
              once,
            }
          : undefined,
      });

      lines.forEach((line, i) => {
        const block = blocks[i];
        const at = i * stagger;

        // BLOCK IN
        tl.to(
          block,
          {
            scaleX: 1,
            duration,
            ease: "power4.inOut",
          },
          at
        )

          // TEXT APPEARS (NO EASING)
          .set(
            line,
            {
              opacity: 1,
            },
            at + duration * 0.45
          )

          // FLIP BLOCK ORIGIN
          .set(block, {
            transformOrigin:
              direction === "left" ? "right center" : "left center",
          })

          // BLOCK OUT
          .to(
            block,
            {
              scaleX: 0,
              duration,
              ease: "power4.inOut",
            },
            at + duration * 0.5
          );
      });

      return () => {
        splits.forEach((s) => s.revert());
        context.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} data-copy-wrapper>
      {children}
    </div>
  );
}
