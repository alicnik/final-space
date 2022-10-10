import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Heading, Carousel } from '~/components';
import { getAllEpisodes, getAllLocations } from '~/models';
import { getAllCharacters } from '~/models/character';

export const loader = async () => {
	const [characters, episodes, locations] = await Promise.all([
		getAllCharacters(),
		getAllEpisodes(),
		getAllLocations(),
	]);
	return json({ characters, episodes, locations });
};

export default function Index() {
	let { characters, episodes, locations } = useLoaderData<typeof loader>();

	return (
		<main>
			<Heading level={1}>Welcome to Final Space</Heading>
			<section className="mb-8">
				<Heading level={2}>Characters</Heading>
				<Carousel items={characters} height="h-48" urlPrefix="character" />
			</section>
			<section className="mb-8">
				<Heading level={2}>Episodes</Heading>
				<Carousel items={episodes} height="h-28" urlPrefix="episode" />
			</section>
			<section className="mb-8">
				<Heading level={2}>Locations</Heading>
				<Carousel items={locations} height="h-36" urlPrefix="location" />
			</section>
		</main>
	);
}
