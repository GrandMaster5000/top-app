import classNames from 'classnames';
import React from 'react';
import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';


export const Ptag = ({children, size, className, ...props}: PtagProps): JSX.Element => {
    return (
        <p className={classNames(styles.pTag, className, {
            [styles.small]: size == 'small',
            [styles.big]: size == 'big',
            [styles.middle]: size == 'middle'
        })}
        {...props}
        >{children}</p>
    );
};