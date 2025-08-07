import React from "react";
import Image from "next/image";
import card from "@/public/Tecno pattern.svg";
import { useTranslations } from "next-intl";

const First = () => {
  const t = useTranslations("Function")
  return (
    <div className={`md:h-[900px] backImg`}>
      <div className="fsf_blur">
      <section className="md:max-w-[1300px] w-[90%] m-auto flex items-center justify-between md:py-0 py-10 md:gap-0 gap-10 md:h-[900px] md:flex-row flex-col">
        <aside className="md:w-[536px] flex flex-col gap-3 items-start">
          <h1 className="md:text-[62px] text-[26px] font-semibold">
            {t("first_heading")}
          </h1>
          <p className="text-[#4B5563] text-[20px]">
            {t("first_description")}
          </p>
          <button className="bg-[#315266] text-white py-2 px-5 rounded-3xl cursor-pointer font-semibold">
            {t("first_button_get_started")}
          </button>
          <div className="flex items-center gap-3 py-5 md:flex-row flex-col">
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
                <h2>{t("first_feature_easy_access_title")}</h2>
              </div>
              <p className="text-[#4B5563]">
                {t("first_feature_easy_access_description")}
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

                <h2>{t("first_feature_fast_practical_title")}</h2>
              </div>
              <p className="text-[#4B5563]">
                {t("first_feature_fast_practical_description")}
              </p>
            </article>
          </div>
        </aside>
        {/* ////////////// */}
        <div className="md:w-[543px] w-[100%] md:h-[702px] rounded-3xl md:border-1 border-[#e1e2e2] md:p-6 flex flex-col justify-between md:gap-0 gap-3">
          <div className="flex md:items-start justify-between flex-row md:gap-0 gap-3">
            <article className="md:w-[275px] md:h-[296px] bg-white rounded-2xl flex flex-col md:gap-0 gap-2 justify-between p-4">
              <h2 className="font-semibold md:text-[16px] text-[10px]">{t("first_manage_cards_title")}</h2>
              <Image src={card} alt="card" />
              <div className="flex items-center justify-center w-[100%]">
                <div className="w-12 h-1 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-1/3 bg-[#153E52]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between md:gap-0 gap-3">
                <button className="bg-[#315266] py-2 px-5 text-white rounded-xl text-[8px] md:text-[14px]">
                 {t("first_manage_cards_button_manage")}
                </button>
                <button className="text-[#315266] border-1 border-[#EBECEF] py-2 px-5 text-[8px] md:text-[14px] rounded-xl">
                  {t("first_manage_cards_button_add")}
                </button>
              </div>
            </article>
            <article className="md:w-[194px] w-full md:gap-0 gap-[2px] md:h-[296px] bg-white rounded-2xl p-4 md:p-6 flex flex-col justify-between">
              <h2 className="text-[#1F2937] font-semibold md:text-[16px] text-[10px]">{t("first_total_savings_title")}</h2>
              <div>
                <h2 className="text-[#1F2937] md:text-xl">TJS5,146.12</h2>
                <p className="text-[#4B5563] text-[10px] md:text-[13px]">
                  {t("first_total_savings_increase")}
                </p>
              </div>
              <hr className="border-[#EBECEF] border-1" />
              <article>
                <div className="flex items-center justify-between">
                  <h2 className="text-[14px] font-semibold">{t("first_savings_car_title")}</h2>
                  <p className="text-[11px]">TJS1,510/TJS2,000</p>
                </div>
                <div className="w-full md:h-2 h-1 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-1/3 bg-[#153E52]"></div>
                </div>
              </article>
              <article>
                <div className="flex items-center justify-between">
                  <h2 className="text-[14px] font-semibold">{t("first_savings_home_title")}</h2>
                  <p className="text-[11px]">TJS3,174/TJS4,000</p>
                </div>
                <div className="w-full h-1 md:h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-1/2 bg-[#153E52]"></div>
                </div>
              </article>
              <article>
                <div className="flex items-center justify-between">
                  <h2 className="text-[14px] font-semibold">{t("first_savings_wedding_title")}</h2>
                  <p className="text-[11px]">TJS816/TJS1,000</p>
                </div>
                <div className="w-full h-1 md:h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-1/1 bg-[#153E52]"></div>
                </div>
              </article>
              <article>
                <div className="flex items-center justify-between">
                  <h2 className="text-[14px] font-semibold">{t("first_savings_health_title")}</h2>
                  <p className="text-[11px]">TJS83/TJS150</p>
                </div>
                <div className="w-full h-1 md:h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-1/3 bg-[#153E52]"></div>
                </div>
              </article>
            </article>
          </div>
          {/* ////////// */}
          <article className="w-[100%] md:h-[136px] rounded-xl p-6 bg-white flex flex-col justify-between">
            <h2 className="text-[#1F2937] font-semibold">{t("first_card_details_title")}</h2>
            <div className="flex md:items-center items-start md:gap-0 gap-2 justify-between md:flex-row flex-col">
              <div className="flex items-center gap-3">
                <Image src={card} alt="card" className="w-[79px]" />
                <aside>
                  <p className="text-[#4B5563] text-[10px] md:text-[13px]">
                    14781 4189 2439 4815
                  </p>
                  <h2 className="font-semibold">{t("first_card_details_holder")}</h2>
                </aside>
              </div>
              <aside>
                <h2 className="text-[#1F2937] font-semibold">TJS401,519.00</h2>
                <p className="text-[#315266] text-[13px]">{t("first_card_details_see_transactions")}</p>
              </aside>
            </div>
          </article>
          {/* /////////////// */}
          <article className="md:h-[164px] w-[100%] bg-white rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-[#1F2937] font-semibold">{t("first_account_overview_title")}</h2>
              <p className="text-[#4B5563]">
                {t("first_account_overview_summary")}
              </p>
            </div>
            <div className="flex md:items-center justify-between items-start md:pt-0 pt-3">
              <div>
                <p className="text-[#4B5563] text-[10px] md:text-[16px]">{t("first_account_balance_title")}</p>
                <h2 className="font-semibold">TJS106,315.58</h2>
              </div>
              <hr className="h-[40px] w-0 border-1 border-[#EBECEF]" />
              <div>
                <p className="text-[#4B5563] text-[10px] md:text-[16px]">{t("first_account_total_income_title")}</p>
                <h2 className="font-semibold">TJS51,182.21</h2>
              </div>
              <hr className="h-[40px] w-0 border-1 border-[#EBECEF]" />
              <div>
                <p className="text-[#4B5563] text-[10px] md:text-[16px]">{t("first_account_total_outcome_title")}</p>
                <h2 className="font-semibold">TJS43,522.84</h2>
              </div>
            </div>
          </article>
        </div>
      </section>
      </div>
    </div>
  );
};

export default First;
