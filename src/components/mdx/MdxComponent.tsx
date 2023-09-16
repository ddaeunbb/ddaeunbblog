import { useMDXComponent } from 'next-contentlayer/hooks';

interface MdxProps {
	code: string;
}

export default function MdxComponent({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return <Component />;
}
