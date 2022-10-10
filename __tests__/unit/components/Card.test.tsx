import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Card } from '~/components';

const props = {
	item: {
		id: '123',
		name: 'Name',
		image: 'some-image-url',
	},
};

describe('Card', () => {
	it('passes basic accessibility checks', async () => {
		const { container } = render(<Card {...props} />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
