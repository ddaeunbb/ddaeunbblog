import ThemeSwitch from '@/components/theme/ThemeSwitch';
import Path from '@/router/path';
import Image from 'next/image';
import Tab from '@/components/tab/Tab';

export default function Navbar() {
	return (
		<nav className="py-3 lg:px-44 max-sm:px-4 flex items-end w-full bg-white/40 backdrop-blur-lg fixed z-50 border-b border-neutral-200 dark:bg-neutral-900/40 dark:border-neutral-600">
			<Tab path={Path.home}>
				<Image
					className="fill-[rgb(244, 201, 13)]"
					src="/navbar/logo.svg"
					alt="logo"
					width={20}
					height={21}
				/>
			</Tab>
			<Tab path={Path.log}>Log</Tab>
			<Tab path={Path.articles}>Articles</Tab>
			<Tab path={Path.archives}>Archives</Tab>
			<Tab path={Path.note}>Note</Tab>
			<div className="ml-auto flex items-center gap-2 max-sm:hidden">
				<ThemeSwitch />
			</div>
		</nav>
	);
}
