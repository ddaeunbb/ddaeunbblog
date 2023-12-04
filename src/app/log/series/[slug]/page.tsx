import RenderAnimation from '@/framer/RenderAnimation';
import { getSeriesFromLogs } from '@/lib/getPagefn';
import { allLogs } from 'contentlayer/generated';
import { SERIES_EN, SERIES_KO } from '@/router/path';
import Link from 'next/link';

interface PageProps {
	params: {
		slug: (typeof SERIES_EN)[number];
	};
}

export async function generateStaticParams() {
	return SERIES_EN.map(log => {
		slug: log;
	});
}

export default function Slug({ params }: PageProps) {
	const title = SERIES_KO[params.slug];
	const postings = getSeriesFromLogs(allLogs, title);

	return (
		<main className="relative pb-16 pt-28">
			<RenderAnimation>
				<div className="flex gap-x-10 max-lg:flex-col">
					<div className="w-5/12 h-max flex flex-col items-center max-lg:w-10/12 max-lg:mx-auto">
						<img
							src="/series/book.jpeg"
							alt="책일러스트"
							className="w-full rounded-2xl max-lg:w-5/6 max-sm:w-full"
						/>

						<h1 className="mt-6 text-xl font-extrabold tracking-tight sm:text-2xl dark:text-white">
							{title}
						</h1>
					</div>
					<div className="w-7/12 flex flex-col gap-y-4 max-lg:w-10/12 max-lg:mx-auto max-lg:mt-10">
						{postings.map(posting => (
							<Link key={posting.title} href={posting.slug}>
								<div className="w-full h-16 flex flex-col justify-center border rounded-2xl px-5 py-10 hover:shadow-lg transition-all shadow-md dark:hover:border-yellow-300 active:scale-95">
									<h3 className="font-bold text-lg dark:text-white">
										📌 {posting.title}
									</h3>
									<span className="text-xs text-neutral-500 dark:text-neutral-400">
										• {posting.date.slice(0, 10)}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</RenderAnimation>
		</main>
	);
}
