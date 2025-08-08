"use client";
import { Drawer } from "antd";
import { ItemType } from "antd/es/menu/interface";
import LocaleSwicherSelect from "../localeSwicherSelect/LocaleSwicherSelect";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { IoMdClose } from "react-icons/io";
import DropdownUI from "../ui/dropDown/DropDown";
import { ReactNode } from "react";

type Props = {
  LOGO: ReactNode;
  open: boolean;
  onClose: () => void;
  productsItems: ItemType[];
  featuresItems: ItemType[];
  companyItems: ItemType[];
};

export default function MenuDrawer({
  LOGO,
  open,
  onClose,
  productsItems,
  featuresItems,
  companyItems,
}: Props) {
  const t = useTranslations("Header");

  return (
    <Drawer closable={false} open={open} onClose={onClose}>
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <Link href="/" onClick={onClose}>
          {LOGO}
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className=" rounded-full hover:bg-gray-200 transition"
        >
          <IoMdClose className="text-[25px]" />
        </button>
      </div>
      <nav className="flex-1 flex flex-col gap-6 py-8 overflow-y-auto">
        <Link
          href="/"
          className="text-[#1F2937] text-xl font-medium"
          onClick={onClose}
        >
          {t("Home")}
        </Link>
        <DropdownUI text={t("Personal")} items={productsItems} />
        <DropdownUI text={t("Corporate")} items={featuresItems} />
        <DropdownUI text={t("About")} items={companyItems} />
        <LocaleSwicherSelect />
      </nav>
    </Drawer>
  );
}
