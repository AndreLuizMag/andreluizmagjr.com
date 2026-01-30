import { createReader } from "@keystatic/core/reader";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import "./styles.css";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { markdocConfig } from "@/lib/markdoc-config";
import { CodeBlock } from "@/components/CodeBlock";
import keystaticConfig from "../../../../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const posts = await reader.collections.posts.all();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const article = await reader.collections.posts.read(slug);

  if (!article) {
    notFound(); // Melhor que retornar div manualmente
  }

  // Buscar conteúdo e dados relacionados em paralelo
  const [{ node }, tagsData, categoriesData] = await Promise.all([
    article.content(),
    // Tags
    Promise.all(
      (article.tags || [])
        .filter((slug): slug is string => slug !== null)
        .map(async (slug) => {
          const tag = await reader.collections.tags.read(slug);
          return tag ? { slug, ...tag } : null;
        }),
    ),
    // Categorias
    Promise.all(
      (article.category || [])
        .filter((slug): slug is string => slug !== null)
        .map(async (slug) => {
          const category = await reader.collections.categories.read(slug);
          return category ? { slug, ...category } : null;
        }),
    ),
  ]);

  // Filtrar nulls
  const tags = tagsData.filter(
    (tag): tag is NonNullable<typeof tag> => tag !== null,
  );
  const categories = categoriesData.filter(
    (cat): cat is NonNullable<typeof cat> => cat !== null,
  );

  // Validar e transformar o Markdoc
  const errors = Markdoc.validate(node);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }
  // const renderable = Markdoc.transform(node);
  const renderable = Markdoc.transform(node, markdocConfig);

  const publishedAt = article.publishedAt
    ? article.publishedAt.replace(/-/g, "/")
    : "";

  return (
    <main className="page-article p-block-9xl">
      <div className="container-sm ds-flex-start flow-col-nw gap-3xl fade-in">
        <div className="width-fill ds-flex flow-col-nw gap-xs">
          <div className="ds-flex flow-row-nw justify-between align-center p-inline-md font-size-sm color-white-64">
            {categories.map((category) => (
              <span key={category.slug}>{category.name}</span>
            ))}

            <span>{publishedAt}</span>
          </div>
          <div className="article-highlight width-fill ds-flex-center radius-md bg-black-12 shadow-sm">
            <Icon
              name={article.iconHighlight}
              size={128}
              className="color-white-100"
            />
          </div>
        </div>
        <div className="p-inline-md">
          <h1>{article.title}</h1>
          <div>
            {/*<h1>{article.title}</h1>*/}
            {Markdoc.renderers.react(renderable, React, {
              components: {
                CodeBlock, // Mapeie o nome para o componente
              },
            })}
          </div>
          <div className="pt-3xl ds-flex flow-row-nw justify-between align-center font-size-sm color-white-64">
            {article.tags && (
              <div className="ds-flex flow-row gap-3xs">
                {tags.map((tag) => (
                  <div
                    key={tag?.name}
                    className="line-black-16 p-inline-2xs p-block-4xs radius-3xs"
                  >
                    <span
                      className={`color-${tag?.colorHighlight}-light font-weight-semibold`}
                    >
                      #{tag?.name}
                    </span>
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
