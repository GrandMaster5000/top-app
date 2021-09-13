import Link from 'next/link';
import React from 'react';
import { Card, Htag } from '../../components';
import { firstLevelMenu } from '../../helpers/helpers';
import styles from './HomePageComponent.module.css';
import { HomePageComponentProps } from './HomePageComponent.props';

export const HomePageComponent = ({menu}: HomePageComponentProps): JSX.Element => {
    const buildCategory= (route: string) => {
        return (
            <div className={styles.itemWrapper}>
            {
                menu.map(men => (
                    <React.Fragment key={men._id.secondCategory}>
                        <Card className={styles.menuCard}>
                                <Htag tag='h2' className={styles.category}>{men._id.secondCategory}</Htag>
                                {men.pages.map(p => (                             
                                    <Link key={p._id} href={`/${route}/${p.alias}`}>
                                        <a className={styles.pageCategory}>
                                            {p.category}
                                        </a>
                                    </Link>
                                ))}
                        </Card>
                    </React.Fragment>
                ))  
            }
            </div>
        );
    };

    return (
        <>
            {firstLevelMenu.map(m => {
                if(m.route == 'courses') {
                    return (
                        <div key={m.route} className={styles.wrapper}>
                            <div className={styles.logoWrapper}>
                                <div className={styles.logo}>
                                    {m.icon}
                                </div>
                                <Htag tag='h1' className={styles.logoTitle}>{m.name}</Htag>
                            </div>  
                              {menu && buildCategory(m.route)}
                        </div>
                    );
                }
            })}
        </>
    );
};