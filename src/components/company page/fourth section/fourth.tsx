import React from "react";
import icon1 from "@/../public/Ic-Simple copy.svg";
import icon2 from "@/../public/Ic-Layered.svg";
import icon3 from "@/../public/Group 2085665884.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Fourth = () => {
  const t = useTranslations("Company");
  return (
    <section className="py-20 md:max-w-[1300px] w-[90%] m-auto">
      <h3 className="md:text-[45px] text-2xl text-[#1F2937] text-center font-semibold">
        {t("connect_title")}
      </h3>
      <p className="text-[#4B5563] text-[20px] text-center">
        {t("connect_description")}
      </p>
      <div className="flex items-start justify-between py-10 md:gap-0 gap-8 md:flex-row flex-col-reverse">
        <aside className="md:w-[446px] w-[90%] flex flex-col gap-7">
          <div className="flex items-start gap-5 w-[100%] border-b-1 border-[#E9ECF2] pb-5">
            <Image src={icon1} alt="icon 1" />
            <aside className="flex flex-col gap-5">
              <h2 className="text-[#1F2937] text-[18px] font-semibold">
                {t("email_title")}
              </h2>
              <p className="text-[#4B5563] font-semibold">{t("email_value")}</p>
            </aside>
          </div>
          <div className="flex items-start gap-5 w-[100%] border-b-1 border-[#E9ECF2] pb-5">
            <Image src={icon2} alt="icon 2" />
            <aside className="flex flex-col gap-5">
              <h2 className="text-[#1F2937] text-[18px] font-semibold">
                {t("call_title")}
              </h2>
              <p className="text-[#4B5563] font-semibold">+992 44 123 4567</p>
            </aside>
          </div>
          <div className="flex items-start gap-5 w-[100%]">
            <Image src={icon3} alt="icon 3" />
            <aside className="flex flex-col gap-5">
              <h2 className="text-[#1F2937] text-[18px] font-semibold">
                {t("address_title")}
              </h2>
              <p className="text-[#4B5563] font-semibold">
                {t("address_value")}
              </p>
            </aside>
          </div>
        </aside>
        {/* /////////// */}
        <aside className="md:w-[445px] flex flex-col gap-5 items-start">
          <h2 className="text-[#1F2937] text-2xl md:text-[45px] font-semibold">
            {t("fast_service_title")}
          </h2>
          <p className="text-[#4B5563] text-[18px]">
            {t("fast_service_description")}
          </p>
          <button className="bg-[#315266] text-white py-3 px-5 rounded-4xl cursor-pointer">
            {t("contact_button")}
          </button>
        </aside>
      </div>
    </section>
  );
};

export default Fourth;
