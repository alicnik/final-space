import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
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
		<main>
			<article>
				<Heading level={1}>{character?.name}</Heading>
				<Image
					src={character?.image}
					alt={character?.name}
					height={300}
					width={300}
				/>
				<div className="my-4">
					<p>
						Origin:{' '}
						{character?.originId ? (
							<Link to={`/location/${character.originId}`}>
								{character.origin}
							</Link>
						) : (
							character?.origin
						)}
					</p>
				</div>
				<Heading level={3}>Quotes</Heading>
				{character?.quotes.map(({ id, quote }) => (
					<li key={id} className="italic">
						"{quote}"
					</li>
				))}
			</article>
		</main>
	);
}
