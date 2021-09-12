import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';


export const TextArea = forwardRef(({error, className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
      <div className={classNames(styles.textAreaWrapper, className)}>
        <textarea className={classNames(styles.textArea, {
          [styles.error]: error
        })} ref={ref} {...props}/>
        {error && <span role='alert' className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
});