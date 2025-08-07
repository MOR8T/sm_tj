"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "@/public/Logo.svg";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header");

  // Extract current locale from path, fallback to 'en'
  const currentLocale = pathname?.split("/")?.[1] || "en";

  const [locale, setLocale] = useState(currentLocale);

  const onChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;

    // Replace locale in pathname or add if missing
    const segments = pathname.split("/");
    if (["en", "ru", "tj"].includes(segments[1])) {
      segments[1] = selectedLocale;
    } else {
      segments.splice(1, 0, selectedLocale);
    }
    const newPath = segments.join("/") || "/";

    setLocale(selectedLocale);
    router.push(newPath);
  };
  function funRouting(link: string) {
    router.push(link);
  }

  return (
    <div className="bg-[#EBECEE]">
      <nav className="md:max-w-[1440px] w-[90%] m-auto flex items-center justify-between h-16">
        <Image src={logo} alt="Logo" className="w-[150px] md:w-[220px]" />
        <ul className="md:flex hidden items-center gap-7 text-[15px] font-semibold">
          <Link className="mr-5" href={"/"}>
            {t("Home")}
          </Link>
          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex outline-0 w-full text-[15px] justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900">
              {t("Personal")}
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1 flex flex-col items-start p-1 gap-1">
                <MenuItem>
                  <button
                    className="cursor-pointer hover:bg-gray-100 py-2 pl-4 w-[100%] text-start rounded-[5px]"
                    onClick={() => funRouting("product")}
                  >
                    {t("Products")}
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="cursor-pointer hover:bg-gray-100 py-2 pl-4 w-[100%] text-start rounded-[5px]"
                    onClick={() => funRouting("productscards")}
                  >
                    {t("productsCards")}
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex outline-0 w-full text-[15px] justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900">
              {t("Corporate")}
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1 flex flex-col items-start p-1 gap-1">
                <MenuItem>
                  <button
                    className="cursor-pointer hover:bg-gray-100 py-2 pl-4 w-[100%] text-start rounded-[5px]"
                    onClick={() => funRouting("app")}
                  >
                    {t("App")}
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="cursor-pointer hover:bg-gray-100 py-2 pl-4 w-[100%] text-start rounded-[5px]"
                    onClick={() => funRouting("function")}
                  >
                    {t("Function")}
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex outline-0 w-full text-[15px] justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900">
              {t("About")}
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1 flex flex-col items-start p-1 gap-1">
                <MenuItem>
                  <button
                    className="cursor-pointer hover:bg-gray-100 py-2 pl-4 w-[100%] text-start rounded-[5px]"
                    onClick={() => funRouting("company")}
                  >
                    {t("Company")}
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </ul>
        <div className="flex items-center gap-3">
          <select
            className="md:text-[15px] text-[10px] font-semibold outline-0"
            value={locale}
            onChange={onChangeLocale}
          >
            <option value="en">{t("English")}</option>
            <option value="ru">{t("Russian")}</option>
            <option value="tj">{t("Tajik")}</option>
          </select>
          <select className="md:hidden block w-[75px] text-[12px] text-center font-semibold outline-0 rounded-2xl" onChange={(e)=> funRouting(e.target.value)}>
            <option value="/">{t("Home")}</option>
            <option value="product">{t("Products")}</option>
            <option value="productscards">{t("productsCards")}</option>
            <option value="app">{t("App")}</option>
            <option value="function">{t("Function")}</option>
            <option value="company">{t("Company")}</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default Header;
