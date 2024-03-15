"use client";

import React, { useState } from "react";

type Page = string;

const Selector: React.FC = () => {
  const [selectedPages, setSelectedPages] = useState<Page[]>([]);
  const pages: Page[] = ["Page 1", "Page 2", "Page 3", "Page 4"];

  const togglePageSelection = (page: Page) => {
    setSelectedPages((prevSelectedPages) =>
      prevSelectedPages.includes(page)
        ? prevSelectedPages.filter((p) => p !== page)
        : [...prevSelectedPages, page]
    );
  };

  const toggleSelectAll = () => {
    if (selectedPages.length !== pages.length) {
      setSelectedPages(pages);
    } else {
      setSelectedPages([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white h-screen">
      <div className="w-[370px] h-[326px] rounded-[6px] border-[1px] border-[#EEEEEE] py-[10px] shadow-[0px_8px_15px_0px_#1414141F] font-montserrat">
        <div className="flex items-center justify-between py-[8px] pr-[15px] pl-[22px] w-full h-[42px]">
          <span className="text-[#1F2128] text-[14px] leading-[14.2px]">All pages</span>
          <div className="w-[35px] h-[35px] flex items-center justify-center">
            <input
              type="checkbox"
              className="appearance-none peer relative checked:bg-blue-500 checked:border-0 border-[1px] h-[23px] w-[23px] text-white rounded-[6px] cursor-pointer"
              checked={selectedPages.length === pages.length}
              onChange={toggleSelectAll}
            />
            <svg
              className="
                absolute 
                w-4 h-4 mt-1
                hidden peer-checked:block
                pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <div className="w-full h-[20px] py-[10px] px-[15px] gap-[10px]">
          <div className="w-[340px] border-[0.7px] opacity-45 border-[#CDCDCD]"></div>
        </div>
        <div className="h-[164px] w-full">
          {pages.map((page, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-[8px] pr-[15px] pl-[22px] w-full h-[42px] cursor-pointer"
            >
              <label htmlFor={page} className="text-[#1F2128] text-[14px] leading-[14.2px]">
                {page}
              </label>
              <div className="w-[35px] h-[35px] flex items-center justify-center">
                <input
                  id={page}
                  type="checkbox"
                  className="appearance-none peer relative checked:bg-blue-500 checked:border-0 border-[1px] h-[23px] w-[23px] text-white rounded-[6px] cursor-pointer"
                  checked={selectedPages.includes(page)}
                  onChange={() => togglePageSelection(page)}
                />
                <svg
                  className="
                    absolute 
                    w-4 h-4 mt-1
                    hidden peer-checked:block
                    pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[20px] py-[10px] px-[15px] gap-[10px]">
          <div className="w-[340px] border-[0.7px] opacity-45 border-[#CDCDCD]"></div>
        </div>
        <div className="w-full h-[60px] py-[10px] px-[15px] gap-[10px]">
          <button
            type="button"
            className="w-[340px] h-[40px] rounded-[4px] py-[10px] px-[20px] bg-[#FFCE22] hover:bg-[#FFD84D] text-[#1F2128] text-[14px] leading-[18.2px]"
            onClick={() => console.log(selectedPages)}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selector;
