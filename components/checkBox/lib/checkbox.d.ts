import { TextStyle } from "react-native";
import { FC } from "react";

interface CheckBoxProps{
  checked?: boolean,
  checkedImg?: HTMLImageElement,
  unCheckedImg?: HTMLImageElement,
  imageStyle?: TextStyle,
  containerStyle?: TextStyle,
  text?: string,
  textStyle?: TextStyle,
  onChange?():void,
  disable?: boolean,
}
declare const CheckBox: FC<CheckBoxProps>;
export default CheckBox;