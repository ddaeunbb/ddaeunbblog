'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface TabProp {
	// title: string;
	children: ReactNode;
	path: string;
}

export default function Tab({ path, children }: TabProp) {
	const pathname = usePathname();

	return (
		<Link
			href={path}
			className={`flex items-center px-3 py-1.5 transition-all font-normal rounded-lg hover:bg-[#ededed] text-tabGary ${
				pathname === path && 'font-[600]'
			}`}
		>
			{children}
		</Link>
	);
}
