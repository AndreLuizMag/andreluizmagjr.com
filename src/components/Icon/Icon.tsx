import { memo } from "react";
import { IconBase } from "./IconBase";
import { iconPaths } from "./icons";
import type { IconProps } from "./types";

export const Icon = memo(function Icon({ name, ...props }: IconProps) {
  const iconPath = iconPaths[name];

  if (!iconPath) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Icon "${name}" não encontrado`);
    }
    return null;
  }

  return (
    <IconBase name={name} {...props}>
      {iconPath}
    </IconBase>
  );
});
