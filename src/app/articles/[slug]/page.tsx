import { createReader } from "@keystatic/core/reader";
import React from "react";
import Markdoc from "@markdoc/markdoc";

import keystaticConfig from "../../../../keystatic.config";

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
      <h1>{article.title}</h1>
      {Markdoc.renderers.react(renderable, React)}
      <hr />
      <a href={`/articles`}>Back to Articles</a>
    </>
  );
}
