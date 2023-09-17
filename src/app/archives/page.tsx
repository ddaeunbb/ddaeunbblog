import Link from 'next/link';
import { allLogs, allArticles, Articles, Log } from 'contentlayer/generated';
import RenderAnimation from '@/framer/RenderAnimation';

function getTotalTags(logs: Log[], articles: Articles[]) {
	const total = [...logs, ...articles];
	const tags: string[] = [];
	total.forEach(el => {
		if (el && el.tags) {
			tags.push(...el.tags);
		}
	});
	return [...new Set(tags)];
}

export default function Archives() {
	const tags = getTotalTags(allLogs, allArticles);

	return (
		<main className="relative pb-16">
			<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
				Archives
			</h1>
			<RenderAnimation>
				<div>
					<p className="mb-4 text-neutral-600">
						모든 기록물들을 한곳에 저장하는 장소입니다.
					</p>
				</div>
				<section>
					<div className="mt-12 ">
						<h2 className="text-2xl font-bold tracking-tight md:text-4xl">
							Tags<span className="ml-2 text-sm">{`(${allLogs.length})`}</span>
						</h2>
					</div>

					{/* 태그 링크 */}
					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map(tag => (
							<Link href={`archives/tags/${tag}`} key={tag}>
								<div className="rounded-lg px-2 py-0.5 transition-colors bg-[#ededed] hover:text-basicFont hover:bg-neutral-200 text-neutral-700 font-normal">
									{tag}
								</div>
							</Link>
						))}
					</div>
				</section>

				<hr className="border-[0.6px] w-full border-neutral-300 transition-all dark:border-neutral-700 my-8" />

				<section className="mt-4 grid grid-cols-1 gap-8 delay-100 sm:grid-cols-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight md:text-4xl">
							Logs
						</h2>
						<div className="mt-4">
							<div className="text-lg font-bold">
								2023
								<span className="ml-1 text-sm">{`(${allLogs.length})`}</span>
							</div>
							<ul>
								{allLogs.map(log => (
									<li key={log.title}>
										<Link
											href={log.slug}
											className="text-neutral-600 transition hover:text-basicFont"
										>
											<div className="flex items-end gap-1">
												<span className="mb-0.5 w-8 text-xs">
													{log.date.slice(5, 10).replace(/-/g, '.')}
												</span>
												<span>{log.title}</span>
											</div>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div>
						<h2 className="text-2xl font-bold tracking-tight md:text-4xl">
							Articles
						</h2>
						<div className="mt-4">
							<div className="text-lg font-bold">
								2023
								<span className="ml-1 text-sm">{`(${allArticles.length})`}</span>
							</div>
							<ul>
								{allArticles.map(log => (
									<li key={log.title}>
										<Link
											href={log.slug}
											className="text-neutral-600 transition hover:text-basicFont"
										>
											<div className="flex items-end gap-1">
												<span className="mb-0.5 w-8 text-xs">
													{log.date.slice(5, 10).replace(/-/g, '.')}
												</span>
												<span>{log.title}</span>
											</div>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</RenderAnimation>
		</main>
	);
}
