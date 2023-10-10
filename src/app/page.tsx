'use client';

import Link from 'next/link';
import Image from 'next/image';
import { staggerHalf } from '@/constants/animations';
import { motion } from 'framer-motion';
import PostItem from '@/components/postItem/PostItem';
import RenderAnimation from '@/framer/RenderAnimation';
import MainList from '@/components/mainList/MainList';

export default function Home() {
	return (
		<RenderAnimation>
			<div className="flex pt-14 mb-72">
				<div className="absolute left-0 w-screen h-60 bg-gradient-to-b from-yellow-200 to-white dark:to-neutral-900">
					<div className="flex justify-center items-center ">
						<Image
							src={'/main/duck.png'}
							alt="gd"
							width={200}
							height={200}
							objectFit="contain"
							className="max-sm:w-40"
						/>
						<div className="flex flex-col text-center mx-28 max-md:mx-5 max-sm:mx-0">
							<h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
								ddaeunbblog
							</h1>
							<span className="inline-block font-bold underline-offset-4 mt-4 dark:text-neutral-300 text-neutral-600">
								🐤 Frontend Developer
							</span>
							<span className="text-middleGray mb-4 text-xs dark:text-neutral-300">
								Junior developer who studies step by step like a `chick`.
							</span>
						</div>
						<Image
							src={'/main/duck2.png'}
							alt="gd"
							width={200}
							height={200}
							objectFit="contain"
							className="max-sm:w-40"
						/>
					</div>
				</div>
			</div>

			<h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl dark:text-yellow-300">
				Featured
			</h2>
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

			<hr className="my-12" />

			<h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl dark:text-yellow-300">
				Posted
			</h2>

			<Link href={'/log'}>
				<span className="text-xs hover:underline text-neutral-400 hover:text-neutral-500 hover:underline-offset-4 dark:hover:text-neutral-300">{`View more Posts ->`}</span>
			</Link>

			<MainList />
		</RenderAnimation>
	);
}
