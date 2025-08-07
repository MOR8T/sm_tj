import React from "react";
import doubleLeft from '@/public/chevron-double-left.svg'
import Image from "next/image";
import { useTranslations } from "next-intl";

const Fifth = () => {
  const t = useTranslations("App")
  return (
    <div className="md:max-w-[1300px] w-[90%] m-auto py-10">
      <div className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-3">
        <h2 className="md:w-[473px] text-[#1F2937] text-2xl md:text-[45px] font-semibold">
          {t("fifth_heading")}
        </h2>
        <p className="md:w-[523px] text-[#4B5563] text-[18px]">
          {t("fifth_description")}
        </p>
      </div>
      <div className="pt-10 flex md:items-center justify-between md:flex-row flex-col md:gap-0 gap-4">
        <article className="w-[274.5px]">
            <h2 className="text-[#1F2937] text-[18px] font-semibold pb-2">{t("fifth_step1_title")}</h2>
            <p className="text-[16px] text-[#4B5563]">{t("fifth_step1_description")}</p>
        </article>
        <Image src={doubleLeft} alt="double left" className="rotate-90 md:rotate-0"/>
        <article className="w-[274.5px]">
            <h2 className="text-[#1F2937] text-[18px] font-semibold pb-2">{t("fifth_step2_title")}</h2>
            <p className="text-[16px] text-[#4B5563]">{t("fifth_step2_description")}</p>
        </article>
        <Image src={doubleLeft} alt="double left" className="rotate-90 md:rotate-0"/>
        <article className="w-[274.5px]">
            <h2 className="text-[#1F2937] text-[18px] font-semibold pb-2">{t("fifth_step3_title")}</h2>
            <p className="text-[16px] text-[#4B5563]">{t("fifth_step3_description")}</p>
        </article>
      </div>
    </div>
  );
};

export default Fifth;
