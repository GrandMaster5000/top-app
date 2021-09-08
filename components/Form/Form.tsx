import classNames from 'classnames';
import React from 'react';
import { FormProps } from './Form.props';
import styles from './Form.module.css';
import { Button, Input, Raiting, TextArea } from '..';
import SuccessIcon from './succesSubmit.svg';


export const Form = ({productId, className, ...props }: FormProps): JSX.Element => {
    return (
        <>
            <div className={classNames(styles.reviewForm, className)} {...props}>
            <Input placeholder='Имя'/>
            <Input placeholder='Заголовок отзыва' className={styles.titleInput}/>
            <div className={styles.raiting}>
                <span>Оценка:</span>
                <Raiting raiting={0} />
            </div>
            <TextArea placeholder='Текст отзыва' className={styles.descr}/>
            <div className={styles.submit}>
                    <Button className={styles.submitBtn} appearance='primary'>Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
            </div>

            <div className={styles.success}>
                <div className={styles.successTitle}>
                Ваш отзыв отправлен
                </div>
                <div className={styles.successDescr}>
                    Спасибо, ваш отзыв будет опубликован после проверки.
                </div>
                <SuccessIcon className={styles.close}/>
            </div>
        </>
    );
};