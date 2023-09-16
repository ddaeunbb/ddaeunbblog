import RenderAnimation from '@/framer/RenderAnimation';

export default function Note() {
	return (
		<main className="relative pb-16">
			<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
				Archives
			</h1>
			<RenderAnimation>
				<div>
					<p className="mb-4 text-neutral-600">
						모든 기록물들을 한곳에 저장하는 장소입니다.
					</p>
				</div>
			</RenderAnimation>
		</main>
	);
}
