import { sortBasedOnSlug } from '@/lib/getPagefn';
import { allLogs, allArticles } from 'contentlayer/generated';
import RenderAnimation from '@/framer/RenderAnimation';
import PostListItem from '@/components/postListItem/PostListItem';

interface PageProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	let tagsArr: string[] = [];
	[...allLogs, ...allArticles].map(log => {
		log.tags && log.tags.map(tag => tag && tagsArr.push(tag));
	});
	tagsArr = [...new Set(tagsArr)];
	return tagsArr.map(tag => {
		slug: tag;
	});
}

export default function Page({ params }: PageProps) {
	const slug = params.slug;

	const sortedLogs = sortBasedOnSlug(allLogs, slug as string);
	const sortedArticles = sortBasedOnSlug(allArticles, slug as string);

	return (
		<main className="relative pb-16">
			<div className="mb-4 flex items-end gap-2">
				<h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-yellow-300">
					Tags - {slug}
				</h1>
				<span className="font-normal text-sm text-middleGray dark:text-neutral-400">
					{`(${sortedLogs.length + sortedArticles.length})`}
				</span>
			</div>

			<hr />

			<RenderAnimation>
				<div className="mt-12 flex items-end gap-2">
					<h2 className="text-2xl font-bold tracking-tight md:text-4xl dark:text-neutral-300">
						Log
					</h2>
					<span className="font-normal text-sm text-middleGray dark:text-neutral-400">
						{`(${sortedLogs.length})`}
					</span>
				</div>

				<div className="mt-4 grid w-full gap-5 lg:grid-cols-2 lg:gap-6">
					{sortedLogs &&
						sortedLogs.map(scrap => (
							<div key={scrap.slug}>
								<div>
									<PostListItem post={scrap} />
								</div>
							</div>
						))}
				</div>

				<div className="mt-12 flex items-end gap-2">
					<h2 className="text-2xl font-bold tracking-tight md:text-4xl dark:text-neutral-300">
						Articles
					</h2>
					<span className="font-normal text-sm text-middleGray dark:text-neutral-400">
						{`(${sortedArticles.length})`}
					</span>
				</div>

				<div className="mt-4 grid w-full gap-5 lg:grid-cols-2 lg:gap-6">
					{sortedArticles &&
						sortedArticles.map(scrap => (
							<div key={scrap.slug}>
								<div>
									<PostListItem post={scrap} />
								</div>
							</div>
						))}
				</div>
			</RenderAnimation>
		</main>
	);
}
