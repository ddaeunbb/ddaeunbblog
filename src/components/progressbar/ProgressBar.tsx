'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
	const [width, setWidth] = useState(0);

	const scrollHeight = () => {
		const element = document.documentElement;
		const ScrollTop = element.scrollTop || document.body.scrollTop;
		const ScrollHeight = element.scrollHeight || document.body.scrollHeight;
		const percent = (ScrollTop / (ScrollHeight - element.clientHeight)) * 100;

		setWidth(percent);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHeight);
		return () => window.removeEventListener('scroll', scrollHeight);
	}, []);

	return (
		<div className="progressBar" style={{ width: `${width}%` }}>
			<style jsx>{`
				.progressBar {
					position: fixed;
					z-index: 50;
					top: 0px;
					left: 0px;
					height: 6px;
					border-radius: 0px 2px 0px 0px;
					background: linear-gradient(90deg, #ffdd00, #fbb034);
				}
			`}</style>
		</div>
	);
}
