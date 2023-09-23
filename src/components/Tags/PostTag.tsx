import Link from 'next/link';

interface PostTag {
	tag: string;
}

export default function PostTag({ tag }: PostTag) {
	return (
		<Link href={`/archives/tags/${tag}`}>
			<div className="rounded-lg px-2 py-0.5 transition-colors bg-[#ededed] hover:text-basicFont hover:bg-yellow-300 text-neutral-700 font-normal dark:bg-neutral-400">
				{tag}
			</div>
		</Link>
	);
}
