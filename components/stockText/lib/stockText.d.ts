import { TextStyle } from 'react-native';
import { FC } from 'react';

export interface StockTextProps {
    value:string,
    increaseColor?:string,
    decreaseColor?:string,
    placeholder?:string,
    tailCharacter?:string,
    style?:TextStyle,
}

declare const StockText:FC<StockTextProps>;

export default StockText;