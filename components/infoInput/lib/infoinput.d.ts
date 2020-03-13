import { TextStyle } from "react-native";
import { FC } from "react";

interface InfoInputProps{
    containerStyle?: TextStyle,
    leftComponent?: React.ReactNode,
    leftContainerStyle?: TextStyle
    rightComponent?: React.ReactNode,
    rightContainerStyle?: TextStyle,
    onRightPress?():void,
}
declare const InfoInput: FC<InfoInputProps>;
export default InfoInput;
