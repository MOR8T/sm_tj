import React from "react";
import procent from "@/../public/procent.svg";
import Image from "next/image";
import paymant from "@/../public/Payment-methods.svg.svg";
import imageGirl from "@/../public/image (42).svg";
import icon1 from "@/../public/Group 2085665897.svg";
import icon2 from "@/../public/Group 2085665898.svg";
import icon3 from "@/../public/Group 2085665899.svg";
import icon4 from "@/../public/Group 2085665900.svg";
import { useTranslations } from "next-intl";

const Fourth = () => {
  const t = useTranslations("App")
  interface income {
    name: string;
    prosent: string;
    price: string;
  }
  interface manage {
    icon: string;
    name: string;
    disc: string;
  }
  const box: income[] = [
    {
      name: t("fourth_income_succeeded"),
      prosent: "80%",
      price: "(TJS 50,240.00)",
    },
    {
      name: t("fourth_income_failed"),
      prosent: "10%",
      price: "(TJS 50,240.00)",
    },
    {
      name: t("fourth_income_refunded"),
      prosent: "5%",
      price: "(TJS 50,240.00)",
    },
    {
      name: t("fourth_income_other"),
      prosent: "5%",
      price: "(TJS 50,240.00)",
    },
  ];
  const boxManage: manage[] = [
    {
      icon: icon1,
      name: t("fourth_feature_1_title"),
      disc: t("fourth_feature_1_description"),
    },
    {
      icon: icon2,
      name: t("fourth_feature_2_title"),
      disc: t("fourth_feature_2_description"),
    },
    {
      icon: icon3,
      name: t("fourth_feature_3_title"),
      disc: t("fourth_feature_3_description"),
    },
    {
      icon: icon4,
      name: t("fourth_feature_4_title"),
      disc: t("fourth_feature_4_description"),
    },
  ];
  return (
    <section className="bg-[#F3F4F6B8]">
      <div className="md:max-w-[1300px] w-[90%] m-auto md:h-[350px] py-10 flex items-center justify-center text-center flex-col gap-1 border-l-1 border-[#1F29370D] border-r-1">
        <p className="md:w-[415px] text-[#4B5563] text-[18px] font-semibold">
          {t("fourth_top_description")}
        </p>
        <button className="text-[#315266] text-[14px] font-semibold cursor-pointer">
          {t("fourth_top_button")}
        </button>
      </div>
      {/* /// */}
      <div className="md:max-w-[1300px] w-[90%] md:gap-0 gap-8 overflow-x-auto md:h-[427px] m-auto border-l-1 border-[#1F29370D] border-r-1 flex items-center justify-between">
        <div className="md:w-[358px] bg-white rounded-r-3xl p-5 md:h-[158px] flex flex-col justify-between">
          {box.map((e, i) => {
            return (
              <div key={i} className="flex items-center justify-between md:gap-0 gap-5">
                <h2 className="md:w-[40px] w-[70px] font-semibold">{e.name}</h2>
                <p className="font-semibold">{e.prosent}</p>
                <p className="md:text-[16px] text-[10px] md:w-[150px] w-[80px]">{e.price}</p>
              </div>
            );
          })}
        </div>
        <Image src={procent} alt="procent" />
        <div className="w-[300px] h-[290px] bg-white rounded-t-3xl p-5  flex flex-col justify-evenly">
          <div className="flex items-center gap-5">
            <h2 className="text-[18px] font-semibold">{t("fourth_payment_bank_transfer")}</h2>
            <h2 className="text-[18px]">{t("fourth_payment_credit_card")}</h2>
          </div>
          <div className="md:w-[100%] w-[250px] border-1 border-gray-200 rounded-2xl">
            <p className="text-gray-500 p-2 font-semibold border-b-1 border-gray-200">
              {t("fourth_payment_bic")}
            </p>
            <p className="text-gray-500 p-2 font-semibold border-b-1 border-gray-200">
              {t("fourth_payment_account_number")}
            </p>
            <p className="text-gray-500 p-2 font-semibold border-b-1 border-gray-200">
              {t("fourth_payment_repeat_account_number")}
            </p>
            <p className="text-gray-500 p-2 font-semibold">
              {t("fourth_payment_account_holder")}
            </p>
          </div>
        </div>
        <Image src={paymant} alt="paymant" />
      </div>
      {/* /////////// */}
      <div className="md:max-w-[1300px] w-[90%] m-auto flex py-10 md:flex-row flex-col justify-between md:gap-0 gap-10 md:h-[600px] items-center">
        <div className="md:w-[381px] flex flex-col gap-4 items-start">
          <h1 className="text-[#1F2937] text-2xl md:text-[45px] font-semibold">
            {t("fourth_manage_title")}
          </h1>
          <p className="text-[#4B5563] text-[18px]">
            {t("fourth_manage_description")}
          </p>
          <input
            type="text"
            placeholder={t("fourth_manage_input_name")}
            className="border-[#EBECEE] border-1 rounded-3xl py-2 px-6"
          />
          <input
            type="text"
            placeholder={t("fourth_manage_input_email")}
            className="border-[#EBECEE] border-1 rounded-3xl py-2 px-6"
          />
          <button className="bg-[#315266] py-2 px-6 rounded-3xl text-white">
            {t("fourth_manage_button")}
          </button>
          <p className="text-[#4B5563] text-[12px]">
            {t("fourth_manage_notice")}
          </p>
        </div>
        <div className="md:w-[500px] relative">
          <Image src={imageGirl} alt="image Girl" />
          <div className="w-[280px] h-[190px] flex flex-col justify-evenly absolute bg-white bottom-0 right-0 rounded-2xl border-1 border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold text-[#1F2937]">
                {t("fourth_modal_amount_title")}
              </h3>
              <h3>TJS 100.00</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold text-[#1F2937]">
                {t("fourth_modal_destination_title")}
              </h3>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>

                <h3>...5698</h3>
              </div>
            </div>
            <button className="flex items-center justify-center py-3 text-white gap-3 px-6 bg-[#315266] rounded-2xl w-[100%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              {t("fourth_modal_button")}
            </button>
          </div>
        </div>
      </div>
      {/* ////// */}
      <div className="md:max-w-[1300px] w-[90%] m-auto py-10">
        <div className="md:w-[490px]">
          <h2 className="md:text-[45px] text-2xl pb-2 text-[#1F2937] font-semibold">
            {t("fourth_easy_title")}
          </h2>
          <p className="text-[#4B5563] text-[18px] font-semibold">
            {t("fourth_easy_description")}
          </p>
        </div>
        <div className="flex justify-between py-10 md:flex-row flex-col md:gap-0 gap-5">
          {boxManage.map((e, i) => {
            return (
              <div key={i} className="md:w-[200px] flex flex-col item-start gap-1">
                <Image src={e.icon} alt="icon" />
                <h2 className="font-semibold">{e.name}</h2>
                <p>{e.disc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fourth;
