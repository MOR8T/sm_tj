import React from "react";
import Image from "next/image";
import arrowTop from "@/../public/Frame 2.svg";
import arrowBottom from "@/../public/Frame 9.svg";
import illustration from "@/../public/Illustrations.svg";
import baluns from "@/../public/Group 154 (1).svg";
import tred from "@/../public/Group 152.svg";
import { useTranslations } from "next-intl";

const Sixth = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="md:w-[1193px] m-auto md:flex-row flex-col-reverse w-[90%] md:h-[545px] flex items-center justify-between">
      <aside className="flex flex-col items-start gap-5 md:w-[456px]">
        <h2 className="md:text-[45px] text-[27px]">{t("sectiontitle")}</h2>
        <p className="text-[18px] text-[#4B5563]">{t("sectiondescription")}</p>
        <ul className="list-disc pl-5 text-[18px] font-semibold">
          <li>{t("sectionlistinstant")}</li>
          <li>{t("sectionlistrealtime")}</li>
          <li>{t("sectionlistsecure")}</li>
        </ul>
        <button className="text-[14px] font-semibold cursor-pointer">
          {t("goToFeatures")}
        </button>
      </aside>
      <aside className="md:w-[536px] w-[99%] h-[500px] md:h-[545px] relative">
        <div className="w-[49px] h-[79px] absolute left-5 top-5">
          <Image src={arrowTop} alt="Arrow top" />
          <h2 className="text-[#CFD7DC] text-[12px] text-center">
            {t("cardsend")}
          </h2>
        </div>
        <div className="w-[49px] h-[79px] absolute left-20 top-5">
          <Image src={arrowBottom} alt="Arrow top" />
          <h2 className="text-[#CFD7DC] text-[12px] text-center">
            {t("cardreceive")}
          </h2>
        </div>
        <div className="md:w-[186px] w-[150px] md:h-[180px] h-[150px] z-10 border-2 border-[#EDECEB] rounded-xl flex flex-col items-center justify-center gap-3 absolute top-28 bg-[#FFFFFF]">
          <h2 className="md:text-[32px] text-[25px] font-semibold">768%</h2>
          <h3 className="text-[16px]">{t("cardtransfertitle")}</h3>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#619ABC]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
            <p className="text-[#619ABC] text-[14px]">18,21%</p>
          </div>
        </div>
        <Image
          src={illustration}
          alt="illustration"
          className="absolute right-0 bottom-25 z-10"
        />
        <div className="md:w-[388px] h-[150px] border-2 border-[#EDECEB] rounded-xl bg-white absolute bottom-18 z-10">
          <div className="flex items-center justify-between p-4 md:gap-0 gap-5">
            <h2 className="text-[#1F2937] text-[16px] font-semibold">
              {t("balancetitle")}
            </h2>
            <div className="flex items-center gap-1.5">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              <p className="text-[#4B5563]">{t("balancedate")}</p>
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-end justify-between pl-4 pr-5">
            <aside>
              <h2 className="text-[#1F2937] md:text-[32px] font-semibold">
                TJS 4201
              </h2>
              <p className="text-[#4B5563] md:text-[16px]">
                {t("balancepercentage")}
              </p>
            </aside>
            <Image src={baluns} alt="Balun" className="w-[60px] md:w-[150px]" />
          </div>
        </div>
        <div className="md:w-[288px] w-[200px] h-[400px] md:h-[444px] bg-[#F3F5F6B8] rounded-xl absolute right-5 top-13 flex justify-center">
          <div className="md:w-[257px] md:h-[220px] h-[200px] w-[180px] bg-white mt-5 rounded-xl p-4 flex flex-col justify-between">
            <h2 className="text-[16px]">{t("transactionstitle")}</h2>
            <Image src={tred} alt="Treding center" />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Sixth;
