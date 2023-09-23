'use client';
import { fadeInUp } from '@/constants/animations';
import Link from 'next/link';
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
		<motion.div
			className="w-full h-80 max-md:h-60 relative overflow-hidden rounded-xl caption-box dark:hover:border"
			variants={fadeInUp}
			whileHover={{ scale: 0.98, transformOrigin: 'center' }}
			whileTap={{ scale: 0.98 }}
		>
			<Link href={props.href}>
				<div className="absolute p-3 opacity-0 bg-neutral-900/80 w-full h-full flex justify-center items-center flex-col caption transition-opacity">
					<p className="text-xl text-center w-full font-bold tracking-tight md:text-lg dark:text-neutral-300 text-neutral-300">
						{props.title}
					</p>
					<div className="absolute bottom-2 right-5 mb-2 flex w-ful gap-1 text-neutral-400">
						<CalendarIcon />
						<span className="text-xs dark:text-neutral-300">{props.date}</span>
					</div>
				</div>

				<div>
					<Image
						src={props.imgUrl}
						alt={props.title}
						width={300}
						height={500}
						className="h-full w-full object-cover max-sm:object-bottom"
						draggable={false}
					/>
				</div>
			</Link>
		</motion.div>
	);
}
