import React from 'react';
import classNames from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Advanteges, HhData, Htag, Ptag, Sort, Tag } from '../../components';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfeces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    console.log(page);
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='gray' size='big'>{products.length}</Tag>}
                <Sort sort={SortEnum.Raiting} setSort={() => {return}}/>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                {products && <Tag color='red' size='big'>hh.ru</Tag>}
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag='h2'>Преимущества</Htag>
                <Advanteges advantages={page.advantages}/>
            </>}
            {page.seoText != '' && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
        </div>
    );
};