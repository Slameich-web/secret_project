import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from './SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={false} />
        ))}
      </div>
    </div>
  );
});
