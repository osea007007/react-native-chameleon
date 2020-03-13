import { ViewStyle, TextStyle } from "react-native";
import { TouchableProps } from "@xzchameleon/touchable";
import { FC } from "react";
import { IconProps } from "@xzchameleon/icon";

interface ButtonProps{
  containerStyle?:ViewStyle,
  buttonStyle?:ViewStyle,
  textStyle?:TextStyle,
  onPress():void,
  type?:'default'|'circle',
  size?:'large'|'middle'|'small',
  touchableProps?: TouchableProps,
  title:string;
  cBackgroundColor?:string;
  cContainerSize?:number;
  cIconProps?: IconProps;
  cText?:string;
  cTextStyle?: TextStyle,
  cComponent?:React.ReactNode
}
declare const Button: FC<ButtonProps>;
export default Button;
