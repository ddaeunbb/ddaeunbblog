'use client';

import ThemeSwitch from '@/components/theme/ThemeSwitch';
import ScrollBottomBtn from '@/components/button/ScrollBottomBtn';
import ScrollTopBtn from '@/components/button/ScrollTopBtn';
import CopyIcon from '@/components/icons/CopyIcon';

import { Articles, Log } from 'contentlayer/generated';

interface TocProp {
	list: Log | Articles;
}

interface Heading {
	level: number;
	text: string;
	slug: string;
}

export default function Toc({ list }: TocProp) {
	const handleCopyClipboard = async () => {
		const url = window.location.href;
		await navigator.clipboard.writeText(url);
	};

	return (
		<div className="sticky top-[120px] hidden min-w-[220px] max-w-[260px] self-start lg:block">
			<div className="overflow-hidden rounded-xl border border-neutral-200 transition-all dark:border-neutral-800">
				<div className="p-4 pr-2 dark:border-neutral-700 dark:bg-neutral-900">
					<p
						id="toc-header"
						className="text-primary text-sm font-extrabold leading-6 dark:text-neutral-300"
					>
						Written on this Page
					</p>
					<ul className="mt-2 flex flex-col items-start justify-start text-sm">
						{list.headings.map((heading: Heading) => {
							return (
								<li key={`#${heading.slug}`} className="toc">
									<a
										className="group block py-1 text-secondary hover:text-primary hover:drop-shadow-base-bold dark:hover:drop-shadow-base hover:font-extrabold dark:text-neutral-400 toc-li"
										data-level={heading.level}
										href={`#${heading.slug}`}
									>
										{heading.text.length > 20
											? heading.text.slice(0, 20) + '...'
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
						onClick={handleCopyClipboard}
					>
						<CopyIcon />
					</button>
					<ScrollTopBtn />
					<ScrollBottomBtn />
					<ThemeSwitch />
				</div>
			</div>
		</div>
	);
}
