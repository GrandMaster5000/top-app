import classNames from 'classnames';
import React from 'react';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';


export const Tag = ({ children, size = 'small', color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={classNames(styles.tag, className, {
                [styles.small]: size == 'small',
                [styles.big]: size == 'big',
                [styles.primary]: color == 'primary',
                [styles.red]: color == 'red',
                [styles.gray]: color == 'gray',
                [styles.green]: color == 'green',
                [styles.ghost]: color == 'ghost'
            })}
            {...props}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};