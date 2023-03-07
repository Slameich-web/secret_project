import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  squarе?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({ className, children, theme, squarе, size = ButtonSize.M, ...otherProps }) => {
  const mods = {
    [styles[theme]]: true,
    [styles.square]: squarе,
    [styles[size]]: true
  };
  return (
    <button className={classNames(styles.button, mods, [className])} {...otherProps}>
      {children}
    </button>
  );
};
