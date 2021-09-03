import styles from './Button.module.css';
import { ButtonPorops } from './Button.props';
import classnames from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ appearance, arrow = 'none', children , className, ...props}: ButtonPorops): JSX.Element => {
   return (
       <button
       className={classnames(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost'
       })}
       {...props}>
           {children}
           {arrow != 'none' && <span className={classnames(styles.arrow, {
               [styles.down]: arrow == 'down'
           })}>
               <ArrowIcon/>
            </span>}
       </button>
   );
};