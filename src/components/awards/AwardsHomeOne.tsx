"use client";
import React, { useEffect, useState } from "react";
import award_img_1 from "@/assets/img/award_1.svg";
import award_img_2 from "@/assets/img/award_2.svg";
import award_img_3 from "@/assets/img/award_3.svg";

import award_thumb_1 from "@/assets/img/award_thumb_1.jpg";
import award_thumb_2 from "@/assets/img/award_thumb_2.jpg";
import award_thumb_3 from "@/assets/img/award_thumb_3.jpg";
import Image, { StaticImageData } from "next/image";
import { ScrollTrigger } from "@/plugins";

interface DataType {
  id: number;
  ward_img: any;
  img: StaticImageData;
  brand: string;
  title: string;
  des: string;
}
[];

const award_data: DataType[] = [
  {
    id: 1,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: `Branding`,
    title: `Visionary Design`,
    des: `We live in a world of infinite possibilities, preferring to see things not as they are, but as they could be`,
  },
  {
    id: 2,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: `Marketing`,
    title: `Creative Problem Solvers`,
    des: `We are problem solvers with a keen interest in contributing to society through design`,
  },
  {
    id: 3,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Printing`,
    title: `Professional Execution`,
    des: `No one can execute a design better than the designer himself; we bring your design to life`,
  },
];

const AwardsHomeOne = ({ style_2 }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleMouseEnter = (index: any) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const refresh = () => ScrollTrigger.refresh(true);
    const raf = requestAnimationFrame(refresh);
    const timer = setTimeout(refresh, 500);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {style_2 ? <div className="cs_height_145 cs_height_lg_60"></div> : null}
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 swiper-slide swiper-slide-active">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Philosophy{" "}
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Let Our Passion Lead Your Success
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_2_list">
            {award_data.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                className={`cs_card cs_style_2 cs_hover_tab anim_div_ShowDowns ${activeTab === i ? "active" : ""}`}
              >
                <div className="cs_card_left">
                  <div className="cs_card_logo">
                    <Image src={item.ward_img} alt="Award" />
                  </div>
                  <div>
                    <h2 className="cs_card_title">{item.title}</h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>
                <div className="cs_card_right">
                  <h2 className="takit">{item.brand}</h2>
                </div>
                <div className="cs_card_hover_img">
                  <Image src={item.img} alt="Thumb" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default AwardsHomeOne;
