import { createReader } from "@keystatic/core/reader";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import "./styles.css";

import keystaticConfig from "../../../../keystatic.config";
import { Icon } from "@/components/Icon";

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
  return (
    <>
      <main className="page-article p-block-9xl">
        <div className="container-sm ds-flex-start flow-col-nw gap-3xl">
          <div className="article-highlight width-fill ds-flex-center radius-md bg-black-12 shadow-sm">
            <Icon name="Fediverse" size={128} />
          </div>
          <div>
            {/*<h1>{article.title}</h1>*/}
            {Markdoc.renderers.react(renderable, React)}
          </div>
          <a href={`/articles`}>Back to Articles</a>
        </div>
      </main>
    </>
  );
}
