import React from "react";
import phone from "@/../public/third phone.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Fifth = () => {
  const t = useTranslations("Function");
  return (
    <section className="md:max-w-[1300px] w-[90%] m-auto py-10 flex items-start justify-between md:flex-row flex-col md:gap-0 gap-8">
      <div className="md:w-[421px] md:h-[510px] relative flex flex-col justify-between md:gap-0 gap-8">
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-[rgb(31,41,55)] text-2xl font-semibold">
            {t("section_heading")}
          </h2>
          <p className="text-[#4B5563]">{t("section_description")}</p>
          <button className="text-[#315266] text-[14px] font-semibold">
            {t("section_button")}
          </button>
        </div>
        <Image src={phone} alt="phone" className="relative z-10" />
        <div className="w-[90%] bg-[#d1d2d2b8] absolute bottom-0 h-[200px] rounded-2xl"></div>
      </div>
      {/* /// */}
      <div className="md:w-[500px] w-[100%]">
        <div className="md:w-[55%] w-[100%] flex flex-col gap-3">
          <div className="flex w-[100%] items-center justify-between border-[#EBEBEF] border-1 pr-5 cursor-pointer hover:bg-[#F4F4F5] text-[#1F2937] rounded-xl">
            <button className="py-5 px-5 cursor-pointer text-[13px] font-semibold text-start">
              {t("option_1_")}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div className="flex w-[100%] items-center justify-between border-[#EBEBEF] border-1 pr-5 cursor-pointer hover:bg-[#F4F4F5] text-[#1F2937] rounded-xl">
            <button className="py-5 px-5 cursor-pointer text-[13px] font-semibold text-start">
              {t("option_2_")}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div className="flex w-[100%] items-center justify-between border-[#EBEBEF] border-1 pr-5 cursor-pointer hover:bg-[#F4F4F5] text-[#1F2937] rounded-xl">
            <button className="py-5 px-5 cursor-pointer text-[13px] font-semibold text-start">
              {t("option_3_")}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div className="flex w-[100%] items-center justify-between border-[#EBEBEF] border-1 pr-5 cursor-pointer hover:bg-[#F4F4F5] text-[#1F2937] rounded-xl">
            <button className="py-5 px-5 cursor-pointer text-[13px] font-semibold text-start">
              {t("option_4_")}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div className="flex w-[100%] items-center justify-between border-[#EBEBEF] border-1 pr-5 cursor-pointer hover:bg-[#F4F4F5] text-[#1F2937] rounded-xl">
            <button className="py-5 px-5 cursor-pointer text-[13px] font-semibold text-start">
              {t("option_5_")}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fifth;
