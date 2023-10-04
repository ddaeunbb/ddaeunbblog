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
			className={`flex items-center px-3 py-1.5 transition-all font-normal rounded-lg hover:bg-yellow-200 text-tabGary dark:text-neutral-300 text-sm text-semibold dark:hover:text-yellow-300 dark:hover:bg-neutral-500 ${
				pathname === path && 'font-[600]'
			}`}
		>
			{children}
		</Link>
	);
}
