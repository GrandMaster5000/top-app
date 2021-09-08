import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.css';


export const Input = forwardRef(({className ,...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <input className={classNames(className, styles.input)} ref={ref} {...props}/>
    );
});