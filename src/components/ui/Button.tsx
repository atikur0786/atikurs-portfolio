import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

// Fix: children must always be ReactNode
type StrictChildren = {
  children?: React.ReactNode;
};

type ButtonVariants =
  | "primary"
  | "outline"
  | "ghost"
  | "white"
  | "outline-white";

// Base props shared by anchor + button
interface BaseProps extends StrictChildren {
  variant?: ButtonVariants;
  icon?: React.ElementType;
  isLoading?: boolean;
  className?: string;
}

// Anchor button props
type AnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

// Motion button props
type MotionButtonProps = BaseProps &
  Omit<HTMLMotionProps<"button">, "children"> & {
    href?: undefined; // ensures type narrowing works
  };

type Props = AnchorProps | MotionButtonProps;

const variantStyles: Record<ButtonVariants, string> = {
  primary:
    "bg-primary text-white hover:bg-neutral-800 hover:scale-105 hover:shadow-lg",
  outline:
    "border border-neutral-300 text-primary hover:border-primary hover:bg-neutral-50",
  ghost: "text-secondary hover:text-primary hover:bg-neutral-100/50",
  white:
    "bg-white text-primary hover:bg-neutral-100 hover:scale-105 hover:shadow-lg",
  "outline-white":
    "border border-white/20 text-white hover:bg-white/10 hover:border-white",
};

const baseStyles =
  "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 group select-none";

export default function Button(props: Props) {
  const {
    children,
    variant = "primary",
    icon: Icon,
    className = "",
    isLoading = false,
    ...rest
  } = props;

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${
    className || ""
  } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`;

  const IconComponent =
    Icon && typeof Icon === "function" ? (
      <Icon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
    ) : null;

  if ("href" in props && props.href) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={combinedStyles} {...anchorProps}>
        {children}
        {!isLoading && IconComponent}
      </a>
    );
  }

  const buttonProps = rest as Omit<HTMLMotionProps<"button">, "children">;

  return (
    <motion.button
      {...buttonProps}
      disabled={isLoading || buttonProps.disabled}
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
      className={combinedStyles}
    >
      {isLoading ? "Loading..." : children}
      {!isLoading && IconComponent}
    </motion.button>
  );
}
