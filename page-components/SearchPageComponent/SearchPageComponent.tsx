import React, { useEffect, useState } from 'react';
import { Button, Card, Htag, Tag } from '../../components';
import styles from './SearchPageComponent.module.css';
import { SearchPageComponentProps } from './SearchPageComponent.props';
import SearchIcon from './search.svg';
import { useRouter } from 'next/router';

export const SearchPageComponent = ({menu}: SearchPageComponentProps): JSX.Element => {
    const [stateAmountCourses, setStateamountCourses] = useState<number>(0);
    let amountCourses = 0;
    const router = useRouter();

    useEffect(() => {
        setStateamountCourses(amountCourses);
    }, [amountCourses]);

    const redirectToCourse = (alias: string) => {
        router.push({
            pathname: `/courses/${alias}`,
            query: {
                q: undefined
            }
        });
    };

    const buildSerchResult = () => {
        return (
            <div className={styles.cardWrapper}>
                {menu && menu.map(m => {
                    const str = router.query.q ? router.query.q.toString().toLowerCase() : '';
                    return m.pages.map(p => {
                        if(p.title.toLowerCase().indexOf(str) != -1 ||
                        m._id.secondCategory.toLowerCase().indexOf(str) != -1) {
                            amountCourses += 1;
                            return (
                                <Card className={styles.card} key={p._id}>
                                    <div className={styles.courseTitle}>{p.title}</div>
                                    <Tag color='green' className={styles.courseTag}>{m._id.secondCategory}</Tag>
                                    <Button className={styles.btnCourse} onClick={() => redirectToCourse(p.alias)} appearance='primary'>Перейти</Button>
                                </Card>
                            );
                        }
                    });
                })}
            </div>
        );
    };
    
    return (
        <>
           <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo}>
                        <SearchIcon/>
                    </div>
                    <Htag tag='h1' className={styles.logoTitle}>Поиск</Htag>
                </div>
                <p className={styles.countPage}>По запросу <strong>курсы</strong> найдено <strong>{stateAmountCourses}</strong> страниц</p>
                {buildSerchResult()}
           </div>
        </>
    );
};