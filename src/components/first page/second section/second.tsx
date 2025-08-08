import Image from "next/image";
import React from "react";
import icon1 from "@/../public/icon.svg";
import icon2 from "@/../public/editor.svg fill.svg";
import icon3 from "@/../public/icon (1).svg";
import icon4 from "@/../public/icon (2).svg";
import icon5 from "@/../public/editor.svg.svg";
import icon6 from "@/../public/icon (3).svg";
import { useTranslations } from "next-intl";

const Second = () => {
    const t = useTranslations("HomePage")
  return (
    <section className="border-t-2 border-[#1514180D] bg-[#F3F4F6B8]">
      <section className="md:w-[1152px] md:90% m-auto md:h-[383px] border-r-2 border-l-2 border-[#1514180D] flex items-start flex-wrap">
        <article className="md:w-[33.33%] w-[100%] h-[192px] p-5 border-[#1514180D] border-2">
          <Image src={icon1} alt="icon 1" />
          <h2 className="text-[18px] font-semibold">{t("paymentsTitle")}</h2>
          <p className="text-[18px]">{t("paymentsDesc")}</p>
        </article>
        <article className="md:w-[33.33%] w-[100%] h-[192px] p-5 border-[#1514180D] border-2">
          <Image src={icon2} alt="icon 1" />
          <h2 className="text-[18px] font-semibold">{t("investingTitle")}</h2>
          <p className="text-[18px]">{t("investingDesc")}</p>
        </article>
        <article className="md:w-[33.33%] w-[100%] h-[192px] p-5 border-[#1514180D] border-2">
          <Image src={icon3} alt="icon 1" />
          <h2 className="text-[18px] font-semibold">{t("loanTitle")}</h2>
          <p className="text-[18px]">{t("loanDesc")}</p>
        </article>
        <article className="md:w-[33.33%] w-[100%] h-[192px] p-5 border-[#1514180D] border-2">
          <Image src={icon4} alt="icon 1" />
          <h2 className="text-[18px] font-semibold">{t("trackingTitle")}</h2>
          <p className="text-[18px]">{t("trackingDesc")}</p>
        </article>
        <article className="md:w-[33.33%] w-[100%] h-[192px] p-5 border-[#1514180D] border-2">
          <Image src={icon5} alt="icon 1" />
          <h2 className="text-[18px] font-semibold">{t("savingTitle")}</h2>
          <p className="text-[18px]">{t("savingDesc")}</p>
        </article>
        <article className="md:w-[33.33%] w-[100%] h-[192px] p-5 border-[#1514180D] border-2">
          <Image src={icon6} alt="icon 1" />
          <h2 className="text-[18px] font-semibold">{t("safetyTitle")}</h2>
          <p className="text-[18px]">{t("safetyDesc")}</p>
        </article>
      </section>
    </section>
  );
};

export default Second;
