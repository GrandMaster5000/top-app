import axios from 'axios';
import { GetStaticProps } from 'next';
import React from 'react';
import { MenuItem } from '../interfeces/menu.interface';
import { withLayout } from '../layout/Layout';
import {API} from '../helpers/api';
import { SearchPageComponent } from '../page-components';

function Search({ menu }: HomeProps): JSX.Element {

    return (
        <>
            <SearchPageComponent menu={menu} />
        </>
    );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
