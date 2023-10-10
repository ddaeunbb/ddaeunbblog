import { allArticles, allLogs } from 'contentlayer/generated';
import { sortDocsFromRecent } from '@/lib/getPagefn';
import PostListItem from '@/components/postListItem/PostListItem';

export default function MainList() {
	const arr = [...allArticles, ...allLogs];
	const sortedPostings = sortDocsFromRecent(arr).slice(0, 9);

	return (
		<div className="mt-12 grid w-full gap-5 lg:grid-cols-3 lg:gap-6 lg:gap-y-8 mb-16">
			{sortedPostings.map(scrap => (
				<div key={scrap.slug}>
					<div>
						<PostListItem post={scrap} />
					</div>
				</div>
			))}
		</div>
	);
}
