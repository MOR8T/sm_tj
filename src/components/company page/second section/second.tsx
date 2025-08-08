import { useTranslations } from "next-intl";
import React from "react";

const Second = () => {
  const t = useTranslations("Company")
  return (
    <section className="md:max-w-[1300px] w-[90%] m-auto flex items-start justify-between md:py-20 py-10 md:flex-row flex-col md:gap-0 gap-2">
      <h2 className="text-[#1F2937] text-2xl md:text-[45px] font-semibold">{t("heading_ready_answers")}</h2>
      <aside className="md:w-[523px] flex flex-col gap-3 items-start">
        <p className="text-[#4B5563] text-[20px]">
         {t("description_ready_answers")}
        </p>
        <button className="bg-[#315266] text-white py-3 px-5 rounded-4xl">{t("button_visit_help_center")}</button>
      </aside>
    </section>
  );
};

export default Second;
