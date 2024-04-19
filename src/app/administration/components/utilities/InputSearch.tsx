import React, { ChangeEvent } from "react";
import ApalahIcon from "../icon/ApalahIcon";

type InputSearchProps = {
  searchInput: string;
  handleSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputSearch: React.FC<InputSearchProps> = ({
  searchInput,
  handleSearchInputChange,
}) => {
  return (
    <>
      <section>
        <div className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <ApalahIcon />
            </div>
            <input
              type="text"
              id="simple-search"
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-black focus:border-mainBlue focus:ring-mainBlue"
              placeholder="Search data"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default InputSearch;
