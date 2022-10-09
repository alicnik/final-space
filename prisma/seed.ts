import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

const characterMap: Record<string, string> = {};

async function seed() {
	await Promise.all([
		db.character.deleteMany(),
		db.episode.deleteMany(),
		db.location.deleteMany(),
		db.quote.deleteMany(),
	]);

	const characters = (await fetch(
		'https://finalspaceapi.com/api/v0/character'
	).then((res) => res.json())) as CharacterData[];

	for (const character of characters) {
		const newCharacter = await db.character.create({
			data: {
				name: character.name,
				status: character.status,
				species: character.species,
				gender: character.gender,
				hair: character.hair,
				alias: character.alias,
				origin: character.origin,
				abilities: character.abilities,
				image: character.img_url,
			},
		});
		characterMap[character.id] = newCharacter.id;
	}

	const episodes = (await fetch(
		'https://finalspaceapi.com/api/v0/episode'
	).then((res) => res.json())) as EpisodeData[];

	const getIdFromUrl = (url: string) => url.substring(url.lastIndexOf('/') + 1);
	const getCharacterDbIds = (characterUrls: string[]) => {
		return characterUrls.map(getIdFromUrl).map((id) => characterMap[id]);
	};

	for (const episode of episodes) {
		const charactersDbIds = getCharacterDbIds(episode.characters);
		await db.episode.create({
			data: {
				name: episode.name,
				director: episode.director,
				airDate: new Date(episode.air_date),
				writer: episode.writer,
				characters: { connect: charactersDbIds.map((id) => ({ id })) },
				image: episode.img_url,
			},
		});
	}

	const locations = (await fetch(
		'https://finalspaceapi.com/api/v0/location'
	).then((res) => res.json())) as LocationData[];

	for (const location of locations) {
		const charactersDbIds = getCharacterDbIds(location.notable_residents);
		await db.location.create({
			data: {
				name: location.name,
				type: location.type,
				inhabitants: location.inhabitants,
				notableResidents: { connect: charactersDbIds.map((id) => ({ id })) },
				image: location.img_url,
			},
		});
	}

	const quotes = (await fetch('https://finalspaceapi.com/api/v0/quote').then(
		(res) => res.json()
	)) as QuoteData[];

	for (const quote of quotes) {
		const characterDbId = characterMap[getIdFromUrl(quote.character)];
		await db.quote.create({
			data: {
				quote: quote.quote,
				character: { connect: { id: characterDbId } },
			},
		});
	}
}

seed();

interface CharacterData {
	id: number;
	name: string;
	status: string;
	species?: string;
	gender: string;
	hair: string;
	alias: string[];
	origin: string;
	abilities: string[];
	img_url: string;
}

interface EpisodeData {
	id: number;
	name: string;
	air_date: string;
	director: string;
	writer: string;
	characters: string[];
	img_url: string;
}

interface LocationData {
	id: number;
	name: string;
	type: string;
	inhabitants: string[];
	notable_residents: string[];
	img_url: string;
}

interface QuoteData {
	id: number;
	quote: string;
	by: string;
	character: string;
	image: string;
}
