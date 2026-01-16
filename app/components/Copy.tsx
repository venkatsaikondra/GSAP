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
  stagger?: number;
  duration?: number;
  direction?: "left" | "right";
  once?: boolean;
  variant?: "typing" | "block" | "hybrid";
  blockColor?: string;
};

export default function Copy({
  children,
  animatedScroll = true,
  delay = 0,
  stagger = 0.04,
  duration = 0.8,
  direction = "left",
  once = true,
  variant = "hybrid",
  blockColor = "#111",
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      /* Reduced motion */
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(container, { opacity: 1 });
        return;
      }

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

      /* HYBRID MODE */
      if (variant === "hybrid") {
        const headings = container.querySelectorAll("h1, h2, h3");
        const paragraphs = container.querySelectorAll("p");

        /* BLOCK REVEAL — HEADINGS */
        headings.forEach((el) => {
          const split = new SplitText(el as HTMLElement, {
            type: "lines",
            linesClass: "block-line",
          });

          split.lines.forEach((line) => {
            const wrapper = document.createElement("div");
            wrapper.className = "block-line-wrapper";

            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);

            const block = document.createElement("div");
            block.className = "block-revealer";
            block.style.backgroundColor = blockColor;

            wrapper.appendChild(block);

            gsap.set(line, { opacity: 0, y: 16 });
            gsap.set(block, {
              scaleX: 0,
              transformOrigin:
                direction === "left" ? "left center" : "right center",
            });

            tl.to(block, {
              scaleX: 1,
              duration: duration * 0.6,
              ease: "expo.inOut",
            })
              .to(
                line,
                {
                  opacity: 1,
                  y: 0,
                  duration: duration * 0.6,
                  ease: "power4.out",
                },
                "-=0.2"
              )
              .to(block, {
                scaleX: 0,
                duration: duration * 0.6,
                ease: "expo.inOut",
              });
          });
        });

        /* TYPING REVEAL — PARAGRAPHS (NO BLUR) */
        paragraphs.forEach((el) => {
          const split = new SplitText(el as HTMLElement, {
            type: "chars",
            charsClass: "copy-char",
          });

          gsap.set(split.chars, {
            opacity: 0,
            y: "0.4em",
          });

          tl.to(split.chars, {
            opacity: 1,
            y: 0,
            duration,
            ease: "power4.out",
            stagger,
          });
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} style={{ opacity: 1 }}>
      {children}
    </div>
  );
}
