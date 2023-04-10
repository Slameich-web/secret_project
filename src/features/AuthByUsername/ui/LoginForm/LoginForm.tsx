import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from 'features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const error = useSelector(getLoginError);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(styles.loginForm, {}, [className])}>
        <Text text={t('Форма авторизации')} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          value={username}
          onChange={onChangeUsername}
          placeholder={t('Введите логин')}
          type="text"
          className={styles.input}
        />
        <Input
          value={password}
          onChange={onChangePassword}
          placeholder={t('Введите пароль')}
          type="text"
          className={styles.input}
        />
        <Button disabled={!!isLoading} onClick={onLoginClick} className={styles.loginButton}>
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
