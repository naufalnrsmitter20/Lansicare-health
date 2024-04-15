import React, { ReactNode } from "react";
import { Toast, ToastToggle } from "flowbite-react";

interface toastProops {
  message: ReactNode;
  type: any;
}

export default function Toaster({ message, type }: toastProops) {
  return (
    <React.Fragment>
      <div className="fixed bottom-4 right-4">
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            {type}
          </div>
          <div className="ml-3 text-sm font-normal">{message}</div>
          <ToastToggle />
        </Toast>
      </div>
    </React.Fragment>
  );
}
