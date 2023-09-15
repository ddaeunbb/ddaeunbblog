import { notFound } from 'next/navigation';
import { allLogs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/Component';
import Category from '@/components/ul/Category';
import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';

interface PageProps {
	params: {
		slug: string;
	};
}

interface Heading {
	level: number;
	text: string;
	slug: string;
}

async function getLogFromParams(slug: string) {
	const log = allLogs.find(log => log.slugAsParams === slug);

	if (!log) notFound();
	return log;
}

async function getFromReadingTime(slug: string) {
	const log = allLogs.find(log => log.slugAsParams === slug);

	if (!log) notFound();
	return log.readingTime.text.slice(0, -8).trim();
}

const Page = async ({ params }: PageProps) => {
	const log = await getLogFromParams(params.slug);
	const readingTime = await getFromReadingTime(params.slug);

	return (
		<section>
			<div>
				<h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl mx-auto mb-4 max-w-3xl text-center">
					{log.title}
				</h1>
				<div className="mt-2 flex justify-center gap-1">
					<Category title={log.category} />
				</div>

				<div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
					<div className="mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400">
						<div className="flex items-center gap-1 text-xs">
							<CalendarIcon />
							<span>2023.09.14</span>
						</div>
						<div className="flex items-center gap-1 text-xs">
							<ClockIcon />
							<span>{readingTime}분</span>
						</div>
					</div>
				</div>
				<hr className="border-1 w-full border-neutral-300 transition-all dark:border-neutral-700 mt-4" />
			</div>

			{/* // 본문 */}
			<div className="relative gap-8 lg:flex">
				<div className="w-full max-w-5xl prose prose-neutral text-basicFont dark:prose-dark py-12">
					<Mdx code={log.body.code} />
				</div>
			</div>

			<div>
				{log.headings.map((heading: Heading) => {
					return (
						<div key={`#${heading.slug}`} className="toc">
							<a data-level={heading.level} href={`#${heading.slug}`}>
								{heading.text}
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Page;
