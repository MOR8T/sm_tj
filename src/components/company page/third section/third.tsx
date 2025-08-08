import { useTranslations } from "next-intl";
import React from "react";

const Third = () => {
  const t = useTranslations("Company");
  interface forbox {
    name: string;
    disc: string;
    btn: string;
  }
  const box: forbox[] = [
    {
      name: t("box_support_title"),
      disc: t("box_support_desc"),
      btn: t("box_support_btn"),
    },
    {
      name: t("box_financial_title"),
      disc: t("box_financial_desc"),
      btn: t("box_financial_btn"),
    },
    {
      name: t("box_general_title"),
      disc: t("box_general_desc"),
      btn: t("box_general_btn"),
    },
    {
      name: t("box_partners_title"),
      disc: t("box_partners_desc"),
      btn: t("box_partners_btn"),
    },
    {
      name: t("box_help_center_title"),
      disc: t("box_help_center_desc"),
      btn: t("box_help_center_btn"),
    },
    {
      name: t("box_management_title"),
      disc: t("box_management_desc"),
      btn: t("box_management_btn"),
    },
  ];
  return (
    <section className="md:max-w-[1300px] w-[90%] m-auto flex justify-evenly md:flex-wrap md:flex-row flex-col gap-y-6 py-6">
      {box.map((e, i) => {
        return (
          <div
            key={i}
            className="md:w-[370px] w-[100%] h-[230px] bg-[#F6F7F8] rounded-3xl p-6 flex flex-col items-start justify-between"
          >
            <div>
              <h2 className="text-[#1F2937] text-[18px] font-semibold">
                {e.name}
              </h2>
              <p className="text-[#4B5563]">{e.disc}</p>
            </div>
            <button className="text-[14px] font-semibold text-[#315266] cursor-pointer">
              {e.btn}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Third;
