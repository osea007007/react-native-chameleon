import { TextStyle } from "react-native";
import { RowLineProps } from "@xzchameleon/rowline";
import { FC } from "react";

interface ListProps{
    leftIcon: string|React.ReactNode,
    leftText?: string,
    leftTextStyle?: TextStyle,
    rightIcon?: string|React.ReactNode,
    rightText?: string,
    rightTextStyle?: TextStyle,
    containerStyle?: TextStyle,
    onPress?():void,
    disable?: boolean,
    leftComponent?: React.ReactNode,
    rightComponent?: React.ReactNode,
    showLine?: boolean,
    lineProps?: RowLineProps,
    hideRightComponent?: boolean
}
declare const List: FC<ListProps>;
export default List;
