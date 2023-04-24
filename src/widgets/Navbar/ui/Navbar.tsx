import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import styles from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsAuthModal(false);
  }, [dispatch]);

  if (authData) {
    return (
      <div data-testid="navbar" className={classNames(styles.navbar, {}, [className])}>
        <div className={styles.links}>
          <ThemeSwitcher />
          <LangSwitcher className={styles.lang} />
        </div>
        <Button onClick={onLogout} theme={ThemeButton.OUTLINE} className={styles.login}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div data-testid="navbar" className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
      <Button onClick={onShowModal} theme={ThemeButton.OUTLINE} className={styles.login}>
        {t('Авторизация')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
});
