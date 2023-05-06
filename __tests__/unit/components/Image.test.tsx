import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Image } from '~/components';

const props = {
	src: 'image-url',
	alt: 'image-description',
};

describe('Image', () => {
	it('passes basic accessibility checks', async () => {
		const { container } = render(<Image {...props} />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
