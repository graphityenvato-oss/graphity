"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

type LogoItem = {
  light: StaticImageData | string;
  dark?: StaticImageData | string;
  alt?: string;
};
import brand_img_1 from "@/assets/img/partner_1.png";
import brand_img_2 from "@/assets/img/partner_2.png";
import brand_img_3 from "@/assets/img/partner_3.png";
import brand_img_4 from "@/assets/img/partner_4.png";
import brand_img_5 from "@/assets/img/partner_5.png";
import brand_img_6 from "@/assets/img/partner_6.png";
import brand_img_7 from "@/assets/img/partner_7.png";
import brand_img_8 from "@/assets/img/partner_8.png";
import brand_img_9 from "@/assets/img/partner_9.png";
import brand_img_10 from "@/assets/img/partner_10.png";
import brand_img_11 from "@/assets/img/partner_11.png";
import brand_img_12 from "@/assets/img/partner_12.png";
import brand_img_13 from "@/assets/img/partner_13.png";
import brand_img_14 from "@/assets/img/partner_14.png";
import brand_img_15 from "@/assets/img/partner_15.png";
import brand_img_16 from "@/assets/img/partner_16.png";
import brand_img_17 from "@/assets/img/partner_17.png";
const brand_data: LogoItem[] = [
  {
    light: brand_img_1,
    dark: "/assets/img/partner_1.png",
    alt: "Shamseddine Logo",
  },
  {
    light: brand_img_2,
    dark: "/assets/img/partner_2_dark.png",
    alt: "Prime Elec Co Logo",
  },
  {
    light: brand_img_3,
    dark: "/assets/img/partner_3.png",
    alt: "Home Mart Logo",
  },
  {
    light: brand_img_4,
    dark: "/assets/img/partner_4_dark.png",
    alt: "VoltWare Logo",
  },
  {
    light: brand_img_5,
    dark: "/assets/img/partner_5_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_6,
    dark: "/assets/img/partner_6_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_7,
    dark: "/assets/img/partner_7_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_8,
    dark: "/assets/img/partner_8_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_9,
    dark: "/assets/img/partner_9_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_10,
    dark: "/assets/img/partner_10_dark.png",
    alt: "Siwa Logo",
  },
  { light: brand_img_11, dark: "/assets/img/partner_11.png", alt: "Siwa Logo" },
  {
    light: brand_img_12,
    dark: "/assets/img/partner_12_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_13,
    dark: "/assets/img/partner_13_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_14,
    dark: "/assets/img/partner_14_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_15,
    dark: "/assets/img/partner_15_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_16,
    dark: "/assets/img/partner_16_dark.png",
    alt: "Siwa Logo",
  },
  {
    light: brand_img_17,
    dark: "/assets/img/partner_17_dark.png",
    alt: "Siwa Logo",
  },
];

import brand_thumb_1 from "@/assets/img/partner_9.png";
import brand_thumb_2 from "@/assets/img/partner_10.png";
import brand_thumb_3 from "@/assets/img/partner_11.png";
import brand_thumb_4 from "@/assets/img/partner_12.png";
import brand_thumb_5 from "@/assets/img/partner_13.png";
import brand_thumb_6 from "@/assets/img/partner_14.png";
import brand_thumb_7 from "@/assets/img/partner_15.png";
import brand_thumb_8 from "@/assets/img/partner_1.png";
import brand_thumb_9 from "@/assets/img/partner_3.png";

const brand_thumb_data: LogoItem[] = [
  { light: brand_thumb_1, alt: "Partner logo" },
  { light: brand_thumb_2, alt: "Partner logo" },
  { light: brand_thumb_3, alt: "Partner logo" },
  { light: brand_thumb_4, alt: "Partner logo" },
  { light: brand_thumb_5, alt: "Partner logo" },
  { light: brand_thumb_6, alt: "Partner logo" },
  { light: brand_thumb_7, alt: "Partner logo" },
  { light: brand_thumb_8, alt: "Partner logo" },
  { light: brand_thumb_9, alt: "Partner logo" },
];

const BrandHomeOne = ({ style_2 }: any) => {
  const renderLogo = (item: LogoItem, i: number) => (
    <div
      key={i}
      className={`cs_partner_logo ${item.dark ? "has-dark" : "no-dark"}`}
    >
      <Image
        src={item.light}
        alt={item.alt ?? "Partner logo"}
        className="cs_logo_light"
        width={160}
        height={60}
      />
      {item.dark && (
        <Image
          src={item.dark}
          alt={item.alt ?? "Partner logo"}
          className="cs_logo_dark"
          width={160}
          height={60}
        />
      )}
    </div>
  );

  return (
    <>
      {style_2 ? (
        <>
          <div className="cs_height_150 cs_height_lg_60"></div>
          <p className="text-center cs_font_18 cs_normal">
            130+ Our Client & Partner We Are Working Together
          </p>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </>
      ) : (
        <div className="cs_height_140 cs_height_lg_70"></div>
      )}
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map(renderLogo)}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map(renderLogo)}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_45 cs_height_lg_45"></div>
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_data.map(renderLogo)}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_data.map(renderLogo)}
            </div>
          </div>
        </div>
      </div>
      {/* {style_2 ? null :
        <div className="cs_height_140 cs_height_lg_70"></div>
      } */}
      <div className="cs_height_140 cs_height_lg_70"></div>
    </>
  );
};

export default BrandHomeOne;
