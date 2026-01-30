import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg";
import blog_details_banner_1 from "@/assets/img/blog_detals_banner.jpg";
import blog_details_1 from "@/assets/img/blog_details_1.jpg";
import blog_details_2 from "@/assets/img/blog_details_2.jpg";
import blog_details_3 from "@/assets/img/blog_details_3.jpg";
import blog_details_4 from "@/assets/img/blog_details_4.jpg";
import case_study_1 from "@/assets/img/case_study_1.jpg";
import case_study_2 from "@/assets/img/case_study_2.jpg";
import case_study_3 from "@/assets/img/case_study_3.jpg";
import case_study_4 from "@/assets/img/case_study_4.jpg";
import recent_project_1 from "@/assets/img/recent_project_1.jpg";
import recent_project_2 from "@/assets/img/recent_project_2.jpg";
import recent_project_3 from "@/assets/img/recent_project_3.jpg";
import recent_project_4 from "@/assets/img/recent_project_4.jpg";
import recent_project_5 from "@/assets/img/recent_project_5.jpg";
import recent_project_6 from "@/assets/img/recent_project_6.jpg";
import design_banner from "@/assets/img/design_banner.jpg";
import { StaticImageData } from "next/image";

export interface BlogItem {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
  slug: string;
  author: string;
  published: string;
  readTime: string;
  title2: string;
  des1: string;
  features: string[];
  des2: string;
  quote: string;
  writer: string;
  des3: string;
  bannerImg: StaticImageData;
  detailImgs: StaticImageData[];
}

const blog_data: BlogItem[] = [
  {
    id: 1,
    img: blog_img_1,
    title: `Navigating a World of Infinite Possibilities`,
    des: `In a rapidly evolving digital landscape, we believe that design is more than just aesthetics—it is a tool for change. We translate thoughts into creative, meaningful designs.`,
    slug: "reasons-business-needs-agency",
    author: "Graphity Team",
    published: "29 - Jan - 2026",
    readTime: "3 Min Read",
    title2: "Seeing Things Not As They Are, But As They Could Be",
    des1: "In a rapidly evolving digital landscape, we believe that design is more than just aesthetics—it is a tool for change. We are problem solvers with a keen interest in contributing to society through design.",
    features: [
      "Creative Translation: We translate your thoughts into creative, meaningful designs",
      "Active Inspiration: Inspiration does exist, but it must find you working.",
      "Unlock Potential: We help you unlock your full potential online.",
      "Passion Led: Let our passion lead your success.",
    ],
    des2: "We prefer to see things not as they are, but as they could be. Join us in creating effective visual communication solutions that help your business reach its audience easily.",
    quote:
      "When the strategy is right, every channel becomes a force multiplier.",
    writer: "Mortada A. Sabra",
    des3: "Focus on the core business while your agency builds the growth engine—so you can scale without losing consistency.",
    bannerImg: blog_details_banner_1,
    detailImgs: [
      blog_details_1,
      blog_details_2,
      blog_details_3,
      blog_details_4,
    ],
  },
  {
    id: 2,
    img: blog_img_2,
    title: `Why Your Brand Is Your Identity`,
    des: `Your brand is about creating a strong image in the audience's mind. We explore how to build profitable connections through design.`,
    slug: "why-your-brand-is-your-identity",
    author: "Mortada A. Sabra",
    published: "29 - Jan - 2026",
    readTime: "5 Min Read",
    title2: "Building Profitable Connections Through Design",
    des1: "Your brand is your identity. It is about creating a strong image of your company in the audience's mind through your logo, designs, and a special theme that makes customers recognize you instantly.",
    features: [
      "Strong Image: Create a unique identity that makes you instantly recognizable.",
      "Profitable Connections: We partner with brands to build stronger connections with their target audiences.",
      "Visual Communication: Effective designs help your business reach its audience easily.",
      "Elevate Success: Unleash the power of marketing to elevate your business to new heights.",
    ],
    des2: "It’s about more than just a logo; it’s about creating a strategy that polarizes your audience and meets your expectations. Let our passion lead your success.",
    quote: "Great creative is not decoration; it is disciplined communication.",
    writer: "Mortada A. Sabra",
    des3: "If your current output feels fragmented, a single team that owns strategy through execution can change everything.",
    bannerImg: design_banner,
    detailImgs: [
      blog_details_1,
      blog_details_2,
      blog_details_3,
      blog_details_4,
    ],
  },
  {
    id: 3,
    img: blog_img_3,
    title: `From Concept to Reality: The Art of Execution`,
    des: `No one can execute a design better than the designer himself. We explore how to bridge the gap between digital concepts and physical reality.`,
    slug: "maximizing-your-marketing-budget",
    author: "Graphity Team",
    published: "29 - Jan - 2026",
    readTime: "4 Min Read",
    title2: "Bringing Designs to Life Through Professional Execution",
    des1: "Inspiration does exist, but it must find you working. We believe that design shouldn't stop at the screen. Whether it is web development, printing, or signage, we translate your thoughts into tangible, meaningful solutions that meet your expectations.",
    features: [
      "Designer-Led Execution: No one can execute a design better than the designer himself.",
      "Material Matters: We find the right suppliers and materials to adapt designs to your specific requirements.",
      "Digital Headquarters: Your website is your digital office; we ensure it represents your brand the way it deserves.",
      "Problem Solvers: We contribute to society through effective design solutions.",
    ],
    des2: "A lean approach focuses on experiments that show signal quickly, then scales the winners.",
    quote:
      "We prefer to see things not as they are, but as they could be. Let us help you unlock your full potential.",
    writer: "Mortada A. Sabra",
    des3: "A simple reporting rhythm keeps your budget working hard and your decisions clear.",
    bannerImg: case_study_4,
    detailImgs: [
      blog_details_1,
      blog_details_2,
      blog_details_3,
      blog_details_4,
    ],
  },
];

export default blog_data;
