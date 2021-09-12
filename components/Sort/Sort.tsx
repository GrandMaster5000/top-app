import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import classNames from 'classnames';
import React, { KeyboardEvent} from 'react';


export const Sort = ({sort ,setSort ,className, ...props}: SortProps): JSX.Element => {
  const handleKey = (e: KeyboardEvent, sortType: SortEnum) => {
    if(e.code == 'Enter' || e.code == 'Space') {
      e.preventDefault();
      setSort(sortType);
    }  
  };

  return (
        <div className={classNames(styles.sort, className)} {...props}>
            <button
            onClick={() => setSort(SortEnum.Raiting)}
            tabIndex={0}
            onKeyDown={(e) => handleKey(e, SortEnum.Raiting)}
            className={classNames({
                [styles.active]: sort == SortEnum.Raiting
            })}
            >
              <SortIcon className={styles.sortIcon} /> По рейтингу
            </button>
            <button
            onClick={() => setSort(SortEnum.Price)}
            tabIndex={0}
            onKeyDown={(e) => handleKey(e, SortEnum.Price)}
            className={classNames({
                [styles.active]: sort == SortEnum.Price
            })}
            >
              <SortIcon className={styles.sortIcon}/> По цене
            </button>
        </div>  
  );
};
