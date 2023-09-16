import { Variants } from 'framer-motion';
export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerHalf: Variants = {
	animate: { transition: { staggerChildren: 0.05 } },
};

export const fadeInHalf: Variants = {
	initial: {
		opacity: 0.3,
		transition: { duration: 0.3, ease: defaultEasing },
		willChange: 'opacity',
	},
	animate: {
		opacity: 1,
		transition: { duration: 0.3, ease: defaultEasing },
		willChange: 'opacity',
	},
	exit: {
		opacity: 0.3,
		transition: { duration: 0.3, ease: defaultEasing },
		willChange: 'opacity',
	},
};
