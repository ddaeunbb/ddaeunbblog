import Link from 'next/link';
import { ReactNode } from 'react';

interface TabProp {
	// title: string;
	children: ReactNode;
	path: string;
}

export default function Tab({ path, children }: TabProp) {
	return (
		<Link
			href={path}
			className="flex items-center px-3 py-1.5 transition-all font-normal rounded-lg hover:bg-[rgba(237,237,237,1)] text-tabGary"
		>
			{children}
		</Link>
	);
}
