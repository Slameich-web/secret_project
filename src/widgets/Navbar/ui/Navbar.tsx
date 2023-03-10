import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div data-testid="navbar" className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
      <Button onClick={onToggleModal} theme={ThemeButton.OUTLINE} className={styles.login}>
        {t('Авторизация')}
      </Button>
      <Modal className={styles.modal} isOpen={isAuthModal} onClose={onToggleModal}>
        sssssssssssssssssssss sssssssssssssssssssss sssssssssssssssssssss sssssssssssssssssssss vsssssssssssssssssssss
        sssssssssssssssssssss sssssssssssssssssssss
      </Modal>
    </div>
  );
};
