import { sortDocsFromRecent } from '@/lib/getPagefn';
import { allLogs } from 'contentlayer/generated';
import RenderAnimation from '@/framer/RenderAnimation';
import SearchIcon from '@/components/icons/SearchIcon';
import PostListItem from '@/components/postListItem/PostListItem';

export default function Log() {
	const sortedLogs = sortDocsFromRecent(allLogs);

	return (
		<main className="relative pb-16">
			<div className="mb-4 flex items-end gap-2">
				<h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-yellow-300">
					Log
				</h1>
				<span className="font-normal text-sm text-middleGray dark:text-neutral-400">
					{`(${allLogs.length})`}
				</span>
			</div>

			<RenderAnimation>
				<div>
					<p className="mb-4 text-neutral-600 dark:text-neutral-400">
						심도있게 탐구하고 싶었던 것을 기록하는 짹짹
						<br />
						재밌는건 🐤 도장
					</p>
				</div>
				<div className="relative w-96 mb-4">
					<input
						className="block w-full rounded-md border px-4 py-2 border-neutral-200 bg-white placeholder:text-tertiary dark:border-neutral-900 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-800"
						placeholder="아직 모이 쪼아먹는 중..."
					/>
					<SearchIcon />
				</div>

				<div className="mt-12 grid w-full gap-5 lg:grid-cols-2 lg:gap-6">
					{sortedLogs.map(log => (
						<div key={log.slug}>
							<div>
								<PostListItem post={log} />
							</div>
						</div>
					))}
				</div>
			</RenderAnimation>
		</main>
	);
}
