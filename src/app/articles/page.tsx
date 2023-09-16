import RenderAnimation from '@/framer/RenderAnimation';

export default function Articles() {
	return (
		<main className="relative pb-16">
			<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
				Articles
			</h1>
			<RenderAnimation>
				<div>
					<p className="mb-4 text-neutral-600">
						유익한 아티클들을 스크랩해 모아두었습니다.
						<br />
						아티클의 내용과 추가적으로 공부한 내용을 보실 수 있습니다.🤓
					</p>
				</div>
			</RenderAnimation>
		</main>
	);
}
