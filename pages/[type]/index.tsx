import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import React from 'react';
import { API } from '../../helpers/api';
import { firstLevelMenu } from '../../helpers/helpers';
import { MenuItem } from '../../interfeces/menu.interface';
import { TopLevelCategory } from '../../interfeces/page.interface';
import { withLayout } from '../../layout/Layout';

const TypeCategory = ({ firstCategory , menu}: TypeCategoryProps): JSX.Element => {
    return (
        <div>Type: {firstCategory}</div>
    );
};

export default withLayout(TypeCategory);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => '/' + m.route),
        fallback: true
    };
};


export const getStaticProps: GetStaticProps<TypeCategoryProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);

    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory: firstCategoryItem.id
    });
    
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};

interface TypeCategoryProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: TopLevelCategory
}
