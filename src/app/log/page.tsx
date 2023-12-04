import { SERIES_EN } from '@/router/path';
import { sortDocsFromRecent } from '@/lib/getPagefn';
import { allLogs } from 'contentlayer/generated';
import RenderAnimation from '@/framer/RenderAnimation';
import PostListItem from '@/components/postListItem/PostListItem';
import SeriesBox from '@/components/seriesBox/SeriesBox';

export default function Log() {
	const sortedLogs = sortDocsFromRecent(allLogs);

	return (
		<main className="relative pb-16 pt-28">
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

				<hr />
				<section className="my-6">
					<h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl dark:text-yellow-300">
						series
					</h2>

					<div className="flex gap-x-3 gap-y-3 mt-4 flex-wrap">
						{SERIES_EN.map(series => (
							<SeriesBox key={series} title={series} />
						))}
					</div>
				</section>
				<hr />

				<div className="mt-12 grid w-full gap-5 lg:grid-cols-3 lg:gap-6 lg:gap-y-8">
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
