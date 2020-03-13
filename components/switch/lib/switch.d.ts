import { FC } from "react"

export interface SwitchProps {
    disabled?:boolean,
    trackColor?:{
      false:string,
      true:string
    },
    thumbColor?:{
      false:string,
      true:string
    },
    value?:boolean,
    onChange(val:boolean):void,
    useNative?: boolean
}

export declare const Switch:FC<SwitchProps>;