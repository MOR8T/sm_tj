import React from "react";
import Image from "next/image";
import firstImage from "@/../public/editor.svg (1).svg";
import secondImage from "@/../public/editor.svg (2).svg";
import thirdImage from "@/../public/analytics.svg.svg";
import phoneImage from "@/../public/image.png";
import { useTranslations } from "next-intl";

const Tenth = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-[#F6F6F7]">
      <div className="md:w-[1152px] md:h-[800px] w-[100%] m-auto bg-[#F6F6F7] p-12">
        <div className="overflow-x-auto md:w-full w-[90%] mb-16">
        <div className="flex md:w-full w-[700px] justify-between md:gap-0 gap-10 py-3">
          <div className="flex flex-col md:w-[282.40px] w-[250px]">
            <div className="w-12 h-12 mb-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
              <Image src={firstImage} alt="first image" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("tenthBusinessTitle")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("tenthBusinessDescription")}
            </p>
          </div>
          <div className="flex flex-col md:w-[282.40px] w-[250px]">
            <div className="w-12 h-12 mb-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
              <Image src={secondImage} alt="second image" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("tenthProfessionalTitle")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("tenthProfessionalDescription")}
            </p>
          </div>
          <div className="flex flex-col md:w-[282.40px] w-[250px]">
            <div className="w-12 h-12 mb-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
              <Image src={thirdImage} alt="second image" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("tenthInnovatorTitle")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("tenthInnovatorDescription")}
            </p>
          </div>
        </div>
        </div>
        <div className="flex space-x-8 mb-12 border-b border-gray-200 overflow-x-auto">
          <button className="pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
            {t("tenthTabOverview")}
          </button>
          <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700">
            {t("tenthTabDashboard")}
          </button>
          <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700">
            {t("tenthTabVerification")}
          </button>
          <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700">
            {t("tenthTabTransactions")}
          </button>
        </div>
        <div className="flex justify-between md:flex-row flex-col-reverse md:gap-0 gap-5 items-center">
          <div className="space-y-6">
            <h1 className="md:text-5xl text-2xl font-semibold text-gray-900 leading-tight md:w-[432px]">
              {t("tenthMainTitle")}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed md:w-[432px]">
              {t("tenthMainDescription")}
            </p>
            <div className="flex items-center space-x-2 text-gray-900 font-medium">
              <span>{t("goToFeatures")}</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={phoneImage} alt="phone image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenth;
