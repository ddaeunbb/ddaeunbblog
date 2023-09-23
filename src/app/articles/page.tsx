import { sortDocsFromRecent } from '@/lib/getPagefn';
import { allArticles } from 'contentlayer/generated';
import RenderAnimation from '@/framer/RenderAnimation';
import PostListItem from '@/components/postListItem/PostListItem';

export default function Articles() {
	const sortedArticles = sortDocsFromRecent(allArticles);

	return (
		<main className="relative pb-16">
			<div className="mb-4 flex items-end gap-2">
				<h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-yellow-300">
					Articles
				</h1>
				<span className="font-normal text-sm text-middleGray dark:text-neutral-400">
					{`(${allArticles.length})`}
				</span>
			</div>

			<RenderAnimation>
				<div>
					<p className="mb-4 text-neutral-600 dark:text-neutral-400">
						유익한 아티클들을 스크랩해 모아두는 짹짹
						<br />
						재밌는건 🐤 도장
					</p>
				</div>

				<div className="mt-12 grid w-full gap-5 lg:grid-cols-2 lg:gap-6">
					{sortedArticles.map(scrap => (
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
