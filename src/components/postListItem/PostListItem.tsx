import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import { Log, Articles } from 'contentlayer/generated';
import Link from 'next/link';

interface PostListItemProp {
	post: Log | Articles;
}

export default function PostListItem({ post }: PostListItemProp) {
	return (
		<Link href={post.slug} className="hover:drop-shadow-base">
			<div
				className={`relative w-full h-44 py-4 flex justify-center flex-col items-center hover:drop-shadow-base border px-5 rounded-xl bg-neutral-50 hover:shadow-lg transition-all dark:bg-neutral-800 dark:hover:shadow-neutral-800 dark:border-neutral-800 dark:hover:border-yellow-300 bg-contain hover:border-yellow-300 hover:border-2 active:scale-95 ${
					post.featured && `bg-[url('/logo/logo-opacity.svg')]`
				}`}
			>
				<p className="text-lg font-bold dark:text-neutral-300">{post.title}</p>

				<div className="flex flex-wrap items-center gap-2 max-sm:gap-1 mt-2">
					{post.tags &&
						post.tags.map(tag => (
							<Link href={`/archives/tags/${tag}`} key={tag}>
								<div className="rounded-lg px-2 py-0.5 transition-colors bg-[#ededed] hover:text-basicFont hover:bg-neutral-200 text-neutral-700 font-normal text-sm">
									{tag}
								</div>
							</Link>
						))}
				</div>

				<div className="absolute bottom-2 right-5 ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold text-sm">
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
		</Link>
	);
}
