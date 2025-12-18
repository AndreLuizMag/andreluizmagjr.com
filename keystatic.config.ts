import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: `AndreLuizMag/andreluizmagjr.com`,
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/articles/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({
          label: "Excerpt",
          multiline: true,
          validation: { length: { max: 256 } },
        }),
        category: fields.array(
          fields.relationship({
            label: "Category",
            collection: "categories",
          }),
          {
            label: "Categories",
            itemLabel: (props) => {
              if (props.value) {
                return `Categoria: ${props.value}`;
              }
              return "Nova categoria";
            },
          },
        ),
        tags: fields.array(
          fields.relationship({
            label: "Tags",
            collection: "tags",
          }),
          { label: "Tags" },
        ),
        iconHighlight: fields.text({
          label: "Icon highlight",
        }),
        colorHighlight: fields.text({
          label: "Color highlight",
        }),
        content: fields.markdoc({ label: "Content" }),

        publishedAt: fields.date({
          label: "Data de publicação",
          defaultValue: { kind: "today" },
        }),
      },
    }),

    categories: collection({
      label: "Categories",
      path: "src/content/categories/*",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Category" } }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
      },
    }),

    tags: collection({
      label: "Tags",
      path: "src/content/tags/*",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Category" } }),
      },
    }),
  },
});
