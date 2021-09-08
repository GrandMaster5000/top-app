import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';


export const TextArea = forwardRef(({ className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
      <textarea className={classNames(className, styles.textArea)} ref={ref} {...props}/>
    );
});