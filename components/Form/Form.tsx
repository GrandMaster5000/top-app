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


export const Form = ({productId, className, ...props }: FormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IForm>();
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
            error={errors.name}/>
            <Input 
            {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
            placeholder='Заголовок отзыва' 
            className={styles.titleInput}
            error={errors.title}/>
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
                        ref={field.ref} />
                    )
                }
                />
            </div>
                <TextArea 
                {...register('description', { required: { value: true, message: 'Заполните описание' }})}
                placeholder='Текст отзыва' 
                className={styles.descr}
                error={errors.description}/>
            <div className={styles.submit}>
                    <Button className={styles.submitBtn} appearance='primary'>Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
            </div>

            {isSuccess && <div className={styles.success}>
                <div className={styles.successTitle}>
                Ваш отзыв отправлен
                </div>
                <div className={styles.successDescr}>
                    Спасибо, ваш отзыв будет опубликован после проверки.
                </div>
                <SuccessIcon onClick={() => setIsSuccess(false)} className={styles.close}/>
            </div>}
            {error && <div className={styles.error}>
                Что-то пошло не так, попробуйте обновить страницу
                <SuccessIcon onClick={() => setError(undefined)} className={styles.close}/>
            </div>}
        </form>
    );
};