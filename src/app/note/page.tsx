import RenderAnimation from '@/framer/RenderAnimation';

export default function Note() {
	return (
		<main className="relative pb-16">
			<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
				Note
			</h1>
			<RenderAnimation>
				<div>
					<p className="mb-4 text-neutral-600">
						실제 유용하게 사용하는 코드조각들을 모아두는 곳입니다.
						<br /> 유용하게 쓰는 꿀팁과 코드들이 모여있습니다.😊
					</p>
				</div>
			</RenderAnimation>
		</main>
	);
}
