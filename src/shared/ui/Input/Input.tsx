import { ChangeEvent, InputHTMLAttributes, memo, useRef } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, type = 'text', placeholder, readonly, ...otherProps } = props;
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value || '');
  };
  const ref = useRef<HTMLInputElement>(null);

  const mods: Mods = {
    [styles.readonly]: readonly
  };
  return (
    <div className={classNames(styles.inputWrapper, mods, [className])}>
      {placeholder && <div>{placeholder}</div>}
      <input
        readOnly={readonly}
        ref={ref}
        {...otherProps}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
});
