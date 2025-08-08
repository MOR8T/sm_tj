import { useTranslations } from "next-intl";
import React from "react";

const Seventh = () => {
  const t = useTranslations("Company");
  interface forbox {
    name: string;
    disc: string;
  }
  const box: forbox[] = [
    {
      name: t("faq_1_question"),
      disc: t("faq_1_answer"),
    },
    {
      name: t("faq_2_question"),
      disc: t("faq_2_answer"),
    },
    {
      name: t("faq_3_question"),
      disc: t("faq_3_answer"),
    },
    {
      name: t("faq_4_question"),
      disc: t("faq_4_answer"),
    },
    {
      name: t("faq_5_question"),
      disc: t("faq_5_answer"),
    },
    {
      name: t("faq_6_question"),
      disc: t("faq_6_answer"),
    },
    {
      name: t("faq_7_question"),
      disc: t("faq_7_answer"),
    },
    {
      name: t("faq_8_question"),
      disc: t("faq_8_answer"),
    },
    {
      name: t("faq_9_question"),
      disc: t("faq_9_answer"),
    },
  ];
  return (
    <div>
      <section className="py-10 md:max-w-[1300px] w-[90%] m-auto">
        <h2 className="text-[#1F2937] text-3xl font-semibold py-5">
          {t("customer_stories_title")}
        </h2>
        <div className="py-5 flex justify-between md:gap-y-5 gap-y-8 flex-wrap">
          {box.map((e, i) => {
            return (
              <div key={i} className="md:w-[413px]">
                <h2 className="font-semibold pb-2">{e.name}</h2>
                <p>{e.disc}</p>
              </div>
            );
          })}
        </div>
      </section>
      <hr className="border-1 border-[#EBEBEF]" />
      <div className="w-[350px] m-auto py-10 text-center">
        <h2 className="text-[#4B5563] text-[12px]">{t("support_prompt")}</h2>
      </div>
    </div>
  );
};

export default Seventh;
