import React from "react";
import Image from "next/image";
import phone from "@/../public/Group 2085665914.svg";
import { useTranslations } from "next-intl";

const First = () => {
  const t = useTranslations("Company");
  return (
    <div className={`md:h-[900px] backImg`}>
      <div className="fsf_blur">
        <section className="md:max-w-[1300px] w-[90%] m-auto flex items-center justify-between md:py-0 py-10 md:gap-0 gap-10 md:h-[900px] md:flex-row flex-col">
          <aside className="md:w-[536px] flex flex-col gap-3 items-start">
            <h1 className="md:text-[62px] text-[30px] font-semibold">
              {t("heading_help")}
            </h1>
            <p className="text-[#4B5563] text-[20px]">
              {t("description_help")}
            </p>
            <button className="bg-[#315266] text-white py-2 px-5 rounded-3xl cursor-pointer font-semibold">
              {t("button_start_chatting")}
            </button>
            <div className="flex items-start gap-5 py-5 md:flex-row flex-col">
              <article className="w-[252px] flex flex-col items-start gap-2">
                <div className="flex items-center gap-2 font-semibold">
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
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h2>{t("feature_24_7_title")}</h2>
                </div>
                <p className="text-[#4B5563]">
                  {t("feature_24_7_description")}
                </p>
              </article>
              <article className="w-[252px] flex flex-col items-start gap-2">
                <div className="flex items-center gap-2 font-semibold">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <h2>{t("feature_personal_assistance_title")}</h2>
                </div>
                <p className="text-[#4B5563]">
                  {t("feature_personal_assistance_description")}
                </p>
              </article>
            </div>
          </aside>
          {/* ////////////// */}
          <Image src={phone} alt="phone" />
        </section>
      </div>
    </div>
  );
};

export default First;
