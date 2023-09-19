import Image from 'next/image';
import MailIcon from '@/components/icons/MailIcon';
import GihubIcon from '@/components/icons/GithubIcon';
import InstaIcon from '@/components/icons/InstaIcon';

export default function PostFooter() {
	return (
		<div className="flex w-full items-center justify-center max-lg:pb-10 pb-10">
			<div className="flex items-center gap-4 sm:gap-6 sm:p-12">
				<div>
					<Image
						src="/profile.png"
						alt="김다은 이모지"
						width={96}
						height={96}
						className="h-24 w-24 select-none overflow-hidden rounded-full border bg-yellow-400"
					/>
				</div>

				<div>
					<div className="font-bold dark:text-neutral-300">Daeun Kim</div>
					<div className="text-tertiary text-sm dark:text-neutral-400">
						Junior Frontend Engineer
					</div>
					<div className="flex space-x-2 mt-2 text-sm">
						<a
							href="mailto:ddaeunbb@gmail.com"
							target="_blank"
							className="transition"
						>
							<MailIcon />
						</a>
						<a
							href="https://github.com/ddaeunbb"
							target="_blank"
							className="transition"
						>
							<GihubIcon />
						</a>
						<a
							href="https://www.instagram.com/daeunx_x/"
							target="_blank"
							className="transition"
						>
							<InstaIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
