import React from "react";
import Image from "next/image";
import appStore from "@/../public/Image [h-40] copy 2.svg";
import playStore from "@/../public/Image [h-40] copy.svg";
import heroPhone from "@/../public/hero phone.svg";
import { useTranslations } from "next-intl";

const First = () => {
  const t = useTranslations("App");
  return (
    <div className="md:h-[900px] backImg'">
      <div className="fsf_blur">
        <section className="md:max-w-[1300px] w-[90%] m-auto flex items-center justify-between md:py-0 py-10 md:gap-0 gap-10 md:h-[900px] md:flex-row flex-col">
          <aside className="md:w-[536px] flex flex-col gap-4">
            <h1 className="md:text-[62px] text-[29px] font-semibold">
              {t("heading")}
            </h1>
            <p className="text-[#4B5563] text-[20px]">{t("description")}</p>
            <div className="flex items-center gap-3">
              <Image src={playStore} alt="play store" />
              <Image src={appStore} alt="app store" />
            </div>
          </aside>
          <Image src={heroPhone} alt="hero phone" className="md:w-[600px]" />
        </section>
      </div>
    </div>
  );
};

export default First;
