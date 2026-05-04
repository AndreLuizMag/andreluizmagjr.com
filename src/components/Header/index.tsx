import { type NavigationType, headerNav, social } from "@config/navigation";
import { Button } from "./Button";
import "./styles.css";

export const Header = () => {
	return (
		<header className="header p-xs radius-md">
			<nav className="height-fill ds-flex flow-col-nw lg:flow-row-rev-nw justify-between align-center">
				<div className="ds-flex-center flow-col-nw lg:flow-row-nw gap-xs">
         {headerNav.map((item: NavigationType) => (
            <Button 
              key={item.id} 
              href={item.href} 
              id={item.id} 
              icon={item.iconName} 
              label={item.label} />
          ))}
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
