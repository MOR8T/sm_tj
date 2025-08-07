import React from "react";
import firsticon from "@/public/Ic-Simple.svg";
import secondicon from "@/public/Group 2085665884.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Fourth = () => {
  const t = useTranslations("ProductPage");
  interface boxInfo {
    img: string;
    name: string;
    disc: string;
  }
  const box: boxInfo[] = [
    {
      img: firsticon,
      name: t("fourthStep1Title"),
      disc: t("fourthStep1Description"),
    },
    {
      img: secondicon,
      name: t("fourthStep2Title"),
      disc: t("fourthStep2Description"),
    },
    {
      img: firsticon,
      name: t("fourthStep3Title"),
      disc: t("fourthStep3Description"),
    },
  ];
  return (
    <section className="md:max-w-[1330px] w-[90%] md:h-[600px] m-auto my-20">
      <h2 className="text-center text-[] md:text-[45px] text-[#1F2937] text-2xl font-semibold">
        {t("fourthTitle")}
      </h2>
      <p className="text-center text-[#4B5563] md:text-[20px]">
        {t("fourthSubtitle")}
      </p>
      <article className="w-[100%] my-10 flex justify-around md:flex-row flex-col items-start">
        <div className="md:w-[500px] flex flex-col gap-5">
          {box.map((e, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-4 border-b-1 border-[#E9ECF2] py-4"
              >
                <Image src={e.img} alt={e.name} />
                <aside>
                  <h2 className="text-[18px] font-semibold">{e.name}</h2>
                  <p className="text-[#4B5563]">{e.disc}</p>
                </aside>
              </div>
            );
          })}
        </div>
        <div className="md:w-[445px] flex flex-col gap-5 text-center md:items-start md:py-0 py-7">
          <h2 className="md:text-[45px] text-2xl text-[#1F2937] font-semibold md:text-start text-center md:my-0 mt-5">
            {t("fourthRightTitle")}
          </h2>
          <p className="text-[20px] text-[#4B5563] md:text-start text-center">
            {t("fourthRightDescription")}
          </p>
          <button className="text-white bg-[#315266] py-2 px-5 text-[15px] font-semibold cursor-pointer rounded-3xl">
            {t("fourthButton")}
          </button>
        </div>
      </article>
    </section>
  );
};

export default Fourth;
