import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { Card, Grid, Heading } from '~/components';
import { getAllLocations } from '~/models';

export const loader = async () => {
	const locations = await getAllLocations();
	return json({ locations });
};

export default function LocationIndexRoute() {
	const { locations } = useLoaderData<typeof loader>();

	return (
		<main>
			<Heading level={1}>Locations</Heading>
			<Grid>
				{locations.map((location) => (
					<Link key={location.id} to={location.id}>
						<Card key={location.id} item={location} />
					</Link>
				))}
			</Grid>
		</main>
	);
}
