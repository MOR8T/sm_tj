import { useTranslations } from "next-intl";
import React from "react";
import roundLine from '@/public/thikl.svg'
import line from '@/public/first line.svg'
import lastLine from '@/public/last line.svg'
import Image from "next/image";

const First = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="md:h-[850px] backImg">
      <div className="fsf_blur h-[100%]">
        <section className="md:max-w-[1440px] w-[90%] m-auto md:border-r-2 md:border-l-2 border-[#1514180D] h-[100%] flex flex-col items-center justify-center">
          <h1 className="md:w-[692px] md:text-[62px] text-2xl font-semibold text-center mt-20">
            {t("title")}
          </h1>
          <p className="text-[#4B5563] text-center md:text-xl">{t("firstP")}</p>
          <div className="flex md:flex-row flex-col items-center gap-10 justify-center my-7 mb-18">
            <aside className="bg-[#EBECEE] pl-4 rounded-3xl border-1 border-white text-[14px]">
              <input
                type="text"
                placeholder={t("inputPlaceholder")}
                className="outline-0"
              />
              <button className="bg-[#315266] text-white py-3 rounded-3xl px-3 font-semibold cursor-pointer">
                {t("openAccount")}
              </button>
            </aside>
            <button className="text-[14px] font-semibold text-[#315266] cursor-pointer">
              {t("generateCard")}
            </button>
          </div>
          <div className="overflow-x-auto w-[100%] md:overflow-hidden mt-10">
          <section className="w-[900px] border-r-2 border-l-2 border-t-2 border-[#1514180D] md:h-[390px] m-auto rounded-t-[55px] md:rounded-t-[70px]">
            <section className="bg-white w-[100%] md:w-[96%] p-5 h-[100%] rounded-t-[55px] md:mt-5 md:ml-5 md:mr-5">
              <div className="flex items-center justify-end mr-2">
                <div className="w-[700px] border-r-2 border-t-2 md:overflow-auto overflow-x-scroll border-l-0 md:rounded-l-0 border-b-2 border-[#D7DBE0] rounded-r-4xl flex justify-between items-center py-2">
                  <div className="flex items-center gap-5 px-5">
                    <button className="md:text-[15px] text-[10px] py-1 px-3 rounded-2xl font-semibold hover:text-black cursor-pointer border-2 border-[#AAABAD]">
                      {t("Dashboard")}
                    </button>
                    <button className="md:text-[15px] text-[10px] py-1 px-3 rounded-2xl hover:border-2 text-[#AAABAD] hover:text-black cursor-pointer border-white border-2 hover:border-[#AAABAD]">
                      {t("Transactions")}
                    </button>
                    <button className="md:text-[15px] text-[10px] py-1 px-3 rounded-2xl hover:border-2 text-[#AAABAD] hover:text-black cursor-pointer border-white border-2 hover:border-[#AAABAD]">
                      {t("Cards")}
                    </button>
                    <button className="md:text-[15px] text-[10px] py-1 px-3 rounded-2xl hover:border-2 text-[#AAABAD] hover:text-black cursor-pointer border-white border-2 hover:border-[#AAABAD]">
                      {t("Settings")}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 px-5">
                    <h1 className="text-2xl text-[#D9D9D9]">⬤</h1>
                    <h1 className="md:text-[15px] text-[10px] md:font-semibold">
                      Your Name
                    </h1>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <h2 className="text-[16px] font-semibold">
                  {t("todaysOverview")}
                </h2>
                <div className="mt-4 flex items-center justify-between md:gap-0 gap-5">
                  <article className="bg-[#EFEFEF] md:w-[370px] w-[100%] p-6 rounded-2xl flex flex-col gap-3">
                    <h3 className="text-[12px] font-semibold">
                      {t("totalBalance")}
                    </h3>
                    <h2 className="text-2xl font-bold">TJS 11,289.00</h2>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 text-[#767679]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                      <h2 className="text-[#767679] text-[10px]">
                        {t("lastUpdate")}
                      </h2>
                    </div>
                  </article>
                  <article className="bg-[#EFEFEF] w-[100%] md:w-[200px] p-6 rounded-2xl flex flex-col gap-3 bg-gradient-to-b from-[#EFEFEF] to-[#CBD7DF]">
                    <h3 className="text-[12px] font-semibold">
                      {t("totalIncome")}
                    </h3>
                    <h2 className="md:text-[18px] text-2xl font-bold">
                      TJS 2,489.00
                    </h2>
                    <h2 className="text-[#767679] text-[12px]">+3,60%</h2>
                  </article>
                  <article className="bg-[#EFEFEF] w-[100%] md:w-[200px] p-6 rounded-2xl flex flex-col gap-3 bg-gradient-to-b from-[#EFEFEF] to-[#E3D6D6]">
                    <h3 className="text-[12px] font-semibold">
                      {t("totalOutcome")}
                    </h3>
                    <h2 className="md:text-[18px] text-2xl font-bold">
                      TJS 5,683.00
                    </h2>
                    <h2 className="text-[#767679] text-[12px]">-2,60%</h2>
                  </article>
                </div>
                {/* //////// */}
                <section className="w-[100%] h-[90px] flex items-end justify-center border-t-1 border-r-[#D7DCE0B8] border-l-[#D7DCE0B8] border-r-1 border-l-1 rounded-t-2xl mt-6 border-t-[#75787A]">
                  <div className="w-[742px] flex items-center justify-between">
                    <h2 className="text-[#bdbdbd] text-2xl font-semibold">{t("history")}</h2>
                    <div className="flex items-center justify-end gap-2 flex-col">
                      <h2 className="text-[#bdbdbd] border-1 border-[#bdbdbd] px-2 rounded-xl">{t("average")}</h2>
                      <Image src={roundLine} alt="rounded line"/>
                    </div>
                    <div>
                      <h2 className="text-[#bdbdbd] text-xl font-semibold">TJS 2.60</h2>
                      <Image src={line} alt="Last line"/>
                      <h2 className="text-[#bdbdbd] text-xl font-semibold">TJS 6.30</h2>
                    </div>
                    <Image src={lastLine} alt="Last line"/>
                  </div>
                </section>
                {/* //////// */}
              </div>
            </section>
          </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default First;
