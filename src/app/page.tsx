import Link from 'next/link';
import Image from 'next/image';
import RenderAnimation from '@/framer/RenderAnimation';
import FeaturedList from '@/components/featuredList/FeaturedList';
import { allArticles, allLogs } from 'contentlayer/generated';
import { sortDocsFromRecent } from '@/lib/getPagefn';
import PostListItem from '@/components/postListItem/PostListItem';

export default function Home() {
	const arr = [...allArticles, ...allLogs];
	const sortedPostings = sortDocsFromRecent(arr).slice(0, 9);

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

			<FeaturedList />

			<hr className="my-12" />

			<h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl dark:text-yellow-300">
				Posted
			</h2>

			<Link href={'/log'}>
				<span className="text-xs hover:underline text-neutral-400 hover:text-neutral-500 hover:underline-offset-4 dark:hover:text-neutral-300">{`View more Posts ->`}</span>
			</Link>

			<div className="mt-12 grid w-full gap-5 lg:grid-cols-3 lg:gap-6 lg:gap-y-8 mb-16">
				{sortedPostings.map(scrap => (
					<div key={scrap.slug}>
						<div>
							<PostListItem post={scrap} />
						</div>
					</div>
				))}
			</div>
		</RenderAnimation>
	);
}
