import React from "react";
// import flag from "@/../public/flagEuro.svg";
// import arrowUp from "@/../public/Vector (1).svg";
import Image from "next/image";
import facebook from "@/../public/Facebook.svg";
import instagram from "@/../public/Instagram.svg";
import playMarket from "@/../public/PlayMarket.svg";
import appStore from "@/../public/AppStore.svg";
import logo from "@/../public/Logo.svg";
import { useTranslations } from "next-intl";
import LocaleSwicherSelect from "@/components/localeSwicherSelect/LocaleSwicherSelect";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="bg-[#F6F7F8] md:min-h-[1213px]">
      <footer className="md:max-w-[1241px] m-auto w-[90%] flex flex-col gap-15 py-15">
        <section className="h-[387px] w-[100%] bg-white rounded-[30px] p-13 relative">
          <div className="bg-gradient-to-b md:from-[#ffffff00] to-white absolute right-0 left-0 top-[50%] md:top-0 bottom-0 rounded-[30px]"></div>
          <div className="w-full h-[208px] md:max-w-[1097px] overflow-y-auto md:overflow-y-hidden">
            <p className=" text-[#4B5563]">{t("footerdisclaimer")}</p>
          </div>
        </section>
        <section className="flex items-center gap-2 justify-start md:justify-end">
          {/* <Image src={flag} alt="Arrow up" />
          <h2 className="text-[14px] text-[#1F2937] font-semibold">
            {t("footerlanguage")}
          </h2>
          <Image src={arrowUp} alt="Arrow up" /> */}
          <LocaleSwicherSelect />
        </section>
        <section className="flex justify-between flex-wrap">
          <div className="md:w-[281px] h-[180px] flex flex-col gap-2">
            <h2 className="text-[#1F2937] font-semibold">
              {t("footercompanytitle")}
            </h2>
            <ul className="text-[#1F2937] text-[14px] underline cursor-pointer flex flex-col gap-2">
              <li>{t("footercompanyabout")}</li>
              <li>{t("footercompanycareers")}</li>
              <li>{t("footercompanyblog")}</li>
              <li>{t("footercompanypartners")}</li>
              <li>{t("footercompanyhelp")}</li>
            </ul>
          </div>

          <div className="md:w-[281px] h-[180px] flex flex-col gap-2">
            <h2 className="text-[#1F2937] font-semibold">
              {t("footerproductstitle")}
            </h2>
            <ul className="text-[#1F2937] text-[14px] underline cursor-pointer flex flex-col gap-2">
              <li>{t("footerproductsbills")}</li>
              <li>{t("footerproductsjoint")}</li>
              <li>{t("footerproductslarge_transfer")}</li>
              <li>{t("footerproductsreceive")}</li>
            </ul>
          </div>

          <div className="md:w-[281px] h-[180px] flex flex-col gap-2 w-[100%] mt-5 md:mt-0">
            <h2 className="text-[#1F2937] font-semibold">
              {t("footerresourcestitle")}
            </h2>
            <ul className="text-[#1F2937] text-[14px] underline cursor-pointer flex flex-col gap-2">
              <li>{t("footerresourcesnews")}</li>
              <li>{t("footerresourcesconverter")}</li>
              <li>{t("footerresourcesinvoice")}</li>
              <li>{t("footerfollowtitle")}</li>
            </ul>
          </div>

          <div className="md:w-[281px] md:h-[180px] flex flex-col gap-2">
            <h2 className="text-[#1F2937] font-semibold">
              {t("footerfollowtitle")}
            </h2>
            <div className="flex items-center gap-3">
              <Image src={facebook} alt="Facebook" />
              <Image src={instagram} alt="Facebook" />
            </div>
          </div>
        </section>
        <section className="flex items-center md:flex-row flex-col md:justify-between md:gap-0 gap-5">
          <div className="md:w-auto w-[100%]">
            <h2 className="text-[18px] font-semibold">
              {t("footernewslettertitle")}
            </h2>
            <input
              type="text"
              placeholder={t("footernewsletterplaceholder")}
              className="border-b-2 outline-0 border-[#636360] py-1.5 px-2 md:w-auto w-[100%]"
            />
          </div>
          <div className="flex items-center gap-3 md:pt-0 pt-6">
            <Image src={appStore} alt="app store" />
            <Image src={playMarket} alt="play store" />
          </div>
        </section>
        <hr className="border-1 border-[#1F29370D] md:block hidden" />
        <section className="flex md:items-center md:gap-30 md:flex-row flex-col gap-2">
          <Image src={logo} alt="Logo" />
          <p className="text-[#1F2937] underline cursor-pointer">
            {t("footerlegalcomplaints")}
          </p>
          <p className="text-[#1F2937] underline cursor-pointer">
            {t("footerlegalprivacy")}
          </p>
          <p className="text-[#1F2937] underline cursor-pointer">
            {t("footerlegalcookies")}
          </p>
        </section>
        <section className="flex justify-center">
          <p className="w-[762px] text-center text-[14px] font-semibold text-[#1F2937]">
            {t("footerlicense")}
          </p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
