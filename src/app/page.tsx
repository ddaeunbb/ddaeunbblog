'use client';

import Image from 'next/image';
import { staggerHalf } from '@/constants/animations';
import { motion } from 'framer-motion';
import PostItem from '@/components/postItem/PostItem';
import RenderAnimation from '@/framer/RenderAnimation';

export default function Home() {
	return (
		<RenderAnimation>
			<div className="flex">
				<Image
					className="mr-5 object-contain pb-3"
					src={'/navbar/logo.svg'}
					width={100}
					height={100}
					alt="병아리이미지"
				/>

				<div>
					<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-yellow-300">
						ddaeunbb
					</h1>
					<section className="font-normal">
						<main className="mt-0.5 inline-block font-bold underline-offset-4 hover:underline mb-4 dark:text-neutral-300">
							🐤 Frontend Developer
						</main>
						<div>
							<p className="text-middleGray mb-4 text-sm">
								Junior developer who studies step by step like a `chick`.
							</p>
						</div>
					</section>
				</div>
			</div>

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
			</motion.section>
		</RenderAnimation>
	);
}
