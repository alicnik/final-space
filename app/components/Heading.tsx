import React from 'react';
import { mergeClasses } from './utils/mergeClasses';

interface HeadingProps
	extends React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>> {
	level: 1 | 2 | 3 | 4 | 5 | 6;
}

type JSXHeadingElements = Extract<
	keyof JSX.IntrinsicElements,
	'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

const classMap: Record<number, string> = {
	1: 'text-5xl mb-8',
	2: 'text-4xl mb-4',
	3: 'text-3xl',
	4: 'text-2xl',
	5: 'text-xl',
};

export function Heading({
	className,
	level,
	children,
	...props
}: HeadingProps) {
	const Tag = `h${level}` as JSXHeadingElements;
	const classes = mergeClasses(className, classMap[level]);

	return (
		<Tag className={classes} {...props}>
			{children}
		</Tag>
	);
}
