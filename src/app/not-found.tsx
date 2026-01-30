import { Icon } from "@component/Icon";
import { MainScroll } from "@component/MainScroll";
import Link from "next/link";

export default function NotFound() {
	return (
		<MainScroll>
			<main className="height-100 ds-flex-center flow-col-nw gap-md">
				<h1>Page not found</h1>
				<Link
					href="/"
					className="ds-flex-center flor-row-nw gap-2xs p-xs font-weight-bold text-decoration-none radius-xs color-white-80 hover:color-white-100 bg-black-12 hover:bg-black-20 hover:line-black-16 duration-normal property-colors ease-out"
				>
					<Icon name="house" width={20} height={20} />
					Return Home
				</Link>
			</main>
		</MainScroll>
	);
}
