import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { Heading, Image } from '~/components';
import { getCharacterById } from '~/models';

export const loader = async ({ params }: LoaderArgs) => {
	const { id } = params;
	invariant(id, 'Expected there to be an id in the params');
	const character = await getCharacterById(id);
	return json({ character });
};

export default function CharacterRoute() {
	const { character } = useLoaderData<typeof loader>();
	console.log(character);
	return (
		<>
			<Heading level={1}>{character?.name}</Heading>
			<Image
				src={character?.image}
				alt={character?.name}
				height={300}
				width={300}
			/>
			{character?.quotes.map(({ id, quote }) => (
				<li key={id}>{quote}</li>
			))}
		</>
	);
}
