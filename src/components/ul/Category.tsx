import Path from '@/router/path';
import Link from 'next/link';

const Categories = {
	log: 'Log',
	article: 'Articles',
	archives: 'Archives',
	note: 'Note',
};

interface CategoryProp {
	title: string;
}

export default function Category({ title }: CategoryProp) {
	switch (title) {
		case Categories.log:
			return (
				<Link href={Path.log}>
					<span className="text-sm font-medium underline underline-offset-4 text-neutral-600 dark:text-neutral-400">
						{Categories.log}
					</span>
				</Link>
			);

		case Categories.article:
			return (
				<Link href={Path.articles}>
					<span className="text-sm font-medium underline underline-offset-4 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100">
						{Categories.article}
					</span>
				</Link>
			);

		case Categories.archives:
			return (
				<Link href={Path.archives}>
					<span className="text-sm font-medium underline underline-offset-4 text-neutral-600 dark:text-neutral-400">
						{Categories.archives}
					</span>
				</Link>
			);

		case Categories.note:
			return (
				<Link href={Path.note}>
					<span className="text-sm font-medium underline underline-offset-4 text-neutral-600">
						{Categories.note}
					</span>
				</Link>
			);
	}
}
