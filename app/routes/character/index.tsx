import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { Card, Grid, Heading } from '~/components';
import { getAllCharacters } from '~/models';

export const loader = async () => {
	const characters = await getAllCharacters();
	return json({ characters });
};

export default function CharacterIndexRoute() {
	const { characters } = useLoaderData<typeof loader>();

	return (
		<main>
			<Heading level={1}>Characters</Heading>
			<Grid>
				{characters.map((character) => (
					<Link key={character.id} to={character.id}>
						<Card key={character.id} item={character} />
					</Link>
				))}
			</Grid>
		</main>
	);
}
