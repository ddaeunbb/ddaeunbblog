// contentlayer.config.js
import remarkBreaks from "remark-breaks";
import GithubSlugger from "github-slugger";
import rehypePrettyCode from "rehype-pretty-code";
import readingTime from "reading-time";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  readingTime: {
    type: "json",
    resolve: (doc) => readingTime(doc.body.raw)
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const slugger = new GithubSlugger();
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level: flag.length,
            text: content,
            slug: content ? slugger.slug(content) : void 0
          };
        }
      );
      return headings;
    }
  }
};
var fields = {
  title: {
    type: "string",
    required: true
  },
  category: {
    type: "string",
    required: true
  },
  date: {
    type: "date",
    required: true
  },
  tags: {
    type: "list",
    of: { type: "string" }
  },
  featured: {
    type: "boolean",
    default: false
  }
};
var Log = defineDocumentType(() => ({
  name: "Log",
  filePathPattern: `log/**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields
}));
var Articles = defineDocumentType(() => ({
  name: "Articles",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Log, Articles],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            ariaLabel: "anchor"
          }
        }
      ]
    ]
  }
});
export {
  Articles,
  Log,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-UNAFQNFP.mjs.map
