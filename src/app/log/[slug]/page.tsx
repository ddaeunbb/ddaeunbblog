import { notFound } from 'next/navigation';
import { allLogs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/Component';
import Category from '@/components/ul/Category';
import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';

interface PageProps {
	params: {
		slug: string;
	};
}

interface Heading {
	level: number;
	text: string;
	slug: string;
}

async function getLogFromParams(slug: string) {
	const log = allLogs.find(log => log.slugAsParams === slug);

	if (!log) notFound();
	return log;
}

async function getFromReadingTime(slug: string) {
	const log = allLogs.find(log => log.slugAsParams === slug);

	if (!log) notFound();
	return log.readingTime.text.slice(0, -8).trim();
}

const Page = async ({ params }: PageProps) => {
	const log = await getLogFromParams(params.slug);
	const readingTime = await getFromReadingTime(params.slug);

	return (
		<main>
			<div className="jsx-339547f484954333 progressBar" />
			<section>
				<div>
					<h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl mx-auto mb-4 max-w-3xl text-center">
						{log.title}
					</h1>
					<div className="mt-2 flex justify-center gap-1">
						<Category title={log.category} />
					</div>

					<div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
						<div className="mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400">
							<div className="flex items-center gap-1 text-xs">
								<CalendarIcon />
								<span>2023.09.14</span>
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
						<Mdx code={log.body.code} />
					</div>
					<div className="mt-12 ml-auto">
						<div className="sticky top-[120px] hidden min-w-[220px] max-w-[260px] self-start lg:block">
							<div className="overflow-hidden rounded-xl border border-neutral-200 transition-all dark:border-neutral-800">
								<div className="p-4 pr-2 dark:border-neutral-700 dark:bg-neutral-800">
									<p
										id="toc-header"
										className="text-primary text-sm font-extrabold leading-6"
									>
										Written on this Page
									</p>
									<ul className="mt-2 flex flex-col items-start justify-start text-sm">
										{log.headings.map((heading: Heading) => {
											return (
												<li key={`#${heading.slug}`} className="toc">
													<a
														className="group block py-1 text-secondary hover:text-primary hover:drop-shadow-base-bold dark:hover:drop-shadow-base hover:font-extrabold toc-li"
														data-level={heading.level}
														href={`#${heading.slug}`}
													>
														{heading.text.length > 15
															? heading.text.slice(0, 15) + '...'
															: heading.text}
													</a>
												</li>
											);
										})}
									</ul>
								</div>
								<div className="flex items-center justify-end p-2 bg-[#ededed] dark:bg-neutral-750">
									<button
										aria-label="copy-link"
										type="button"
										className="flex h-9 w-9 items-center justify-center rounded-lg transition-all text-secondary mr-auto hover:bg-mute"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											width="20"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
											></path>
										</svg>
									</button>
									<button
										aria-label="scroll-up"
										type="button"
										className="flex h-9 w-9 items-center justify-center rounded-lg transition-all text-secondary hover:bg-mute"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											width="20"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
											></path>
										</svg>
									</button>
									<button
										aria-label="scroll-down"
										type="button"
										className="flex h-9 w-9 items-center justify-center rounded-lg transition-all text-secondary hover:bg-mute"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											width="20"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
											></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Page;
