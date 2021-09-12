import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.css';


export const Input = forwardRef(({error, className ,...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <div className={classNames(styles.inputWrapper, className)}>
        <input className={classNames(styles.input, {
          [styles.error]: error
        })} ref={ref} {...props}
        />
        {error && <span role='alert' className={styles.errorMessage}>{error.message}</span> }
      </div>
    );
});