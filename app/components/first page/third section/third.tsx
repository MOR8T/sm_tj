import { useTranslations } from "next-intl";
import React from "react";

const Third = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="md:w-[550px] w-[90%] flex flex-col justify-center items-center m-auto h-[300px] md:h-[500px]">
      <h2 className="md:w-[537px] md:text-5xl text-[24px] text-center md:leading-15">
        {t("modernBankingTitle")}
      </h2>
      <p className="md:text-[20px] text-[15px ] text-center my-3 text-[#4B5563]">
        {t("modernBankingDesc")}
      </p>
    </section>
  );
};

export default Third;
