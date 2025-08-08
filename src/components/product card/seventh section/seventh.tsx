import React from "react";
import Image from "next/image";
import airplan from "@/../public/airplan.svg";
import security from "@/../public/security.svg";
import thirdLogo from "@/../public/logo2.png";
import hero from "@/../public/forSeventh.svg";
import { useTranslations } from "next-intl";

const Seventh = () => {
  const t = useTranslations("ProductCard");
  return (
    <div className="md:max-w-[1300px] md:flex-row flex-col w-[90%] md:gap-0 gap-10 m-auto md:py-10 pt-10 flex justify-between items-center">
      <aside className="md:w-[505px]">
        <h2 className="text-[#1F2937] md:text-[45px] text-2xl font-semibold">
          {t("seventh_title")}
        </h2>
        <p className="text-[#4B5563] text-[18px] py-5">
          {t("seventh_description")}
        </p>
        <Image src={hero} alt="hero" className="mt-6 md:mt-0"/>
      </aside>
      <div className="flex flex-col md:w-[511px] items-start gap-5">
        <article className="flex items-start gap-5">
          <Image src={airplan} alt="airplan" />
          <aside>
            <h2 className="text-[#1F2937] text-[18px] font-semibold">
              {t("seventh_step1_title")}
            </h2>
            <p className="text-[#4B5563] text-[18px]">
              {t("seventh_step1_description")}
            </p>
          </aside>
        </article>
        <article className="flex items-start gap-5">
          <Image src={security} alt="security" />
          <aside>
            <h2 className="text-[#1F2937] text-[18px] font-semibold">
              {t("seventh_step2_title")}
            </h2>
            <p className="text-[#4B5563] text-[18px]">
              {t("seventh_step2_description")}
            </p>
          </aside>
        </article>
        <article className="flex items-start gap-5">
          <Image src={thirdLogo} alt="thirdLogo" className="w-40 md:w-30" />
          <aside>
            <h2 className="text-[#1F2937] text-[18px] font-semibold">
              {t("seventh_step3_title")}
            </h2>
            <p className="text-[#4B5563] text-[18px]">
              {t("seventh_step3_description")}
            </p>
          </aside>
        </article>
      </div>
    </div>
  );
};

export default Seventh;
