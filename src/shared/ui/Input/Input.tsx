import { ChangeEvent, InputHTMLAttributes, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const { className, value, onChange, type = 'text', placeholder, ...otherProps } = props;
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={classNames(styles.inputWrapper, {}, [className])}>
      {placeholder && <div>{placeholder}</div>}

      <input ref={ref} {...otherProps} className={styles.input} type={type} value={value} onChange={onChangeHandler} />
    </div>
  );
};
