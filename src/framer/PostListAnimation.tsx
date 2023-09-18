'use client';

import { motion } from 'framer-motion';
import { staggerHalf, fadeInUp, fadeIn } from '@/constants/animations';
import PostListItem from '@/components/postListItem/PostListItem';
import { allLogs } from 'contentlayer/generated';

export default function PostListAnimation() {
	return (
		<motion.div
			className="mt-12 grid w-full gap-5 lg:grid-cols-2 lg:gap-6"
			variants={staggerHalf}
		>
			{allLogs.map(log => (
				<motion.div key={log.slug} variants={fadeInUp}>
					<motion.div
						variants={fadeIn}
						initial="initial"
						whileInView="animate"
						exit="exit"
						viewport={{ amount: 0.6, once: true }}
					>
						<PostListItem log={log} />
					</motion.div>
				</motion.div>
			))}
		</motion.div>
	);
}
