import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <div className={cls.ProfilePageHeader}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button onClick={onEdit} className={cls.editBtn} theme={ThemeButton.OUTLINE}>
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button onClick={onCancelEdit} className={cls.editBtn} theme={ThemeButton.OUTLINE}>
            {t('Отменить')}
          </Button>
          <Button onClick={onSave} theme={ThemeButton.OUTLINE}>
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  );
};
