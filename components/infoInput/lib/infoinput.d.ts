import { TextStyle,InputProps,Input } from "react-native";
import { FC } from "react";

interface InfoInputProps{
    containerStyle?: TextStyle,
    leftComponent?: React.ReactNode,
    leftContainerStyle?: TextStyle
    rightComponent?: React.ReactNode,
    rightContainerStyle?: TextStyle,
    onRightPress?():void,
    ref?: Ref<Input>,
}
type InfoInputType = InfoInputProps & InputProps;

declare const InfoInput: FC<InfoInputType>;
export default InfoInput;
