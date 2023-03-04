import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={styles.errorPage}>
      <p>{t('Произошла ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
