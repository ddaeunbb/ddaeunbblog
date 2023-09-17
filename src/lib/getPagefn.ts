import { notFound } from 'next/navigation';
import { Log, Archives, Articles } from 'contentlayer/generated';

type AllType = Log[] | Archives[] | Articles[];

export async function getLogFromParams(all: AllType, slug: string) {
	const posting = all.find(doc => doc.slugAsParams === slug);

	if (!posting) notFound();
	return posting;
}

export async function getFromReadingTime(all: AllType, slug: string) {
	const posting = all.find(doc => doc.slugAsParams === slug);

	if (!posting) notFound();
	return posting.readingTime.text.slice(0, -8).trim();
}
