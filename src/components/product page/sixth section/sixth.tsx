import { useTranslations } from "next-intl";
import React from "react";

const Sixth = () => {
  const t = useTranslations("ProductPage");
  return (
    <div className="w-full py-8 md:py-16">
      <div className="mx-auto px-4 md:px-0" style={{ maxWidth: "1186px" }}>
        <div className="mb-8 md:mb-16">
          <h2 className="md:w-[570px] text-2xl md:text-4xl font-semibold text-gray-900 mb-8 md:mb-16 m-auto text-center">
            {t("sixthPagesectionTitle")}
          </h2>
          <div className="hidden md:grid grid-cols-4 gap-8">
            <div className="text-left">
              <div className="mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-gray-600"
                >
                  <rect
                    x="4"
                    y="8"
                    width="24"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path d="M4 12h24" stroke="currentColor" strokeWidth="1.5" />
                  <rect
                    x="6"
                    y="16"
                    width="4"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t("sixthPagesmartPaymentstitle")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("sixthPagesmartPaymentsdescription")}
              </p>
            </div>
            <div className="text-left">
              <div className="mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-gray-600"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M12 16l3 3 6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t("sixthPageflexibleOfferstitle")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("sixthPageflexibleOffersdescription")}
              </p>
            </div>
            <div className="text-left">
              <div className="mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-gray-600"
                >
                  <rect
                    x="6"
                    y="4"
                    width="20"
                    height="24"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path d="M10 8h12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 12h12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 16h8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 20h6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t("sixthPagemanagementtitle")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("sixthPagemanagementdescription")}
              </p>
            </div>
            <div className="text-left">
              <div className="mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-gray-600"
                >
                  <rect
                    x="4"
                    y="6"
                    width="24"
                    height="20"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path d="M4 10h24" stroke="currentColor" strokeWidth="1.5" />
                  <circle
                    cx="12"
                    cy="18"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path d="M16 18h8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t("sixthPagepossibilitiestitle")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("sixthPagepossibilitiesdescription")}
              </p>
            </div>
          </div>
          <div className="md:hidden overflow-x-auto">
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {/* Smart payments */}
              <div className="text-left flex-shrink-0 w-64">
                <div className="mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-gray-600"
                  >
                    <rect
                      x="4"
                      y="8"
                      width="24"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M4 12h24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="6"
                      y="16"
                      width="4"
                      height="2"
                      rx="1"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {t("sixthPagesmartPaymentstitle")}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("sixthPagesmartPaymentsdescription")}
                </p>
              </div>
              <div className="text-left flex-shrink-0 w-64">
                <div className="mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-gray-600"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M12 16l3 3 6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {t("sixthPageflexibleOfferstitle")}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("sixthPageflexibleOffersdescription")}
                </p>
              </div>
              <div className="text-left flex-shrink-0 w-64">
                <div className="mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-gray-600"
                  >
                    <rect
                      x="6"
                      y="4"
                      width="20"
                      height="24"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M10 8h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 12h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 16h8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 20h6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {t("sixthPagemanagementtitle")}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("sixthPagemanagementdescription")}
                </p>
              </div>
              <div className="text-left flex-shrink-0 w-64">
                <div className="mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-gray-600"
                  >
                    <rect
                      x="4"
                      y="6"
                      width="24"
                      height="20"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M4 10h24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="18"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M16 18h8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {t("sixthPagepossibilitiestitle")}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("sixthPagepossibilitiesdescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-normal text-gray-900 mb-4 md:mb-6">
            {t("sixthPagereadyTitle")}
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 max-w-md mx-auto text-sm md:text-base">
            {t("sixthPagereadyDescription")}
          </p>
          <button className="bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-3xl text-sm font-medium hover:bg-gray-700 transition-colors">
            {t("sixthPagereadyButton")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
