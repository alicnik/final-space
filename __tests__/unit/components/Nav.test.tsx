import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MemoryRouter } from 'react-router';
import { Nav } from '~/components';

const RouterWrapper = ({ children }: React.PropsWithChildren<{}>) => (
	<MemoryRouter>{children}</MemoryRouter>
);

describe('Nav', () => {
	it('passes basic accessibility checks', async () => {
		const { container } = render(<Nav />, { wrapper: RouterWrapper });

		expect(await axe(container)).toHaveNoViolations();
	});
});
