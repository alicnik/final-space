import { Link } from '@remix-run/react';
import clsx from 'clsx';
import type { CarouselData } from '~/types';
import { Card } from './Card';

interface CarouselProps<TItem extends CarouselData> {
	items: TItem[] | undefined;
	height: 'h-28' | 'h-36' | 'h-48';
	urlPrefix: string;
}

export function Carousel<TItem extends CarouselData>({
	items,
	height,
	urlPrefix,
}: CarouselProps<TItem>) {
	return (
		<div className={clsx('flex items-center gap-3 overflow-x-scroll', height)}>
			{items?.map((item) => (
				<Link key={item.id} to={`${urlPrefix}/${item.id}`}>
					<Card className="w-44 hover:w-48 transition-all" item={item} />
				</Link>
			))}
		</div>
	);
}
