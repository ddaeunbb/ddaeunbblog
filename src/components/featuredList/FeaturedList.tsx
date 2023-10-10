'use client';

import { staggerHalf } from '@/constants/animations';
import { motion } from 'framer-motion';
import PostItem from '@/components/postItem/PostItem';

export default function FeaturedList() {
	return (
		<motion.section
			className="mt-5 pb-10"
			variants={staggerHalf}
			initial="initial"
			animate="animate"
		>
			<motion.div
				variants={staggerHalf}
				className="grid gap-2 md:grid-cols-4 max-md:gap-5"
			>
				<PostItem
					href="/articles/RSC-RCC"
					imgUrl={'/featured/crown.png'}
					title="React Server Component"
					date="2023.09.27"
				/>
				<PostItem
					href="/articles/Frontend-accessToken-refreshToken"
					imgUrl={'/featured/star.png'}
					title="액세스토큰과 리프레시토큰은 어디에 저장해야할까?"
					date="2023.09.22"
				/>
				<PostItem
					href="/log/Nextjs-SSR-SSG"
					imgUrl={'/featured/cloud.png'}
					title="Next.js의 프리렌더링, SSR, SSG"
					date="2023.09.29"
				/>

				<PostItem
					href="/log/Making-Blog-With-NextJs"
					imgUrl={'/featured/moon.png'}
					title="Next.js 13로 블로그 만들기"
					date="2023.09.16"
				/>
			</motion.div>
		</motion.section>
	);
}
