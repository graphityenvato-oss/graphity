"use client";

import { gsap } from "@/plugins";
import { useEffect, useLayoutEffect } from "react";
import MouseMove from "@/components/common/MouseMove";
import ScrollToTop from "@/components/common/ScrollToTop";

import { usePathname } from "next/navigation";
import { animationCreate } from "@/utils/utils";

import animationTitle from "@/utils/animationTitle";
import { scrollSmother } from "@/utils/scrollSmother";
import buttonAnimation from "@/utils/buttonAnimation";

import {
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
} from "@/plugins";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);
}

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
  const pathname = usePathname();

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const existingSmoother =
        typeof ScrollSmoother.get === "function" ? ScrollSmoother.get() : null;
      if (existingSmoother) {
        existingSmoother.kill();
      }
      const smoother = ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
      });
      if (typeof ScrollTrigger.defaults === "function") {
        const scroller =
          smoother && typeof smoother.wrapper === "function"
            ? smoother.wrapper()
            : window;
        ScrollTrigger.defaults({ scroller });
      }
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);
    }
  }, [pathname]);

  useEffect(() => {
    const startAnimations = () => {
      buttonAnimation();
      animationTitle();
      scrollSmother();

      const refreshScrollTrigger = () => {
        ScrollTrigger.refresh(true);
      };
      const refreshTimer = setTimeout(refreshScrollTrigger, 300);
      const handleFirstScroll = () => {
        refreshScrollTrigger();
        window.removeEventListener("scroll", handleFirstScroll);
      };
      const handleResize = () => {
        refreshScrollTrigger();
      };
      const handleImagesLoaded = () => {
        refreshScrollTrigger();
      };

      if (typeof window !== "undefined") {
        window.addEventListener("load", refreshScrollTrigger);
        window.addEventListener("scroll", handleFirstScroll, { passive: true });
        window.addEventListener("resize", handleResize);
        if (document?.images?.length) {
          let remaining = document.images.length;
          const done = () => {
            remaining -= 1;
            if (remaining <= 0) handleImagesLoaded();
          };
          Array.from(document.images).forEach((img) => {
            if (img.complete) {
              done();
            } else {
              img.addEventListener("load", done, { once: true });
              img.addEventListener("error", done, { once: true });
            }
          });
        }
      }

      return () => {
        clearTimeout(refreshTimer);
        if (typeof window !== "undefined") {
          window.removeEventListener("load", refreshScrollTrigger);
          window.removeEventListener("scroll", handleFirstScroll);
          window.removeEventListener("resize", handleResize);
        }
      };
    };

    // Let ScrollSmoother settle before creating ScrollTriggers.
    let cleanup = () => {};
    const raf = requestAnimationFrame(() => {
      const maybeCleanup = startAnimations();
      if (typeof maybeCleanup === "function") {
        cleanup = maybeCleanup;
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, [pathname]);

  return (
    <>
      {children}

      <MouseMove />
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
