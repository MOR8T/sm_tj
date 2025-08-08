import React from "react";
import phoneIcon from "@/../public/MockUp (1).svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Third = () => {
  const t = useTranslations("ProductPage");
  return (
    <div className="my-30 md:max-w-[1300px] w-[90%] m-auto md:h-[500px] h-[700px] flex md:items-center justify-start relative">
      <aside className="md:w-[528px]">
        <h2 className="text-[#1F2937] text-[22px] font-semibold md:text-[45px]">{t("thirdTitle")}</h2>
        <p className="text-[#4B5563] md:text-[18px] font-semibold py-5 text-[15px]">
          {t("thirdDescription")}
        </p>
        <button className="text-[#315266] font-semibold cursor-pointer text-[13px] md:text-[16px]">
          {t("thirdButton")}
        </button>
      </aside>
      <Image
        src={phoneIcon}
        alt="phone"
        className="absolute z-10 md:right-30 md:top-0 bottom-[-180px]"
      />
      <div className="absolute w-[305px] h-[452px] bg-[#d5d5d5] rounded-[24px] right-10 bottom-[-50px]"></div>
    </div>
  );
};

export default Third;
