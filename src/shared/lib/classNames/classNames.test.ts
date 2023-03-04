import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('class')).toBe('class');
  });
  test('with additional class', () => {
    expect(classNames('class', {}, ['class2'])).toBe('class class2');
  });
  test('with mods true', () => {
    expect(classNames('class', { hovered: true }, ['class2'])).toBe('class class2 hovered');
  });
  test('with mods false', () => {
    expect(classNames('class', { hovered: false, scrollable: true }, ['class2'])).toBe('class class2 scrollable');
  });
  test('with mods undef', () => {
    expect(classNames('class', { hovered: undefined, scrollable: true }, ['class2'])).toBe('class class2 scrollable');
  });
});
