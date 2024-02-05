import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { Carousel, Heading, Image } from '~/components';
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
		<main>
			<article>
				<Heading level={1}>{location?.name}</Heading>
				<Image src={location?.image} alt={location?.name} />
				<div className="my-4">
					<p>Type: {location?.type}</p>
					{location?.inhabitants?.length ? (
						<p>Inhabitants: {location?.inhabitants.join(', ')}</p>
					) : null}
				</div>
				{location?.notableResidents?.length ? (
					<>
						<Heading level={3}>Notable Residents</Heading>
						<Carousel
							items={location?.notableResidents}
							height="h-48"
							urlPrefix="/character"
						/>
					</>
				) : null}
			</article>
		</main>
	);
}
