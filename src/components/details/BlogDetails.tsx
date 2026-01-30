"use client";

import React from "react";
import Image from "next/image";
import BlogHomeOne from "../blog/BlogHomeOne";

import blog_detaisl_img_1 from "@/assets/img/blog_detals_banner.jpg";
import blog_details_1 from "@/assets/img/blog_details_1.jpg";
import blog_details_2 from "@/assets/img/blog_details_2.jpg";
import blog_details_3 from "@/assets/img/blog_details_3.jpg";
import blog_details_4 from "@/assets/img/blog_details_4.jpg";
import { StaticImageData } from "next/image";

export interface BlogDetailsContent {
  title: string;
  info: {
    title: string;
    des: string;
  }[];
  title_2: string;
  des_1: string;
  features: string[];
  des_2: string;
  qute: string;
  writer: string;
  des_3: string;
  bannerImg: StaticImageData;
  detailImgs: StaticImageData[];
}

const default_blog_details_content: BlogDetailsContent = {
  title: `How a Creative Agency Can Help Your Business Development?`,
  info: [
    { title: `Posted By`, des: `Andrew Nikulas` },
    { title: `Published Date`, des: `02 - Dec - 2023` },
    { title: `Viewes`, des: `2 Min Read` },
  ],
  title_2: `How a Creative Agency Can Help?`,
  des_1: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and adver tising, we have the tools and expertise to elevate your online presence. Welcome to our digital agency! We specialize in helping businesses like yours online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Welcome to our digital agency! We specialize in helping businesses like yours succeed online.`,
  features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design Implementation world of digital.`,
    `Implementation evolving world of digital Design Welcome to our digital agency!`,
    `Launch growth and reach your goals. Implementation evolving world of digital.`,
  ],
  des_2: `We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and adver tising, we have the tools and expertise to elevate your online presence. Welcome to our digital agency! We specialize in helping businesses like yours online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence.`,
  qute: `“Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and adver tising, we have the to ols and expertise to elevate your online presence. Welcome to our digital agency Welcome to our digital agency”`,
  writer: `Andrew Jackson`,
  des_3: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and adver tising, we have the tools and expertise to elevate your online presence.`,
  bannerImg: blog_detaisl_img_1,
  detailImgs: [blog_details_1, blog_details_2, blog_details_3, blog_details_4],
};

type BlogDetailsProps = {
  content?: Partial<BlogDetailsContent>;
};

const BlogDetails = ({ content }: BlogDetailsProps) => {
  const merged_content: BlogDetailsContent = {
    ...default_blog_details_content,
    ...content,
    info: content?.info ?? default_blog_details_content.info,
    features: content?.features ?? default_blog_details_content.features,
    bannerImg: content?.bannerImg ?? default_blog_details_content.bannerImg,
    detailImgs: content?.detailImgs ?? default_blog_details_content.detailImgs,
  };

  const {
    title,
    info,
    title_2,
    des_1,
    features,
    des_2,
    qute,
    writer,
    des_3,
    bannerImg,
    detailImgs,
  } = merged_content;
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_word_writting">{title}</h2>
          </div>
        </div>
      </div>
      <div className="cs_height_65 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="anim_div_ShowZoom">
            <div className="cs_portfolio_details">
              <div className="col-lg-6">
                <div className="row">
                  {info.map((item, i) => (
                    <div key={i} className="col-md-4">
                      <div className="cs_text_style_1">
                        <p className="cs_headed_text">{item.title}</p>
                        <h6 className="cs_title_text">{item.des}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_65 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image
                src={bannerImg}
                alt="blog_details_banner"
                className="cs_blog_banner_img"
              />
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
              <h4 className="cs_heading_text anim_heading_title">{title_2}</h4>
              <p className="cs_text_style_body">{des_1}</p>
            </div>
            <div className="cs_ul_ml anim_div_ShowDowns">
              <ul>
                {features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="cs_height_25"></div>
            <div className="cs_blog_detail_text_2 anim_div_ShowDowns">
              <p className="cs_text_style_body">{des_2}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="anim_div_ShowDowns">
          <div className="cs_andrew_jackson">
            <div className="cs_hr_design"></div>
            <div className="cs_height_40 cs_height_lg_40"></div>
            <div className="anim_div_ShowDowns">
              <p className="cs_andrew_jackson_text_body cs_font_26">{qute}</p>
            </div>
            <p className="cs_footer_text cs_color_1">{writer}</p>
            <div className="cs_height_40 cs_height_lg_40"></div>
            <div className="cs_hr_design"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cs_img_box cs_style_1">
          <div className="cs_img_show">
            <div className="cs_img_1 reveal">
              <Image src={detailImgs[0]} alt="blog_details_1" />
            </div>
            <div className="cs_img_2 reveal">
              <Image src={detailImgs[1]} alt="blog_details_2" />
            </div>
          </div>
          <div className="cs_height_30 cs_height_lg_30"></div>
          <div className="cs_img_show">
            <div className="cs_img_3 reveal">
              <Image src={detailImgs[2]} alt="blog_details_3" />
            </div>
            <div className="cs_img_4 reveal">
              <Image src={detailImgs[3]} alt="blog_details_4" />
            </div>
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_50"></div>
        <p className="anim_div_ShowDowns">{des_3}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="cs_share_post anim_div_ShowDowns">
            <h6 className="m-0">SHARE POST</h6>
            <div>
              <div className="cs_share_btn_g">
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://twitter.com/">
                    Twitter
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://www.facebook.com/">
                    Facebook
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://www.linkedin.com/">
                    Linkedin
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://dribbble.com/">
                    Dribbble
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://www.instagram.com/">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_70 cs_height_lg_35"></div>
        <div className="cs_hr_design anim_div_ShowDowns"></div>
      </div>

      <div className="cs_height_100 cs_height_lg_50"></div>
    </>
  );
};

export default BlogDetails;
