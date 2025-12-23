import { type NavigationType, social } from "@config/navigation";
import { Button } from "./Button";

export const Header = () => {
	return (
		<header className="p-xs bg-black-8 shadow-sm radius-md">
			<nav className="height-fill ds-flex flow-col-nw justify-between align-center">
				<div className="ds-flex-center flow-col-nw gap-xs">
					<Button href="/" id="homepage" icon="House" label="Homepage" />
					<Button
						href="/articles"
						id="articles"
						icon="Newspaper"
						label="Articles"
					/>
				</div>
				<div className="ds-flex-center flow-col-nw gap-xs">
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
