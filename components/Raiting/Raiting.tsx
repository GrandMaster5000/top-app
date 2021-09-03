import classNames from 'classnames';
import React, { useEffect, useState, KeyboardEvent } from 'react';
import { RaitingProps } from './Raiting.props';
import styles from './Raiting.module.css';
import StarIcon from './star.svg';


export const Raiting = ({isEditable = false, raiting, setRaiting, ...props}: RaitingProps): JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));


    const constructRaiting = (currentRaiting: number) => {
        const upbatedArray = raitingArray.map((elem: JSX.Element, i: number) => (
            <span
            className={classNames(styles.star, {
                [styles.filled]: i < currentRaiting,
                [styles.editable]: isEditable
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(raiting)}
            onClick={() => onClick(i + 1)}>
                <StarIcon
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                />
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

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if(e.code != 'Space' || !setRaiting) {
            return;
        }

        setRaiting(i);
    };

    useEffect(() => {
        constructRaiting(raiting);
    }, [raiting]);

    return (
        <div {...props}>
            {raitingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};