export function mergeClasses(
	firstClasses: string | undefined,
	secondClasses: string | undefined
) {
	const firstAsArray = firstClasses?.split(' ');
	const secondAsArray = secondClasses?.split(' ');
	const dedupedClasses = [
		...new Set([...(firstAsArray || []), ...(secondAsArray || [])]),
	];
	return dedupedClasses.join(' ');
}
