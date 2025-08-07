import { useTranslations } from "next-intl";
import React from "react";

const Second = () => {
  const t = useTranslations("App");
  return (
    <section className="md:max-w-[1300px] w-[90%] m-auto flex md:gap-0 gap-10 items-center md:flex-row flex-col justify-between py-20">
      <aside className="md:w-[500px]">
        <div className="md:w-[453px]">
          <h2 className="text-[#1F2937] md:text-[45px] text-2xl font-semibold">
            {t("second_title")}
          </h2>
          <p className="text-[#4B5563] text-[18px]">
            {t("second_description")}
          </p>
        </div>
        <div className="flex py-5 md:items-center items-start md:flex-row flex-col justify-between md:gap-0 gap-5">
          <article className="md:w-[45%]">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-[#666666]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
              <h2 className="text-[#666666] text-[18px]">
                {t("second_financial_planning_title")}
              </h2>
            </div>
            <p className="text-[#4B5563]">
              {t("second_financial_planning_description")}
            </p>
          </article>
          <article className="md:w-[45%]">
            <div className="flex gap-2 items-center">
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
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>

              <h2 className="text-[#666666] text-[18px]">
                {t("second_security_title")}
              </h2>
            </div>
            <p className="text-[#4B5563]">{t("second_security_description")}</p>
          </article>
        </div>
        <button className="bg-[#315266] text-white py-2 text-[14px] font-semibold px-4 rounded-4xl">
          {t("second_button_get_started")}
        </button>
      </aside>

      <div className="md:w-[500px] w-[100%] h-[450px] flex justify-center items-start relative">
        <div className="md:w-[444px] w-[100%] h-[288px] bg-[#F3F5F6B8] absolute rounded-3xl bottom-0 p-9 text-center">
          <h1 className="text-[#1F2937] text-[18px] mt-27 font-semibold">
            {t("second_rating_title")}
          </h1>
          <p className="text-[#4B5563]">{t("second_rating_description")}</p>
        </div>
        <div className="w-full md:max-w-[340px] bg-white rounded-3xl p-6 shadow-md flex-shrink-0 relative z-10 border-[#F3F5F6B8] border-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-gray-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-medium text-gray-900">
                {t("second_credit_rating_title")}
              </h2>
            </div>
            <button className="text-gray-600 text-sm font-medium hover:text-gray-800 transition-colors">
              {t("second_credit_rating_button")}
            </button>
          </div>

          {/* Credit Score Text */}
          <div className="mb-6">
            <p className="text-gray-600 text-base leading-relaxed">
              {t("second_credit_score_text")}
            </p>
          </div>

          {/* Credit Score Visual Indicator */}
          <div className="flex gap-1 mb-12">
            {/* Filled indicators (representing current score) */}
            {Array.from({ length: 13 }).map((_, index) => (
              <div
                key={`filled-${index}`}
                className="w-4 h-8 bg-teal-700 rounded-full"
              />
            ))}
            {/* Empty indicators (representing remaining score) */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="w-4 h-8 bg-gray-300 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
