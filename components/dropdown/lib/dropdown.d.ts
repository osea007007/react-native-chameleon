import { FC } from "react";

interface DropDownProps{
    openTime?: number,
    closeTime?: number,
    extraTop?: number,
    translucent?: boolean,
}
declare const DropDown: FC<DropDownProps>;
export default DropDown;
