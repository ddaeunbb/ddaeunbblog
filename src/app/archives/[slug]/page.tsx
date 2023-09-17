import { getLogFromParams, getFromReadingTime } from '@/lib/getPagefn';
import ProgressBar from '@/components/progressbar/ProgressBar';
import MdxComponent from '@/components/mdx/MdxComponent';
import Category from '@/components/ul/Category';
import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import Toc from '@/components/toc/Toc';
import { allArchives } from 'contentlayer/generated';

interface PageProps {
	params: {
		slug: string;
	};
}

export default async function Slug({ params }: PageProps) {
	const posting = await getLogFromParams(allArchives, params.slug);
	const readingTime = await getFromReadingTime(allArchives, params.slug);
	const date = posting.date.slice(0, 10);

	return (
		<main>
			<ProgressBar />
			<section>
				<div>
					<h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl mx-auto mb-4 max-w-3xl text-center">
						{posting.title}
					</h1>
					<div className="mt-2 flex justify-center gap-1">
						<Category title={posting.category} />
					</div>

					<div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
						<div className="mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400">
							<div className="flex items-center gap-1 text-xs">
								<CalendarIcon />
								<time dateTime={date}>{date}</time>
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
						<MdxComponent code={posting.body.code} />
					</div>
					<div className="mt-12 ml-auto">
						<Toc list={posting} />
					</div>
				</div>
			</section>
		</main>
	);
}
