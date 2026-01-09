import Link from "next/link";
import { MainScroll } from "@component/MainScroll";

export default function NotFound() {
  return (
    <MainScroll>
      <main>
        <section>
          <h1>Not Found</h1>
          <p>Could not find requested resource</p>
          <Link href="/">Return Home</Link>
        </section>
      </main>
    </MainScroll>
  );
}
