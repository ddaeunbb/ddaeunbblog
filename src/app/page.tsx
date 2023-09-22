'use client';

import Link from 'next/link';
import { fadeIn, staggerHalf } from '@/constants/animations';
import { motion } from 'framer-motion';
import PostItem from '@/components/postItem/PostItem';
import RenderAnimation from '@/framer/RenderAnimation';

export default function Home() {
	return (
		<>
			<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-neutral-300">
				ddaeunbb
			</h1>
			<RenderAnimation>
				<section className="font-normal">
					<main className="mt-0.5 inline-block font-bold underline-offset-4 hover:underline mb-4 dark:text-neutral-300">
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
							className="gap-x-1 items-center text-lightGray hover:text-basicFont"
						>
							More about me ⇢
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
						<h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6 dark:text-neutral-300">
							Featured Posts
						</h2>
					</motion.div>

					<motion.div
						variants={staggerHalf}
						className="grid gap-6 md:grid-cols-4"
					>
						<PostItem
							href="/log/Making-Blog-With-NextJs"
							imgUrl={'/featured/featured1.jpeg'}
							title="Next.js 13로 블로그 만들기"
							date="2023.09.16"
						/>
						<PostItem
							href="/log/Making-Table-Of-Contents"
							imgUrl={'/featured/featured2.jpeg'}
							title="Toc(목차) 만들기"
							date="2023.09.19"
						/>
						<PostItem
							href="/articles/Cookie-Session"
							imgUrl={'/featured/featured3.jpeg'}
							title="프로젝트와 섞어 말하는 쿠키와 세션"
							date="2023.09.20"
						/>

						<PostItem
							href="/articles/CSR-SSR-ISR-SSG"
							imgUrl={'/featured/featured4.jpg'}
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
