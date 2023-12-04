const Path = {
	home: '/',
	log: '/log',
	articles: '/articles',
	archives: '/archives',
	note: '/note',
	series: '/log/series',
};

export const SERIES_EN = ['react-deep-dive', 'typescript-study'] as const;

export const SERIES_KO = {
	'react-deep-dive': '리액트 딥다이브 살펴보기',
	'typescript-study': '타입스크립트 제대로 톺아보기',
} as const;

export default Path;
