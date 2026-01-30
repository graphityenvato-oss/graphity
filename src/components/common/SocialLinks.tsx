import Link from "next/link";
import type { ReactNode } from "react";

// hero social links home three
interface HDataType {
  id: number;
  link: string;
  title: string;
}
const hero_link_home_three: HDataType[] = [
  {
    id: 2,
    link: "https://www.linkedin.com/company/graphity-lb",
    title: "Linkedin",
  },
  {
    id: 3,
    link: "https://www.instagram.com/graphity_lb",
    title: "Instagram",
  },
  {
    id: 4,
    link: "https://www.graphitylb.com",
    title: "Website",
  },
];
export const SocialLinks = () => {
  return (
    <>
      {hero_link_home_three.map((h_item, h_index) => (
        <Link
          key={h_index}
          href={h_item.link}
          className="cs_center"
          target="_blank"
        >
          {h_item.title}
        </Link>
      ))}
    </>
  );
};

// copy right text
type copy_right_text_type = {
  copy_right: ReactNode;
};

const copy_right_text: copy_right_text_type = {
  copy_right: <>Copyright 2026 Graphity. All Rights Reserved.</>,
};

const { copy_right } = copy_right_text;
export const CopyRight = () => {
  return <> {copy_right}</>;
};
