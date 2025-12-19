import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../keystatic.config";
import "./styles.css";
import Link from "next/link";
import { Icon } from "@/components/Icon";

const reader = createReader(process.cwd(), keystaticConfig);

// Buscar tudo de uma vez
const articles = await reader.collections.posts.all();
const allCategories = await reader.collections.categories.all();
const allTags = await reader.collections.tags.all();

// Criar maps para lookup rápido
const categoriesMap = new Map(allCategories.map((c) => [c.slug, c.entry]));
const tagsMap = new Map(allTags.map((t) => [t.slug, t.entry]));

// Mapear artigos com tipos corretos
const articlesWithRelations = articles.map((article) => {
  // Filtrar nulls e buscar dados
  const categories = (article.entry.category || [])
    .filter((slug): slug is string => slug !== null) // Type guard
    .map((slug) => {
      const cat = categoriesMap.get(slug);
      return cat ? { slug, ...cat } : null;
    })
    .filter((cat): cat is NonNullable<typeof cat> => cat !== null);

  const tags = (article.entry.tags || [])
    .filter((slug): slug is string => slug !== null) // Type guard
    .map((slug) => {
      const tag = tagsMap.get(slug);
      return tag ? { slug, ...tag } : null;
    })
    .filter((tag): tag is NonNullable<typeof tag> => tag !== null);

  return {
    ...article,
    categories,
    tags,
  };
});

export default async function Page() {
  return (
    <main className="page-articles p-block-9xl">
      <div className="container-full ds-flex flow-col-nw gap-3xl">
        <div>
          <h1 className="mb-xs">Articles</h1>
          <p>Read some articles</p>
        </div>
        <ul className="list-style-none p-0 ds-grid grid-tpl-col-3 md:grid-tpl-col-2 gap-3xl md:gap-md">
          {articlesWithRelations.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="article-card ds-flex flow-col-nw gap-3xl width-fill text-decoration-none cursor-pointer p-md line-black-16 hover:line-black-20 radius-md property-shadow duration-fast ease-out"
              >
                <Icon
                  name={article.entry.iconHighlight}
                  size={64}
                  className="icon color-white-64 property-color duration-fast ease-out"
                />
                <div>
                  {/* Título */}
                  <h2 className="title font-size-lg mb-xs color-white-88 property-color duration-fast ease-out">
                    {article.entry.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="excerpt color-white-72 mt-xs mb-md line-height-default property-color duration-fast ease-out">
                    {article.entry.excerpt.length > 92
                      ? `${article.entry.excerpt.slice(0, 92)}...`
                      : article.entry.excerpt}
                  </p>

                  <div className="width-fill ds-flex flow-row-nw justify-between align-center">
                    {/* Categorias */}
                    {article.categories.length > 0 && (
                      <div className="category-group line-black-16 p-inline-2xs p-block-4xs radius-3xs">
                        {article.categories.map((cat) => (
                          <span
                            key={cat.slug}
                            className="category font-size-sm color-white-64"
                          >
                            {cat.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {article.entry.publishedAt && (
                      <span className="publish-at font-size-sm color-white-64">
                        {article.entry.publishedAt.replace(/-/g, "/")}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*<Link
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
							</Link>*/}
    </main>
  );
}
