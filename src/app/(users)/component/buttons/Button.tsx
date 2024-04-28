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
      "border-darkBlue bg-darkBlue text-white hover:bg-white hover:text-base-100 focus:outline-none focus:ring-2 focus:ring-darkBlue mb-2 me-2 rounded-lg border-2 text-sm font-medium transition-all duration-200",
    secondary:
      "mb-2 me-2 focus:bg-darkBlue focus:text-white rounded-lg border-2 border-darkBlue px-3 py-1 text-sm font-medium text-base-100 transition-all duration-200 hover:bg-darkBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-darkBlue",
    tertiary:
      "mb-2 me-2 mt-4 rounded-lg border-2 border-base-100 text-sm font-medium text-base-100 transition-all duration-200 hover:bg-base-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500",
    carousel:
      "flex lg:w-40 w-auto items-center justify-center rounded-lg bg-darkBlue text-center text-xs font-medium text-white hover:bg-mainBlue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 md:text-sm lg:w-auto lg:text-base transition-all duration-300",
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
export function SecondaryButton({
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
      color="secondary"
      className={className}
      href={href}
      target={target}
    >
      {children}
    </Button>
  );
}
export function TertiaryButton({
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
      color="tertiary"
      className={className}
      href={href}
      target={target}
    >
      {children}
    </Button>
  );
}
export function CarouselButton({
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
      color="carousel"
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
