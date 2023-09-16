'use client';

import { useCallback } from 'react';
import ScrollTopIcon from '@/components/icons/ScrollTopIcon';

export default function ScrollTopBtn() {
	const handleScrollTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<button
			onClick={handleScrollTop}
			aria-label="scroll-up"
			type="button"
			className="flex h-9 w-9 items-center justify-center rounded-lg transition-all text-secondary hover:bg-mute"
		>
			<ScrollTopIcon />
		</button>
	);
}
