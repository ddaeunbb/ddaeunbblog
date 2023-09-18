'use client';
import { fadeInUp } from '@/constants/animations';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CalendarIcon from '@/components/icons/CalendarIcon';

export default function PostItem(props: {
	href: string;
	imgUrl: string;
	title: string;
	date: string;
}) {
	return (
		<motion.a
			href={props.href}
			className="overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
			variants={fadeInUp}
			whileHover={{ scale: 1.02, transformOrigin: 'center' }}
			whileTap={{ scale: 0.98 }}
		>
			<div>
				<Image
					src={props.imgUrl}
					alt={props.title}
					width={300}
					height={300}
					className="h-64 w-full object-cover max-md:h-40"
					draggable={false}
				/>
			</div>
			<div className="p-6">
				<div className="mb-2 flex w-full items-center gap-1">
					<CalendarIcon />
					<span className="text-xs">{props.date}</span>
				</div>
				<p className="text-xl font-bold tracking-tight md:text-lg">
					{props.title}
				</p>
			</div>
		</motion.a>
	);
}
