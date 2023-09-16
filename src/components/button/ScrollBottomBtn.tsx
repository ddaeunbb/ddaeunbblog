'use client';
import { useCallback } from 'react';
import ScrollBottomIcon from '@/components/icons/ScrollDownIcon';

export default function ScrollBottomBtn() {
	const handleScrollBottom = useCallback(() => {
		const height = document.body.scrollHeight;
		window.scrollTo({ top: height, behavior: 'smooth' });
	}, []);

	return (
		<button
			onClick={handleScrollBottom}
			aria-label="scroll-down"
			type="button"
			className="flex h-9 w-9 items-center justify-center rounded-lg transition-all text-neutral-700 dark:text-neutral-350 hover:bg-mute"
		>
			<ScrollBottomIcon />
		</button>
	);
}
