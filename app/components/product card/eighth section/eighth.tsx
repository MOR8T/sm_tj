import { useTranslations } from "next-intl";
import React from "react";

const Eighth = () => {
  const t = useTranslations("ProductCard");
  return (
    <div className="md:max-w-[1190px] md:flex-row flex-col text-center md:text-start w-[90%] h-[330px] m-auto my-20 border-1 border-[#d1d1d1] flex items-center justify-evenly">
      <div>
        <h2 className="text-[20px] text-[#1F2937] font-semibold">
          {t("eighth_need_assistance_title")}
        </h2>
        <p className="text-[18px] text-[#4B5563]">
          {t("eighth_need_assistance_description")}
        </p>
        <button className="text-[#315266] text-[14px] font-semibold">
          {t("eighth_connect_button")}
        </button>
      </div>
      <div>
        <h2 className="text-[20px] text-[#1F2937] font-semibold">
          {t("eighth_have_question_title")}
        </h2>
        <p className="text-[18px] text-[#4B5563]">
          {t("eighth_have_question_description")}
        </p>
        <button className="text-[#315266] text-[14px] font-semibold">
          {t("eighth_message_button")}
        </button>
      </div>
    </div>
  );
};

export default Eighth;
