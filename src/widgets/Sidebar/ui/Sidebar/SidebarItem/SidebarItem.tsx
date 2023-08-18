import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from '../Sidebar.module.scss';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink className={styles.item} theme={AppLinkTheme.SECONDARY} to={item.path}>
      <item.Icon className={classNames(styles.icon, { [styles.collapsed]: collapsed })} />

      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});
