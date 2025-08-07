import React from "react";
import Image from "next/image";
import card from "@/public/Card (2).svg";
import pictures from "@/public/Content.svg";
import social from "@/public/Group 2085665883.svg";
import { useTranslations } from "next-intl";

const Fifth = () => {
  const t = useTranslations("ProductPage")
  return (
    <div className="md:h-[1962px] w-[100%] m-auto bg-[#F3F4F6B8] my-10 md:py-0 py-9">
      {/* first section */}
      <section className="md:max-w-[1300px] md:gap-0 gap-8 w-[80%] m-auto md:py-0 py-5 md:h-[667px] md:border-l-1 border-[#1F29370D] md:flex-row flex-col-reverse border-r-1 relative flex items-center justify-between">
        <Image src={card} alt="card" />
        <aside className="md:w-[415px] flex flex-col items-start gap-3 mr-10">
          <h2 className="text-[#1F2937] text-2xl md:text-[45px]">
            {t("fifthSection1Title")}
          </h2>
          <p className="text-[18px] text-[#4B5563]">
            {t("fifthSection1Text")}
          </p>
          <button className="text-[#315266] font-semibold">{t("fifthSection1Button")}</button>
        </aside>
      </section>
      <hr className="border-1 border-[#1F29370D]" />
      {/* second section */}
      <section className="md:max-w-[1300px] w-[100%] md:gap-0 gap-8 md:py-0 py-10 m-auto md:h-[667px] md:border-l-1 px-10 border-[#1F29370D] border-r-1 flex items-center md:flex-row flex-col justify-between">
        <aside className="md:w-[415px] flex flex-col items-start gap-3">
          <h2 className="text-[#1F2937] text-2xl md:text-[45px]">
            {t("fifthSection2Title")}
          </h2>
          <p className="text-[#1F2937] text-[18px] font-semibold">
            {t("fifthSection2Text1")}
          </p>
          <p className="text-[18px] text-[#4B5563]">
            {t("fifthSection2Text2")}
          </p>
        </aside>
        <Image src={pictures} alt="pictures" />
      </section>
      <hr className="border-1 border-[#1F29370D]" />
      {/* third section */}
      <section className="md:max-w-[1300px] w-[100%] md:gap-0 gap-8 m-auto md:h-[590px] md:py-0 py-10 md:flex-row flex-col-reverse md:border-l-1 px-10 border-[#1F29370D] border-r-1 flex items-center justify-between">
        <Image src={social} alt="social" className="relative z-10" />
        <div className="md:w-[451.99px] w-[327px] h-[212px] md:h-[304.99px] bg-[#d7d7d7b8] rounded-[24px] absolute z-0"></div>
        <aside className="md:w-[415px] flex flex-col items-start gap-3">
          <h2 className="text-[#1F2937] text-2xl md:text-[45px]">
            {t("fifthSection3Title")}
          </h2>
          <p className="text-[#1F2937] text-[18px] font-semibold">
            {t("fifthSection3Text1")}
          </p>
          <p className="text-[18px] text-[#4B5563]">
            {t("fifthSection3Text2")}
          </p>
        </aside>
      </section>
    </div>
  );
};

export default Fifth;
