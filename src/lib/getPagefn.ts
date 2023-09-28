import { notFound } from 'next/navigation';
import { Log, Articles } from 'contentlayer/generated';

type AllType = Log[] | Articles[];
type PartType = Log[] | Articles[];

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

export function sortDocsFromRecent(all: PartType) {
	const copy = [...all].sort((a, b) => {
		const dateA = new Date(a.date.slice(0, 10));
		const dateB = new Date(b.date.slice(0, 10));
		return dateB.getTime() - dateA.getTime();
	});
	return copy;
}

export function sortBasedOnSlug(all: PartType, slug: string) {
	const copy = [...all].filter(doc => {
		if (doc.tags) return doc.tags?.includes(slug);
		return false;
	});
	return copy;
}
