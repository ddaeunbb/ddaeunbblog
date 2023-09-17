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
					<motion.div variants={fadeIn}>
						<h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
							Featured Posts
						</h2>
					</motion.div>

					<motion.div
						variants={staggerHalf}
						className="grid gap-6 md:grid-cols-4"
					>
						<PostItem
							href="/blog/dnd-master/1-drag-event"
							imgUrl={'/sample/one.png'}
							title="Drag 이벤트 뽀개기"
							date="2022.10.01"
						/>
						<PostItem
							href="/blog/2022/css-in-js"
							imgUrl={'/sample/one.png'}
							title="CSS-in-JS 라이브러리들에 대한 고찰"
							date="2022.02.11"
						/>
						<PostItem
							href="/blog/retrospect/2021-pass-kakao"
							imgUrl={'/sample/one.png'}
							title="2022 카카오 블라인드 공채 합격 후기"
							date="2021.12.20"
						/>
						<PostItem
							href="/blog/retrospect/2021-in-startup"
							imgUrl={'/sample/one.png'}
							title="5개월간 스타트업에서 굴렀다. 그리고 얻었다."
							date="2021.12.14"
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
