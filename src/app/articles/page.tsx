import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";

import Link from "next/link";

// 1. Create a reader
const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  // 2. Read the "Posts" collection
  const articles = await reader.collections.posts.all();
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.slug}>
          <Link href={`/articles/${article.slug}`}>{article.entry.title}</Link>
        </li>
      ))}
    </ul>
  );
}
