import { HTMLAttributes, ReactNode } from 'react';

export interface TWProps {
  className?: HTMLAttributes<any>['className'];
}

export interface ParentProps {
  children: ReactNode;
}
