import { ReactNode } from 'react';

export interface HtagPorops  {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}