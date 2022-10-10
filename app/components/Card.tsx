import clsx from 'clsx';
import type { CardData } from '~/types';
import { Image } from './Image';

interface CardProps<TItem extends CardData>
	extends React.HTMLAttributes<HTMLElement> {
	item: TItem;
}

export function Card<TItem extends CardData>({
	item,
	className,
	...props
}: CardProps<TItem>) {
	return (
		<article
			className={clsx(className, 'relative rounded overflow-clip')}
			{...props}
		>
			<Image alt={`Image of ${item.name}`} src={item.image} />
			<p className="absolute bottom-0 w-full px-2 py-1 bg-slate-900 bg-opacity-95">
				{item.name}
			</p>
		</article>
	);
}
