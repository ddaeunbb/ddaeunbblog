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
					<span className="text-sm font-medium underline underline-offset-4 sm:text-base">
						{Categories.log}
					</span>
				</Link>
			);

		case Categories.article:
			return (
				<Link href={Path.articles}>
					<span className="text-sm font-medium underline underline-offset-4 sm:text-base">
						{Categories.article}
					</span>
				</Link>
			);

		case Categories.archives:
			return (
				<Link href={Path.archives}>
					<span className="text-sm font-medium underline underline-offset-4 sm:text-base">
						{Categories.archives}
					</span>
				</Link>
			);

		case Categories.note:
			return (
				<Link href={Path.note}>
					<span className="text-sm font-medium underline underline-offset-4 sm:text-base">
						{Categories.note}
					</span>
				</Link>
			);
	}
}
