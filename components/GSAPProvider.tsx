"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function GSAPProvider() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          ".nav-animate, .hero-fade, .project-card, .skill-card, .footer-animate, .section-reveal, .page-reveal, .reveal-line > span",
          { clearProps: "all" }
        );
        return;
      }

      gsap.set(".reveal-line > span", {
        yPercent: 115,
      });

      gsap.set(".hero-fade", {
        y: 36,
        opacity: 0,
      });

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .fromTo(
          ".nav-animate",
          { y: -35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 }
        )
        .to(
          ".reveal-line > span",
          {
            yPercent: 0,
            duration: 1.1,
            stagger: 0.12,
          },
          "-=0.15"
        )
        .to(
          ".hero-fade",
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
          },
          "-=0.7"
        );

      gsap.to(".gradient-orb", {
        x: -22,
        y: 30,
        scale: 1.08,
        rotate: 8,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((section) => {
        gsap.fromTo(
          section,
          {
            y: 55,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        const image = card.querySelector(".project-image");

        gsap.fromTo(
          card,
          {
            y: 90,
            opacity: 0,
            rotateX: 7,
            transformPerspective: 1000,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );

        if (image) {
          gsap.fromTo(
            image,
            {
              scale: 1.14,
              filter: "blur(8px)",
            },
            {
              scale: 1,
              filter: "blur(0px)",
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      });

      gsap.utils.toArray<HTMLElement>(".skill-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 45,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            delay: (index % 8) * 0.035,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".footer-animate",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-animate",
            start: "top 90%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );

  return null;
}