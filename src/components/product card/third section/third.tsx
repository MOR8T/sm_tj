import React from "react";
import badge from "@/../public/badge.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Third = () => {
  const t = useTranslations("ProductCard")
  return (
    <div className="md:max-w-[1300px] w-[90%] md:flex-row flex-col md:gap-0 gap-5 m-auto flex justify-between py-20">
      <div className="md:w-[538.65px]">
        <h2 className="md:text-[45px] text-2xl font-semibold text-[#1F2937]">
          {t("third_title")}
        </h2>
        <p className="text-[#4B5563] text-[20px]">
          {t("third_description")}
        </p>
      </div>
      <div className="md:w-[400px] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image src={badge} alt="badge" />
          <h3 className="text-[18px] font-semibold">{t("third_feature_1")}</h3>
        </div>
        <div className="flex items-center gap-3">
          <Image src={badge} alt="badge" />
          <h3 className="text-[18px] font-semibold">{t("third_feature_2")}</h3>
        </div>
        <div className="flex items-center gap-3">
          <Image src={badge} alt="badge" />
          <h3 className="text-[18px] font-semibold">{t("third_feature_3")}</h3>
        </div>
      </div>
    </div>
  );
};

export default Third;
