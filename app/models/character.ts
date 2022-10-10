import { db } from '~/utils/db.server';
import { getAllLocations } from './location';

export async function getAllCharacters() {
	const characters = await db.character.findMany({ orderBy: { id: 'asc' } });
	return characters;
}

export async function getCharacterById(id: string) {
	const character = await db.character.findUnique({
		where: { id },
		include: {
			quotes: {
				select: { id: true, quote: true },
				orderBy: { id: 'asc' },
			},
		},
	});
	if (!character) {
		return null;
	}
	const locations = await getAllLocations();
	const locationMatch = locations.find(
		(location) => location.name === character?.origin
	);
	return { ...character, originId: locationMatch?.id };
}
