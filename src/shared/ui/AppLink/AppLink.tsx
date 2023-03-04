import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps }) => {
  return (
    <Link {...otherProps} to={to} className={classNames(styles.appLink, {}, [className, styles[theme]])}>
      {children}
    </Link>
  );
};
