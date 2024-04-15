import type { CustomFlowbiteTheme } from "flowbite-react";

const ButtonProops: CustomFlowbiteTheme = {
  button: {
    color: {
      primary:
        "mb-2 me-2 w-full rounded-lg bg-mainBlue text-sm font-medium text-white hover:bg-sky-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200",
      success:
        "mb-2 me-2 rounded-lg bg-green-400 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200",
      danger:
        "mb-2 me-2 rounded-lg bg-red-500 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-200",
    },
  },
};

export default ButtonProops;
