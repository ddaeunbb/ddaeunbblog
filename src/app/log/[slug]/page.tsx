import { notFound } from 'next/navigation';
import { allLogs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/Component';

interface PageProps {
	params: {
		slug: string;
	};
}

async function getLogFromParams(slug: string) {
	const log = allLogs.find(log => log.slugAsParams === slug);

	if (!log) notFound();
	return log;
}

const Page = async ({ params }: PageProps) => {
	const log = await getLogFromParams(params.slug);

	return (
		<div>
			<h1>{log.title}</h1>
			<Mdx code={log.body.code} />
		</div>
	);
};

export default Page;
