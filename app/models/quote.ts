import { db } from '~/utils/db.server';

export async function getAllQuotes() {
	return db.quote.findMany({ orderBy: { id: 'asc' } });
}
