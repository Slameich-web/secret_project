import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher', () => {
  test('Test render', () => {
    componentRender(<LangSwitcher />);
    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();
  });
});
