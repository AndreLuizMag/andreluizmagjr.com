import type { icons } from "./icons";

export type IconType = {
  id: string,
  displayName: string,
  svg: string;
}

export type IconRegistry = (typeof icons)[number];

export type IconName = IconRegistry["displayName"];

export interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}
