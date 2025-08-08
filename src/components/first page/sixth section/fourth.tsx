import { useTranslations } from "next-intl";
import React from "react";

const Fourth = () => {
  const t = useTranslations("HomePage");
  interface InvoiceItem {
    banking: string;
    units: number;
    const: number;
    amount: number;
  }

  const firstInvoic: InvoiceItem[] = [
    {
      banking: t("fourthinvoiceitems0title"),
      units: 1,
      const: 4000.0,
      amount: 4000.0,
    },
    {
      banking: t("fourthinvoiceitems1title"),
      units: 1,
      const: 18000.0,
      amount: 18000.0,
    },
    {
      banking: t("fourthinvoiceitems2title"),
      units: 1,
      const: 3500.0,
      amount: 3500.0,
    },
  ];

  return (
    <section className="md:w-[1193px] h-auto m-auto md:flex-row flex-col-reverse w-[90%] md:h-[545px] flex items-center justify-between">
      <aside className="flex flex-col items-start gap-5 md:w-[456px]">
        <h2 className="md:text-[45px] text-[27px]">
          {t("fourthsectiontitle")}
        </h2>
        <p className="text-[18px] text-[#4B5563]">
          {t("fourthsectiondescription")}
        </p>
        <ul className="list-disc pl-5 text-[18px] font-semibold">
          <li>{t("fourthsectionlistpersonalized")}</li>
          <li>{t("fourthsectionlistinstant")}</li>
          <li>{t("fourthsectionlisttransaction")}</li>
        </ul>
        <button className="text-[14px] font-semibold cursor-pointer">
          {t("goToFeatures")}
        </button>
      </aside>
      <aside className="md:w-[536px] w-[99%] h-[500px] md:h-[545px] relative">
        <div className="w-[288px] h-[444px] bg-[#d3d3d3] rounded-3xl absolute md:right-10 bottom-10 z-0"></div>
        <article className="md:w-[370px] bg-[#EDECEB] rounded-3xl absolute z-10 p-5">
          <div className="w-[100%] rounded-2xl bg-white h-[173px] p-3 flex flex-col justify-between">
            <div className="flex items-end justify-between">
              <h2 className="font-semibold">{t("fourthinvoicetitle")}</h2>
              <div>
                <p className="text-end text-[13px] text-[#315266]">
                  {t("fourthinvoicenumberlabel")}
                </p>
                <h2 className="text-end font-semibold">
                  {t("fourthinvoicenumbervalue")}
                </h2>
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-[16px] font-semibold">
                {t("fourthinvoicename")}
              </h2>
              <aside>
                <p className="text-end text-[13px] text-[#315266]">
                  {t("fourthinvoiceissuedlabel")}
                </p>
                <h2 className="text-[14px] text-end">
                  {t("fourthinvoiceissuedvalue")}
                </h2>
                <p className="text-end text-[13px] text-[#315266]">
                  {t("fourthinvoiceduelabel")}
                </p>
                <h2 className="text-[14px] text-end">
                  {t("fourthinvoiceduevalue")}
                </h2>
              </aside>
            </div>
          </div>
          <table className="my-3">
            <thead>
              <tr className="text-[12px] flex items-center justify-between gap-6">
                <th>{t("fourthtableheaderbanking")}</th>
                <th>{t("fourthtableheaderunits")}</th>
                <th>{t("fourthtableheadercost")}</th>
                <th>{t("fourthtableheaderamount")}</th>
              </tr>
            </thead>
            <tbody>
              {firstInvoic.map((e, i) => {
                return (
                  <tr
                    key={i}
                    className="text-[12px] flex items-center justify-between gap-4 text-[#1F2937] py-1"
                  >
                    <td className="w-[100px]">{e.banking}</td>
                    <td className="w-[10px]">{e.units}</td>
                    <td className="w-[50px]">{e.const}</td>
                    <td>{e.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2 className="text-[12px] font-semibold">
            {t("fourthinvoicetotal")}
          </h2>
          <h2 className="text-[12px] font-semibold">
            {t("fourthinvoiceterms")}
          </h2>
        </article>
        <article className="w-[370px] bg-white border-1 border-[#EDECEB] rounded-3xl md:block hidden absolute z-20 right-17 p-5 bottom-2">
          <div className="w-[100%] rounded-2xl bg-[#EDECEB] h-[173px] p-3 flex flex-col justify-between">
            <div className="flex items-end justify-between">
              <h2 className="font-semibold">{t("fourthinvoicetitle")}</h2>
              <div>
                <p className="text-end text-[13px] text-[#315266]">
                  {t("fourthinvoicenumberlabel")}
                </p>
                <h2 className="text-end font-semibold">
                  {t("fourthinvoicenumbervalue")}
                </h2>
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-[16px] font-semibold">
                {t("fourthinvoicename")}
              </h2>
              <aside>
                <p className="text-end text-[13px] text-[#315266]">
                  {t("fourthinvoiceissuedlabel")}
                </p>
                <h2 className="text-[14px] text-end">
                  {t("fourthinvoiceissuedvalue")}
                </h2>
                <p className="text-end text-[13px] text-[#315266]">
                  {t("fourthinvoiceduelabel")}
                </p>
                <h2 className="text-[14px] text-end">
                  {t("fourthinvoiceduevalue")}
                </h2>
              </aside>
            </div>
          </div>
          <table className="my-3">
            <thead>
              <tr className="text-[12px] flex items-center justify-between gap-6">
                <th>{t("fourthtableheaderbanking")}</th>
                <th>{t("fourthtableheaderunits")}</th>
                <th>{t("fourthtableheadercost")}</th>
                <th>{t("fourthtableheaderamount")}</th>
              </tr>
            </thead>
            <tbody>
              {firstInvoic.map((e, i) => {
                return (
                  <tr
                    key={i}
                    className="text-[12px] flex items-center justify-between gap-4 text-[#1F2937] py-1"
                  >
                    <td className="w-[100px]">{e.banking}</td>
                    <td className="w-[10px]">{e.units}</td>
                    <td className="w-[50px]">{e.const}</td>
                    <td>{e.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2 className="text-[12px] font-semibold">
            {t("fourthinvoicetotal")}
          </h2>
          <h2 className="text-[12px] font-semibold">
            {t("fourthinvoiceterms")}
          </h2>
        </article>
      </aside>
    </section>
  );
};

export default Fourth;
