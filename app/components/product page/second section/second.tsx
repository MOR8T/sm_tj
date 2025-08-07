import React from "react";
import icon1 from "@/public/editor.svg (3).svg";
import icon2 from "@/public/editor.svg (4).svg";
import icon3 from "@/public/editor.svg (5).svg";
import icon4 from "@/public/editor.svg (6).svg";
import arrowTop from "@/public/arrow-right.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Second = () => {
  const t = useTranslations("ProductPage");
  interface Items {
    icon: string;
    name: string;
    disc: string;
  }
  const boxs: Items[] = [
    {
      icon: icon1,
      name: t("secondFeature1Title"),
      disc: t("secondFeature1Description"),
    },
    {
      icon: icon2,
      name: t("secondFeature2Title"),
      disc: t("secondFeature2Description"),
    },
    {
      icon: icon3,
      name: t("secondFeature3Title"),
      disc: t("secondFeature3Description"),
    },
    {
      icon: icon4,
      name: t("secondFeature4Title"),
      disc: t("secondFeature4Description"),
    },
  ];
  return (
    <section className="md:max-w-[1300px] md:gap-0 gap-5 w-[90%] m-auto h-[669px] pt-10 flex items-start justify-between md:flex-row flex-col">
      <section className="md:w-[499px] md:py-0 py-7">
        <h2 className="md:text-[45px] text-[22px] text-[#1F2937] font-semibold">
          {t("secondTitle")}
        </h2>
        <p className="md:text-[20px] text-[#4B5563] py-5 text-[15px]">
          {t("secondDescription")}
        </p>
        <button className="bg-[#315266] text-white px-5 text-[14px] font-semibold cursor-pointer rounded-[30px] py-2">
          {t("secondButton")}
        </button>
      </section>
      <section className="md:w-[631px] h-[650px] flex flex-col gap-5 overflow-y-auto relative">
        {boxs.map((e, i) => {
          return (
            <article
              key={i}
              className="w-[100%] rounded-[16px] border-1 border-[#cccccc] p-5"
            >
              <div className="flex items-center justify-between">
                <aside className="flex items-center gap-3 mb-2">
                  <Image src={e.icon} alt={e.name} />
                  <h2 className="font-semibold text-[18px] text-[#1F2937]">
                    {e.name}
                  </h2>
                </aside>
                <Image src={arrowTop} alt="arrow top" />
              </div>
              <p className="text-[#4B5563]">{e.disc}</p>
            </article>
          );
        })}
        <div className="absolute w-[100%] h-[150px] bottom-0 bg-[#ffffff95] md:block hidden"></div>
      </section>
    </section>
  );
};

export default Second;
