import { useTranslations } from "next-intl";
import React from "react";

const Fifth = () => {
  const t = useTranslations("Company");
  return (
    <section className="py-10 bg-[#F6F7F8]">
      <div className="md:max-w-[1300px] w-[90%] m-auto">
        <div className="flex items-start justify-between md:flex-row flex-col md:gap-0 gap-5">
          <h2 className="md:text-[45px] text-2xl text-[#1F2937] font-semibold md:w-[494px]">
            {t("priority_title")}
          </h2>
          <aside className="md:w-[519px] flex flex-col items-start gap-4">
            <p className="text-[#4B5563] text-[18px]">
              {t("priority_description")}
              money safe.{" "}
            </p>
            <button className="py-3 px-5 bg-[#315266] text-white rounded-4xl">
              {t("priority_button")}
            </button>
          </aside>
        </div>
      </div>
      <hr className="border-1 border-[#1F29370D] my-10 md:my-20" />
      <div className="md:max-w-[1300px] w-[90%] m-auto">
        <div className="flex items-start justify-between md:flex-row flex-col md:gap-0 gap-5">
          <article className="w-[339px]">
            <h2 className="text-[#1F2937] text-[18px] font-semibold">
              {t("protection_title")}
            </h2>
            <p className="text-[#4B5563] text-[18px]">
              {t("protection_description")}
            </p>
          </article>
          <article className="w-[339px]">
            <h2 className="text-[#1F2937] text-[18px] font-semibold">
              {t("integration_title")}
            </h2>
            <p className="text-[#4B5563] text-[18px]">
              {t("integration_description")}
            </p>
          </article>
          <article className="w-[339px]">
            <h2 className="text-[#1F2937] text-[18px] font-semibold">
              {t("solutions_title")}
            </h2>
            <p className="text-[#4B5563] text-[18px]">
              {t("solutions_description")}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Fifth;
