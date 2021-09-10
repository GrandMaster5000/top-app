import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.css';


export const Card = forwardRef(({ children, color='white', className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div
            className={classNames(styles.card, className, {
              [styles.blue]: color == 'blue'
            })}
            {...props}
            ref={ref}>
                {children}
        </div>
    );
});