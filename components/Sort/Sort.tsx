import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import classNames from 'classnames';

export const Sort = ({sort ,setSort ,className, ...props}: SortProps): JSX.Element => {
  return (
        <div className={classNames(styles.sort, className)} {...props}>
            <span
            onClick={() => setSort(SortEnum.Raiting)}
            className={classNames({
                [styles.active]: sort == SortEnum.Raiting
            })}
            >
              <SortIcon className={styles.sortIcon} /> По рейтингу
            </span>
            <span
            onClick={() => setSort(SortEnum.Price)}
            className={classNames({
                [styles.active]: sort == SortEnum.Price
            })}
            >
              <SortIcon className={styles.sortIcon}/> По цене
            </span>
        </div>  
  );
};
