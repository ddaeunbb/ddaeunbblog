import Image from 'next/image';

export default function PostFooter() {
	return (
		<div className="flex w-full items-center justify-center">
			<div className="flex items-center gap-4 sm:gap-6 mb-10">
				<div>
					<Image
						src="/profile.png"
						alt="김다은 이모지"
						width={96}
						height={96}
						className="h-20 w-20 select-none overflow-hidden rounded-full border bg-yellow-400"
					/>
				</div>

				<div>
					<div className="font-bold dark:text-neutral-300">Daeun Kim</div>
					<div className="text-tertiary text-sm dark:text-neutral-400">
						Junior Frontend Engineer
					</div>
				</div>
			</div>
		</div>
	);
}
