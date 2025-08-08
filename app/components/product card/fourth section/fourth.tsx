import React from "react";
import Image from "next/image";
import phone from "@/public/Group 2085665869.svg";
import home from "@/public/Group 2085665885.png";
import shot from "@/public/Logo.png";
import headphone from "@/public/logo2.png";
import { useTranslations } from "next-intl";

const Fourth = () => {
  const t = useTranslations("ProductCard")
  return (
    <div className="md:max-w-[1300px] md:flex-row flex-col w-[90%] md:gap-0 gap-15 m-auto py-10 flex justify-between items-center">
      <aside className="md:w-[505px]">
        <h2 className="text-[#1F2937] md:text-[45px] text-2xl font-semibold">
          {t("fourth_title")}
        </h2>
        <p className="text-[#4B5563] text-[18px] py-5">
          {t("fourth_description")}
        </p>
        <div className="flex flex-col items-start gap-5">
          <article className="flex items-start gap-5">
            <Image src={home} alt="home" />
            <aside>
              <h2 className="text-[#1F2937] text-[18px] font-semibold">
                {t("fourth_step1_title")}
              </h2>
              <p className="text-[#4B5563] text-[18px]">
                {t("fourth_step1_description")}
              </p>
            </aside>
          </article>
          <article className="flex items-start gap-5">
            <Image src={shot} alt="home" />
            <aside>
              <h2 className="text-[#1F2937] text-[18px] font-semibold">
                {t("fourth_step2_title")}
              </h2>
              <p className="text-[#4B5563] text-[18px]">
                {t("fourth_step2_description")}
              </p>
            </aside>
          </article>
          <article className="flex items-start gap-5">
            <Image src={headphone} alt="home" />
            <aside>
              <h2 className="text-[#1F2937] text-[18px] font-semibold">
                {t("fourth_step3_title")}
              </h2>
              <p className="text-[#4B5563] text-[18px]">
                {t("fourth_step3_description")}
              </p>
            </aside>
          </article>
        </div>
      </aside>
      <Image src={phone} alt="phone" />
    </div>
  );
};

export default Fourth;
