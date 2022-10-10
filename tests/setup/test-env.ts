import { installGlobals } from '@remix-run/node';
import '@testing-library/jest-dom/extend-expect';
import { toHaveNoViolations } from 'jest-axe';

installGlobals();
expect.extend(toHaveNoViolations);
