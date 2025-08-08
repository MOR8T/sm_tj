import React from "react";
import { Dropdown } from "antd";
import { ItemType } from "antd/es/menu/interface";
import { IoIosArrowDown } from "react-icons/io";

function DropdownUI({ text, items }: { text: string; items: ItemType[] }) {
  return (
    <div>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        arrow
        trigger={["click"]}
      >
        <button
          onClick={() => {}}
          className="text-[#1F2937] text-[15px] leading-[19px] flex items-center gap-[15px]"
        >
          {text}
          <IoIosArrowDown />
        </button>
      </Dropdown>
    </div>
  );
}

export default DropdownUI;
