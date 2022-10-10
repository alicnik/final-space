import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { Carousel, Heading, Image } from '~/components';
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
		<main>
			<article>
				<Heading level={1}>{episode?.name}</Heading>
				<Image src={episode?.image} alt={episode?.name} />
				<div className="my-4">
					<p>Writer: {episode?.writer}</p>
					<p>Director: {episode?.director}</p>
					<p>Aired: {new Date(episode?.airDate || '').toLocaleDateString()}</p>
				</div>
				<Heading level={3}>Characters</Heading>
				<Carousel
					items={episode?.characters}
					height="h-48"
					urlPrefix="/character"
				/>
			</article>
		</main>
	);
}
