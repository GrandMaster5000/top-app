import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size: 'small' | 'middle' | 'big';
    children: ReactNode;
}