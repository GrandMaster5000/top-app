import { FieldError } from 'react-hook-form';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isEditable?: boolean;
    rating: number;
    error?: FieldError
    setRaiting?: (raiting: number) => void
}