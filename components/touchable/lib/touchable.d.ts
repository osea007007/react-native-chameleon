import { FC } from "react";
import {TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

export interface TouchComponentType {
  HIGHLIGHT:TouchableHighlight,
  FEEDBACK:TouchableNativeFeedback,
  WITHOUT_FEEDBACK:TouchableWithoutFeedback,
  OPACITY:TouchableOpacity
}

export interface TouchableProps {
  touchComponent?: TouchComponentType,
  activeOpacity?: number,
  ripple?: string,
  borderless?: boolean
}

export declare const TOUCHABLE_TYPES:TouchComponentType
export declare const Touchable:FC<TouchableProps>
