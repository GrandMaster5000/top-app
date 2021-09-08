import classNames from 'classnames';
import React from 'react';
import { ReviewProps } from './Review.props';
import styles from './Review.module.css';
import UserIcon from './user.svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Raiting } from '..';


export const Review = ({ review , className , ...props }: ReviewProps): JSX.Element => {
    const { name, title, description, createdAt, rating } = review;
    return (
        <div className={classNames(styles.review, className)} {...props}>
            <UserIcon className={styles.user}/>
            <div className={styles.title}>
                <span className={styles.name}>
                    {name}:
                </span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>
            <div className={styles.date}>
               {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
            </div>
            <div className={styles.raiting}>
                <Raiting raiting={rating}/>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
};