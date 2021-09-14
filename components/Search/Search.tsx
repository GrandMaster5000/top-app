import classNames from 'classnames';
import React, { FormEvent, useState} from 'react';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import SearchIcon from './search.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useRouter } from 'next/router';


export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = (e: FormEvent) => {
        e.preventDefault();
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    return (
        <form onSubmit={goToSearch} className={classNames(className , styles.search)} {...props} role='search'>
            <Input
            placeholder='Поиск...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.input}
            />
            <Button
            appearance='primary'
            className={styles.button}
            type='submit'
            aria-label='Искать по сайту'>
                <SearchIcon/>
            </Button>
        </form>
    );
};