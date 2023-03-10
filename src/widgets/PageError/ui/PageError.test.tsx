import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { PageError } from './PageError';

describe('PageError', () => {
  test('Test render', () => {
    componentRender(<PageError />);
    expect(screen.getByTestId('page-error')).toBeInTheDocument();
  });
});
