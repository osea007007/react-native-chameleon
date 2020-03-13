import { FC } from "react";
import { TextStyle, ViewStyle, StyleProp } from 'react-native';

type PickChangedFunc = (val:string, index:number)=>void;

export interface SelectProps {
    pickerValueChanged?:PickChangedFunc;
    onValueChanged?:PickChangedFunc;
    dataSource: string[];
    selectedValue?: string;
    style?: ViewStyle;
    textStyle?: StyleProp<TextStyle>;
    headerLeftText?: string;
    headerCenterText?: string;
    headerRightText?: string;
    leftTextStyle?: StyleProp<TextStyle>;
    centerTextStyle?: StyleProp<TextStyle>;
    rightTextStyle?: StyleProp<TextStyle>;
    enable?: boolean;
    mode?: 'dialog' | 'dropdown';
    itemStyle?: StyleProp<TextStyle>;
    prompt?: string;
    selectText?: string;
}

declare const Select:FC<SelectProps>;

export default Select;