import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: number;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(({ className, label, options, value, onChange, readonly }: SelectProps) => {
  const mods: Mods = {};

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option className={cls.options} value={opt.value} key={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.select, {}, [className])}
      >
        {optionsList}
      </select>
    </div>
  );
});
