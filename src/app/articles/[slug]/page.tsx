import { getLogFromParams, getFromReadingTime } from '@/lib/getPagefn';
import ProgressBar from '@/components/progressbar/ProgressBar';
import MdxComponent from '@/components/mdx/MdxComponent';
import Category from '@/components/ul/Category';
import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import { allArticles } from 'contentlayer/generated';
import PostTag from '@/components/Tags/PostTag';
import PostFooter from '@/components/footer/PostFooter';

interface PageProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	return [...allArticles].map(log => {
		slug: log.slugAsParams;
	});
}

export default function Slug({ params }: PageProps) {
	const posting = getLogFromParams(allArticles, params.slug);
	const readingTime = getFromReadingTime(allArticles, params.slug);
	const date = posting.date.slice(0, 10);

	return (
		<main className="lg:max-w-4xl mx-auto pt-32">
			<ProgressBar />
			<section>
				<div>
					<img
						src={posting.thumbnail}
						className="w-full h-96 rounded-2xl my-5 object-cover object-center border"
						alt="main"
					/>
					<h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mx-auto max-w-4xl break-normal dark:text-yellow-300 mb-2">
						{posting.title}
					</h1>

					<Category title={posting.category} />

					<div className="mt-1 ">
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
				</div>

				<div className="mt-12 space-y-8 ">
					<div className="flex gap-2">
						{posting.tags?.map(tag => <PostTag key={tag} tag={tag} />)}
					</div>
					<hr className="border-[0.5px] w-full border-neutral-300 transition-all dark:border-neutral-700" />
					<PostFooter />
				</div>
			</section>
		</main>
	);
}
