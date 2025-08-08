import React from "react";
import Image from "next/image";
import icon1 from "../../../../public/Icon (4).svg";
import icon2 from "../../../../public/Icon (5).svg";
import icon3 from "../../../../public/Icon (6).svg";
import icon4 from "../../../../public/Icon (7).svg";
import { useTranslations } from "next-intl";

const Eighth = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="md:w-[1179px] m-auto h-[400px] md:h-[645px] relative">
      <h2 className="md:text-[45px] text-2xl text-[#1F2937] left-5 top-8 absolute md:left-10 md:top-10">
        {t("eighttitle")}
      </h2>
      {/* /////////////// */}
      <section className="flex overflow-x-auto justify-between w-[90%] md:w-[1179px] md:gap-0 gap-10 m-auto h-[400px] md:h-[645px]">
        <div className="md:w-[358.66px] md:border-r-1 h-[100%] md:border-[#EBEBEB] flex flex-row md:flex-col items-center justify-end gap-15">
          <article className="w-[262.66px]">
            <div className="flex items-center gap-3 mb-2">
              <Image src={icon1} alt="icon 1" />
              <h2 className="text-[#666666] text-[16px] font-semibold">
                {t("eightcard1title")}
              </h2>
            </div>
            <p className="text-[#4B5563] text-[20px] font-semibold">
              {t("eightcard1description")}
            </p>
          </article>
          <article className="w-[262.66px] md:mb-15">
            <div className="flex items-center gap-3 mb-2">
              <Image src={icon2} alt="icon 1" />
              <h2 className="text-[#666666] text-[16px] font-semibold">
                {t("eightcard2title")}
              </h2>
            </div>
            <p className="text-[#4B5563] text-[20px] font-semibold">
              {t("eightcard2description")}
            </p>
          </article>
        </div>
        {/* //////////// */}
        <div className="w-[358.66px] md:border-r-1 h-[100%] md:border-[#EBEBEB] flex items-center flex-row md:flex-col  justify-end">
          <article className="w-[262.66px] md:mb-15">
            <div className="flex items-center gap-3 mb-2">
              <Image src={icon3} alt="icon 1" />
              <h2 className="text-[#666666] text-[16px] font-semibold">
                {t("eightcard3title")}
              </h2>
            </div>
            <p className="text-[#4B5563] text-[20px] font-semibold">
              {t("eightcard3description")}.
            </p>
          </article>
        </div>
        {/* ////////// */}
        <div className="w-[358.66px] h-[100%] flex flex-row md:flex-col items-center justify-end gap-15">
          <article className="w-[100%] h-[180px] md:flex hidden flex-col items-center justify-center border-t-1 border-[#EBEBEB] border-b-1">
            <p className="text-[42.8px] font-semibold bg-gradient-to-r border-l-1 pl-5 border-[#9494942B] from-[#9494942B] to-[#FAFAFA] bg-clip-text text-transparent">
              {t("eightcard4uptime")}
            </p>
          </article>
          <article className="w-[262.66px] md:mb-15">
            <div className="flex items-center gap-3 mb-2">
              <Image src={icon4} alt="icon 1" />
              <h2 className="text-[#666666] text-[16px] font-semibold">
                {t("eightcard2title")}
              </h2>
            </div>
            <p className="text-[#4B5563] text-[20px] font-semibold">
              {t("eightcard5description")}
            </p>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Eighth;
