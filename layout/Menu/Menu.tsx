import React, { useContext, KeyboardEvent, useState } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfeces/menu.interface';
import styles from './Menu.module.css';
import { firstLevelMenu } from '../../helpers/helpers';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useReducedMotion } from 'framer-motion';



export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();
    const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        visible: {
            marginBottom: 20,
            transition: shouldReduceMotion ? {} : {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: { marginBottom: 0}
    };

    const variantsChildren = {
        visible: {
           opacity: 1,
           height: 29
        },
        hidden: { opacity: shouldReduceMotion ? 1 : 0, height: 0 }
    };

    

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                setAnnounce(m.isOpened ? 'closed' : 'opened');
                m.isOpened = !m.isOpened;
            }
            return  m;
        }));
    };

    const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
        if (key.code == 'Enter' || key.code == 'Space') {
            key.preventDefault();
           openSecondLevel(secondCategory);
        }
    };
    const buildFirstLevel = () => {
        return (
            <ul className={styles.firstLevelList}>
                {firstLevelMenu.map(m => {
                    if(m.route == 'courses') {
                        return (
                            <li key={m.route} aria-expanded={m.id == firstCategory}>
                            <Link href='/'>
                                <a>
                                    <div className={classNames(styles.firstLevel, {
                                        [styles.firstLevelActive]: m.id == firstCategory
                                    })}>
                                        {m.icon}
                                        <span>{m.name}</span>
                                    </div>
                                </a>
                            </Link>
                            {m.id == firstCategory && buildSecondLevel(m)}
                        </li>);
                    }
                    
                })}
            </ul>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <ul className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }

                    return (
                        <li  key={m._id.secondCategory}>
                            <button 
                            className={styles.secondLevel} 
                            onClick={() => openSecondLevel(m._id.secondCategory)}
                            onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key ,m._id.secondCategory)}
                            aria-expanded={m.isOpened}>
                                {m._id.secondCategory}
                            </button>
                            <motion.ul 
                                className={classNames(styles.secondLevelBlock)}
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                            >
                                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                            </motion.ul>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return (
            pages.map(p => (
                <motion.li key={p._id} variants={variantsChildren}>
                    <Link href={`/${route}/${p.alias}`}>
                        <a 
                        aria-current={`/${route}/${p.alias}` == router.asPath ? 'page' : false}
                        tabIndex={isOpened ? 0 : -1} 
                        className={classNames(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                        })}>
                            {p.category}
                        </a>
                    </Link>
                </motion.li>
            ))
        );
    };



    return (
        <nav role='navigation' className={styles.menu}>
            {announce && <span role='log' className='visualyHidden'>{announce == 'opened' ? 'развернуто' : 'свернуто'}</span>}
           {buildFirstLevel()}
        </nav>
    );
};