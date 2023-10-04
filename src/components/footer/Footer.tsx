import GithubIcon from '@/components/icons/GithubIcon';
import InstaIcon from '@/components/icons/InstaIcon';
import MailIcon from '@/components/icons/MailIcon';

export default function Footer() {
	return (
		<footer className="pb-8 text-sm text-neutral-800 dark:text-neutral-400">
			<hr className="border-1 w-full border-neutral-300 transition-all dark:border-neutral-700 mb-8" />
			<div className="flex flex-col items-end space-y-1">
				<div className="flex space-x-2">
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
						<GithubIcon />
					</a>
					<a
						href="https://www.instagram.com/daeunx_x/"
						target="_blank"
						className="transition"
					>
						<InstaIcon />
					</a>
				</div>
				<p>
					<span className="max-sm:text-xs">© 2023 </span>
					<a className="max-sm:text-xs">ddaeunbblog </a>
					<span className="max-sm:text-xs">Powerd by </span>
					<a
						href="https://nextjs.org/"
						className="transition hover:text-secondary max-sm:text-xs"
						target="_blank"
						rel="noopener noreferrer"
					>
						Next.js
					</a>
					<span>, </span>
					<a
						href="https://vercel.com/"
						className="transition hover:text-secondary max-sm:text-xs"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vercel
					</a>
				</p>
			</div>
		</footer>
	);
}
