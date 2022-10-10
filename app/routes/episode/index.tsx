import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { Card, Grid, Heading } from '~/components';
import { getAllEpisodes } from '~/models';

export const loader = async () => {
	const episodes = await getAllEpisodes();
	return json({ episodes });
};

export default function EpisodeIndexRoute() {
	const { episodes } = useLoaderData<typeof loader>();

	return (
		<main>
			<Heading level={1}>Episodes</Heading>
			<Grid>
				{episodes.map((episode) => (
					<Link key={episode.id} to={episode.id}>
						<Card key={episode.id} item={episode} />
					</Link>
				))}
			</Grid>
		</main>
	);
}
