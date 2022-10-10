import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { Heading } from '~/components';
import { getLocationById } from '~/models';

export const loader = async ({ params }: LoaderArgs) => {
	const { id } = params;
	invariant(id, 'Expected there to be an id in the params');
	const location = await getLocationById(id);
	return json({ location });
};

export default function LocationRoute() {
	const { location } = useLoaderData<typeof loader>();

	return (
		<>
			<Heading level={1}>{location?.name}</Heading>
			{location?.notableResidents.map((character) => (
				<Link key={character.id} to={`/character/${character.id}`}>
					{character.name}
				</Link>
			))}
		</>
	);
}
