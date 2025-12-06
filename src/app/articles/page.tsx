import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import "./styles.css";
import Link from "next/link";
import { Icon } from "@/components/Icon";

// 1. Create a reader
const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  // 2. Read the "Posts" collection
  const articles = await reader.collections.posts.all();
  return (
    <main className="page-articles p-block-9xl">
      <div className="container-sm ds-flex flow-col-nw gap-3xl">
        <div>
          <h1 className="mb-xs">Articles</h1>
          <p>Read some articles</p>
        </div>
        <ul className="list-style-none p-0 ds-grid grid-tpl-col-3 md:grid-tpl-col-2 gap-3xl md:gap-md">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="article-card text-decoration-none ds-flex flow-col-nw gap-xs radius-md line-black-12 hover:line-black-16 bg-black-4 property-shadow duration-fast ease-out"
              >
                <div className="p-inline-xs pt-xs">
                  <div className="article-img-highlight width-fill ds-flex-center shadow-sm bg-black-8 property-color duration-fast ease-out">
                    <Icon
                      name="Fediverse"
                      size={64}
                      className="icon color-white-64 property-color duration-fast ease-out"
                    />
                  </div>
                </div>
                <div className="p-inline-sm pb-sm">
                  <h2 className="font-size-lg">{article.entry.title}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
