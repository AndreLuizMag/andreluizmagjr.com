import Link from "next/link";
import { Icon } from "@/components/Icon";
import "./styles.css";
import type { IconName } from "@component/Icon";

type ButtonProps = {
	href: string;
	icon: IconName;
	id: string;
	label: string;
	openInNewTab?: boolean;
};

export const Button = ({
	href,
	icon,
	id,
	label,
	openInNewTab,
}: ButtonProps) => {
	return (
		<div className="header-button ps-relative">
			<label
				htmlFor={id}
				className="label ps-absolute width-fit p-block-2xs p-inline-xs font-size-sm line-height-none color-white-100 radius-xs bg-black-4 line-black-12 property-all duration-normal ease-in-out"
			>
				{label}
			</label>
			<Link
				className="button ps-relative ds-flex-center p-xs text-decoration-none radius-xs color-white-80 hover:color-white-100 hover:bg-black-12 hover:line-black-16"
				href={href}
				id={id}
				rel={openInNewTab ? "noopener noreferrer" : undefined}
				target={openInNewTab ? "_blank" : "_self"}
			>
				<Icon name={icon} size={24} className="ps-relative z-1" />
			</Link>
		</div>
	);
};
