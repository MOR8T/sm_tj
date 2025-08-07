import React from "react";
import logo1 from "@/public/Logo (1).svg";
import logo2 from "@/public/Logo (3).svg";
import logo3 from "@/public/Logo (2).svg";
import logo4 from "@/public/Logo (4).svg";
import phone from "@/public/Group 2085665890.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Third = () => {
  const t = useTranslations("App");
  return (
    <div className="md:max-w-[1300px] w-[90%] m-auto py-10">
      <div className="md:w-[537px] m-auto text-center">
        <h2 className="md:text-[45px] text-2xl font-semibold text-[#1F2937]">
          {t("third_title")}
        </h2>
        <p className="text-[20px] text-[#4B5563]">{t("third_description")}</p>
      </div>
      <section className="md:h-[700px] md:py-0 py-10 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-10">
        <div className="md:w-[446px] w-[100%] md:hidden flex items-center justify-center relative">
          <Image src={phone} alt="Phone" className="relative z-10" />
          <div className="bg-[#F3F5F6B8] md:w-[400px] w-[100%] rounded-3xl h-[445px] absolute"></div>
        </div>
        <div className="flex flex-col justify-evenly h-[100%] md:gap-0 gap-8">
          <div className="w-[253px] text-center flex items-center justify-center gap-2 flex-col">
            <Image src={logo1} alt="logo 1" />
            <h2 className="text-[18px] text-[#1F2937] font-semibold">
              {t("third_easy_access_title")}
            </h2>
            <p className="text-[#4B5563]">
              {t("third_easy_access_description")}
            </p>
          </div>
          <div className="w-[253px] text-center flex items-center justify-center gap-2 flex-col">
            <Image src={logo2} alt="logo 1" />
            <h2 className="text-[18px] text-[#1F2937] font-semibold">
              {t("third_instant_loans_title")}
            </h2>
            <p className="text-[#4B5563]">
              {t("third_instant_loans_description")}
            </p>
          </div>
        </div>
        <div className="md:w-[446px] w-[100%] md:flex hidden items-center justify-center relative">
          <Image src={phone} alt="Phone" className="relative z-10" />
          <div className="bg-[#F3F5F6B8] md:w-[400px] w-[100%] rounded-3xl h-[445px] absolute"></div>
        </div>
        <div className="flex flex-col justify-evenly h-[100%] md:gap-0 gap-8">
          <div className="w-[253px] text-center flex items-center justify-center gap-2 flex-col">
            <Image src={logo3} alt="logo 1" />
            <h2 className="text-[18px] text-[#1F2937] font-semibold">
              {t("third_digital_payments_title")}
            </h2>
            <p className="text-[#4B5563]">
              {t("third_digital_payments_description")}
            </p>
          </div>
          <div className="w-[253px] text-center flex items-center justify-center gap-2 flex-col">
            <Image src={logo4} alt="logo 1" />
            <h2 className="text-[18px] text-[#1F2937] font-semibold">
              {t("third_smart_investments_title")}
            </h2>
            <p className="text-[#4B5563]">
              {t("third_smart_investments_description")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Third;
