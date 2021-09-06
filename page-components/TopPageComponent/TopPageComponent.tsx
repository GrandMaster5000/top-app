import React from 'react';
import classNames from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import { HhData, Htag, Tag } from '../../components';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfeces/page.interface';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    console.log(page, products);
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='gray' size='big'>{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                {products && <Tag color='red' size='big'>hh.ru</Tag>}
            </div>
            {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
        </div>
    );
};