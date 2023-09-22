import { sortDocsFromRecent } from '@/lib/getPagefn';
import { allArticles } from 'contentlayer/generated';
import RenderAnimation from '@/framer/RenderAnimation';
import PostListItem from '@/components/postListItem/PostListItem';

export default function Articles() {
	const sortedArticles = sortDocsFromRecent(allArticles);

	return (
		<main className="relative pb-16">
			<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-neutral-300">
				Articles
			</h1>
			<RenderAnimation>
				<div>
					<p className="mb-4 text-neutral-600 dark:text-neutral-400">
						유익한 아티클들을 스크랩해 모아두었습니다.
						<br />
						아티클의 내용과 추가적으로 공부한 내용을 보실 수 있습니다.🤓
					</p>
				</div>

				<div className="mt-16 mb-4 flex items-end gap-2">
					<h2 className="text-2xl font-bold tracking-tight md:text-4xl dark:text-neutral-300">
						All Scraps
					</h2>
					<span className="font-normal text-sm text-middleGray dark:text-neutral-400">
						{`(${allArticles.length})`}
					</span>
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
