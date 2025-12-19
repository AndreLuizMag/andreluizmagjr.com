import { type NavigationType, social } from "@config/navigation";
import Link from "next/link";
import { Icon } from "@/components/Icon";

const Home = () => {
	return (
		<main>
			<section className="p-block-9xl sm:p-block-3xl fade-in">
				<div className="container-sm ds-flex-start flow-col-nw gap-3xl">
					<div>
						<h1 className="mb-md">Hey, I'm André Luiz!</h1>
						<h2 className="color-white-88">
							Front-end developer who loves turning ideas into interfaces people
							actually enjoy using
						</h2>
					</div>

					<div className="ds-inline-flex flow-col-nw gap-2xs color-white-64">
						<p>
							Over the past 3 years, I've been working with React, TypeScript,
							and a bunch of other cool tech to build digital experiences that
							actually make a difference. I've led the creation of a Design
							System from scratch, revamped learning platforms to make them more
							accessible, and I'm always chasing that sweet spot between clean
							code and interfaces that work well for everyone.
						</p>
						<p>
							When I'm not coding, I'm probably tinkering with some new
							technology or diving deep into computer science fundamentals — you
							know, those things we sometimes forget about but that really make
							all the difference.
						</p>
					</div>

					<div className="ds-flex flow-row-nw gap-xs">
						{social.map((s: NavigationType) => (
							<Link
								key={s.id}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								className="ds-flex-center flow-col-nw gap-3xs p-inline-md p-block-xs bg-black-8 hover:bg-black-12 radius-xs color-white-64 hover:color-white-100 text-decoration-none property-colors duration-normal ease-in-out"
							>
								<Icon name={s.iconName || ""} />
								<span>{s.label}</span>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
