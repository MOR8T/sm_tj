import React from "react";
import image1 from "@/../public/Image (33).svg";
import image2 from "@/../public/Image (34).svg";
import image3 from "@/../public/Image (35).svg";
import image4 from "@/../public/Image (36).svg";
import image5 from "@/../public/Image (37).svg";
import image6 from "@/../public/Image (38).svg";
import image7 from "@/../public/Image (39).svg";
import image8 from "@/../public/Image (40).svg";
import image9 from "@/../public/Image (41).svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Eleventh = () => {
  const t = useTranslations("HomePage");
  interface InvoiceItem {
    img: string;
    name: string;
    work: string;
    disc: string;
  }
  const boxs: InvoiceItem[] = [
    {
      img: image1,
      name: t("name1"),
      work: t("work1"),
      disc: t("disc1"),
    },
    {
      img: image2,
      name: t("name2"),
      work: t("work2"),
      disc: t("disc2"),
    },
    {
      img: image3,
      name: t("name3"),
      work: t("work3"),
      disc: t("disc3"),
    },
    {
      img: image4,
      name: t("name4"),
      work: t("work4"),
      disc: t("disc4"),
    },
    {
      img: image5,
      name: t("name5"),
      work: t("work5"),
      disc: t("disc5"),
    },
    {
      img: image6,
      name: t("name6"),
      work: t("work6"),
      disc: t("disc6"),
    },
    {
      img: image7,
      name: t("name7"),
      work: t("work7"),
      disc: t("disc7"),
    },
    {
      img: image8,
      name: t("name8"),
      work: t("work8"),
      disc: t("disc8"),
    },
    {
      img: image9,
      name: t("name9"),
      work: t("work9"),
      disc: t("disc9"),
    },
  ];
  return (
    <div className="md:w-[1146px] m-auto mb-10">
      <div className="md:w-[477px] w-[90%] m-auto py-30">
        <h2 className="md:text-[45px] text-[20px] text-[#1F2937] text-center font-semibold">
          {t("eleventhTitle")}
        </h2>
        <p className="text-center text-[#4B5563] md:text-[16px] text-[15px]">
          {t("eleventhDescription")}
          solutions.
        </p>
      </div>
      <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-x-visible md:gap-0 gap-5 justify-start md:justify-between md:gap-y-5">
        {boxs.map((e, i) => {
          return (
            <div
              key={i}
              className="bg-[#F6F7F8] flex-shrink-0 md:flex-shrink md:w-[368px] md:h-[264px] h-[300px] w-[300px] p-5 rounded-[24px]"
            >
              <div className="flex items-center gap-5 mb-5">
                <Image src={e.img} alt={e.name} />
                <div>
                  <h2 className="text-[#1F2937] font-semibold text-[18px]">
                    {e.name}
                  </h2>
                  <p>{e.work}</p>
                </div>
              </div>
              <p>{e.disc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Eleventh;
