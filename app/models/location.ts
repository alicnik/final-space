import { db } from '~/utils/db.server';

export async function getAllLocations() {
	return db.location.findMany({ orderBy: { id: 'asc' } });
}

export async function getLocationById(id: string) {
	return db.location.findUnique({
		where: { id },
		include: {
			notableResidents: {
				select: { id: true, name: true },
				orderBy: { id: 'asc' },
			},
		},
	});
}
