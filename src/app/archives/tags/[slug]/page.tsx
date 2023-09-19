'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ChickIcon from '@/components/icons/ChickIcon';
import { fadeIn } from '@/constants/animations';

export default function page() {
	return (
		<motion.section
			variants={fadeIn}
			initial="initial"
			animate="animate"
			className="w-full h-[520px] flex justify-center items-center flex-col"
		>
			<Link href={'/'}>
				<button
					type="button"
					className="py-2 px-3 rounded-2xl transition-all hover:scale-105 bg-neutral-100 border dark:border-none dark:bg-transparent"
				>
					<ChickIcon />
				</button>
			</Link>
			<span className="dark:text-neutral-500 mt-5">
				아직 병아리가 채워지지 않은 페이지입니다.
			</span>
		</motion.section>
	);
}
