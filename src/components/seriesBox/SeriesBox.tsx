import Link from 'next/link';
import { SERIES_KO } from '@/router/path';

interface SeriesBoxProps {
	title: keyof typeof SERIES_KO;
}

export default function SeriesBox({ title }: SeriesBoxProps) {
	return (
		<Link href={`/log/series/${title}`}>
			<div className=" bg-yellow-300 rounded-lg py-1.5 px-3 font-semibold border border-yellow-300 hover:bg-yellow-100 hover:border transition-all hover:scale-95">
				{SERIES_KO[title]}
			</div>
		</Link>
	);
}
