import React, { ChangeEvent } from "react";

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
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
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
