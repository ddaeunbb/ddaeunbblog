import Link from 'next/link';
import { ReactNode } from 'react';

interface TabProp {
	// title: string;
	children: ReactNode;
}

export default function Tab({ children }: TabProp) {
	return (
		<Link
			href="/"
			className="flex items-center px-3 py-1.5 transition-all font-normal rounded-lg hover:bg-[rgba(237,237,237,1)] text-tabGary"
		>
			{children}
		</Link>
	);
}
