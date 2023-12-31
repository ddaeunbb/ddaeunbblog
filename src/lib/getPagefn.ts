import { notFound } from 'next/navigation';
import { Log, Articles } from 'contentlayer/generated';

type AllType = Log[] | Articles[];
type PartType = Log[] | Articles[] | (Log | Articles)[];
type LogType = Log[];

export function getLogFromParams(all: AllType, slug: string) {
	const posting = all.find(doc => doc.slugAsParams === slug);

	if (!posting) notFound();
	return posting;
}

export function getFromReadingTime(all: AllType, slug: string) {
	const posting = all.find(doc => doc.slugAsParams === slug);

	if (!posting) notFound();
	return posting.readingTime.text.slice(0, -8).trim();
}

export function getSeriesFromLogs(log: LogType, title: string) {
	return log.filter(doc => doc.title.includes(title));
}

export function sortDocsFromRecent(all: PartType) {
	const copy = [...all].sort((a, b) => {
		const dateA = new Date(a.date.slice(0, 10));
		const dateB = new Date(b.date.slice(0, 10));
		return dateB.getTime() - dateA.getTime();
	});
	return copy;
}

export function sortDocsFromYear(all: PartType) {
	const fromRecent = sortDocsFromRecent(all);
	const year2024 = fromRecent.filter(el => el.date.includes('2024'));
	const year2023 = fromRecent.filter(el => el.date.includes('2023'));

	return [year2024, year2023];
}

export function sortBasedOnSlug(all: PartType, slug: string) {
	const copy = [...all].filter(doc => {
		if (doc.tags) return doc.tags?.includes(slug);
		return false;
	});
	return copy;
}
