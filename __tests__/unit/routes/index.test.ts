import { loader } from '~/routes';
import { vi } from 'vitest';

vi.mock('~/models/character.ts', () => ({
	getAllCharacters: vi.fn(() => [
		{ id: '123', name: 'Gary', image: 'gary-img-url' },
	]),
}));
vi.mock('~/models/episode.ts', () => ({
	getAllEpisodes: vi.fn(() => [
		{ id: '234', name: 'Episode 1', image: 'episode-1-img-url' },
	]),
}));
vi.mock('~/models/location.ts', () => ({
	getAllLocations: vi.fn(() => [
		{ id: '345', name: 'Earth', image: 'earth-img-url' },
	]),
}));

describe('Homepage loader', () => {
	it('returns a response', async () => {
		const response = await loader();

		expect(response).toBeInstanceOf(Response);
	});

	it('returns the expected json data', async () => {
		const response = await loader();

		expect(await response.json()).toEqual({
			characters: [{ id: '123', name: 'Gary', image: 'gary-img-url' }],
			episodes: [{ id: '234', name: 'Episode 1', image: 'episode-1-img-url' }],
			locations: [{ id: '345', name: 'Earth', image: 'earth-img-url' }],
		});
	});
});
