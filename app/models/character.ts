import { db } from '~/utils/db.server';
import { exclude } from './utils';

export async function getAllCharacters() {
	const characters = await db.character.findMany({ orderBy: { id: 'asc' } });
	return characters;
}

export async function getCharacterById(id: string) {
	return db.character.findUnique({
		where: { id },
		include: {
			quotes: {
				select: { id: true, quote: true },
				orderBy: { id: 'asc' },
			},
		},
	});
}
