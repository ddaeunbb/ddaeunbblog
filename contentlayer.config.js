import GithubSlugger from 'github-slugger';
import rehypePrettyCode from 'rehype-pretty-code';
import readingTime from 'reading-time';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: 'string',
		resolve: doc => `/${doc._raw.flattenedPath}`,
	},
	slugAsParams: {
		type: 'string',
		resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
	},
	readingTime: {
		type: 'json',
		resolve: doc => readingTime(doc.body.raw),
	},
	headings: {
		type: 'json',
		resolve: async doc => {
			const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
			const slugger = new GithubSlugger();
			const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
				({ groups }) => {
					const flag = groups?.flag;
					const content = groups?.content;
					return {
						level: flag.length,
						text: content,
						slug: content ? slugger.slug(content) : undefined,
					};
				},
			);
			return headings;
		},
	},
};

export const Log = defineDocumentType(() => ({
	name: 'Log',
	filePathPattern: `log/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		category: {
			type: 'string',
			required: true,
		},
		date: {
			type: 'date',
			required: true,
		},
	},
	computedFields,
}));

export default makeSource({
	contentDirPath: './content',
	documentTypes: [Log],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'github-dark',
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }];
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push('line--highlighted');
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ['word--highlighted'];
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
						ariaLabel: 'anchor',
					},
				},
			],
		],
	},
});
