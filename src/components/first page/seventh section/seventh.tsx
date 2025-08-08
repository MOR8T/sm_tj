import { useTranslations } from "next-intl";
import React from "react";

const Seventh = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="md:w-[1200px] mb-10 md:gap-0 gap-5 m-auto flex justify-between pt-20 md:flex-row flex-col items-center">
      <h3 className="text-[24px] font-semibold">{t("thereIsMore")}</h3>
      <button className="text-[#1F2937] py-1 px-3 border-[#E7EBED] border-1 text-[14px] font-semibold rounded-2xl">
        {t("personalAccounts")}
      </button>
      <button className="text-[#1F2937] py-1 px-3 border-[#E7EBED] border-1 text-[14px] font-semibold rounded-2xl">
        {t("businessBanking")}
      </button>
      <button className="text-[#1F2937] py-1 px-3 border-[#E7EBED] border-1 text-[14px] font-semibold rounded-2xl">
        {t("globalTransfers")}
      </button>
      <button className="text-[#1F2937] py-1 px-3 border-[#E7EBED] border-1 text-[14px] font-semibold rounded-2xl">
        {t("financialInsights")}
      </button>
    </section>
  );
};

export default Seventh;
