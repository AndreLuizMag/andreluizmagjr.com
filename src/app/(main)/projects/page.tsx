import { Icon } from "@/components/Icon";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="page-projects p-block-9xl">
      <section className="fade-in mb-3xl">
        <div className="container-sm ds-flex flow-col-nw gap-3xl">
          <div>
            <h1>Projects</h1>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </section>
      <section className="ds-flex flow-col-nw">
        <div className="container-sm ds-flex flow-col-nw gap-3xl">
          <div className="ds-flex flow-col-nw">
            <h2>2026</h2>
            <div className="ds-flex flow-row-nw align-stretch justify-start gap-3xl p-3xl radius-3xl line-black-16">
              <div className="aspect-ratio-video bg-black-16 shadow-sm radius-md">image</div>
              <div className="flex-bgs p-block-md">
                <h3 className="font-size-xl mb-xs">Lorem ipsum</h3>
                <p className="mb-3xl color-white-64">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link href="#" className="width-fit ds-flex-center flow-row-nw gap-2xs p-block-3xs p-inline-md font-weight-semibold line-height-none color-white-64 hover:color-white-100 text-decoration-none bg-black-4 line-black-12 hover:line-black-16 radius-xs property-all duration-fast ease-out">
                  Open
                  <Icon name="arrowRight" width={16}  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
