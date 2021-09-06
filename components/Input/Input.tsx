import classNames from 'classnames';
import React from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.css';


export const Input = ({className ,...props}: InputProps): JSX.Element => {
    return (
      <input className={classNames(className, styles.input)} {...props}/>
    );
};