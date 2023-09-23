import RenderAnimation from '@/framer/RenderAnimation';

export default function Note() {
	return (
		<main className="relative pb-16">
			<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-yellow-300">
				Note
			</h1>
			<RenderAnimation>
				<div>
					<p className="mb-4 text-neutral-600 dark:text-neutral-400">
						유용하게 사용한 코드조각들을 모아둔 짹짹
					</p>
				</div>
			</RenderAnimation>
		</main>
	);
}
