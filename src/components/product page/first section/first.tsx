import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import phoneImage from "@/../public/MockUp.svg";
import tredingLeft from "@/../public/image copy.png";
import tredingRight from "@/../public/image copy 2.png";
import money from "@/../public/image copy 3.png";
import income from "@/../public/image copy 4.png";
import exchange from "@/../public/image copy 5.png";
import React from "react";

const First = () => {
  const t = useTranslations("HomePage");
  const t2 = useTranslations("ProductPage");
  interface firstBox {
    icon: string | StaticImageData;
    number: string;
    disc: string;
  }
  interface secondBox {
    name: string;
    price: string;
    procent: string;
    disc1: string;
    disc2: string;
    disc3: string;
  }
  interface thirdBox {
    num: string;
    name: string;
    price: string;
    prosent: string;
  }

  const Box1: firstBox[] = [
    {
      icon: money,
      number: "TJS150,000",
      disc: t2("box1_totalInvestedAmount"),
    },
    {
      icon: income,
      number: "1,250",
      disc: t2("box1_numberOfInvestments"),
    },
    {
      icon: exchange,
      number: "+5.80%",
      disc: t2("box1_rateOfReturn"),
    },
  ];
  const Box2: secondBox[] = [
    {
      name: t2("box2_appleStore_name"),
      price: "TJS 54,000",
      procent: "+16%",
      disc1: t2("box2_appleStore_disc1"),
      disc2: t2("box2_appleStore_disc2"),
      disc3: t2("box2_appleStore_disc3"),
    },
    {
      name: t2("box2_samsungMobile_name"),
      price: "TJS 25,300",
      procent: "-4%",
      disc1: t2("box2_samsungMobile_disc1"),
      disc2: t2("box2_samsungMobile_disc2"),
      disc3: t2("box2_samsungMobile_disc3"),
    },
    {
      name: t2("box2_teslaMotors_name"),
      price: "TJS 8,200",
      procent: "+25%",
      disc1: t2("box2_teslaMotors_disc1"),
      disc2: t2("box2_teslaMotors_disc2"),
      disc3: t2("box2_teslaMotors_disc3"),
    },
  ];
  const Box3: thirdBox[] = [
    {
      num: "01.",
      name: t2("box3_01_name"),
      price: "TJS 520",
      prosent: "+5%",
    },
    {
      num: "02.",
      name: t2("box3_02_name"),
      price: "TJS 480",
      prosent: "+10%",
    },
    {
      num: "03.",
      name: t2("box3_03_name"),
      price: "TJS 350",
      prosent: "-3%",
    },
    {
      num: "04.",
      name: t2("box3_04_name"),
      price: "TJS 940",
      prosent: "+2%",
    },
    {
      num: "05.",
      name: t2("box3_05_name"),
      price: "TJS 670",
      prosent: "-12%",
    },
  ];
  return (
    <section className={`md:h-[100%] backImg`}>
      <div className="fsf_blur">
        <section className="md:max-w-[1300px] w-[90%] m-auto md:border-r-2 md:border-l-2 border-[#1514180D] h-[100%] flex flex-col items-center justify-center">
          <h1 className="md:w-[692px] md:text-[62px] text-2xl font-semibold text-center mt-20">
            {t2("sectionTitle")}
          </h1>
          <p className="text-[#4B5563] text-center md:text-xl">
            {t2("sectionSubtitle")}
          </p>
          <div className="flex md:flex-row flex-col items-center gap-10 justify-center my-7 mb-18">
            <aside className="bg-[#EBECEE] pl-4 rounded-3xl border-1 border-white text-[14px]">
              <input
                type="text"
                placeholder={t("inputPlaceholder")}
                className="outline-0"
              />
              <button className="bg-[#315266] text-white py-3 rounded-3xl px-3 font-semibold cursor-pointer">
                {t("openAccount")}
              </button>
            </aside>
          </div>
          <section className="md:w-[1178.18px] w-[100%] overflow-y-auto md:overflow-hidden m-auto relative flex md:justify-center items-start md:items-center md:h-[800px] md:py-0 py-20">
            {/* make correct this section */}
            <section className="w-[794px] h-[617px] bg-gray-100 rounded-3xl flex">
              <aside className="bg-white w-[200px] flex flex-col items-center pt-10 h-[100%] rounded-l-3xl border-r-1 border-gray-300">
                <div className="flex flex-col gap-3">
                  <button className="text-gray-400 flex items-center gap-2 font-semibold">
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
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    {t2("button_dashboard")}
                  </button>
                  <button className="text-gray-400 flex items-center gap-2 font-semibold">
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
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>
                    {t2("button_transaction")}
                  </button>
                  <button className="text-gray-400 flex items-center gap-2 font-semibold">
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
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    {t2("button_accounts")}
                  </button>
                  <button className="text-gray-400 flex items-center gap-2 font-semibold">
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
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    {t2("button_investment")}
                  </button>
                  <button className="text-gray-400 flex items-center gap-2 font-semibold">
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
                    {t2("button_creditCard")}
                  </button>
                  <button className="text-gray-400 flex items-center gap-2 font-semibold">
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
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                      />
                    </svg>
                    {t2("button_loans")}
                  </button>
                  <button className="text-gray-400 flex items-center gap-2 font-semibold">
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
                        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                    {t2("button_services")}
                  </button>
                  <button className="text-gray-400 flex items-center gap-2 font-semibold">
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
                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                      />
                    </svg>
                    {t2("button_myPrivileges")}
                  </button>
                  <button className="text-gray-400 flex items-center gap-2 font-semibold">
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
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    {t2("button_setting")}
                  </button>
                </div>
              </aside>
              {/*  */}
              <section>
                <header className="w-[595px] rounded-tr-3xl h-[70px] bg-white flex items-center justify-between px-5">
                  <h2 className="text-[18px] text-gray-600 font-semibold">
                    {t2("header_investment")}
                  </h2>
                  <aside className="flex items-center gap-2">
                    <div className="flex items-center border-1 border-gray-400 rounded-3xl py-1 px-5 gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder={t2("input_searchPlaceholder")}
                        className="outline-0"
                      />
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </div>
                  </aside>
                </header>
                <div className="flex items-center justify-evenly w-[100%] py-3">
                  {Box1.map((e, i) => {
                    return (
                      <article
                        key={i}
                        className="w-[30%] h-[80px] bg-white rounded-2xl flex items-center gap-2 justify-evenly"
                      >
                        <Image
                          src={e.icon}
                          alt={e.number}
                          className="w-[30px]"
                        />
                        <aside className="w-[120px]">
                          <p className="text-[10px] text-gray-500">{e.disc}</p>
                          <h2 className="text-gray-600 font-semibold">
                            {e.number}
                          </h2>
                        </aside>
                      </article>
                    );
                  })}
                </div>
                <div className="pb-5 flex items-center justify-evenly">
                  <div>
                    <h2 className=" font-semibold text-gray-600 mb-2">
                      {t2("title_yearlyTotalInvestments")}
                    </h2>
                    <Image
                      src={tredingLeft}
                      alt="Treding left"
                      className="rounded-2xl w-[280px]"
                    />
                  </div>
                  <div>
                    <h2 className=" font-semibold text-gray-600 mb-2">
                      {t2("title_monthlyRevenue")}
                    </h2>

                    <Image
                      src={tredingRight}
                      alt="Treding Right"
                      className="rounded-2xl w-[280px]"
                    />
                  </div>
                </div>
                <div className="w-[100%] flex items-start justify-between pr-3">
                  <div className="w-[55%] flex flex-col items-end gap-5">
                    {Box2.map((e, i) => {
                      return (
                        <div
                          key={i}
                          className="w-[95%] h-[53px] border-1 border-gray-300 bg-white rounded-2xl flex items-center justify-between px-5"
                        >
                          <div>
                            <h2 className="text-[13px]">{e.name}</h2>
                            <p className="text-[10px]">{e.disc1}</p>
                          </div>
                          <div>
                            <h2 className="text-[13px]">{e.price}</h2>
                            <p className="text-[10px]">{e.disc2}</p>
                          </div>
                          <div>
                            <h2 className="text-[13px]">{e.procent}</h2>
                            <p className="text-[10px]">{e.disc3}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-[43%] h-[199px] bg-white border-gray-300 rounded-2xl border-1">
                    <div className="flex items-center py-2 px-3 justify-between">
                      <h2 className="text-[10px] text-gray-400">
                        {t2("table_slNo")}
                      </h2>
                      <h2 className="text-[10px] text-gray-400">
                        {t2("table_name")}
                      </h2>
                      <h2 className="text-[10px] text-gray-400">
                        {t2("table_price")}
                      </h2>
                      <h2 className="text-[10px] text-gray-400">
                        {t2("table_return")}
                      </h2>
                    </div>
                    <hr className="border-1 border-gray-300" />
                    <div className="px-3">
                      {Box3.map((e, i) => {
                        return (
                          <div
                            key={i}
                            className="flex items-center justify-between py-1"
                          >
                            <h2 className="text-[13px] text-gray-500">
                              {e.num}
                            </h2>
                            <h2 className="text-[13px] text-gray-500">
                              {e.name}
                            </h2>
                            <h2 className="text-[13px] text-gray-500">
                              {e.price}
                            </h2>
                            <h2 className="text-[13px] text-gray-500">
                              {e.prosent}
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <Image
              src={phoneImage}
              alt="Phone"
              className="absolute md:bottom-[-100px] top-35 md:w-[400px] md:top-45 w-[250px] md:left-10 left-0"
            />
          </section>
        </section>
      </div>
    </section>
  );
};

export default First;
