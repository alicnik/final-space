import { mergeClasses } from './utils/mergeClasses';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	aspectRatio?: 'auto' | 'square' | 'video';
}

export function Image({
	className,
	src,
	alt,
	aspectRatio = 'auto',
	...props
}: ImageProps) {
	const classes = mergeClasses(className, `aspect-${aspectRatio}`);

	return <img src={src} alt={alt} className={classes} {...props} />;
}
