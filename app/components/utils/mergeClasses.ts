export function mergeClasses(
	firstClasses: string | undefined,
	secondClasses: string | undefined
) {
	const firstAsArray = firstClasses?.split(/\s/);
	const secondAsArray = secondClasses?.split(/\s/);
	const allClassesArray = [...(firstAsArray || []), ...(secondAsArray || [])];
	const dedupedClasses = [...new Set(allClassesArray)];
	return dedupedClasses.join(' ');
}
