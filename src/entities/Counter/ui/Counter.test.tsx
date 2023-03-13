import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from '..';

describe('LangSwitcher', () => {
  test('Test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
});
