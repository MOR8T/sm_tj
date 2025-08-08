import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import firstIcon from "@/../public/SVG.svg";
import secondIcon from "@/../public/SVG (1).svg";
import thirdIcon from "@/../public/SVG (2).svg";
import fourthIcon from "@/../public/SVG (3).svg";

const RealEleventh = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <div className="w-full md:max-w-[1152px] mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-30 lg:gap-16">
          {/* Left Column */}
          <div className="order-1 lg:order-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
              {t("eleventhtitle")}
            </h1>

            <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-10 lg:mb-12 leading-relaxed">
              {t("eleventhdescription")}
            </p>

            {/* Static Accordion */}
            <div className="space-y-3 md:space-y-4">
              {/* Secure Transactions - Expanded */}
              <div className="border-b border-gray-200 pb-3 md:pb-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="text-gray-600 flex-shrink-0">
                      <Image src={firstIcon} alt="first icon" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {t("eleventhaccordionsecuretitle")}
                    </h3>
                  </div>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-gray-400 rotate-180 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="mt-3 md:mt-4 pl-6 md:pl-8">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t("eleventhaccordionsecuredescription")}
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-3 md:pb-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="text-gray-600 flex-shrink-0">
                      <Image src={secondIcon} alt="second icon" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {t("eleventhaccordionsupporttitle")}
                    </h3>
                  </div>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-gray-400 rotate-180 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="mt-3 md:mt-4 pl-6 md:pl-8">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t("eleventhaccordionsupportdescription")}
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-3 md:pb-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="text-gray-600 flex-shrink-0">
                      <Image src={thirdIcon} alt="third icon" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {t("eleventhaccordiontransparencytitle")}
                    </h3>
                  </div>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-gray-400 rotate-180 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="mt-3 md:mt-4 pl-6 md:pl-8">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t("eleventhaccordiontransparencydescription")}
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-3 md:pb-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="text-gray-600 flex-shrink-0">
                      <Image src={fourthIcon} alt="fourth icon" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {t("eleventhaccordionsecuritytitle")}
                    </h3>
                  </div>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-gray-400 rotate-180 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="mt-3 md:mt-4 pl-6 md:pl-8">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t("eleventhaccordionsecuritydescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-2 lg:order-2 lg:pt-20">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
              {t("eleventhrighttitle")}
            </h2>

            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
              {t("eleventhrightdescription")}
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {t("eleventhrightfeatureinstant")}
                </span>
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {t("eleventhrightfeaturetransactions")}
                </span>
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {t("eleventhrightfeatureprotection")}
                </span>
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {t("eleventhrightfeaturereporting")}
                </span>
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {t("eleventhrightfeaturefraud")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEleventh;
