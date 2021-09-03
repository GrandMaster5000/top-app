import styles from './Button.module.css';
import { ButtonPorops } from './Button.props';
import classnames from 'classnames';

export const Button = ({ appearance, children }: ButtonPorops): JSX.Element => {
   return (
       <button
       className={classnames(styles.button, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost'
       })}>
           {children}
       </button>
   );
};