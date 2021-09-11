import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import arrowIcon from './arrow.svg';
import closeIcon from './close.svg';
import openIcon from './open.svg';

export const icons = {
    arrowIcon,
    closeIcon,
    openIcon
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'white';
    icon: IconName;
}