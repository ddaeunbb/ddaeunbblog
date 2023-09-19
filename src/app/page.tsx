'use client';

import Link from 'next/link';
import { fadeIn, staggerHalf } from '@/constants/animations';
import { motion } from 'framer-motion';
import PostItem from '@/components/postItem/PostItem';
import RenderAnimation from '@/framer/RenderAnimation';

export default function Home() {
	return (
		<>
			<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
				ddaeunbb
			</h1>
			<RenderAnimation>
				<section className="font-normal">
					<main className="mt-0.5 inline-block font-bold underline-offset-4 hover:underline mb-4">
						Frontend Developer
					</main>
					<div>
						<p className="text-middleGray mb-4">
							Junior developer who studies step by step like a chick.
						</p>
					</div>
					<div>
						<a
							href="https://ddaeunbb.tistory.com/"
							target="_blank"
							className="flex gap-x-1 items-center"
						>
							<span className="text-lightGray hover:text-basicFont">
								More about me ⇢
							</span>
						</a>
					</div>
				</section>

				<motion.section
					className="mt-16 pb-16"
					variants={staggerHalf}
					initial="initial"
					animate="animate"
				>
					<motion.div variants={fadeIn} initial="initial" animate="animate">
						<h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
							Featured Posts
						</h2>
					</motion.div>

					<motion.div
						variants={staggerHalf}
						className="grid gap-6 md:grid-cols-4"
					>
						<PostItem
							href="/log/Making-Blog-With-NextJs"
							imgUrl={'/featured/featured3.jpeg'}
							title="Next.js 13로 블로그 만들기"
							date="2023.09.16"
						/>
						<PostItem
							href="/articles/React-Props-Children"
							imgUrl={'/featured/featured1.jpeg'}
							title="TypeScript에서 React children 타입 정하기"
							date="2023.09.19"
						/>
						<PostItem
							href="/articles/CSR-SSR-ISR-SSG"
							imgUrl={'/featured/featured2.jpeg'}
							title="CSR, SSR, ISR, SSG 알아보기"
							date="2023.09.19"
						/>
					</motion.div>

					<motion.div variants={fadeIn}>
						<Link
							href="/log"
							className="inline-flex h-6 items-center rounded-lg leading-7 transition-all text-mute hover:text-basicFont mt-8"
						>
							<span className="text-lightGray hover:text-basicFont">
								Read all logs ⇢
							</span>
						</Link>
					</motion.div>
				</motion.section>
			</RenderAnimation>
		</>
	);
}
