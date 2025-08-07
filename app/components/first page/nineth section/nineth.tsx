import React from "react";
import Image from "next/image";
import fitstCard from "@/public/Group 2085665872.svg";
import secondCard from "@/public/card.svg";
import minCard from "@/public/card (1).svg";
import { useTranslations } from "next-intl";

const Nineth = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-gradient-to-r from-purple-100  to-green-100 md:h-[667px] h-[650px]">
      <section className="md:w-[1178.18px] w-[100%] m-auto relative h-[100%] border-r-1 border-[#1514180D] border-l-1 flex flex-col items-start md:justify-center">
        <div className="md:w-[519px] w-[301px] pl-5 mt-20 md:mt-0">
          <Image
            src={fitstCard}
            alt="first card"
            className="absolute md:block hidden top-0 right-10"
          />
          <Image
            src={minCard}
            alt="first card"
            className="md:hidden block absolute top-0 right-10"
          />
          <Image
            src={secondCard}
            alt="first card"
            className="absolute bottom-0 right-19"
          />
          <h2 className="md:text-[45px] text-[22px] font-semibold text-[#1F2937]">{t("ninethTitle")}</h2>
          <p className="md:text-[18px] text-[13px] text-[#4B5563] font-semibold">
            {t("ninethDescription")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Nineth;
