import { Link } from '@remix-run/react';
import clsx from 'clsx';
import type {
	SerializedCharacter,
	SerializedEpisode,
	SerializedLocation,
} from '~/types';

interface CarouselProps<
	TItem extends SerializedCharacter | SerializedEpisode | SerializedLocation
> {
	items: TItem[];
	height: 'h-28' | 'h-36' | 'h-48';
	urlPrefix: string;
}

export function Carousel<
	TItem extends SerializedCharacter | SerializedEpisode | SerializedLocation
>({ items, height, urlPrefix }: CarouselProps<TItem>) {
	return (
		<div className={clsx('flex items-center gap-3 overflow-x-scroll', height)}>
			{items.map((item) => (
				<Link key={item.id} to={`${urlPrefix}/${item.id}`}>
					<article className="relative w-44 rounded overflow-clip hover:w-48 transition-all">
						<img alt={item.name} src={item.image} />
						<p className="absolute bottom-0 w-full px-2 py-1 bg-slate-900 bg-opacity-95">
							{item.name}
						</p>
					</article>
				</Link>
			))}
		</div>
	);
}
