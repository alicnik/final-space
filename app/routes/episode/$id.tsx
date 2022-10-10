import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { Heading } from '~/components';
import { getEpisodeById } from '~/models';

export const loader = async ({ params }: LoaderArgs) => {
	const { id } = params;
	invariant(id, 'Expected there to be an id in the params');
	const episode = await getEpisodeById(id);
	return json({ episode });
};

export default function EpisodeRoute() {
	const { episode } = useLoaderData<typeof loader>();

	return (
		<>
			<Heading level={1}>{episode?.name}</Heading>
			{episode?.characters.map((character) => (
				<Link key={character.id} to={`/character/${character.id}`}>
					{character.name}
				</Link>
			))}
		</>
	);
}
