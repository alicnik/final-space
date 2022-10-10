import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MemoryRouter } from 'react-router';
import { Carousel } from '~/components';

const RouterWrapper = ({ children }: React.PropsWithChildren<{}>) => (
	<MemoryRouter>{children}</MemoryRouter>
);

const props = {
	height: 'h-28' as const,
	urlPrefix: 'character',
	items: [
		{
			id: '123',
			name: 'Gary Goodspeed',
			image: 'image-url',
		},
	],
};

describe('Carousel', () => {
	it('passes basic accessibility checks', async () => {
		const { container } = render(<Carousel {...props} />, {
			wrapper: RouterWrapper,
		});

		expect(await axe(container)).toHaveNoViolations();
	});
});
