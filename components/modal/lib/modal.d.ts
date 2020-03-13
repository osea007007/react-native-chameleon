import { TextStyle, ModalProps } from "react-native";
import { RowLineProps } from "@xzchameleon/rowline";
import { FC } from "react";

interface RNModalProps{
    backgroundColor?:string,
    androidEnableBackCloseModal?:boolean,
    enableBlankPressCloseModal?:boolean,
    containerStyle?:TextStyle,
    animationType?:string, 
    wrapperStyle?:TextStyle, 
    cancelCallBack?():void,
}

type ModalType = RNModalProps & ModalProps;

declare const Modal: FC<ModalType>;
export default Modal;
