import classNames from 'classnames';
import React from 'react';
import { FormProps } from './Form.props';
import styles from './Form.module.css';
import { Button, Input, Raiting, TextArea } from '..';
import SuccessIcon from './succesSubmit.svg';
import {useForm ,Controller} from 'react-hook-form';
import { IForm } from './Form.interface';


export const Form = ({productId, className, ...props }: FormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}} = useForm<IForm>();

    const onSubmit = (data: IForm) => {
        console.log(data);
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
                name='raiting'
                rules={{required: {value: true, message: 'Укажите рейтинг' }}}
                render={
                    ({field}) => (
                        <Raiting 
                        raiting={field.value} 
                        isEditable 
                        setRaiting={field.onChange}
                        error={errors.raiting}
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

            <div className={styles.success}>
                <div className={styles.successTitle}>
                Ваш отзыв отправлен
                </div>
                <div className={styles.successDescr}>
                    Спасибо, ваш отзыв будет опубликован после проверки.
                </div>
                <SuccessIcon className={styles.close}/>
            </div>
        </form>
    );
};