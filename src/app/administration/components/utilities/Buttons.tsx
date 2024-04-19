import { Button, type CustomFlowbiteTheme } from "flowbite-react";

interface ButtonProops {
  href?: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const customButton: CustomFlowbiteTheme["button"] = {
  color: {
    primary:
      "mb-2 me-2 w-full rounded-lg bg-mainBlue text-sm font-medium text-white hover:bg-sky-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200",
    success:
      "mb-2 me-2 rounded-lg bg-green-400 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200",
    danger:
      "mb-2 me-2 rounded-lg bg-red-500 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-200",
    loading:
      "mb-2 me-2 flex content-center rounded-lg bg-mainBlue text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  },
};

export function PrimaryButton({
  href,
  className,
  target,
  children,
  type,
  disabled,
  onClick,
}: ButtonProops) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type={type}
      theme={customButton}
      color="primary"
      className={className}
      href={href}
      target={target}
    >
      {children}
    </Button>
  );
}
export function SuccessButton({
  href,
  className,
  target,
  children,
  type,
  onClick,
}: ButtonProops) {
  return (
    <Button
      onClick={onClick}
      type={type}
      theme={customButton}
      color="success"
      className={className}
      href={href}
      target={target}
    >
      {children}
    </Button>
  );
}
export function DangerButton({
  href,
  className,
  target,
  children,
  type,
  onClick,
}: ButtonProops) {
  return (
    <Button
      onClick={onClick}
      type={type}
      theme={customButton}
      color="danger"
      className={className}
      href={href}
      target={target}
    >
      {children}
    </Button>
  );
}

export function LoadingButton({
  className,
  children,
  type,
  disabled,
}: ButtonProops) {
  return (
    <Button
      disabled={disabled}
      type={type}
      theme={customButton}
      color="loading"
      className={className}
    >
      {children}
    </Button>
  );
}
