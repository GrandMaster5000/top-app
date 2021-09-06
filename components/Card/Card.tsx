import classNames from 'classnames';
import React from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.css';


export const Card = ({ children, color='white', className, ...props }: CardProps): JSX.Element => {
    return (
        <div
            className={classNames(styles.card, className, {
              [styles.blue]: color == 'blue'
            })}
            {...props}>
                {children}
        </div>
    );
};