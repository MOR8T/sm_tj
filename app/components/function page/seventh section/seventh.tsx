import React from "react";
import Icon1 from "@/public/transaction.svg";
import Icon2 from "@/public/ulikecam.svg";
import Icon3 from "@/public/two-hands.svg";
import Icon4 from "@/public/triangle.svg";
import Icon5 from "@/public/flashlamp.svg";
import Icon6 from "@/public/focus-one.svg";
import Icon7 from "@/public/puzzle.svg";
import Icon8 from "@/public/unicast.svg";
import Icon9 from "@/public/ranking.svg";
import Icon10 from "@/public/rectangle-one.svg";
import Icon11 from "@/public/two-semicircles.svg";
import Icon12 from "@/public/octagon.svg";
import Icon13 from "@/public/enter-the-keyboard.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Seventh = () => {
  const t = useTranslations("Function")
  interface finance {
    icon: string;
    name: string;
    width: string;
  }
  const box: finance[] = [
    {
      icon: Icon1,
      name: t("notifications_and_statements"),
      width: "296",
    },
    {
      icon: Icon2,
      name: t("personalization"),
      width: "186",
    },
    {
      icon: Icon3,
      name: t("help_center"),
      width: "186",
    },
    {
      icon: Icon4,
      name: t("polls"),
      width: "186",
    },
    {
      icon: Icon5,
      name: t("payment_reminders"),
      width: "296",
    },
    {
      icon: Icon6,
      name: t("transaction_analytics"),
      width: "186",
    },
    {
      icon: Icon7,
      name: t("opening_accounts"),
      width: "186",
    },
    {
      icon: Icon8,
      name: t("online_support"),
      width: "296",
    },
    {
      icon: Icon9,
      name: t("operations_analytics"),
      width: "186",
    },
    {
      icon: Icon10,
      name: t("easy_registration"),
      width: "296",
    },
    {
      icon: Icon11,
      name: t("informing_clients"),
      width: "186",
    },
    {
      icon: Icon12,
      name: t("financial_assistance"),
      width: "186",
    },
    {
      icon: Icon13,
      name: t("financial_advice"),
      width: "296",
    },
  ];
  return (
    <section className="md:max-w-[1300px] w-[90%] m-auto">
      <div className="flex items-center justify-center py-10">
        <h3 className="text-[#1F2937] md:text-[45px] text-center text-2xl w-[639px] font-semibold">
          {t("heroText")}
        </h3>
      </div>
      <div className="flex overflow-x-auto gap-3 md:gap-5 md:justify-start">
        {box.map((e, i) => {
          return (
            <div
              key={i}
              style={{ widows: `${e.width}` }}
              className={`bg-[#F6F7F8] p-5 rounded-2xl`}
            >
              <Image src={e.icon} alt="icon" />
              <h2>{e.name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Seventh;
