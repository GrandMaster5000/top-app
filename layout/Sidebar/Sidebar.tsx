import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import classNames from 'classnames';
import Link from 'next/link';
import { Search } from '../../components';


export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div className={classNames(className, styles.sidebar)} {...props} >
            <Link 
            href='/'>
                <a>
                    <Logo className={classNames(styles.logo)} />
                </a>
            </Link>
            <Search/>
            <Menu/>
        </div>
    );
};