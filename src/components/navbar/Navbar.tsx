import ThemeSwitch from '@/components/theme/ThemeSwitch';
import Path from '@/router/path';
import Image from 'next/image';
import Tab from '@/components/tab/Tab';

export default function Navbar() {
	return (
		<nav className="py-12 flex items-end w-full">
			<Tab path={Path.home}>
				<Image
					className="fill-[rgb(244, 201, 13)]"
					src="/navbar/logo.svg"
					alt="logo"
					width={24}
					height={25}
				/>
			</Tab>
			<Tab path={Path.log}>Log</Tab>
			<Tab path={Path.articles}>Articles</Tab>
			<Tab path={Path.archives}>Archives</Tab>
			<Tab path={Path.note}>Note</Tab>
			<div className="ml-auto flex items-center gap-2">
				<ThemeSwitch />
			</div>
		</nav>
	);
}
