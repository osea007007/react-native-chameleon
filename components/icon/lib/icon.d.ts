import { FC } from "react";

type IconType = "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "SimpleLineIcons" | "Octicons" | "Zocial";

export interface IconProps {
  color?:string;
  name:string;
  type:IconType;
  size?:number;
}

export declare const Icon:FC<IconProps>;

