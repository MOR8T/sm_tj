import React from "react";
import Image from "next/image";
import amazon from "@/../public/Frame 26.svg";
import { useTranslations } from "next-intl";

const Fifth = () => {
  const t = useTranslations("ProductCard")
  return (
    <div className="md:max-w-[1300px] md:flex-row flex-col-reverse w-[90%] md:gap-0 gap-8 m-auto py-10 flex justify-between items-center">
      <div className="md:w-[600px] relative">
        <Image src={amazon} alt="boxs" className="relative z-10"/>
        <div className="md:w-[443px] w-[300px] h-[200px] md:h-[287px] bg-[#F3F5F6B8] rounded-2xl absolute bottom-0 left-0"></div>
      </div>
      <aside className="md:w-[441px]">
        <h2 className="text-[#1F2937] md:text-[45px] text-2xl font-semibold">
          {t("fifth_title")}
        </h2>
        <p className="text-[#4B5563] text-[18px] py-5">
          {t("fifth_description")}
        </p>
        <ul className="list-disc ml-5 text-[18px] pb-5 text-[#1F2937] font-semibold">
          <li>{t("fifth_list_1")}</li>
          <li>{t("fifth_list_2")}</li>
          <li>{t("fifth_list_3")}</li>
        </ul>
        <button className="bg-[#315266] py-3 font-semibold rounded-3xl px-5 text-[14px] text-white">
          {t("fifth_button")}
        </button>
      </aside>
    </div>
  );
};

export default Fifth;
