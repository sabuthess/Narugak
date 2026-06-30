import React from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";

export const FilterPrice = () => {
  return (
    <div className="flex flex-col gap-4 w-full px-3 py-2 my-2 border-b border-neutral-300  ">
      <div className="flex justify-between">
        <h3 className="">Precio</h3>
        <ArrowDownIcon className="size-6 text-black dark:text-white cursor-pointer" />
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <div className="w-5 h-5 border"></div>
          <span>$0 - 100</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-5 h-5 border"></div>
          <span>$100 - 200</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-5 h-5 border"></div>
          <span>$200 - 300</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-5 h-5 border"></div>
          <span>$300 - 400</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-5 h-5 border"></div>
          <span>Más de $ 400</span>
        </div>
      </div>
    </div>
  );
};
