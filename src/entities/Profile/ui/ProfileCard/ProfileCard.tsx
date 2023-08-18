import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { Profile } from 'entities/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  readonly?: boolean;
  isLoading?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>{t('Loader')}</div>;
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={error} />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} />
          </div>
        )}
        <Input
          readonly={readonly}
          onChange={onChangeFirstname}
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          readonly={readonly}
          onChange={onChangeLastname}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
        />
        <Input
          readonly={readonly}
          onChange={onChangeAge}
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
        />
        <Input
          readonly={readonly}
          onChange={onChangeCity}
          value={data?.city}
          placeholder={t('Ваш город')}
          className={cls.input}
        />
        <Input
          readonly={readonly}
          onChange={onChangeAvatar}
          value={data?.avatar}
          placeholder={t('Аватар')}
          className={cls.input}
        />
        <Input
          readonly={readonly}
          onChange={onChangeUsername}
          value={data?.username}
          placeholder={t('Логин')}
          className={cls.input}
        />
        <CurrencySelect className={cls.input} readonly={readonly} onChange={onChangeCurrency} value={data?.currency} />
        <CountrySelect className={cls.input} readonly={readonly} onChange={onChangeCountry} value={data?.country} />
      </div>
    </div>
  );
};
