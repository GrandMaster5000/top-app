import classNames from 'classnames';
import React, { useState } from 'react';
import { FormProps } from './Form.props';
import styles from './Form.module.css';
import { Button, Input, Raiting, TextArea } from '..';
import SuccessIcon from './succesSubmit.svg';
import {useForm ,Controller} from 'react-hook-form';
import { IForm, IReviewSentResponse } from './Form.interface';
import axios from 'axios';
import { API } from '../../helpers/api';


export const Form = ({isOpened, productId, className, ...props }: FormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<IForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IForm) => {
        try {
            const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {
                ...formData,
                productId
            });

            if(data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так...');
                reset();
            }
        } catch(e) {
            if(e instanceof Error) {
                setError(e.message);
                reset();
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classNames(styles.reviewForm, className)} {...props}>
            <Input 
            {...register('name', {required: { value: true, message: 'Заполните имя'}})} 
            placeholder='Имя'
            error={errors.name}
            tabIndex={isOpened ? 0 : -1}
            aria-invalid={errors.name ? true : false}/>
            <Input 
            {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
            placeholder='Заголовок отзыва' 
            className={styles.titleInput}
            error={errors.title}
            tabIndex={isOpened ? 0 : -1}
            aria-invalid={errors.title ? true : false}/>
            <div className={styles.raiting}>
                <span>Оценка:</span>
                <Controller
                control={control}
                name='rating'
                rules={{required: {value: true, message: 'Укажите рейтинг' }}}
                render={
                    ({field}) => (
                        <Raiting 
                        rating={field.value} 
                        isEditable 
                        setRaiting={field.onChange}
                        error={errors.rating}
                        ref={field.ref} 
                        tabIndex={isOpened ? 0 : -1}/>
                    )
                }
                />
            </div>
                <TextArea 
                {...register('description', { required: { value: true, message: 'Заполните описание' }})}
                placeholder='Текст отзыва' 
                className={styles.descr}
                error={errors.description}
                tabIndex={isOpened ? 0 : -1}
                aria-label='Текст отзыва'
                aria-invalid={errors.description ? true : false}/>
            <div className={styles.submit}>
                    <Button 
                    className={styles.submitBtn} 
                    appearance='primary'
                    tabIndex={isOpened ? 0 : -1}
                    onClick={() => clearErrors()}>Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
            </div>

            {isSuccess && <div className={styles.success} role='alert'>
                <div className={styles.successTitle}>
                Ваш отзыв отправлен
                </div>
                <div className={styles.successDescr}>
                    Спасибо, ваш отзыв будет опубликован после проверки.
                </div>
                <button 
                    onClick={() => setIsSuccess(false)} 
                    className={styles.close}
                    aria-label='Закрыть оповещение'>
                    <SuccessIcon />
                </button>
            </div>}
            {error && <div className={styles.error}>
                Что-то пошло не так, попробуйте обновить страницу
                <button
                    onClick={() => setError(undefined)}
                    className={styles.close}
                    aria-label='Закрыть оповещение'>
                    <SuccessIcon />
                </button>
            </div>}
        </form>
    );
};