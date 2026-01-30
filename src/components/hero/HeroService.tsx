import React from "react";

interface DataType {
  id: number;
  title: string;
  description: string;
}

const banner_data: DataType[] = [
  {
    id: 1,
    title: "Strategic Branding & Marketing",
    description:
      "Elevate your business to new heights. We combine strong brand identity design with strategic digital marketing to ensure your products and services find their target audience easily and effectively",
  },
  {
    id: 2,
    title: "Comprehensive Business Solutions",
    description:
      "Unlock your full potential online and offline. We combine graphic design, programming, and functionality to create platforms that represent your brand the way it deserves. Our team is here to help you achieve your business goals through creative, meaningful designs and strategic execution",
  },
  {
    id: 3,
    title: "Web / App Development",
    description:
      "Design Meets Functionality. We go beyond just coding; it's about combining graphic design, programming, and functionality to create a platform that meets your specific business objectives",
  },
  {
    id: 4,
    title: "Media Planning & Production",
    description:
      "Design Meets Reality. We don't just design; we execute. Our team finds the best materials and suppliers to bring your visual identity to life, ensuring your physical presence is as strong as your digital one",
  },
  {
    id: 5,
    title: "Advertising",
    description:
      "Reach Your Audience. We provide effective visual communication solutions that ensure your message reaches your audience easily. Whether through digital or print, we help you get noticed",
  },
  {
    id: 6,
    title: "Social Media Management & Digital Solutions",
    description:
      "Creative Digital Presence. We translate your thoughts into creative, meaningful social media content that meets your expectations. From design to management, we ensure your digital identity is consistent and impactful",
  },
  {
    id: 7,
    title: "Client Partnership & Support for Business Growth",
    description:
      "Growing Together. We are problem solvers dedicated to your journey. From the initial idea to the final execution, we support your business growth every step of the way, helping you reach your audience easily",
  },
  {
    id: 8,
    title: "Exceptional Customer Service",
    description:
      "Dedicated Support. We are here to help you unlock your full potential. Our passion is designing effective solutions that meet your specific requirements and ensure your complete satisfaction.",
  },
  {
    id: 9,
    title: "Printables",
    description:
      "Professional Print Solutions. We provide effective visual communication solutions in physical form. Whether it's menus, brochures, or corporate stationery, we ensure your printed materials represent your brand perfectly",
  },
];

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
                Transform Your Online Presence with Our Digital Agency Services
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) => (
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div
                    className="cs_card_number cs_primary_font"
                    style={{
                      backgroundImage: `url('/assets/img/hero_img_1.jpg')`,
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">{item.title}</h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <span className="cs_card_link">
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;
