import { createReader } from "@keystatic/core/reader";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import "./styles.css";

import { Icon } from "@/components/Icon";
import keystaticConfig from "../../../../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const article = await reader.collections.posts.read(slug);
  if (!article) {
    return <div>No Post Found</div>;
  }
  const { node } = await article.content();
  const errors = Markdoc.validate(node);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }
  const renderable = Markdoc.transform(node);

  // const tags = (article.tags || [])
  //   .filter((slug): slug is string => slug !== null) // Type guard
  //   .map((slug) => {
  //     const tag = tagsMap.get(slug);
  //     return tag ? { slug, ...tag } : null;
  //   })
  //   .filter((tag): tag is NonNullable<typeof tag> => tag !== null);
  //

  const publishedAt = article.publishedAt
    ? article.publishedAt.replace(/-/g, "/")
    : "";

  return (
    <main className="page-article p-block-9xl">
      <div className="container-sm ds-flex-start flow-col-nw gap-3xl">
        <div className="width-fill ds-flex flow-col-nw gap-xs">
          <div className="ds-flex flow-row-nw justify-between align-center p-inline-md font-size-sm color-white-64">
            <span>{article.category}</span>

            <span>{publishedAt}</span>
          </div>
          <div className="article-highlight width-fill ds-flex-center radius-md bg-black-12 shadow-sm">
            <Icon name="Fediverse" size={128} />
          </div>
        </div>
        <div className="p-inline-md">
          <h1 className="font-size-3xl mb-xs">{article.title}</h1>
          <div>
            {/*<h1>{article.title}</h1>*/}
            {Markdoc.renderers.react(renderable, React)}
          </div>
          <div className="pt-3xl ds-flex flow-row-nw justify-between align-center font-size-sm color-white-64">
            {article.tags && (
              <div>
                {article.tags.map((tag) => (
                  <div key={tag} className="line-black-16 p-inline-2xs p-block-4xs radius-3xs">
                    <span className={`${tag.colorHighlight}`}>#{tag.name}</span>
                  </div>
                ))}
              </div>
            )}

            <span>{publishedAt}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
