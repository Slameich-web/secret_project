import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CountrySelect.module.scss';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from 'entities/Country/model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Kazahstan, content: Country.Kazahstan }
];

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      readonly={readonly}
      value={value}
      onChange={onChangeHandler}
      className={classNames(cls.CurrencySelect, {}, [className])}
      label={t('Укажите страну')}
      options={options}
    />
  );
});
