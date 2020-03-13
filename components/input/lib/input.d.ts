import { FC } from "react";

interface InputProps{
    onChange?():void,
}
declare const Input: FC<InputProps>;
export default Input;
