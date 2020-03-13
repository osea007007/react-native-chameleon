import { TextStyle } from "react-native";
import { FC } from "react";

interface ExpandProps{
    time?: number,
    containerStyle?: TextStyle,
    headerContainerStyle?: TextStyle,
    headerLeftText?: string,
    headerLeftTextStyle?: TextStyle,
    showHeader?: boolean,
    headerTitle?: string,
    headerTitleStyle?: TextStyle,
    contentStyle?: TextStyle,
}

declare const Expand: FC<ExpandProps>;
export default Expand;
