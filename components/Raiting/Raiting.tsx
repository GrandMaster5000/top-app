import classNames from 'classnames';
import React, { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from 'react';
import { RaitingProps } from './Raiting.props';
import styles from './Raiting.module.css';
import StarIcon from './star.svg';


export const Raiting = forwardRef(({error,isEditable = false, rating, setRaiting, tabIndex, ...props}: RaitingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    const computeFocus = (rating: number, i: number): number => {
        if(!isEditable) {
            return -1;
        }
        if(!rating && i == 0) {
            return tabIndex ?? 0;
        } 
        if(rating == i + 1) {
            return tabIndex ?? 0;
        }
        return -1;
    };

    const constructRaiting = (currentRaiting: number) => {
        const upbatedArray = raitingArray.map((elem: JSX.Element, i: number) => (
            <span
            className={classNames(styles.star, {
                [styles.filled]: i < currentRaiting,
                [styles.editable]: isEditable
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            tabIndex={computeFocus(rating, i)}
            onKeyDown={handleKey}
            onClick={() => onClick(i + 1)}
            ref={r => ratingArrayRef.current?.push(r)}
            >
                <StarIcon/>
            </span>
        ));
        setRaitingArray(upbatedArray);
    };

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }
        constructRaiting(i);
    };

    const onClick = (i: number) => {
        if(!isEditable || !setRaiting) {
            return;
        }
       
        setRaiting(i);
    };

    const handleKey = (e: KeyboardEvent) => {
        if(!isEditable || !setRaiting) {
            return;
        }
        if(e.code == 'ArrowRight' || e.code == 'ArrowUp') {
            if(!rating) {
                setRaiting(1);
            } else if(rating < raitingArray.length) {
                e.preventDefault();
                setRaiting(rating + 1);
            }

            ratingArrayRef.current[rating]?.focus();
        }
        if(e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
            e.preventDefault();
            if(rating > 0) {
                setRaiting(rating - 1);
            }
            ratingArrayRef.current[rating - 2]?.focus();
        }
    };

    useEffect(() => {
        constructRaiting(rating);
    }, [rating, tabIndex]);

    return (
        <div className={classNames(styles.raitingWrapper, {
            [styles.error]: error
        })} {...props} ref={ref}>
            {raitingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});