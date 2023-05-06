import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Grid } from '~/components';

describe('Grid', () => {
	it('passes basic accessibility checks', async () => {
		const { container } = render(<Grid />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
