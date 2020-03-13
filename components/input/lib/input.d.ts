import { TextInputProps ,TextInput } from "react-native";
import { FC, Ref} from "react";

interface InputProps{
    onChange?():void,
    ref?: Ref<TextInput>,
}
type InputType = InputProps & TextInputProps;

declare const Input: FC<InputType>;
export default Input;
