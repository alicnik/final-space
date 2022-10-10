import { db } from '~/utils/db.server';

export async function getAllEpisodes() {
	return db.episode.findMany({ orderBy: { id: 'asc' } });
}

export async function getEpisodeById(id: string) {
	return db.episode.findUnique({
		where: { id },
		include: {
			characters: {
				select: { id: true, name: true },
				orderBy: { id: 'asc' },
			},
		},
	});
}
