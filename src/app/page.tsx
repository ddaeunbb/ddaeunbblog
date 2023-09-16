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

				<section className="mt-16">
					<h2 className="text-2xl font-bold tracking-tight md:text-4xl mb-6">
						Featured Posts
					</h2>
				</section>
			</RenderAnimation>
		</>
	);
}
