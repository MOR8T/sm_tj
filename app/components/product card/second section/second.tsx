import React from "react";
import Image from "next/image";
import people from "@/public/Group 1171274822.svg";
import expent from "@/public/Expense Details V-1 1.svg";
import { useTranslations } from "next-intl";

const Second = () => {
  const t = useTranslations("ProductCard")
  return (
    <div className="md:max-w-[1300px] w-[95%] m-auto py-10">
      <div className="text-center m-auto md:w-[537px]">
        <h2 className="text-[#1F2937] text-2xl md:text-[45px] font-semibold">
          {t("second_title")}
        </h2>
        <p className="text-[#4B5563] text-[20px] py-5">
          {t("second_description")}
        </p>
      </div>
      <div className="w-full max-w-[1300px] mx-auto p-4 sm:p-6 overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="sm:col-span-1 lg:col-span-3 bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              {t("second_box1_title")}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
              {t("second_box1_subtitle")}
            </p>
            <div className="mb-4 sm:mb-6">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {t("second_box1_value")}
              </div>
              <div className="relative">
                <div className="w-full h-2 rounded-full">
                  <div className="w-3/4 h-2 bg-blue-500 rounded-full relative">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-block bg-blue-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm mb-4 sm:mb-6">
              {t("second_box1_chip")}
            </div>

            <p className="text-xs sm:text-sm text-gray-600">
              {t("second_box1_footer")}
            </p>
          </div>
          <div className="sm:col-span-1 lg:col-span-3 bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              {t("second_box2_payment_title")}
            </p>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("second_box2_payment_amount")}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {t("second_box2_payment_footer")}
            </p>
          </div>
          <div className="sm:col-span-1 lg:col-span-3 bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              {t("second_box3_trusted_title")}
            </h3>
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="flex -space-x-1 sm:-space-x-2">
                <Image src={people} alt="people" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {t("second_box3_trusted_footer")}
            </p>
          </div>
          <div className="sm:col-span-1 lg:col-span-3 bg-slate-700 rounded-2xl p-4 sm:p-6 shadow-sm text-white relative">
            <div className="flex justify-between items-start mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <div className="text-white">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-slate-300 mb-2">
                {t("second_box4_total_balance_label")}
              </p>
              <div className="text-xl sm:text-2xl font-bold">{t("second_box4_total_balance_value")}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="lg:col-span-3 bg-sky-200 rounded-2xl p-4 sm:p-6 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-slate-700 mb-6 sm:mb-8">
              {t("second_box5_title")}
            </h3>
            <div className="text-center mb-4 sm:mb-6">
              <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
               {t("second_box5_amount")}
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
              {t("second_box5_description")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button className="flex-1 bg-white text-slate-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
                <span>{t("second_box5_button_purchases")}</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
              <button className="flex-1 bg-slate-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
                <span>{t("second_box5_button_share")}</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 sm:mt-4 text-center">
              {t("second_box5_footer")}
            </p>
          </div>
          <div className="lg:col-span-9 bg-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                {t("second_open_account_title")}
              </h2>
              <p className="text-slate-300 mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
               {t("second_open_account_description")}
              </p>
              <button className="bg-white text-slate-800 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
               {t("second_open_account_button")}
              </button>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  d="M50,100 Q100,50 150,100 Q100,150 50,100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M30,120 Q80,70 130,120 Q80,170 30,120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
              {t("second_comparison_title")}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm text-gray-600 w-16 sm:w-20 flex-shrink-0">
                  {t("second_comparison_this_month_1")}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 sm:h-3">
                  <div className="w-1/2 h-2 sm:h-3 bg-sky-400 rounded-full"></div>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 w-6 sm:w-8 flex-shrink-0">
                  50%
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm text-gray-600 w-16 sm:w-20 flex-shrink-0">
                  {t("second_comparison_this_month_1")}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 sm:h-3">
                  <div className="w-2/3 h-2 sm:h-3 bg-slate-600 rounded-full"></div>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 w-6 sm:w-8 flex-shrink-0">
                  65%
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:pl-6 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t("second_hold_funds_title")}
              </h3>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm text-blue-600 font-medium">
                  {t("second_hold_funds_link")}
                </span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <div>
              <Image src={expent} alt="expent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
