import React from "react";
import Image from "next/image";
import backroundImg from '@/../public/Background 3.svg'
import transform from '@/../public/Money Transform Card.svg'
import { useTranslations } from "next-intl";

const Sixth = () => {
  const t = useTranslations("ProductCard")
  return (
    <div className="md:max-w-[1300px] md:flex-row flex-col w-[90%] md:gap-0 gap-15 m-auto py-10 flex justify-between items-center">
      <aside className="md:w-[441px]">
        <h2 className="text-[#1F2937] md:text-[45px] text-2xl font-semibold">
          {t("sixth_title")}
        </h2>
        <p className="text-[#4B5563] text-[18px] py-5">
          {t("sixth_description")}
        </p>
        <ul className="list-disc ml-5 text-[18px] pb-5 text-[#1F2937] font-semibold">
          <li>{t("sixth_list_1")}</li>
          <li>{t("sixth_list_2")}</li>
          <li>{t("sixth_list_3")}</li>
        </ul>
        <button className="bg-[#315266] py-3 font-semibold rounded-3xl px-5 text-[14px] text-white">
          {t("fifth_button")}
        </button>
      </aside>
      <div className="md:w-[600px] relative flex items-center justify-center w-[100%]">
        <Image src={transform} alt="boxs" className="relative z-10 pt-20" />
        <Image src={backroundImg} alt="boxs" className="absolute top-0" />
      </div>
    </div>
  );
};

export default Sixth;
