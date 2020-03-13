import { FC } from "react";

export interface RowLineProps {
    left?: number;
    right?: number;
    height?: number;
    containerColor?: string;
    lineColor?: string;
}

export declare const RowLine: FC<RowLineProps>