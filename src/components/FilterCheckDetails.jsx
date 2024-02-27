import React from "react";
import what from "../assets/what.svg";

const FilterCheckDetails = ({ title }) => {
  return (
    <div className="w-full py-[10px] px-6 flex items-center gap-5">
      <div class="inline-flex items-center">
        <label
          class="relative flex items-center cursor-pointer"
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#637381] checked:border-[#7279D5] checked:bg-[#7279D5] hover:before:opacity-10"
            id="checkbox"
          />
          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
      </div>

      <p className="text-base font-medium leading-9 text-[#212B36]">{title}</p>
      <img src={what} alt="what" className="w-5 h-5" />
    </div>
  );
};

export default FilterCheckDetails;
