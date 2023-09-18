import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import { Log } from 'contentlayer/generated';
import Link from 'next/link';

interface PostListItemProp {
	log: Log;
}

export default function PostListItem({ log }: PostListItemProp) {
	return (
		<div className="w-full py-4 hover:drop-shadow-base border px-3 rounded-xl bg-neutral-50 hover:shadow-lg transition-all">
			<Link href={log.slug} className="hover:drop-shadow-base">
				<p className="text-xl font-bold">{log.title}</p>
			</Link>
			<div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
				<div className="flex flex-wrap items-center gap-2">
					{log.tags &&
						log.tags.map(tag => (
							<Link href={`/archives/tags/${tag}`} key={tag}>
								<div className="rounded-lg px-2 py-0.5 transition-colors bg-[#ededed] hover:text-basicFont hover:bg-neutral-200 text-neutral-700 font-normal">
									{tag}
								</div>
							</Link>
						))}
				</div>

				<div className="ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold">
					<span className="flex items-center gap-1 text-neutral-700">
						<CalendarIcon />
						{log.date.slice(0, 10)}
					</span>

					<span className="flex items-center gap-1 text-neutral-700">
						<ClockIcon />
						{log.readingTime.text.slice(0, 2).trim()}분
					</span>
				</div>
			</div>
		</div>
	);
}
