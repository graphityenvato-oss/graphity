//  Gsap Plugin import here
import { gsap } from "gsap";

let SplitText;
let ScrollTrigger;
let ScrollSmoother;
let ScrollToPlugin;

if (typeof window !== "undefined") {
  window.gsap = gsap;
  SplitText = require("../../public/assets/plugins/gsap-split-text.js").default;
  ScrollTrigger = require("../../public/assets/plugins/gsap-scroll-trigger.js").default;
  ScrollSmoother =
    require("../../public/assets/plugins/gsap-scroll-smoother.js").default;
  ScrollToPlugin =
    require("../../public/assets/plugins/gsap-scroll-to-plugin.js").default;
}

export { gsap, SplitText, ScrollTrigger, ScrollSmoother, ScrollToPlugin };

// Chroma
export { default as chroma } from "../../public/assets/plugins/charming.js";
