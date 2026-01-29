import { CodeBlock } from "@component/CodeBlock";

export const markdocConfig = {
  nodes: {
    fence: {
      render: CodeBlock,
      attributes: {
        language: {
          type: String,
        },
      },
    },
  },
};
