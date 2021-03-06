import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface FormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
   productId: string;
   isOpened: boolean;
}