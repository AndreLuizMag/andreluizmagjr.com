import { memo, type ReactElement } from "react";
import type { IconProps } from "./types";

type IconBaseProps = IconProps & {
  children: ReactElement;
};

export const IconBase = memo(
  ({ children, size = 32, title, className, ...props }: IconBaseProps) => {
    const hasTitle = Boolean(title);

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        aria-hidden={hasTitle ? undefined : true}
        aria-label={title}
        role={hasTitle ? "img" : undefined}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {title && <title>{title}</title>}
        {children}
      </svg>
    );
  },
);

IconBase.displayName = "IconBase";
