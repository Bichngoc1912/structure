import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ButtonProps {
  children: string;
  classStyle?: string;
  startIcon?: IconProp;
  endIcon?: IconProp;
  widthIcon?: number;
  heightIcon?: number;
  colorIcon?: string;
  txtColor?: string;
}
