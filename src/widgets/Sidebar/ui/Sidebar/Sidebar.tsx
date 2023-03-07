import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import styles from './Sidebar.module.scss';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };
  return (
    <div data-testid="sidebar" className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        squarе
        size={ButtonSize.L}
        className={styles.collapseButton}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink className={styles.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
          <MainIcon className={styles.icon} />

          <span className={styles.link}>{t('Главная страница')}</span>
        </AppLink>
        <AppLink className={styles.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
          <AboutIcon className={styles.icon} />

          <span className={styles.link}>{t('О приложении')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
};
