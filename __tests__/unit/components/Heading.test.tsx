import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Heading } from '~/components';

const props = {
	level: 1 as const,
};

describe('Heading', () => {
	it('passes basic accessibility checks', async () => {
		const { container } = render(<Heading {...props}>Title</Heading>);

		expect(await axe(container)).toHaveNoViolations();
	});
});
