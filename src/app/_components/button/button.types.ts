import { ButtonHTMLAttributes } from "react";
import { componentBase } from "../types/components-base.types";
import { LoadingBehavior } from "../types/loading-behavior.type";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  componentBase &
  LoadingBehavior & {
    isOutline?: boolean;
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;
  };

export type ButtonShape = "default" | "wide" | "full" | "sqaure";