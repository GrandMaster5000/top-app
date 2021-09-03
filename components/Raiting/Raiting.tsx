import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { RaitingProps } from './Raiting.props';
import styles from './Raiting.module.css';
import StarIcon from './star.svg';


export const Raiting = ({isEditable = false, raiting, setRaiting, ...props}: RaitingProps): JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));


    const constructRaiting = (currentRaiting: number) => {
        const upbatedArray = raitingArray.map((elem: JSX.Element, i: number) => (
            <StarIcon
            className={classNames(styles.star, {
                [styles.filled]:  i < currentRaiting
            })}/>
        ));
        setRaitingArray(upbatedArray);
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