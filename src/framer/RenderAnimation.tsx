'use client';

import { motion } from 'framer-motion';
import { staggerHalf, fadeInHalf } from '@/constants/animations';
import { ReactNode } from 'react';

interface RenderAnimationProp {
	children: ReactNode;
}

export default function RenderAnimation({ children }: RenderAnimationProp) {
	return (
		<motion.div
			variants={staggerHalf}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<motion.div variants={fadeInHalf}>{children}</motion.div>
		</motion.div>
	);
}
