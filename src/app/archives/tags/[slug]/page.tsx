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
			<h2 className="mb-4 text-3xl font-extrabold tracking-tight">
				태그 페이지는 준비중이예요.
			</h2>

			<Link href={'/'}>
				<button
					type="button"
					className="py-2 px-3 bg-neutral-100 border  rounded-2xl transition-all hover:scale-105"
				>
					<ChickIcon />
				</button>
			</Link>
		</motion.section>
	);
}
