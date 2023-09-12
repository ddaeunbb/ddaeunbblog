import Image from 'next/image';
import Tab from '@/components/tab/Tab';

export default function Navbar() {
	return (
		<nav className="py-12 flex items-end w-full">
			<Tab>
				<Image
					className="fill-[rgb(244, 201, 13)]"
					src="/navbar/logo.svg"
					alt="logo"
					width={24}
					height={25}
				/>
			</Tab>
			<Tab>Log</Tab>
			<Tab>Note</Tab>
			<Tab>Archives</Tab>
			<button
				aria-label="Toggle Dark Mode"
				type="button"
				className="ml-auto flex items-center p-1.5 transition-all font-normal rounded-lg hover:bg-[rgba(237,237,237,1)]"
			>
				<Image
					src="/navbar/sunny.svg"
					width={24}
					height={25}
					alt="다크모드버튼"
				/>
			</button>
		</nav>
	);
}
