import { useTranslations } from "next-intl";
import React from "react";

const Fifth = () => {
    const t = useTranslations("HomePage")
  return (
    <section className="my-20 md:w-[1193px] m-auto md:flex-row-reverse flex-col-reverse w-[90%] md:h-[545px] flex items-center justify-between">
      <aside className="flex flex-col items-start gap-5 md:w-[456px]">
        <h2 className="md:text-[45px] text-[27px]">
          {t("trackFinancesTitle")}
        </h2>
        <p className="text-[18px] text-[#4B5563]">{t("trackFinancesDesc")}</p>
        <ul className="list-disc pl-5 text-[18px] font-semibold">
          <li>{t("feature1")}</li>
          <li>{t("feature2")}</li>
          <li>{t("feature3")}</li>
        </ul>
        <button className="text-[14px] font-semibold cursor-pointer">
          {t("goToFeatures")}
        </button>
      </aside>
      <aside className="md:w-[536px] w-[99%] h-[500px] md:h-[545px] relative">
        <article className="w-[280px] h-[157px] border-1 border-[#EDECEB] rounded-2xl bg-white p-5 flex flex-col justify-between absolute right-0 top-[-50px] md:top-0 z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-[#315266] text-[23px] font-semibold">
              +TJS 100
            </h2>
            <button className="bg-[#619ABC] text-white text-[13px] py-2 px-3 rounded-2xl">
              TJS123.100
            </button>
          </div>
          <p className="text-[#1F2937] text-[13px]">
            {t("cardTransactionSuccess")}
          </p>
          <p className="text-[#5D6180] text-[13px]">Dec 07th, 2026</p>
        </article>
        <div className="bg-[#F3F5F6B8] py-14 w-[100%] absolute left-0 px-8 rounded-3xl bottom-40 z-0">
          <article className="w-[280px] h-[157px] border-1 border-[#EDECEB] rounded-2xl bg-white p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-[#315266] text-[23px] font-semibold">
                -TJS 100
              </h2>
              <button className="bg-[#315266] text-white text-[13px] py-2 px-3 rounded-2xl">
                TJS123.100
              </button>
            </div>
            <p className="text-[#1F2937] text-[13px]">
              {t("cardTransactionUpdate")}
            </p>
            <p className="text-[#5D6180] text-[13px]">Dec 07th, 2026</p>
          </article>
        </div>
        <article className="md:w-[368px] w-[90%] h-[92px] bg-white border-1 border-[#EDECEB] rounded-2xl absolute bottom-25 md:left-15 left-2 flex items-center justify-evenly">
          <aside className="md:w-[209px]">
            <div className="flex justify-between">
              <h2 className="text-[13px] text-[#1F2937]">
                {t("weeklyReport")}
              </h2>
              <p className="text-[16px] text-[#315266] font-semibold">
                +TJS 325
              </p>
            </div>
            <div className="flex justify-between">
              <h2 className="text-[13px] text-[#1F2937]">
                {t("totalBalance2")}
              </h2>
              <p className="text-[16px] text-[#315266] font-semibold">
                TJS 123.000
              </p>
            </div>
          </aside>
          <hr className="border-1 border-[#EEEEEE] h-[52px]" />
          <p className="text-[#5D6180] text-[13px]">Dec 07th, 2026</p>
        </article>
      </aside>
    </section>
  );
};

export default Fifth;
