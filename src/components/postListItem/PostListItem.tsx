import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import { Log, Articles } from 'contentlayer/generated';
import Link from 'next/link';

interface PostListItemProp {
	post: Log | Articles;
}

export default function PostListItem({ post }: PostListItemProp) {
	return (
		<div className="w-full py-4 hover:drop-shadow-base border px-5 rounded-xl bg-neutral-50 hover:shadow-lg transition-all dark:bg-neutral-800 dark:hover:shadow-neutral-600 dark:border-neutral-800">
			<Link href={post.slug} className="hover:drop-shadow-base">
				<p className="text-xl font-bold dark:text-neutral-300">{post.title}</p>
			</Link>
			<div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
				<div className="flex flex-wrap items-center gap-2 max-sm:gap-1">
					{post.tags &&
						post.tags.map(tag => (
							<Link href={`/archives/tags/${tag}`} key={tag}>
								<div className="rounded-lg px-2 py-0.5 transition-colors bg-[#ededed] hover:text-basicFont hover:bg-neutral-200 text-neutral-700 font-normal  max-sm:text-xs">
									{tag}
								</div>
							</Link>
						))}
				</div>

				<div className="ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold">
					<span className="flex items-center gap-1 text-neutral-700 dark:text-neutral-400">
						<CalendarIcon />
						{post.date.slice(0, 10)}
					</span>

					<span className="flex items-center gap-1 text-neutral-700 dark:text-neutral-400">
						<ClockIcon />
						{post.readingTime.text.slice(0, 2).trim()}분
					</span>
				</div>
			</div>
		</div>
	);
}
