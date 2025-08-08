import React from "react";
import Image from "next/image";
import social from "@/../public/IMAGE.svg";
import appStore from "@/../public/Image [h-40] copy 2.svg";
import playStore from "@/../public/Image [h-40] copy.svg";
import { useTranslations } from "next-intl";

const First = () => {
  const t = useTranslations("ProductCard")
  return (
    <div className={`md:h-[900px] backImg`}>
      <div className="fsf_blur">
      <section className="md:max-w-[1300px] w-[90%] m-auto flex items-center justify-between md:py-0 py-10 md:gap-0 gap-10 md:h-[900px] md:flex-row flex-col">
        <aside className="md:w-[438px] flex flex-col md:gap-3 gap-4">
          <h1 className="md:text-[62px] text-[26px] font-semibold md:w-full w-[191px]">
            {t("first_title")}
          </h1>
          <p className="text-[#4B5563] text-[20px]">
            {t("first_description")}
            more.
          </p>
          <div className="flex items-center gap-3">
            <Image src={playStore} alt="play store" />
            <Image src={appStore} alt="app store" />
          </div>
        </aside>
        <Image src={social} alt="social" />
      </section>
      </div>
    </div>
  );
};

export default First;
