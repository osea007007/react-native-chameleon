import { FC } from 'react';

export interface RowDashLineProps {
  dashWidth: number;
  dashDistance: number;
  height: number;
  left: number;
  right: number;
  lineColor: string;
  containerColor: string;
}

export declare const RowDashLine:FC<RowDashLineProps>;