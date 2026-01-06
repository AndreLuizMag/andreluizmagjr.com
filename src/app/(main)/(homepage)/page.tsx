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
              Front-end developer who turns ideas into interfaces people
              actually want to use.
            </h2>
          </div>

          <div className="ds-inline-flex flow-col-nw gap-2xs color-white-64">
            <p>
              I've been working as a front-end developer for 5 years now, and
              along the way, I found my home in React and TypeScript. There's
              something satisfying about building interfaces that not only look
              good but feel right to use. I'm always chasing that sweet spot
              where clean code meets experiences that actually work for people.
            </p>
            <p>
              But honestly? Technology itself is what really gets me going. I
              love diving into new tools, exploring different areas of tech, and
              understanding how things work under the hood. That curiosity isn't
              limited to front-end — it's about the whole universe of
              possibilities that technology opens up.
            </p>
            <p>
              Over in the <Link href='/articles'>articles</Link> section, I share my journey through all of
              this. It's less about teaching and more about documenting what
              I've experienced — the wins, the struggles, the random things I
              discover along the way. Just me, keeping track of where I've been
              and where I'm heading with tech, both at work and in my everyday
              experiments.
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
