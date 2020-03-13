import { FC } from "react";

interface ColumnLineProps{
    top?:number,
    bottom?:number,
    width?:number,
    containerColor?:string,
    lineColor?:string
}
declare const ColumnLine: FC<ColumnLineProps>;
export default ColumnLine;
