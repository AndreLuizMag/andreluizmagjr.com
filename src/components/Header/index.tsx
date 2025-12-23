import { type NavigationType, social } from "@config/navigation";
import { Button } from "./Button";
import "./styles.css";

export const Header = () => {
	return (
		<header className="header p-xs  shadow-sm radius-md">
			<nav className="height-fill ds-flex flow-col-nw lg:flow-row-rev-nw justify-between align-center">
				<div className="ds-flex-center flow-col-nw lg:flow-row-nw gap-xs">
					<Button href="/" id="homepage" icon="House" label="Homepage" />
					<Button
						href="/articles"
						id="articles"
						icon="Newspaper"
						label="Articles"
					/>
				</div>
				<div className="ds-flex-center flow-col-nw lg:flow-row-nw gap-xs">
					{social.map((s: NavigationType) => (
						<Button
							key={s.id}
							href={s.href}
							id={s.id}
							icon={s.iconName}
							label={s.label}
							openInNewTab
						/>
					))}
				</div>
			</nav>
		</header>
	);
};
