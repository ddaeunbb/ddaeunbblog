import { allLogs } from 'contentlayer/generated';
import RenderAnimation from '@/framer/RenderAnimation';
import SearchIcon from '@/components/icons/SearchIcon';
import PostListItem from '@/components/postListItem/PostListItem';

export default function Log() {
	return (
		<main className="relative pb-16">
			<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
				Blog
			</h1>
			<RenderAnimation>
				<div>
					<p className="mb-4 text-neutral-600">
						심도있게 탐구하고 싶었던 것을 기록하는 공간입니다.
						<br />
						보고싶은 포스트는 검색창에 입력해 찾아볼 수 있습니다.🧐
					</p>
				</div>
				<div className="relative mb-4 w-full">
					<input
						className="block w-full rounded-md border px-4 py-2 border-neutral-200 bg-white placeholder:text-tertiary dark:border-neutral-900 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-800"
						placeholder="검색 기능은 아직 준비중이예요.🥲"
					/>
					<SearchIcon />
				</div>
				<div className="mt-16 mb-4 flex items-end gap-2">
					<h2 className="text-2xl font-bold tracking-tight md:text-4xl">
						All Posts
					</h2>
					<span className="font-normal text-sm text-middleGray">
						{`(${allLogs.length})`}
					</span>
				</div>

				<div className="mt-12 grid w-full gap-5 lg:grid-cols-2 lg:gap-6">
					{allLogs.map(log => (
						<div key={log.slug}>
							<div>
								<PostListItem log={log} />
							</div>
						</div>
					))}
				</div>
			</RenderAnimation>
		</main>
	);
}
