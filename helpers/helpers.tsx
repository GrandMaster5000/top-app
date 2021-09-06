import React from 'react';
import CoursesIcon from './icon/courses.svg';
import BooksIcon from './icon/books.svg';
import ServicesIcon from './icon/services.svg';
import ProductsIcon from './icon/products.svg';
import { TopLevelCategory } from '../interfeces/page.interface';
import { FirstLevelMenuItem } from '../interfeces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Servises },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];


export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');