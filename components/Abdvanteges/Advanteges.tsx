import React from 'react';
import { AdvantegesProps } from './Adventeges.props';
import styles from './Advanteges.module.css';
import LikeIcon from './Like.svg';
import { Htag, Ptag } from '..';


export const Advanteges = ({ advantages }: AdvantegesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div 
                key={a._id}
                className={styles.advantage}>
                    <LikeIcon/>
                    <Htag tag='h3'>{a.title}</Htag>
                    <hr className={styles.vline}/>
                    {a.description != '' && <Ptag size='big'>{a.description}</Ptag>}
                </div>
            ))}
        </>
    );
};